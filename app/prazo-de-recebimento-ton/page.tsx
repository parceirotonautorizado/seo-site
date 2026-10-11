import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd, artigoLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import Guias from "@/app/components/Guias"
import { PLANS, VM, TAXAS_ULTIMA_VERIFICACAO } from "@/lib/taxas"

const PATH = "/prazo-de-recebimento-ton"
const TITULO = "Prazo de recebimento da Ton: em quanto tempo o dinheiro cai"
const DESCRICAO = "Na Ton você recebe na hora ou em 1 dia útil. Veja os horários de corte, o que acontece no fim de semana e quanto cada prazo custa na taxa."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, type: "article", title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

const pct = (v: number) => `${v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`

export default function PrazoRecebimentoTon() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Prazo de recebimento da Ton", path: PATH },
        ])}
      />
      <JsonLd data={artigoLd({ titulo: TITULO, descricao: DESCRICAO, path: PATH, publicado: "10/10/2026", modificado: GUIAS_CONFERIDO_EM })} />

      <article className="txt">
        <h1>Prazo de recebimento da Ton</h1>

        <p>
          Depende do prazo que você escolher. No plano Mega+ são dois: na hora ou em 1 dia útil. A taxa muda de um
          para o outro, e o tamanho dessa diferença depende de quanto você vende por mês.
        </p>

        <h2>Receba na hora</h2>
        <p>
          Segundo a Central de Ajuda da Ton, o dinheiro cai na conta em até 1 hora, todos os dias, incluindo sábado,
          domingo e feriado. Tem um detalhe de horário:
        </p>
        <ul>
          <li>Venda feita entre 22h e 23h pode ser creditada depois da meia-noite.</li>
          <li>Venda feita a partir das 23h é paga no dia seguinte.</li>
        </ul>

        <h2>Em 1 dia útil</h2>
        <p>
          O pagamento sai no próximo dia útil. Venda de sábado, domingo ou feriado é paga no dia útil seguinte. Quem
          vende na sexta à noite recebe na segunda.
        </p>

        <h2>Quanto cada prazo custa</h2>
        <p>A taxa muda com o prazo. Veja o crédito à vista em Visa e Mastercard:</p>
        <div className="tab-wrap">
          <table className="tab">
            <caption>Crédito à vista, Visa e Mastercard</caption>
            <thead>
              <tr>
                <th scope="col">Vendas por mês</th>
                <th scope="col">Em 1 dia útil</th>
                <th scope="col">Na hora</th>
                <th scope="col">Diferença em uma venda de R$ 100</th>
              </tr>
            </thead>
            <tbody>
              {VM.map((f) => {
                const p = PLANS[f.id]
                const dif = p.d0.mv.cre[1] - p.d1.mv.cre[1]
                return (
                  <tr key={f.id}>
                    <th scope="row">{f.label}</th>
                    <td>{pct(p.d1.mv.cre[1])}</td>
                    <td>{pct(p.d0.mv.cre[1])}</td>
                    <td>{dif.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className="nota">
          Taxas do plano Mega+ conferidas no site da Ton em {TAXAS_ULTIMA_VERIFICACAO}. Débito, parcelado e Elo e
          Amex estão na <a href="/taxas-ton">tabela completa</a>.
        </p>

        <h2>Qual prazo escolher</h2>
        <p>
          Olhe a linha da sua faixa na tabela. A diferença muda muito de uma faixa para outra: em algumas é de
          centavos a cada R$ 100, em outras pesa bem mais. Se na sua faixa a diferença é pequena, receber na hora
          quase não custa. Se é grande, vale pensar:
        </p>
        <ul>
          <li>
            <strong>Na hora</strong> faz sentido para quem compra mercadoria com o dinheiro do dia: feira, lanche,
            revenda.
          </li>
          <li>
            <strong>1 dia útil</strong> faz sentido para quem tem algum caixa e prefere pagar menos taxa. Na maioria
            dos negócios, esperar um dia não muda nada.
          </li>
        </ul>
        <p>
          Na dúvida, faça a conta com o seu volume. No <a href="/simulador-ton">simulador</a> dá para trocar o prazo e
          ver a diferença em reais no mês.
        </p>

        <h2>Existem prazos mais longos?</h2>
        <p>
          A Central de Ajuda da Ton descreve também recebimento em 14 e em 30 dias corridos. Se a data cair em fim de
          semana ou feriado, o saldo sai no próximo dia útil. Esses prazos não aparecem na tabela do plano Mega+ que
          publicamos, então confirme com a Ton se estão disponíveis para o seu cadastro.
        </p>

        <h2>E no TapTon e no link de pagamento?</h2>
        <p>
          No <a href="/tapton-como-funciona">TapTon</a>, os prazos seguem a mesma regra da maquininha. No link de
          pagamento é diferente, e o prazo conta a partir do pagamento do cliente:
        </p>
        <ul>
          <li>Cartão de crédito: 30 dias corridos.</li>
          <li>Cartão de crédito pré-pago: 2 dias úteis.</li>
          <li>Boleto: 3 dias úteis.</li>
          <li>Pix: na hora.</li>
        </ul>

        <h2>O dinheiro não caiu. E agora?</h2>
        <p>
          Confira primeiro o horário da venda e se o dia é útil. Se mesmo assim não bater, o caminho é o{" "}
          <a href="/ton-whatsapp-telefone">atendimento da Ton</a>. A gente não tem acesso à sua conta.
        </p>

        <a className="cc-cta" href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer">
          Ver os modelos no site da Ton
        </a>

        <h2>Fontes</h2>
        <p className="nota">Informações conferidas em {GUIAS_CONFERIDO_EM}. A Ton pode mudar regras, prazos e valores.</p>
        <ul className="fontes">
          <li>Quais são os nossos prazos de recebimento?, Central de Ajuda Ton.</li>
          <li>Planos e taxas, site da Ton.</li>
        </ul>
      </article>

      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
