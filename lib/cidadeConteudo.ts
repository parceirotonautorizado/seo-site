import cidades from "@/dados/cidades-pr.json"
import fontes from "@/dados/fontes.json"
import { DESTAQUES } from "@/dados/cidades-destaque"

// Conteúdo das páginas de cidade montado a partir de dados oficiais (IBGE).
// Cada frase depende de um dado real do município; nada aqui é sorteado.

export type Cidade = (typeof cidades)[number]

export type ModeloId = "t3smart" | "t3" | "t2" | "t1"

const n = (v: number) => v.toLocaleString("pt-BR")
const reais = (v: number) => `R$ ${v.toLocaleString("pt-BR")}`

function mediana(valores: number[]) {
  const o = [...valores].sort((a, b) => a - b)
  const m = Math.floor(o.length / 2)
  return o.length % 2 ? o[m] : (o[m - 1] + o[m]) / 2
}

// Referências do estado, calculadas sobre os 399 municípios
const PIB_PC_ESTADO = Math.round(
  (cidades.reduce((s, c) => s + c.pib_mil, 0) * 1000) / cidades.reduce((s, c) => s + c.populacao, 0)
)
const COMERCIO_MIL_MEDIANA = mediana(cidades.map((c) => comercioPorMil(c)))

function comercioPorMil(c: Cidade) {
  return ((c.empresas_comercio ?? 0) * 1000) / c.populacao
}

// Escolhe uma entre várias redações de forma fixa por cidade (mesma cidade, mesma frase)
function variante<T>(c: Cidade, opcoes: T[], sal = 0): T {
  const base = Number(c.codigo_ibge) + sal
  return opcoes[base % opcoes.length]
}

type Perfil = "agro" | "industria" | "servicos" | "publico" | "misto"

function perfil(c: Cidade): Perfil {
  const s = c.setores
  if (s.agro >= 40) return "agro"
  if (s.industria >= 40) return "industria"
  if (s.servicos >= 50) return "servicos"
  if (s.publico >= 30) return "publico"
  return "misto"
}

type Porte = "metropole" | "grande" | "media" | "pequena" | "micro"

function porte(c: Cidade): Porte {
  if (c.populacao >= 300000) return "metropole"
  if (c.populacao >= 100000) return "grande"
  if (c.populacao >= 20000) return "media"
  if (c.populacao >= 5000) return "pequena"
  return "micro"
}

function introducao(c: Cidade) {
  const p = porte(c)
  const pop = n(c.populacao)
  const dens = n(Math.round(c.densidade))

  let frase: string
  if (p === "metropole" || p === "grande") {
    frase =
      c.ranking_populacao === 1
        ? `${c.nome} é a maior cidade do Paraná: ${pop} habitantes no Censo 2022, em ${n(c.area_km2)} km².`
        : `${c.nome} é a ${c.ranking_populacao}ª maior cidade do Paraná, com ${pop} habitantes no Censo 2022.`
  } else if (p === "media") {
    frase = variante(c, [
      `Com ${pop} habitantes no Censo 2022, ${c.nome} é a ${c.ranking_populacao}ª cidade mais populosa do Paraná.`,
      `${c.nome} tem ${pop} habitantes (Censo 2022) e ocupa a ${c.ranking_populacao}ª posição entre os 399 municípios do Paraná.`,
      `O Censo 2022 contou ${pop} moradores em ${c.nome}, a ${c.ranking_populacao}ª maior população do estado.`,
    ])
  } else {
    frase = variante(c, [
      `${c.nome} tem ${pop} habitantes, segundo o Censo 2022, espalhados por ${n(c.area_km2)} km², o que dá cerca de ${dens} moradores por km².`,
      `O Censo 2022 contou ${pop} moradores em ${c.nome}. O município tem ${n(c.area_km2)} km² e densidade de ${dens} habitantes por km².`,
      `Em ${c.nome} vivem ${pop} pessoas (Censo 2022), em um território de ${n(c.area_km2)} km².`,
    ])
  }

  const regiao = c.polo
    ? `O município pertence à região imediata de ${c.regiao}, que reúne ${c.cidades_na_regiao} cidades, e fica a cerca de ${c.polo.km} km em linha reta de ${c.polo.nome}, a maior delas.`
    : c.cidades_na_regiao > 1
    ? `É a maior cidade da sua região imediata, formada por ${c.cidades_na_regiao} municípios, e por isso recebe consumidores das cidades vizinhas para compras, saúde e serviços.`
    : `Forma sozinha a sua região imediata na divisão do IBGE.`

  return `${frase} ${regiao}`
}

