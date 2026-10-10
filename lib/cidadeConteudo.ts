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
        : `${c.nome} é a ${c.ranking_populacao}ª maior cidade do Paraná. O Censo 2022 contou ${pop} habitantes.`
  } else if (p === "media") {
    frase = variante(c, [
      `${c.nome} tem ${pop} habitantes, pelo Censo 2022. É a ${c.ranking_populacao}ª cidade mais populosa do Paraná.`,
      `São ${pop} moradores em ${c.nome}, segundo o Censo 2022, o que coloca a cidade na ${c.ranking_populacao}ª posição entre os 399 municípios do estado.`,
      `O Censo 2022 contou ${pop} pessoas em ${c.nome}. É a ${c.ranking_populacao}ª maior população do Paraná.`,
      `${c.nome} é a ${c.ranking_populacao}ª cidade do Paraná em população: ${pop} habitantes no Censo 2022.`,
    ])
  } else {
    frase = variante(c, [
      `${c.nome} tem ${pop} habitantes, pelo Censo 2022. Como o município ocupa ${n(c.area_km2)} km², dá uns ${dens} moradores por km².`,
      `O Censo 2022 contou ${pop} moradores em ${c.nome}. O município tem ${n(c.area_km2)} km², com cerca de ${dens} habitantes por km².`,
      `Moram ${pop} pessoas em ${c.nome} (Censo 2022), em ${n(c.area_km2)} km² de território.`,
      `${c.nome} é cidade pequena: ${pop} habitantes no Censo 2022, espalhados por ${n(c.area_km2)} km².`,
    ])
  }

  const regiao = c.polo
    ? variante(
        c,
        [
          `Faz parte da região imediata de ${c.regiao}, com ${c.cidades_na_regiao} cidades. ${c.polo.nome}, a maior delas, fica a uns ${c.polo.km} km em linha reta.`,
          `Pela divisão do IBGE, pertence à região imediata de ${c.regiao}, que tem ${c.cidades_na_regiao} municípios. A cidade grande mais próxima do grupo é ${c.polo.nome}, a cerca de ${c.polo.km} km em linha reta.`,
          `Está na região imediata de ${c.regiao}, formada por ${c.cidades_na_regiao} cidades. Para compras maiores, a referência é ${c.polo.nome}, a uns ${c.polo.km} km em linha reta.`,
        ],
        1
      )
    : c.cidades_na_regiao > 1
    ? `É a maior cidade da sua região imediata, que tem ${c.cidades_na_regiao} municípios. Na prática, quem mora nas cidades em volta vem para cá atrás de compras, saúde e serviços.`
    : `Na divisão do IBGE, forma sozinha a sua região imediata.`

  return `${frase} ${regiao}`
}

