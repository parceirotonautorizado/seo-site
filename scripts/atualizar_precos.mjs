// Regenera lib/precos.ts com os preços de adesão do catálogo da Ton.
//
// 1. Preço do catálogo (sem cupom): vem do JSON embutido em https://www.ton.com.br/catalogo
// 2. Preço com o cupom de parceiro: a Ton só aplica o cupom no navegador, então abrimos a página
//    com o link de parceiro num Chrome sem tela e lemos o valor exibido.
//    Se o navegador não estiver disponível ou o cupom não aparecer, mantemos o cupom da última
//    conferência (percentual e modelos) e só a data do cupom fica como estava.
//
// Uso: node scripts/atualizar_precos.mjs
import fs from "node:fs"
import { execFileSync } from "node:child_process"

const ARQ = new URL("../lib/precos.ts", import.meta.url)
const REFERRER = "4DFE24A5-33A5-4F4A-91DE-BE883C307153"
const URL_PARCEIRO = `https://www.ton.com.br/catalogo?referrer=${REFERRER}&userAnticipation=0&utm_medium=invite_share&utm_source=revendedor`
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/126.0 Safari/537.36"
// productID no catálogo -> [id no site, nome exibido no botão "Pedir ..."]
const MODELOS = {
  TONMEGA_TIER_SMART_POS: ["t3smart", "T3 Smart"],
  TONMEGA_TIER_S920: ["t3", "T3"],
  TONMEGA_TIER_D195: ["t2", "T2"],
  TONMEGA_TIER_D150: ["t1", "T1"],
}
const IDS = Object.values(MODELOS).map((m) => m[0])

const centavos = (v) => Math.round(Number(v) * 100)
const brl = (c) => "R$ " + (c / 100).toFixed(2).replace(".", ",")
const hoje = () => new Intl.DateTimeFormat("pt-BR", { timeZone: "America/Sao_Paulo" }).format(new Date())

