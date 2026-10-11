import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd, artigoLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import Guias from "@/app/components/Guias"
import { PLANS, VM, TAXAS_ULTIMA_VERIFICACAO, REGULAMENTO_DATA } from "@/lib/taxas"

const PATH = "/parcelamento-maquininha-ton"
const TITULO = "Parcelamento na maquininha Ton: até quantas vezes e quem paga"
const DESCRICAO = "A maquininha Ton parcela em até 12x na T1 e na T2 e em até 21x na T3 e na T3 Smart. Veja quanto custa cada parcela e como repassar a taxa ao cliente."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, type: "article", title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

const pct = (v: number) => `${v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`
const reais = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

const PARCELAS = [1, 2, 3, 6, 10, 12, 18, 21]

export default function ParcelamentoTon() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Parcelamento na maquininha Ton", path: PATH },
        ])}
      />
      <JsonLd data={artigoLd({ titulo: TITULO, descricao: DESCRICAO, path: PATH, publicado: "10/10/2026", modificado: GUIAS_CONFERIDO_EM })} />

      <article className="txt">
        <h1>Parcelamento na maquininha Ton</h1>

        <p>
          Dá para parcelar, e o limite depende do modelo. O ponto que pega é outro: na maquininha, a taxa do
          parcelado sai do seu bolso, não do cliente. Quanto mais parcelas, maior a taxa.
        </p>

        <h2>Até quantas vezes</h2>
        <ul>
          <li>
            <a href="/ton-t1">T1</a> e <a href="/ton-t2">T2</a>: até 12 vezes.
          </li>
          <li>
            <a href="/ton-t3">T3</a> e <a href="/ton-t3-smart">T3 Smart</a>: até 21 vezes, para novos clientes.
          </li>
        </ul>
        <p className="nota">
          Limites do regulamento do Plano Ton Mega+, versão de {REGULAMENTO_DATA}. Acima de 12 vezes, a Ton informa
          valor mínimo de R$ 10 por parcela.
        </p>

        <h2>Com juros ou sem juros?</h2>
        <p>
          Na tela da maquininha, a opção é Parcelado sem juros (para o seu cliente). O cliente paga o valor que você
          digitou, dividido. A taxa do parcelamento é descontada de você.
        </p>
        <p>
          A Central de Ajuda da Ton diz com todas as letras: a maquininha não repassa a taxa automaticamente para o
          cliente. Se você quer que ele pague o custo, precisa cobrar um valor maior. Mais abaixo está como fazer
          essa conta.
        </p>

        <h2>Quanto custa cada parcela</h2>
        <p>Para quem vende até R$ 3 mil por mês, recebe em 1 dia útil e passa Visa ou Mastercard:</p>
        <div className="tab-wrap">
          <table className="tab">
            <caption>{VM.find((f) => f.id === "ate3")!.label}, depois do período promocional</caption>
            <thead>
              <tr>
                <th scope="col">Parcelas</th>
                <th scope="col">Taxa</th>
                <th scope="col">Sobra de uma venda de R$ 1.000</th>
              </tr>
            </thead>
            <tbody>
              {PARCELAS.map((n) => (
                <tr key={n}>
                  <th scope="row">{n === 1 ? "À vista" : `${n}x`}{n > 12 ? " (só T3 e T3 Smart)" : ""}</th>
                  <td>{pct(PLANS.ate3.d1.mv.cre[n])}</td>
                  <td>{reais(1000 * (1 - PLANS.ate3.d1.mv.cre[n] / 100))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="nota">
          Taxas conferidas no site da Ton em {TAXAS_ULTIMA_VERIFICACAO}. As outras faixas de venda, com taxas
          menores, estão na <a href="/taxas-ton">tabela completa</a>, e o <a href="/simulador-ton">simulador</a> tem
          todas as parcelas.
        </p>

        <h2>Como parcelar na maquininha</h2>
        <ol>
          <li>Digite o valor da venda.</li>
          <li>Toque em Pagar.</li>
          <li>Escolha Crédito.</li>
          <li>Selecione Parcelado sem juros (para o seu cliente).</li>
          <li>Informe o número de parcelas.</li>
          <li>Confirme e faça a cobrança.</li>
        </ol>

        <h2>Como repassar a taxa ao cliente</h2>
        <p>
          O aplicativo da Ton tem uma Calculadora de taxas, na tela inicial. Você escolhe entre Cobrar e Receber,
          digita o valor, confirma a bandeira, se é à vista ou parcelado e o número de parcelas, e toca em Simular
          Venda. Com o resultado, você sabe quanto digitar na maquininha.
        </p>
        <p>
          A Ton faz um alerta que vale ouro: confirme a bandeira do cartão com o cliente antes de simular. Elo e
          Amex têm taxa diferente, e escolher a bandeira errada faz você receber menos do que esperava.
        </p>

        <h2>Vale a pena oferecer parcelado longo?</h2>
        <p>
          Depende da margem. Em produto de valor alto, parcelar em 10 ou 12 vezes costuma fechar venda que não
          sairia à vista. Mas olhe a tabela: a taxa cresce rápido. Três jeitos de lidar com isso:
        </p>
        <ul>
          <li>Limite o parcelamento sem acréscimo a poucas vezes, e cobre a diferença nas demais.</li>
          <li>Dê desconto no Pix e no débito, que custam menos para você.</li>
          <li>Embuta a taxa média no preço e ofereça o parcelado como vantagem.</li>
        </ul>
        <p>
          Quem pretende vender muito acima de 12 vezes precisa da T3 ou da T3 Smart. A T1 e a T2 param em 12.
        </p>

        <a className="cc-cta" href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer">
          Ver os modelos no site da Ton
        </a>

        <h2>Fontes</h2>
        <p className="nota">Informações conferidas em {GUIAS_CONFERIDO_EM}. A Ton pode mudar regras, prazos e valores.</p>
        <ul className="fontes">
          <li>Regulamento do Plano Ton Mega+, versão de 21/09/2026.</li>
          <li>O que é e como usar a calculadora de taxas?, Central de Ajuda Ton.</li>
          <li>Maquininha que parcela em 18x, Blog do Ton, atualizado em 10 de junho de 2026 (passo a passo e valor mínimo da parcela).</li>
          <li>Planos e taxas, site da Ton.</li>
        </ul>
      </article>

      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
