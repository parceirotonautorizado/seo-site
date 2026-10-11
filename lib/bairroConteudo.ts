import dados from "@/dados/bairros-curitiba.json"
import type { Bairro, PerfilBairro } from "@/bairros"
import type { ModeloId } from "@/lib/cidadeConteudo"

// Conteúdo das páginas de bairro: texto escrito à mão (bairros.ts) + Censo 2022 por bairro (IBGE).

type Censo = { populacao: number; ranking: number; percentual_cidade: number; domicilios: number; media_moradores: number }

const n = (v: number) => v.toLocaleString("pt-BR")

// Preposição correta antes do nome do bairro ("no Batel", "na Boa Vista", "em Santa Felicidade")
const PREPOSICAO: Record<string, string> = {
  barreirinha: "na",
  "boa-vista": "na",
  cascatinha: "na",
  "cidade-industrial": "na",
  fazendinha: "na",
  "vila-izabel": "na",
  merces: "nas",
  augusta: "na",
  butiatuvinha: "na",
  cachoeira: "na",
  "campina-do-siqueira": "na",
  caximba: "na",
  "lamenha-pequena": "na",
  riviera: "na",
  "santo-inacio": "em",
  "sao-braz": "em",
  "sao-francisco": "em",
  "sao-joao": "em",
  "sao-lourenco": "em",
  "sao-miguel": "em",
  "santa-candida": "em",
  "santa-felicidade": "em",
  "santa-quiteria": "em",
}

export function preposicao(slug: string) {
  return PREPOSICAO[slug] ?? "no"
}

const ORDEM: Record<PerfilBairro, ModeloId[]> = {
  central: ["t3", "t3smart", "t2", "t1"],
  gastronomico: ["t3smart", "t3", "t2", "t1"],
  "alto-padrao": ["t3smart", "t2", "t3", "t1"],
  populoso: ["t3", "t2", "t3smart", "t1"],
  industrial: ["t3smart", "t3", "t2", "t1"],
  turistico: ["t2", "t3smart", "t1", "t3"],
  residencial: ["t2", "t3", "t1", "t3smart"],
}

const NOMES: Record<ModeloId, string> = { t3smart: "T3 Smart", t3: "T3", t2: "T2", t1: "T1" }

function motivo(b: Bairro, em: string, id: ModeloId): string {
  const onde = `${em} ${b.nome}`

  switch (id) {
    case "t3smart": {
      const vale = "Como a T2 e a T3, aceita vale-refeição e vale-alimentação para quem tem CNPJ do ramo de alimentação e faz o credenciamento com a bandeira."
      if (b.perfil === "gastronomico")
        return `Roda Android, tem visor sensível ao toque e imprime o comprovante. Para restaurante ${onde}, o que decide é o vale: ela aceita vale-refeição e vale-alimentação, assim como a T2 e a T3, desde que o CNPJ seja do ramo de alimentação e você peça o credenciamento a cada bandeira.`
      if (b.perfil === "industrial")
        return `Roda Android, tem visor sensível ao toque e imprime o comprovante. Muito trabalhador de fábrica recebe vale-refeição, e restaurante de almoço ${onde} sente isso no caixa. ${vale}`
      if (b.perfil === "alto-padrao")
        return `Roda Android, tem visor sensível ao toque e imprime o comprovante. Combina com restaurante, café e loja ${onde}, onde o cliente já chega com o cartão na mão para aproximar. ${vale}`
      if (b.perfil === "central")
        return `Roda Android, tem visor sensível ao toque e imprime o comprovante. Restaurante e lanchonete ${onde} vivem do almoço de quem trabalha por perto, e boa parte desse público paga com vale. ${vale}`
      return `É a mais completa: roda Android, tem visor sensível ao toque e imprime o comprovante. ${vale}`
    }
    case "t3":
      if (b.perfil === "central")
        return `Imprime o comprovante e tem chip 3G próprio. É a maquininha de balcão para loja ${onde}, onde o cliente está de passagem e o atendimento não pode demorar.`
      if (b.perfil === "populoso")
        return `Imprime o comprovante e tem chip 3G próprio, então não depende do celular. Vai bem no comércio de rua ${onde}: loja, farmácia, mercado, material de construção.`
      return `Imprime o comprovante e tem chip 3G próprio. Serve para o balcão ${onde}, onde ainda tem cliente que pede a via impressa.`
    case "t2":
      if (b.perfil === "turistico")
        return `É compacta, tem chip 3G próprio e Wi-Fi. É a portátil para quem vende a visitante ${onde}: ambulante, guia, motorista, banca.`
      if (b.perfil === "residencial")
        return `É compacta, tem chip 3G próprio e Wi-Fi. Em bairro residencial, muita venda acontece na porta do cliente. É a maquininha de quem faz entrega, da diarista, do técnico, da manicure, do personal.`
      return `É compacta, tem chip 3G próprio e Wi-Fi. É a portátil para quem faz entrega ou atende na casa do cliente ${onde}.`
    default:
      return b.perfil === "populoso" || b.perfil === "turistico"
        ? `É a mais barata e funciona ligada ao celular por Bluetooth. Resolve para ambulante e para quem está começando a vender ${onde}.`
        : `É a mais barata e funciona ligada ao celular por Bluetooth. Serve para quem vende pouco no cartão ou quer uma maquininha guardada para emergência.`
  }
}

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function demografia(b: Bairro, em: string, c: Censo) {
  const total = dados.total_bairros
  const posicao =
    c.ranking === 1
      ? `É o bairro mais populoso de Curitiba`
      : `É o ${c.ranking}º bairro mais populoso entre os ${total} de Curitiba`

  let lares: string
  if (c.populacao < 2000) {
    // bairro quase sem comércio: só o dado, sem tirar conclusão sobre vendas
    lares = `A média é de ${c.media_moradores.toLocaleString("pt-BR")} moradores por domicílio.`
  } else if (c.media_moradores <= 2.2) {
    lares = `A média é de ${c.media_moradores.toLocaleString("pt-BR")} moradores por domicílio, bem abaixo do comum na cidade. Tem muita gente morando sozinha ou em casal. É um público que compra pouco de cada vez, compra sempre e pede bastante por entrega.`
  } else if (c.media_moradores >= 2.8) {
    lares = `A média é de ${c.media_moradores.toLocaleString("pt-BR")} moradores por domicílio, acima do comum na cidade. São famílias maiores, e isso aparece no caixa: mercado, açougue e loja de roupa infantil tendem a vender mais em cada compra.`
  } else {
    lares = `A média é de ${c.media_moradores.toLocaleString("pt-BR")} moradores por domicílio, perto do padrão da cidade.`
  }

  return `O Censo 2022 contou ${n(c.populacao)} moradores ${em} ${b.nome}, em ${n(c.domicilios)} domicílios. ${posicao}, com ${c.percentual_cidade < 0.1 ? "menos de 0,1" : c.percentual_cidade.toLocaleString("pt-BR")}% dos moradores da cidade. ${lares}`
}

