import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd, artigoLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import Guias from "@/app/components/Guias"
import Modelos from "@/app/components/Modelos"
import RecomendadorSecao from "@/app/components/RecomendadorSecao"
import { LINK_PAGAMENTO, TAXAS_ULTIMA_VERIFICACAO } from "@/lib/taxas"

const PATH = "/link-de-pagamento-ton"
const TITULO = "Link de pagamento da Ton: como funciona, taxas e prazos"
const DESCRICAO = "O link de pagamento da Ton cobra por Pix ou cartão em até 12x, sem maquininha. Veja como criar, quanto custa cada parcela e quando o dinheiro cai."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, type: "article", title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

const pct = (v: number) => `${v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`
const reais = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

const PARCELAS = [1, 2, 3, 6, 10, 12]

export default function LinkPagamentoTon() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Link de pagamento da Ton", path: PATH },
        ])}
      />
      <JsonLd data={artigoLd({ titulo: TITULO, descricao: DESCRICAO, path: PATH, publicado: "10/10/2026", modificado: GUIAS_CONFERIDO_EM })} />

      <article className="txt">
        <h1>Link de pagamento da Ton</h1>

        <p>
          É a cobrança que você manda pelo WhatsApp. Você cria o link no aplicativo da Ton, o cliente abre no celular
          e paga com Pix ou cartão de crédito. Serve para vender à distância, receber sinal de encomenda ou cobrar
          quem não está na sua frente.
        </p>

        <h2>Precisa ter maquininha?</h2>
        <p>
          Não. Segundo a Ton, quem não tem maquininha pode usar o link normalmente. Você precisa do aplicativo e da
          Conta Ton. Para quem vende no balcão e também por mensagem, o link e a maquininha se completam.
        </p>

        <h2>Como criar um link</h2>
        <ol>
          <li>Na tela inicial do aplicativo Ton, toque em Links de pagamento.</li>
          <li>Toque em Criar Link de Pagamento e digite o valor. O mínimo é R$ 10,00.</li>
          <li>Escreva a descrição da cobrança.</li>
          <li>Escolha a forma de pagamento, Pix ou cartão de crédito, e toque em Criar Link.</li>
          <li>Se quiser, defina por quanto tempo o link fica válido.</li>
        </ol>
        <p>Depois é só copiar e mandar para o cliente. No cartão, ele pode parcelar em até 12 vezes.</p>

        <h2>Quanto custa</h2>
        <p>
          O link tem tabela própria, diferente da maquininha. A taxa depende do número de parcelas e do prazo em que
          você recebe:
        </p>
        <div className="tab-wrap">
          <table className="tab">
            <caption>Link de pagamento no cartão de crédito</caption>
            <thead>
              <tr>
                <th scope="col">Parcelas</th>
                <th scope="col">Recebendo em 30 dias</th>
                <th scope="col">Recebendo em 14 dias</th>
                <th scope="col">Sobra de R$ 100 (30 dias)</th>
              </tr>
            </thead>
            <tbody>
              {PARCELAS.map((n) => (
                <tr key={n}>
                  <th scope="row">{n === 1 ? "À vista" : `${n}x`}</th>
                  <td>{pct(LINK_PAGAMENTO.d30.mv.cre[n])}</td>
                  <td>{pct(LINK_PAGAMENTO.d14.mv.cre[n])}</td>
                  <td>{reais(100 - LINK_PAGAMENTO.d30.mv.cre[n])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="nota">
          Taxas conferidas no site da Ton em {TAXAS_ULTIMA_VERIFICACAO}. As suas taxas aparecem no aplicativo, em
          Menu, Minhas taxas e prazos. Compare com a <a href="/taxas-ton">tabela da maquininha</a>.
        </p>

        <h2>Quando o dinheiro cai</h2>
        <p>
          A Central de Ajuda da Ton informa que o prazo conta a partir do pagamento do cliente e muda com a forma
          escolhida:
        </p>
        <ul>
          <li>Pix: na hora.</li>
          <li>Cartão de crédito: 30 dias corridos.</li>
          <li>Cartão de crédito pré-pago: 2 dias úteis.</li>
          <li>Boleto: 3 dias úteis.</li>
        </ul>
        <p>
          Repare na diferença para a maquininha, em que dá para{" "}
          <a href="/prazo-de-recebimento-ton">receber na hora ou em 1 dia útil</a>. Venda no link, no cartão, demora
          bem mais para virar dinheiro na conta.
        </p>

        <h2>Link ou maquininha?</h2>
        <ul>
          <li>Cliente na sua frente: maquininha. O dinheiro cai muito antes.</li>
          <li>Cliente longe, encomenda ou sinal: link.</li>
          <li>Cliente longe que pode pagar no Pix: link com Pix, que cai na hora.</li>
        </ul>
        <p>
          Outra saída para vender sem máquina é o <a href="/tapton-como-funciona">TapTon</a>, que usa o celular para
          ler cartão por aproximação. Ele serve para quem está junto do cliente; o link, para quem está longe.
        </p>

        <h2>Cuidados</h2>
        <ul>
          <li>Venda à distância tem mais risco de contestação. Guarde a conversa e o comprovante de entrega.</li>
          <li>Parcelado em muitas vezes pesa na taxa. Faça a conta antes de oferecer 12x.</li>
          <li>Mande o link só por canal em que o cliente já fala com você.</li>
        </ul>

        <a className="cc-cta" href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer">
          Ver os modelos no site da Ton
        </a>

        <h2>Fontes</h2>
        <p className="nota">Informações conferidas em {GUIAS_CONFERIDO_EM}. A Ton pode mudar regras, prazos e valores.</p>
        <ul className="fontes">
          <li>Taxas do link de pagamento Ton, Blog do Ton, atualizado em 3 de junho de 2026.</li>
          <li>Quais são os nossos prazos de recebimento?, Central de Ajuda Ton.</li>
          <li>Planos e taxas, site da Ton.</li>
        </ul>
      </article>

      <Modelos />
      <RecomendadorSecao />
      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