function economia(c: Cidade) {
  const s = c.setores
  const tipo = perfil(c)
  let texto: string

  if (tipo === "agro") {
    texto = variante(c, [
      `A agropecuária responde por ${s.agro}% de tudo o que ${c.nome} produz, bem acima de serviços privados (${s.servicos}%) e indústria (${s.industria}%). Em economias assim, o caixa do comércio costuma acompanhar o calendário do campo: aperta na entressafra e melhora quando o produtor recebe.`,
      `Em ${c.nome}, ${s.agro}% da riqueza gerada vem da agropecuária; serviços privados somam ${s.servicos}% e a indústria, ${s.industria}%. Para quem vende na cidade, isso significa movimento concentrado nos períodos em que a produção rural é paga.`,
      `O campo sustenta a economia de ${c.nome}: ${s.agro}% do valor produzido no município é agropecuário, contra ${s.servicos}% dos serviços privados e ${s.industria}% da indústria. Lojas, oficinas e mercados sentem diretamente os meses de colheita e de venda da produção.`,
    ])
  } else if (tipo === "industria") {
    texto = variante(c, [
      `A indústria gera ${s.industria}% do valor produzido em ${c.nome} (a conta do IBGE inclui geração de energia e construção), à frente dos serviços privados, com ${s.servicos}%. Onde há muito emprego industrial, o comércio sente o dia do pagamento: as vendas se concentram nas primeiras semanas do mês.`,
      `${s.industria}% da riqueza de ${c.nome} sai da indústria, categoria em que o IBGE também conta energia e construção. Os serviços privados respondem por ${s.servicos}%. Com salário em data certa, o movimento nas lojas tende a subir logo depois do pagamento das fábricas.`,
    ])
  } else if (tipo === "servicos") {
    texto = variante(c, [
      `Comércio e serviços privados respondem por ${s.servicos}% do que ${c.nome} produz; a indústria fica com ${s.industria}% e a agropecuária com ${s.agro}%. É uma economia urbana, com muitos lojistas e prestadores de serviço disputando o mesmo cliente.`,
      `${c.nome} vive principalmente de comércio e serviços privados, que somam ${s.servicos}% do valor gerado no município (indústria: ${s.industria}%; agropecuária: ${s.agro}%). Com tanta oferta, facilitar o pagamento vira critério de escolha do cliente.`,
      `O setor de comércio e serviços privados representa ${s.servicos}% da economia de ${c.nome}, seguido pela indústria (${s.industria}%). Nesse tipo de mercado, quem não aceita cartão ou Pix perde venda para o vizinho.`,
    ])
  } else if (tipo === "publico") {
    texto = `A administração pública (prefeitura, escolas, saúde e previdência) responde por ${s.publico}% do valor gerado em ${c.nome}, uma participação alta, comum em municípios pequenos. Agropecuária soma ${s.agro}% e serviços privados, ${s.servicos}%. Na prática, salários de servidores e aposentadorias puxam o movimento do comércio no começo do mês.`
  } else {
    texto = variante(c, [
      `A economia de ${c.nome} é dividida: serviços privados somam ${s.servicos}%, indústria ${s.industria}%, agropecuária ${s.agro}% e administração pública ${s.publico}%. Sem depender de um único setor, o comércio local tem movimento mais regular ao longo do ano.`,
      `Nenhum setor domina sozinho a economia de ${c.nome}: ${s.servicos}% vêm de serviços privados, ${s.industria}% da indústria, ${s.agro}% da agropecuária e ${s.publico}% da administração pública.`,
    ])
  }

  const dif = Math.round((c.pib_per_capita / PIB_PC_ESTADO - 1) * 100)
  const comparacao =
    Math.abs(dif) <= 5
      ? `praticamente igual à média do Paraná (${reais(PIB_PC_ESTADO)})`
      : dif > 0
      ? `${dif}% acima da média do Paraná (${reais(PIB_PC_ESTADO)})`
      : `${Math.abs(dif)}% abaixo da média do Paraná (${reais(PIB_PC_ESTADO)})`

  return `${texto} O PIB por habitante em ${fontes.pib} foi de ${reais(c.pib_per_capita)}, ${comparacao}.`
}