export function conteudoBairro(b: Bairro, cidade: string, todos: Bairro[]) {
  const em = preposicao(b.slug)
  const c = (dados.bairros as Record<string, Censo>)[b.slug]
  const ordem = ORDEM[b.perfil]
  const modelos = ordem.map((id) => ({ id, nome: NOMES[id], texto: motivo(b, em, id) }))

  const parecidos = todos
    .filter((o) => o.perfil === b.perfil && o.slug !== b.slug)
    .sort((x, y) => {
      const cx = (dados.bairros as Record<string, Censo>)[x.slug].populacao
      const cy = (dados.bairros as Record<string, Censo>)[y.slug].populacao
      return Math.abs(cx - c.populacao) - Math.abs(cy - c.populacao)
    })
    .slice(0, 6)

  const outros = parecidos.length >= 3 ? parecidos : todos.filter((o) => o.slug !== b.slug).slice(0, 6)

  return {
    em,
    paragrafos: [b.texto, demografia(b, em, c)],
    numeros: [
      { rotulo: "Moradores (Censo 2022)", valor: n(c.populacao) },
      { rotulo: "Posição na cidade", valor: `${c.ranking}º de ${dados.total_bairros} bairros` },
      { rotulo: "Domicílios", valor: n(c.domicilios) },
      { rotulo: "Moradores por domicílio", valor: c.media_moradores.toLocaleString("pt-BR") },
    ],
    modelos,
    entrega: `A Ton entrega ${em} ${b.nome} e em todos os bairros de ${cidade}, com frete grátis. Você pede pelo site da Ton e recebe no endereço que informar, seja a loja ou a sua casa.`,
    faq: [
      {
        q: `A Ton entrega maquininha ${em} ${b.nome}?`,
        a: `Entrega. Vale para ${b.nome} e para todos os outros bairros de ${cidade}, com frete grátis. O prazo costuma ficar entre 2 e 5 dias úteis, conforme o CEP.`,
      },
      {
        q: `Qual a melhor maquininha Ton para quem vende ${em} ${b.nome}?`,
        a: `Olhando o tipo de comércio do bairro, as duas que mais fazem sentido são a ${modelos[0].nome} e a ${modelos[1].nome}. ${modelos[0].texto}`,
      },
      {
        q: `Quantas pessoas moram ${em} ${b.nome}?`,
        a: `${n(c.populacao)} pessoas, em ${n(c.domicilios)} domicílios, segundo o Censo 2022 do IBGE. É o ${c.ranking}º bairro mais populoso entre os ${dados.total_bairros} de ${cidade}.`,
      },
      {
        q: `Preciso ter CNPJ para pedir a maquininha?`,
        a: `Não precisa. A Ton vende para CPF e para CNPJ. Autônomo ou ambulante ${em} ${b.nome} pede só com o CPF.`,
      },
    ],
    outros,
    fonte: "Fonte dos números: IBGE, Censo Demográfico 2022, resultados por bairro.",
  }
}