function economia(c: Cidade) {
  const s = c.setores
  const tipo = perfil(c)
  let texto: string

  if (tipo === "agro") {
    texto = variante(c, [
      `A agropecuária responde por ${s.agro}% de tudo o que ${c.nome} produz. Serviços privados ficam com ${s.servicos}% e a indústria com ${s.industria}%. Quem tem loja numa cidade assim conhece o efeito: o caixa aperta na entressafra e melhora quando o produtor recebe.`,
      `Em ${c.nome}, ${s.agro}% da riqueza vem do campo. Serviços privados somam ${s.servicos}% e a indústria, ${s.industria}%. Para quem vende, isso quer dizer movimento concentrado nas épocas em que a produção rural é paga.`,
      `Quem sustenta a economia de ${c.nome} é o campo: ${s.agro}% do valor produzido é agropecuário, contra ${s.servicos}% dos serviços privados e ${s.industria}% da indústria. Loja, oficina e mercado sentem direto os meses de colheita.`,
      `${s.agro}% do que ${c.nome} produz sai da agropecuária. O resto se divide entre serviços privados (${s.servicos}%), indústria (${s.industria}%) e setor público (${s.publico}%). O comércio acompanha a safra, para o bem e para o mal.`,
    ])
  } else if (tipo === "industria") {
    texto = variante(c, [
      `A indústria gera ${s.industria}% do valor produzido em ${c.nome}. Nessa conta o IBGE inclui geração de energia e construção. Os serviços privados vêm depois, com ${s.servicos}%. Onde tem muito emprego de fábrica, o comércio vive do dia do pagamento, e as vendas se concentram no começo do mês.`,
      `${s.industria}% da riqueza de ${c.nome} sai da indústria, categoria em que o IBGE também conta energia e construção. Serviços privados respondem por ${s.servicos}%. Salário em data certa faz o movimento das lojas subir logo depois que as fábricas pagam.`,
      `Em ${c.nome}, quem puxa a economia é a indústria, com ${s.industria}% do valor produzido (o IBGE conta aqui também energia e construção). Serviços privados ficam com ${s.servicos}%. Para o comerciante, o mês tem duas metades: antes e depois do pagamento.`,
    ])
  } else if (tipo === "servicos") {
    texto = variante(c, [
      `Comércio e serviços privados respondem por ${s.servicos}% do que ${c.nome} produz. A indústria fica com ${s.industria}% e a agropecuária com ${s.agro}%. É economia de cidade, com muito lojista e prestador de serviço atrás do mesmo cliente.`,
      `${c.nome} vive de comércio e serviços privados: ${s.servicos}% do valor gerado no município. Indústria tem ${s.industria}% e agropecuária, ${s.agro}%. Com tanta oferta, o cliente escolhe também por quem facilita o pagamento.`,
      `O comércio e os serviços privados são ${s.servicos}% da economia de ${c.nome}. A indústria vem atrás, com ${s.industria}%. Num mercado assim, quem não aceita cartão ou Pix perde a venda para o vizinho.`,
      `Em ${c.nome}, ${s.servicos}% da riqueza vem de comércio e serviços privados, bem à frente da indústria (${s.industria}%) e da agropecuária (${s.agro}%). Concorrência não falta, e a forma de pagamento pesa na decisão de compra.`,
    ])
  } else if (tipo === "publico") {
    texto = `A administração pública (prefeitura, escolas, saúde e previdência) responde por ${s.publico}% do valor gerado em ${c.nome}. É uma fatia alta, mas comum em município pequeno. A agropecuária soma ${s.agro}% e os serviços privados, ${s.servicos}%. Na prática, salário de servidor e aposentadoria movimentam o comércio no começo do mês.`
  } else {
    texto = variante(c, [
      `A economia de ${c.nome} é bem dividida: serviços privados ${s.servicos}%, indústria ${s.industria}%, agropecuária ${s.agro}% e administração pública ${s.publico}%. Como não depende de um setor só, o comércio tem movimento mais regular ao longo do ano.`,
      `Nenhum setor manda sozinho na economia de ${c.nome}. São ${s.servicos}% de serviços privados, ${s.industria}% de indústria, ${s.agro}% de agropecuária e ${s.publico}% de administração pública.`,
      `${c.nome} tem um pouco de tudo: ${s.servicos}% da riqueza vem de serviços privados, ${s.industria}% da indústria, ${s.agro}% do campo e ${s.publico}% do setor público. Para o comércio, isso costuma significar menos sobe e desce durante o ano.`,
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
    `O IBGE registrou ${n(c.empresas)} empresas e organizações ativas em ${c.nome} em ${fontes.empresas}, com ${n(c.pessoal_ocupado)} pessoas trabalhando nelas. ` +
    (lista ? `Na contagem por atividade, de ${fontes.empresas_por_atividade}, eram ${lista}. ` : "") +
    `Dá ${porMil.toLocaleString("pt-BR", { maximumFractionDigits: 1 })} empresas de comércio para cada mil moradores, ${relacao} (${COMERCIO_MIL_MEDIANA.toLocaleString("pt-BR", { maximumFractionDigits: 1 })}).`
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
            ? `É a que aceita vale-refeição e vale-alimentação. Isso pesa para os ${n(alim)} negócios de alojamento e alimentação de ${c.nome}, e também para mercado, padaria e açougue. Roda Android e tem visor sensível ao toque.`
            : `Aceita vale-refeição e vale-alimentação, roda Android e tem visor sensível ao toque. Em ${c.nome}, faz sentido para mercado, padaria e restaurante que recebem esses benefícios.`,
      }
    case "t3":
      return {
        nome: "T3",
        texto:
          tipo === "industria" || tipo === "servicos"
            ? `Imprime o comprovante na hora e tem chip 4G próprio. É a maquininha de balcão para loja de ${c.nome} com movimento constante, onde ainda tem cliente que pede a via impressa.`
            : `Imprime comprovante e tem chip 4G próprio, então não depende do celular. Funciona bem no balcão: loja, farmácia, material de construção e casa agropecuária de ${c.nome}.`,
      }
    case "t2":
      return {
        nome: "T2",
        texto:
          tipo === "agro"
            ? `Tem bateria de longa duração, Wi-Fi e chip 4G. ${c.nome} tem base rural, e muita venda acontece fora do balcão: na entrega, na feira, na propriedade do cliente. É para isso que ela serve.`
            : `Tem bateria de longa duração, Wi-Fi e chip 4G. É portátil e custa menos, boa para quem atende na rua ou na casa do cliente em ${c.nome}: entregador, autônomo, profissional liberal.`,
      }
    default:
      return {
        nome: "T1",
        texto:
          porte(c) === "micro" || porte(c) === "pequena"
            ? `É a mais barata e funciona ligada ao celular por Bluetooth. Em ${c.nome}, resolve a vida de quem está começando ou vende pouco no cartão, como ambulante, manicure e vendedor por catálogo.`
            : `É a mais barata e usa a internet do celular, por Bluetooth. Serve para quem está começando em ${c.nome} ou quer uma segunda maquininha guardada para emergência.`,
      }
  }
}

function entrega(c: Cidade) {
  const distancia =
    c.km_curitiba === 0
      ? `${c.nome} é a capital do estado e usa o DDD ${c.ddd}.`
      : `${c.nome} fica a cerca de ${n(c.km_curitiba)} km de Curitiba em linha reta, na mesorregião ${c.mesorregiao} do Paraná, e usa o DDD ${c.ddd}.`

  return `${distancia} Você compra pelo site oficial da Ton e a maquininha vai para o endereço que informar no pedido, com frete grátis. Não precisa ir a loja nenhuma, nem a outra cidade, para retirar.`
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
      a: `Entrega. A Ton manda para ${c.nome} e para todo o Paraná com frete grátis. Você pede pelo site oficial, e o prazo costuma ficar entre 2 e 5 dias úteis, conforme o CEP.`,
    },
    {
      q: `Qual a melhor maquininha Ton para quem vende em ${c.nome}?`,
      a: `Depende de onde e como você vende. Olhando o perfil do comércio de ${c.nome}, as duas que mais fazem sentido são a ${primeiro.nome} e a ${segundo.nome}. ${primeiro.texto}`,
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
      a: `Pode. A entrega cobre o Paraná inteiro, e isso inclui ${v1.nome}, a uns ${v1.km} km de ${c.nome}, e ${v2.nome}, a ${v2.km} km. Taxas e modelos são os mesmos.`,
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
    fonte: `Fontes: IBGE, Censo ${fontes.censo}, PIB dos Municípios ${fontes.pib} e Cadastro Central de Empresas ${fontes.empresas_por_atividade} e ${fontes.empresas}. Distâncias calculadas em linha reta entre as sedes dos municípios.`,
  }
}
