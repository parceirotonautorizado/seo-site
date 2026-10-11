import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import { PLANS, TAXAS_ULTIMA_VERIFICACAO } from "@/lib/taxas"
import Guias from "@/app/components/Guias"

const PATH = "/maquininha-de-cartao-com-menor-taxa"
const TITULO = "Maquininha de cartão com menor taxa: como pagar menos"
const DESCRICAO = "A taxa da maquininha Ton muda com a faixa de vendas, o prazo, a bandeira e as parcelas. Veja cinco jeitos de pagar a menor taxa possível em cada venda."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

export default function MaquininhaMenorTaxa() {
  const pct = (v: number) => `${v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`
  const promo = PLANS.promo.d1.mv
  const menor = PLANS.ate3.d1.mv
  const maior = PLANS.t30p.d1.mv

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Maquininha com menor taxa", path: PATH },
        ])}
      />

      <article className="txt">
        <h1>Maquininha de cartão de crédito com menor taxa: como pagar menos em cada venda</h1>

        <p>
          A taxa que aparece no anúncio é o melhor caso. A que você paga de verdade depende de cinco escolhas, e
          quase todas estão na sua mão. Com os números da Ton, dá para ver quanto cada uma pesa.
        </p>

        <p className="nota">
          Este site é de um parceiro Ton e fala só das maquininhas da Ton. A compra é feita em ton.com.br, com o
          desconto de parceiro.
        </p>

        <h2>1. Aproveite o período promocional</h2>
        <p>
          Nos primeiros 30 dias, ou até R$ 5.000 em vendas, a taxa é de {pct(promo.deb)} no débito e no crédito à
          vista, com Pix a 0%. O relógio começa quando a maquininha chega. Se puder, peça quando o movimento estiver
          bom, para usar o período inteiro vendendo.
        </p>

        <h2>2. Cadastre uma chave Pix no primeiro dia</h2>
        <p>
          Depois da promoção, o Pix na maquininha continua grátis só para quem tem uma chave Pix cadastrada na Conta
          Ton. Pode ser CPF, CNPJ ou telefone. Sem a chave, cada Pix custa 0,49%. É um minuto de cadastro para nunca
          pagar essa taxa.
        </p>

        <h2>3. Saiba em que faixa você está</h2>
        <p>
          Quem vende mais paga menos. No débito Visa e Mastercard, recebendo em 1 dia útil, a taxa vai de{" "}
          {pct(menor.deb)} (até R$ 3 mil por mês) a {pct(maior.deb)} (acima de R$ 30 mil). A faixa é recalculada todo
          mês pelo total do mês anterior, e todas as suas vendas contam: cartão, Pix na maquininha, TapTon e link de
          pagamento. Concentrar as vendas na Ton ajuda a subir de faixa.
        </p>

        <h2>4. Escolha o prazo com calma</h2>
        <p>
          Receber na hora custa um pouco mais do que receber em 1 dia útil. Na faixa de até R$ 3 mil, o débito sai por{" "}
          {pct(menor.deb)} em 1 dia útil e por {pct(PLANS.ate3.d0.mv.deb)} na hora. Se o seu caixa aguenta esperar um
          dia, essa diferença fica com você em todas as vendas do mês.
        </p>

        <h2>5. Cuide do parcelado</h2>
        <p>
          É aqui que a conta muda de tamanho. Na mesma faixa, o crédito à vista custa {pct(menor.cre[1])} e o
          parcelado em 12 vezes, {pct(menor.cre[12])}. Três saídas comuns: definir um valor mínimo para parcelar,
          limitar o número de parcelas ou ter um preço à vista e outro a prazo.
        </p>
        <p>
          A bandeira também pesa. Elo e Amex têm taxa maior que Visa e Mastercard em todas as faixas.
        </p>

        <h2>Faça a conta em reais</h2>
        <ol>
          <li>Anote quanto você vende por mês e como se divide: débito, crédito à vista, parcelado, Pix.</li>
          <li>Veja a taxa da sua faixa, fora da promoção.</li>
          <li>Multiplique e some.</li>
          <li>Olhe o total em reais do mês, não as porcentagens.</li>
        </ol>
        <p>
          O <a href="/simulador-ton">simulador</a> faz essa conta por venda, e a{" "}
          <a href="/taxas-ton">tabela de taxas</a> mostra todas as faixas, de 1x a 21x.
        </p>

        <h2>O que não entra na taxa</h2>
        <p>
          Na Ton não há aluguel nem mensalidade. Você paga a adesão da maquininha uma vez, à vista ou em até 12
          vezes, e depois só a taxa de cada venda. Para quem vende pouco, não ter custo fixo costuma pesar mais do
          que alguns décimos na taxa.
        </p>

        <a className="cc-cta" href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer">
          Ver as maquininhas no site da Ton
        </a>

        <h2>Fontes</h2>
        <p className="nota">Informações da Ton conferidas em {GUIAS_CONFERIDO_EM}. Confirme valores em ton.com.br antes de pedir.</p>
        <ul className="fontes">
          <li>
            <a href="https://www.ton.com.br/planos-e-taxas" target="_blank" rel="noopener noreferrer">Planos e taxas</a>,
            site da Ton, conferido em {TAXAS_ULTIMA_VERIFICACAO}.
          </li>
          <li>Regulamento do Plano Ton Mega+, versão de 21/09/2026.</li>
        </ul>
      </article>

      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
