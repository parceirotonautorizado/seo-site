import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import Guias from "@/app/components/Guias"
import { PLANS, VM, TAXAS_ULTIMA_VERIFICACAO, PIX_SEM_CHAVE, REGULAMENTO_DATA } from "@/lib/taxas"

const PATH = "/taxas-ton"
const TITULO = "Taxas da Ton: tabela completa por faixa de vendas"
const DESCRICAO = "Tabela de taxas da maquininha Ton no plano Mega+: Pix, débito e crédito de 1x a 12x, por faixa de vendas, bandeira e prazo de recebimento."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

const pct = (v: number) => `${v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`

const LINHAS: { rotulo: string; valor: (p: any) => number }[] = [
  { rotulo: "Pix", valor: (p) => p.pix },
  { rotulo: "Débito", valor: (p) => p.deb },
  { rotulo: "Crédito à vista", valor: (p) => p.cre[1] },
  { rotulo: "Crédito 2x", valor: (p) => p.cre[2] },
  { rotulo: "Crédito 3x", valor: (p) => p.cre[3] },
  { rotulo: "Crédito 6x", valor: (p) => p.cre[6] },
  { rotulo: "Crédito 10x", valor: (p) => p.cre[10] },
  { rotulo: "Crédito 12x", valor: (p) => p.cre[12] },
]

