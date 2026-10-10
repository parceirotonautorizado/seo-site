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
    case "t3smart":
      if (b.perfil === "gastronomico")
        return `Aceita vale-refeição e vale-alimentação, o que pesa para os restaurantes ${onde}, e roda Android com visor sensível ao toque.`
      if (b.perfil === "industrial")
        return `É o modelo que aceita vale-refeição e vale-alimentação, benefício comum entre os trabalhadores das fábricas. Restaurantes de almoço e mercados ${onde} são os que mais ganham com isso.`
      if (b.perfil === "alto-padrao")
        return `Roda Android, tem visor sensível ao toque e aceita vale-refeição e vale-alimentação. Combina com restaurantes, cafés e lojas ${onde}, onde o cliente espera pagar por aproximação.`
      if (b.perfil === "central")
        return `Aceita vale-refeição e vale-alimentação. Para restaurantes e lanchonetes ${onde}, que vivem do almoço de quem trabalha por perto, costuma ser o modelo mais indicado.`
      return `Aceita vale-refeição e vale-alimentação e tem visor sensível ao toque. ${cap(onde)}, serve a mercados, padarias e restaurantes que recebem esses benefícios.`
    case "t3":
      if (b.perfil === "central")
        return `Imprime o comprovante e tem chip 4G próprio. É o modelo de balcão para lojas ${onde}, onde o atendimento precisa ser rápido porque o cliente está de passagem.`
      if (b.perfil === "populoso")
        return `Imprime o comprovante e tem chip 4G próprio, sem depender do celular. Atende bem o comércio de rua ${onde}: lojas, farmácias, mercados e materiais de construção.`
      return `Imprime o comprovante e tem chip 4G próprio. Serve ao comércio de balcão ${onde}, em que parte dos clientes ainda pede a via impressa.`
    case "t2":
      if (b.perfil === "turistico")
        return `Tem bateria de longa duração, Wi-Fi e chip 4G. É a opção portátil para quem atende turistas ${onde}: ambulantes, guias, motoristas e bancas.`
      if (b.perfil === "residencial")
        return `Tem bateria de longa duração, Wi-Fi e chip 4G. Num bairro residencial como este, atende quem leva o serviço até o cliente: entregadores, diaristas, técnicos, manicures e personal trainers.`
      return `Tem bateria de longa duração, Wi-Fi e chip 4G. É uma opção portátil para quem faz entregas ou atende em domicílio ${onde}.`
    default:
      return b.perfil === "populoso" || b.perfil === "turistico"
        ? `É a mais barata e funciona conectada ao celular por Bluetooth. Resolve para ambulantes e para quem está começando a vender ${onde}.`
        : `É a mais barata e funciona conectada ao celular por Bluetooth. Serve para quem vende pouco no cartão ou quer uma maquininha de reserva.`
  }
}

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function demografia(b: Bairro, em: string, c: Censo) {
  const total = dados.total_bairros
  const posicao =
    c.ranking <= 3
      ? `É o ${c.ranking === 1 ? "bairro mais populoso" : `${c.ranking}º bairro mais populoso`} de Curitiba`
      : `Ocupa a ${c.ranking}ª posição em população entre os ${total} bairros de Curitiba`

  let lares: string
  if (c.populacao < 2000) {
    // bairro quase sem comércio: só o dado, sem tirar conclusão sobre vendas
    lares = `A média é de ${c.media_moradores.toLocaleString("pt-BR")} moradores por domicílio.`
  } else if (c.media_moradores <= 2.2) {
    lares = `A média é de ${c.media_moradores.toLocaleString("pt-BR")} moradores por domicílio, bem abaixo do comum na cidade: há muita gente morando sozinha ou em casal. Esse público compra em quantidades pequenas, com frequência, e pede muito por entrega.`
  } else if (c.media_moradores >= 2.8) {
    lares = `A média é de ${c.media_moradores.toLocaleString("pt-BR")} moradores por domicílio, acima do comum na cidade, o que indica famílias maiores. Mercados, açougues, lojas de roupa infantil e de material escolar tendem a vender mais por compra.`
  } else {
    lares = `A média é de ${c.media_moradores.toLocaleString("pt-BR")} moradores por domicílio, perto do padrão da cidade.`
  }

  return `O Censo 2022 contou ${n(c.populacao)} moradores ${em} ${b.nome}, em ${n(c.domicilios)} domicílios. ${posicao} e concentra ${c.percentual_cidade < 0.1 ? "menos de 0,1" : c.percentual_cidade.toLocaleString("pt-BR")}% dos habitantes do município. ${lares}`
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
    entrega: `A Ton entrega ${em} ${b.nome} e em todos os bairros de ${cidade} com frete grátis. O pedido é feito pelo site oficial e a maquininha é enviada para o endereço informado, seja a loja ou a sua casa.`,
    faq: [
      {
        q: `A Ton entrega maquininha ${em} ${b.nome}?`,
        a: `Sim. A entrega cobre ${b.nome} e todos os outros bairros de ${cidade}, com frete grátis. O prazo costuma ser de 2 a 5 dias úteis, conforme o CEP.`,
      },
      {
        q: `Qual a melhor maquininha Ton para quem vende ${em} ${b.nome}?`,
        a: `Pelo tipo de comércio do bairro, os modelos que mais fazem sentido são a ${modelos[0].nome} e a ${modelos[1].nome}. ${modelos[0].texto}`,
      },
      {
        q: `Quantas pessoas moram ${em} ${b.nome}?`,
        a: `${n(c.populacao)} pessoas, em ${n(c.domicilios)} domicílios, segundo o Censo 2022 do IBGE. É o ${c.ranking}º bairro mais populoso entre os ${dados.total_bairros} de ${cidade}.`,
      },
      {
        q: `Preciso ter CNPJ para pedir a maquininha?`,
        a: `Não. A Ton vende para CPF e para CNPJ. Autônomos e ambulantes ${em} ${b.nome} podem pedir só com o CPF.`,
      },
    ],
    outros,
    fonte: "Fonte dos números: IBGE, Censo Demográfico 2022, resultados por bairro.",
  }
}