function empresas(c: Cidade) {
  const partes: string[] = []
  if (c.empresas_comercio != null) partes.push(`${n(c.empresas_comercio)} de comércio`)
  if (c.empresas_alimentacao != null) partes.push(`${n(c.empresas_alimentacao)} de alojamento e alimentação`)
  if (c.empresas_industria != null) partes.push(`${n(c.empresas_industria)} indústrias de transformação`)

  const porMil = comercioPorMil(c)
  const relacao =
    porMil > COMERCIO_MIL_MEDIANA * 1.15
      ? "acima da mediana dos municípios do estado"
      : porMil < COMERCIO_MIL_MEDIANA * 0.85
      ? "abaixo da mediana dos municípios do estado"
      : "perto da mediana dos municípios do estado"

  const lista =
    partes.length > 1 ? `${partes.slice(0, -1).join(", ")} e ${partes[partes.length - 1]}` : partes[0] ?? ""

  return (
    `O Cadastro Central de Empresas do IBGE registrou ${n(c.empresas)} empresas e organizações ativas em ${c.nome} em ${fontes.empresas}, com ${n(c.pessoal_ocupado)} pessoas ocupadas. ` +
    (lista ? `Na contagem por atividade (${fontes.empresas_por_atividade}), eram ${lista}. ` : "") +
    `São ${porMil.toLocaleString("pt-BR", { maximumFractionDigits: 1 })} empresas de comércio para cada mil moradores, ${relacao} (${COMERCIO_MIL_MEDIANA.toLocaleString("pt-BR", { maximumFractionDigits: 1 })}).`
  )
}

function ordemModelos(c: Cidade): ModeloId[] {
  const p = porte(c)
  const tipo = perfil(c)
  const alimPorMil = ((c.empresas_alimentacao ?? 0) * 1000) / c.populacao

  if (p === "metropole" || p === "grande" || alimPorMil >= 1.8) return ["t3smart", "t3", "t2", "t1"]
  if (p === "media") return tipo === "industria" || tipo === "servicos" ? ["t3", "t3smart", "t2", "t1"] : ["t3", "t2", "t3smart", "t1"]
  if (tipo === "agro") return ["t2", "t1", "t3", "t3smart"]
  return ["t2", "t3", "t1", "t3smart"]
}

function motivoModelo(c: Cidade, id: ModeloId): { nome: string; texto: string } {
  const alim = c.empresas_alimentacao
  const tipo = perfil(c)

  switch (id) {
    case "t3smart":
      return {
        nome: "T3 Smart",
        texto:
          alim != null && alim >= 5
            ? `É o modelo que aceita vale-refeição e vale-alimentação. Faz diferença para os ${n(alim)} negócios de alojamento e alimentação de ${c.nome} e para mercados, padarias e açougues. Roda Android e tem visor sensível ao toque.`
            : `Aceita vale-refeição e vale-alimentação, roda Android e tem visor sensível ao toque. Em ${c.nome}, serve principalmente a mercados, padarias e restaurantes que recebem esses benefícios.`,
      }
    case "t3":
      return {
        nome: "T3",
        texto:
          tipo === "industria" || tipo === "servicos"
            ? `Imprime o comprovante na hora e tem chip 4G próprio. É a escolha de balcão para lojas de ${c.nome} com fluxo constante, em que o cliente ainda pede a via impressa.`
            : `Imprime comprovante e tem chip 4G próprio, sem depender do celular. Atende bem o comércio de balcão de ${c.nome}: lojas, farmácias, materiais de construção e casas agropecuárias.`,
      }
    case "t2":
      return {
        nome: "T2",
        texto:
          tipo === "agro"
            ? `Tem bateria de longa duração, Wi-Fi e chip 4G. Em um município de base rural como ${c.nome}, é a opção para quem vende fora do ponto fixo: entregas, feiras, atendimento em propriedades e prestadores de serviço.`
            : `Tem bateria de longa duração, Wi-Fi e chip 4G. É uma opção portátil e de custo menor para quem atende na rua ou em domicílio em ${c.nome}, como entregadores, autônomos e profissionais liberais.`,
      }
    default:
      return {
        nome: "T1",
        texto:
          porte(c) === "micro" || porte(c) === "pequena"
            ? `É a mais barata e funciona conectada ao celular por Bluetooth. Em ${c.nome}, resolve para quem está começando ou vende pouco no cartão: ambulantes, manicures, vendedores por catálogo.`
            : `É a mais barata e usa a internet do celular, por Bluetooth. Serve para quem está começando em ${c.nome} ou quer uma segunda maquininha de reserva.`,
      }
  }
}

