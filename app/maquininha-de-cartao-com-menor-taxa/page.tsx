import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import { PLANS, TAXAS_ULTIMA_VERIFICACAO } from "@/lib/taxas"
import Guias from "@/app/components/Guias"

const PATH = "/maquininha-de-cartao-com-menor-taxa"
const TITULO = "Maquininha de cartão com menor taxa: como comparar"
const DESCRICAO = "Menor taxa depende do que você vende. Veja as cinco coisas que mudam a conta e como comparar maquininhas sem cair na taxa do anúncio."

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
        <h1>Maquininha de cartão de crédito com menor taxa: como comparar de verdade</h1>

        <p>
          Não existe uma maquininha com a menor taxa para todo mundo. Existe a menor taxa para o seu tipo de venda.
          Quem anuncia um número só está mostrando o melhor caso, quase sempre o do período promocional. Para
          comparar direito, olhe cinco coisas.
        </p>
        <p className="nota">
          Este site é de um parceiro autorizado da Ton e fala só das maquininhas dela. Não comparamos preços de outras
          marcas porque não teríamos como garantir que estão atualizados.
        </p>

        <h2>1. A taxa é promocional ou é a de sempre?</h2>
        <p>
          Quase toda maquininha tem taxa de entrada. Na Ton são {pct(promo.deb)} no débito e no crédito à vista, por
          30 dias ou até R$ 5.000 em vendas. Depois disso entra a taxa da sua faixa. Ao comparar duas marcas, compare
          a taxa do sétimo mês, não a da primeira semana.
        </p>

        <h2>2. Qual é a taxa na sua faixa de vendas?</h2>
        <p>
          Na Ton, quem vende mais paga menos. No débito Visa e Mastercard, recebendo em 1 dia útil, a taxa vai de{" "}
          {pct(menor.deb)} (até R$ 3 mil por mês) a {pct(maior.deb)} (acima de R$ 30 mil). A diferença entre as pontas
          é grande. Uma marca pode ganhar na faixa alta e perder na baixa.
        </p>

        <h2>3. Quanto custa o parcelado?</h2>
        <p>
          É aqui que a conta muda de tamanho. Na faixa de até R$ 3 mil, o crédito à vista custa {pct(menor.cre[1])} e
          o parcelado em 12 vezes, {pct(menor.cre[12])}. Se metade das suas vendas é parcelada, a taxa do débito
          quase não importa. Compare a linha das parcelas que o seu cliente mais usa.
        </p>

        <h2>4. Em quanto tempo o dinheiro cai?</h2>
        <p>
          Taxa menor com dinheiro em 30 dias não é a mesma coisa que taxa um pouco maior com dinheiro amanhã. Na Ton
          as duas opções são receber na hora ou em 1 dia útil, e a primeira custa mais. Veja sempre a taxa junto com o
          prazo.
        </p>

        <h2>5. Tem aluguel, mensalidade ou meta?</h2>
        <p>
          Some tudo. R$ 50 de aluguel por mês, para quem vende R$ 2 mil, equivalem a 2,5% a mais em cada venda. Na Ton
          não há aluguel nem mensalidade, só a adesão paga uma vez. O Pix na maquininha é 0% para quem cadastra uma
          chave Pix na conta, e 0,49% para quem não cadastra.
        </p>

        <h2>O jeito prático de comparar</h2>
        <ol>
          <li>Anote quanto você vende por mês e como se divide: débito, crédito à vista, parcelado, Pix.</li>
          <li>Pegue a taxa de cada marca na sua faixa, fora da promoção.</li>
          <li>Multiplique e some. Inclua aluguel, se houver.</li>
          <li>Compare o total em reais do mês, não as porcentagens.</li>
        </ol>
        <p>
          Para a parte da Ton, o <a href="/simulador-ton">simulador</a> faz a conta por venda e a{" "}
          <a href="/taxas-ton">tabela de taxas</a> mostra todas as faixas. As outras marcas você encontra no site de
          cada uma.
        </p>

        <h2>Então a Ton tem a menor taxa?</h2>
        <p>
          Depende do seu caso, e seria desonesto dizer que sim para todo mundo. Ela costuma fazer sentido para quem
          vende pouco ou está começando, porque não tem aluguel e a adesão é barata. Para quem vende muito e parcela
          longo, vale fazer a conta com calma contra outras opções. O que a gente garante é que os números da Ton
          neste site são os publicados por ela, com a data da conferência.
        </p>

        <a className="cc-cta" href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer">
          Ver as maquininhas no site da Ton
        </a>

        <h2>Fontes</h2>
        <p className="nota">Informações da Ton conferidas em {GUIAS_CONFERIDO_EM}. Confirme valores no site oficial antes de pedir.</p>
        <ul className="fontes">
          <li>Tabela de taxas do plano Mega+ em <a href="https://www.ton.com.br" target="_blank" rel="noopener noreferrer">ton.com.br</a>, conferida em {TAXAS_ULTIMA_VERIFICACAO}.</li>
          <li>Regulamento do Plano Ton Mega+, versão de 21/09/2026.</li>
        </ul>
      </article>

      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
