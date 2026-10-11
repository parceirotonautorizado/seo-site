import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd, artigoLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import Guias from "@/app/components/Guias"
import { MODELOS, MODELOS_CONFERIDO_EM } from "@/lib/modelos"
import { PLANS, PIX_SEM_CHAVE, TAXAS_ULTIMA_VERIFICACAO } from "@/lib/taxas"

const PATH = "/maquininha-ton-tem-mensalidade"
const TITULO = "Maquininha Ton tem mensalidade? O que você paga de verdade"
const DESCRICAO = "A maquininha Ton não tem mensalidade nem aluguel. Você paga a adesão uma vez e a taxa de cada venda. Veja o que é comodato e quais são os custos."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, type: "article", title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

const pct = (v: number) => `${v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`

export default function TonMensalidade() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Maquininha Ton tem mensalidade?", path: PATH },
        ])}
      />
      <JsonLd data={artigoLd({ titulo: TITULO, descricao: DESCRICAO, path: PATH, publicado: "10/10/2026", modificado: GUIAS_CONFERIDO_EM })} />

      <article className="txt">
        <h1>Maquininha Ton tem mensalidade?</h1>

        <p>
          Não tem. Nem mensalidade, nem aluguel, nem anuidade. Segundo a Ton, os únicos custos do uso são as taxas
          cobradas em cada venda. O que existe na entrada é uma taxa de adesão, paga uma vez.
        </p>

        <h2>O que você paga, e quando</h2>
        <div className="tab-wrap">
          <table className="tab">
            <thead>
              <tr>
                <th scope="col">Custo</th>
                <th scope="col">Quando</th>
                <th scope="col">Quanto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Adesão</th>
                <td>Uma vez, no pedido</td>
                <td>
                  De {MODELOS[MODELOS.length - 1].preco} a {MODELOS[0].preco}, conforme o modelo
                </td>
              </tr>
              <tr>
                <th scope="row">Taxa por venda</th>
                <td>Só quando você vende</td>
                <td>
                  Débito a partir de {pct(PLANS.promo.d1.mv.deb)} na promoção e {pct(PLANS.ate3.d1.mv.deb)} depois,
                  para quem vende até R$ 3 mil
                </td>
              </tr>
              <tr>
                <th scope="row">Pix na maquininha</th>
                <td>Só quando você vende</td>
                <td>0% com chave Pix cadastrada na Conta Ton; {pct(PIX_SEM_CHAVE)} sem a chave, depois da promoção</td>
              </tr>
              <tr>
                <th scope="row">Mensalidade ou aluguel</th>
                <td>Nunca</td>
                <td>R$ 0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="nota">
          Adesão conferida em {MODELOS_CONFERIDO_EM} e taxas em {TAXAS_ULTIMA_VERIFICACAO}, no site da Ton. As taxas
          de todas as faixas estão na <a href="/taxas-ton">tabela completa</a>.
        </p>

        <h2>Então a maquininha é minha?</h2>
        <p>
          Não exatamente, e vale saber disso. A Ton trabalha com comodato: você paga a adesão e usa a máquina pelo
          tempo que quiser, sem cobrança mensal, mas ela continua pertencendo à Ton. Em troca, a Ton informa que
          cuida da garantia do equipamento enquanto durar a parceria.
        </p>
        <p>
          Na prática, para quem vende, muda pouco. Você não paga para manter e, se a máquina der defeito, quem
          resolve é a Ton.
        </p>

        <h2>Tem que devolver?</h2>
        <p>
          Enquanto você usa, não. O que acontece com a máquina se você encerrar a conta está nas regras do plano, e a
          Ton pode mudá-las. Se essa dúvida pesa na sua decisão, pergunte ao{" "}
          <a href="/ton-whatsapp-telefone">atendimento da Ton</a> antes de pedir.
        </p>

        <h2>E se eu ficar um mês sem vender?</h2>
        <p>
          Não paga nada. Como não existe mensalidade, mês parado não gera cobrança. É por isso que a Ton costuma
          servir para quem tem venda irregular: negócio de temporada, bico de fim de semana, quem está começando.
        </p>

        <h2>Tem juros?</h2>
        <p>
          A Ton não cobra juros de você. O que existe é a taxa de cada venda, que cresce com o número de parcelas.
          Uma venda em 12 vezes custa bem mais que uma à vista. Você decide se absorve essa taxa ou repassa ao
          cliente no preço. O <a href="/simulador-ton">simulador</a> mostra a conta em reais.
        </p>

        <h2>O chip tem custo?</h2>
        <p>
          A T2, a T3 e a T3 Smart vêm com chip de dados, e a Ton informa que ele é gratuito. Você não precisa pôr
          crédito. A T1 não tem chip: usa a internet do seu celular.
        </p>

        <h2>Como pagar a adesão</h2>
        <p>
          Pix, boleto ou cartão, em até 12 vezes. Pelos botões deste site, a adesão já sai com o{" "}
          <a href="/cupom-desconto-maquininha-ton">cupom de parceiro</a> nos modelos em que ele vale.
        </p>

        <a className="cc-cta" href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer">
          Ver os modelos e a adesão no site da Ton
        </a>

        <h2>Fontes</h2>
        <p className="nota">Informações conferidas em {GUIAS_CONFERIDO_EM}. A Ton pode mudar regras, prazos e valores.</p>
        <ul className="fontes">
          <li>Maquininha sem mensalidade: como escolher a melhor opção, Blog do Ton, atualizado em 23 de junho de 2026.</li>
          <li>Catálogo e planos e taxas, site da Ton.</li>
          <li>Regulamento do Plano Ton Mega+, versão de 21/09/2026.</li>
        </ul>
      </article>

      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