function precosDoCatalogo() {
  const html = execFileSync("curl", ["-sfL", "-A", UA, "--max-time", "120", "https://www.ton.com.br/catalogo"], { maxBuffer: 64 << 20 }).toString()
  const estado = JSON.parse(html.match(/<script id="__FRSH_STATE[^>]*>(.*?)<\/script>/s)[1])
  const base = {}
  const anda = (o) => {
    if (Array.isArray(o)) return o.forEach(anda)
    if (o && typeof o === "object") {
      if (MODELOS[o.productID] && o.price?.low) base[MODELOS[o.productID][0]] = centavos(o.price.low)
      Object.values(o).forEach(anda)
    }
  }
  anda(estado)
  for (const id of IDS) if (!(base[id] >= 100 && base[id] <= 100000)) throw new Error(`preço de catálogo ausente ou fora do esperado: ${id}`)
  return base
}

async function precosComCupom() {
  let puppeteer
  try {
    puppeteer = await import(process.env.PUPPETEER_MODULO || "puppeteer-core")
  } catch (e) {
    console.log("Navegador indisponível: " + e.message.split("\n")[0])
    return null
  }
  const chrome = [process.env.CHROME, "/usr/bin/google-chrome", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"].find((c) => c && fs.existsSync(c))
  if (!chrome) return null
  const nav = await (puppeteer.default || puppeteer).launch({ executablePath: chrome, headless: "new", args: ["--no-sandbox"] })
  try {
    const pag = await nav.newPage()
    await pag.setViewport({ width: 1300, height: 2000 })
    await pag.goto(URL_PARCEIRO, { waitUntil: "networkidle2", timeout: 90000 }).catch(() => {})
    await new Promise((r) => setTimeout(r, 6000))
    const linhas = (await pag.evaluate(() => document.body.innerText)).split("\n").map((l) => l.trim()).filter(Boolean)
    const cupom = linhas.map((l) => l.match(/^CUPOM\s+(\d{1,2})%\s*OFF$/i)).find(Boolean)
    if (!cupom) {
      console.log("Cupom não apareceu na página.")
      return null
    }
    const final = {}
    for (const [id, nome] of Object.values(MODELOS)) {
      const i = linhas.indexOf(`Pedir ${nome}`)
      if (i < 0) return null
      const preco = linhas.slice(Math.max(0, i - 8), i).reverse().map((l) => l.match(/^R\$\s?(\d{1,3}),(\d{2})$/)).find(Boolean)
      if (!preco) return null
      final[id] = Number(preco[1]) * 100 + Number(preco[2])
    }
    return { pct: Number(cupom[1]), final }
  } finally {
    await nav.close()
  }
}

function anterior() {
  try {
    return JSON.parse(fs.readFileSync(ARQ, "utf8").match(/^\/\/ DADOS: (.*)$/m)[1])
  } catch {
    return null
  }
}

const base = precosDoCatalogo()
const antes = anterior()
const lido = await precosComCupom().catch((e) => (console.log("Falha ao ler o cupom: " + e.message), null))

let pct, comCupom, cupomEm
if (lido) {
  pct = lido.pct
  cupomEm = hoje()
  comCupom = Object.fromEntries(IDS.map((id) => [id, lido.final[id] < base[id]]))
  for (const id of IDS) {
    const esperado = comCupom[id] ? Math.round(base[id] * (1 - pct / 100)) : base[id]
    if (lido.final[id] > base[id] || Math.abs(lido.final[id] - esperado) > 2) throw new Error(`preço com cupom inesperado em ${id}: ${lido.final[id]} (catálogo ${base[id]}, cupom ${pct}%)`)
  }
} else if (antes) {
  ;({ pct, comCupom, cupomEm } = antes)
  console.log("Cupom não conferido no navegador: mantido o da última conferência (" + cupomEm + ").")
} else {
  throw new Error("sem leitura do cupom e sem dados anteriores")
}
if (!(pct >= 0 && pct <= 60)) throw new Error("percentual de cupom fora do esperado: " + pct)

const dados = { pct, comCupom, cupomEm, base }
const linhas = IDS.map((id) => {
  const final = lido ? lido.final[id] : comCupom[id] ? Math.round(base[id] * (1 - pct / 100)) : base[id]
  const parcela = Math.round(final / 12)
  return `  ${id}: { preco: "${brl(final)}", semCupom: "${comCupom[id] ? brl(base[id]) : ""}", parcela: "ou 12x de ${brl(parcela)}", valor: "${(final / 100).toFixed(2)}" },`
})

// A data de conferência só muda quando algum valor muda ou quando o cupom foi lido de novo
const corpo = (catalogoEm) => `// ─────────────────────────────────────────────────────────────────────────────
// PREÇOS DE ADESÃO · GERADO por scripts/atualizar_precos.mjs a partir de https://www.ton.com.br/catalogo
// Não edite à mão: rode o script de novo para atualizar.
//
// preco    = valor com o cupom de parceiro (entra sozinho pelo link de parceiro)
// semCupom = valor do catálogo sem o link; vazio quando o cupom não muda o preço do modelo
// ─────────────────────────────────────────────────────────────────────────────
// DADOS: ${JSON.stringify(dados)}

// Dia em que os preços do catálogo foram conferidos no site da Ton
export const PRECOS_CONFERIDO_EM = "${catalogoEm}"

// Cupom de parceiro e dia em que ele foi visto aplicado no catálogo
export const CUPOM_PARCEIRO = "${pct}%"
export const CUPOM_CONFERIDO_EM = "${cupomEm}"

export const PRECOS: Record<string, { preco: string; semCupom: string; parcela: string; valor: string }> = {
${linhas.join("\n")}
}
`
fs.writeFileSync(ARQ, corpo(hoje()))
console.log(linhas.join("\n"))
console.log(`Catálogo conferido em ${hoje()}; cupom de ${pct}% conferido em ${cupomEm}.`)