export default function TaxasTon() {
  const promo = PLANS.promo.d1.mv
  const menor = PLANS.ate3.d1.mv
  const maior = PLANS.t30p.d1.mv

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Taxas da Ton", path: PATH },
        ])}
      />

      <article className="txt">
        <h1>Taxas da Ton: a tabela completa</h1>

        <p>
          A taxa da Ton não é uma só. Ela muda conforme três coisas: quanto você vende por mês, a bandeira do cartão
          e se você quer receber na hora ou em 1 dia útil. Abaixo está a tabela inteira do plano Mega+, conferida no
          site da Ton em {TAXAS_ULTIMA_VERIFICACAO}.
        </p>

        <h2>O período promocional</h2>
        <p>
          Quem ativa a maquininha começa pagando {pct(promo.deb)} no débito e {pct(promo.cre[1])} no crédito à vista
          em Visa e Mastercard, com Pix a {pct(promo.pix)}. Isso vale pelos primeiros 30 dias ou até R$ 5.000 em
          vendas, o que acabar primeiro. O prazo conta a partir do dia em que a maquininha chega. É a taxa que aparece
          nos anúncios, e ela é real. Só não é para sempre.
        </p>

        <h2>Depois da promoção</h2>
        <p>
          Passado esse período, entra a taxa da sua faixa de vendas. Quanto mais você vende, menos paga. No débito
          Visa e Mastercard, recebendo em 1 dia útil, a taxa vai de {pct(menor.deb)} para quem vende até R$ 3 mil por
          mês a {pct(maior.deb)} para quem passa de R$ 30 mil.
        </p>
        <p>
          Dois detalhes pesam mais do que parecem. Receber na hora custa um pouco mais do que receber em 1 dia útil.
          E Elo e Amex têm taxa maior do que Visa e Mastercard em todas as faixas.
        </p>

        <h2>E o Pix na maquininha?</h2>
        <p>
          Aqui tem uma regra que pouca gente conhece. No período promocional, o Pix por QR Code na maquininha é
          grátis para todo mundo. Depois, ele continua grátis se você cadastrar uma chave Pix na sua Conta Ton. Pode
          ser CPF, CNPJ ou telefone. Quem não cadastra passa a pagar {pct(PIX_SEM_CHAVE)} por venda.
        </p>
        <p>
          É um cadastro de um minuto que evita uma taxa para sempre. Faça no dia em que a maquininha chegar. As
          tabelas abaixo mostram o Pix já com a chave cadastrada.
        </p>

        <h2>Como a Ton define a sua faixa</h2>
        <p>
          A regra está no regulamento do plano, de {REGULAMENTO_DATA}. Resumindo o que interessa:
        </p>
        <ul>
          <li>
            Se você vender R$ 5.000 antes de completar 30 dias, sai da promoção na hora e fica provisoriamente na
            faixa de R$ 6 mil a R$ 10 mil até fechar os 30 dias.
          </li>
          <li>
            Ao fim dos 30 dias, a Ton soma tudo o que você vendeu no período e coloca você na faixa correspondente.
          </li>
          <li>
            Dali em diante a conta é mensal. No começo de cada mês, vale o total vendido no mês anterior. A faixa
            pode melhorar ou piorar de um mês para o outro.
          </li>
          <li>
            Entram na soma as vendas no cartão, o Pix na maquininha, o TapTon e o link de pagamento. Venda estornada
            ou cancelada não conta.
          </li>
        </ul>
        <p>
          Na prática: um mês fraco derruba a sua faixa no mês seguinte, e a taxa sobe justo quando você menos pode.
          Vale saber disso antes de planejar o caixa.
        </p>

        <h2>Tabela por faixa de vendas mensais</h2>

        {VM.map((faixa) => {
          const p = PLANS[faixa.id]
          return (
            <div className="tab-wrap" key={faixa.id}>
              <table className="tab">
                <caption>{faixa.label}</caption>
                <thead>
                  <tr>
                    <th scope="col">Venda</th>
                    <th scope="col">Visa e Master, 1 dia útil</th>
                    <th scope="col">Visa e Master, na hora</th>
                    <th scope="col">Elo e Amex, 1 dia útil</th>
                    <th scope="col">Elo e Amex, na hora</th>
                  </tr>
                </thead>
                <tbody>
                  {LINHAS.map((l) => (
                    <tr key={l.rotulo}>
                      <th scope="row">{l.rotulo}</th>
                      <td>{pct(l.valor(p.d1.mv))}</td>
                      <td>{pct(l.valor(p.d0.mv))}</td>
                      <td>{pct(l.valor(p.d1.oa))}</td>
                      <td>{pct(l.valor(p.d0.oa))}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        })}

        <p className="nota">
          O Pix das tabelas considera a chave Pix cadastrada; sem chave, {pct(PIX_SEM_CHAVE)} depois da promoção. As
          tabelas vão até 12 parcelas. A T3 e a T3 Smart parcelam em até 21 vezes para novos clientes, e as taxas
          acima de 12x ficam no aplicativo da Ton. TapTon e link de pagamento têm taxas próprias, diferentes das da
          maquininha.
        </p>

        <p className="nota">
          Taxas do plano Mega+ conferidas em {TAXAS_ULTIMA_VERIFICACAO}. A Ton pode alterar os valores, e o que vale é
          o que aparece no site oficial na hora do pedido.
        </p>

        <h2>Na prática, quanto sobra de uma venda</h2>
        <p>
          Pegue uma venda de R$ 100 no débito Visa. No período promocional você recebe R${" "}
          {(100 - promo.deb).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}. Depois dele, vendendo até R$ 3 mil
          por mês, recebe R$ {(100 - menor.deb).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}. A mesma venda
          em 12x no crédito, nessa faixa, deixa R${" "}
          {(100 - menor.cre[12]).toLocaleString("pt-BR", { minimumFractionDigits: 2 })} na sua conta.
        </p>
        <p>
          Parcelado longo é caro em qualquer maquininha, não só na Ton. Se o seu cliente pede muito 10x ou 12x, faça a
          conta antes de definir o preço. O <a href="/#simulador">simulador</a> mostra o valor exato para a sua faixa.
        </p>

        <h2>O que a Ton não cobra</h2>
        <p>
          Não tem aluguel nem mensalidade. Você paga uma taxa de adesão única pela maquininha, à vista ou em até 12 vezes, e não há cobrança fixa depois. O frete também é grátis.
        </p>

        <a className="cc-cta" href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer">
          Ver as maquininhas no site da Ton
        </a>

        <h2>Fontes</h2>
        <ul className="fontes">
          <li>
            Tabela de taxas do plano Mega+ em{" "}
            <a href="https://www.ton.com.br" target="_blank" rel="noopener noreferrer">ton.com.br</a>, conferida em{" "}
            {TAXAS_ULTIMA_VERIFICACAO}.
          </li>
          <li>Regulamento do Plano Ton Mega+, versão de {REGULAMENTO_DATA}.</li>
          <li>
            Perguntas frequentes em{" "}
            <a href="https://www.ton.com.br" target="_blank" rel="noopener noreferrer">ton.com.br</a>, sobre Pix na
            maquininha e parcelamento em até 21x.
          </li>
        </ul>
      </article>

      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