function entrega(c: Cidade) {
  const distancia =
    c.km_curitiba === 0
      ? `${c.nome} é a capital do estado e usa o DDD ${c.ddd}.`
      : `${c.nome} fica a cerca de ${n(c.km_curitiba)} km de Curitiba em linha reta, na mesorregião ${c.mesorregiao} do Paraná, e usa o DDD ${c.ddd}.`

  return `${distancia} A compra é feita pelo site oficial da Ton e a maquininha é enviada para o endereço informado no pedido, com frete grátis. Não é preciso ir a uma loja nem a outra cidade para retirar.`
}

function faq(c: Cidade) {
  const s = c.setores
  const ordem = ordemModelos(c)
  const primeiro = motivoModelo(c, ordem[0])
  const segundo = motivoModelo(c, ordem[1])
  const [v1, v2] = c.vizinhas

  return [
    {
      q: `A Ton entrega maquininha em ${c.nome}?`,
      a: `Sim. A Ton entrega em ${c.nome} e em todo o Paraná com frete grátis. O pedido é feito pelo site oficial e o prazo costuma ser de 2 a 5 dias úteis, conforme o CEP.`,
    },
    {
      q: `Qual a melhor maquininha Ton para quem vende em ${c.nome}?`,
      a: `Depende de onde e como você vende. Pelo perfil do comércio local, os modelos que mais fazem sentido em ${c.nome} são a ${primeiro.nome} e a ${segundo.nome}. ${primeiro.texto}`,
    },
    {
      q: `Quantas empresas existem em ${c.nome}?`,
      a:
        `O IBGE registrou ${n(c.empresas)} empresas e organizações ativas em ${c.nome} em ${fontes.empresas}` +
        (c.empresas_comercio != null ? `, sendo ${n(c.empresas_comercio)} do comércio na contagem de ${fontes.empresas_por_atividade}` : "") +
        `. A cidade tem ${n(c.populacao)} habitantes (Censo 2022).`,
    },
    {
      q: `Como é a economia de ${c.nome}?`,
      a: `Do valor produzido em ${c.nome} em ${fontes.pib}, ${s.servicos}% vieram de comércio e serviços privados, ${s.agro}% da agropecuária, ${s.industria}% da indústria e ${s.publico}% da administração pública. O PIB por habitante foi de ${reais(c.pib_per_capita)}.`,
    },
    {
      q: `${c.nome} fica em qual região do Paraná?`,
      a:
        `${c.nome} fica na mesorregião ${c.mesorregiao}, região imediata de ${c.regiao} e região intermediária de ${c.regiao_intermediaria}` +
        (c.km_curitiba > 0 ? `, a cerca de ${n(c.km_curitiba)} km de Curitiba em linha reta` : "") +
        `. O DDD é ${c.ddd}.`,
    },
    {
      q: `Quem é de ${v1.nome} ou ${v2.nome} também pode pedir?`,
      a: `Pode. A entrega cobre todas as cidades do Paraná, incluindo ${v1.nome} (a cerca de ${v1.km} km de ${c.nome}) e ${v2.nome} (${v2.km} km). As taxas e os modelos são os mesmos.`,
    },
  ]
}

export function conteudoCidade(c: Cidade) {
  const ordem = ordemModelos(c)

  return {
    destaque: DESTAQUES[c.slug] ?? null,
    paragrafos: [introducao(c), economia(c), empresas(c)],
    numeros: [
      { rotulo: "População (Censo 2022)", valor: `${n(c.populacao)} habitantes` },
      { rotulo: "Posição no estado", valor: `${c.ranking_populacao}ª de 399 cidades` },
      { rotulo: "Área", valor: `${n(c.area_km2)} km²` },
      { rotulo: `PIB por habitante (${fontes.pib})`, valor: reais(c.pib_per_capita) },
      { rotulo: `Empresas ativas (${fontes.empresas})`, valor: n(c.empresas) },
      ...(c.empresas_comercio != null
        ? [{ rotulo: `Empresas de comércio (${fontes.empresas_por_atividade})`, valor: n(c.empresas_comercio) }]
        : []),
      { rotulo: "Região imediata", valor: c.regiao },
      { rotulo: "DDD", valor: c.ddd },
    ],
    modelos: ordem.map((id) => ({ id, ...motivoModelo(c, id) })),
    entrega: entrega(c),
    faq: faq(c),
    vizinhas: c.vizinhas,
    fonte: `Fontes: IBGE — Censo ${fontes.censo}, PIB dos Municípios ${fontes.pib} e Cadastro Central de Empresas ${fontes.empresas_por_atividade} e ${fontes.empresas}. Distâncias calculadas em linha reta entre as sedes dos municípios.`,
  }
}
