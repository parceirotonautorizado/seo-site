import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"
import { TAXAS_ULTIMA_VERIFICACAO } from "@/lib/taxas"
import Simulador from "@/app/components/Simulador"
import Guias from "@/app/components/Guias"
import Modelos from "@/app/components/Modelos"
import RecomendadorSecao from "@/app/components/RecomendadorSecao"

const PATH = "/simulador-ton"
const TITULO = "Simulador da Ton: quanto você recebe em cada venda"
const DESCRICAO =
  "Simule uma venda na maquininha Ton: escolha o valor, a faixa de vendas, o prazo e as parcelas e veja quanto cai na sua conta e quanto fica de taxa."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

export default function SimuladorTon() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Simulador da Ton", path: PATH },
        ])}
      />

      <article className="txt" style={{ paddingBottom: "8px" }}>
        <h1>Simulador da Ton: quanto sobra de cada venda</h1>

        <p>
          Taxa em porcentagem engana. 1,69% parece pouco, 20% parece muito, e nenhum dos dois diz quanto dinheiro cai
          na sua conta. O simulador abaixo faz essa conta em reais, com as taxas do plano Mega+ conferidas em{" "}
          {TAXAS_ULTIMA_VERIFICACAO}.
        </p>
      </article>

      <section id="simulador">
        <Simulador cidade="Paraná" bairro="Simulador" />
      </section>

      <article className="txt" style={{ paddingTop: "24px" }}>
        <h2>Como usar</h2>
        <ol>
          <li>Digite o valor da venda ou arraste a barra.</li>
          <li>Escolha quanto você vende por mês. É isso que define a sua taxa.</li>
          <li>Escolha se quer receber na hora ou em 1 dia útil.</li>
          <li>Escolha a bandeira do cartão e o número de parcelas.</li>
        </ol>
        <p>O resultado mostra a taxa cobrada e o valor que entra na sua conta.</p>

        <h2>O que mais muda o resultado</h2>
        <p>
          Três coisas, nesta ordem. A primeira é o parcelamento: uma venda em 12 vezes custa várias vezes mais que a
          mesma venda à vista. A segunda é a sua faixa de vendas. Quem vende mais por mês paga menos em cada venda. A
          terceira é o prazo, porque receber na hora custa um pouco mais do que esperar 1 dia útil.
        </p>
        <p>
          A bandeira também pesa. Elo e Amex têm taxa maior que Visa e Mastercard em todas as faixas.
        </p>

        <h2>Faça a conta que importa para o seu preço</h2>
        <p>
          Simule a venda mais comum do seu negócio, não a maior. Se o seu cliente costuma pagar R$ 80 no débito, é esse
          número que diz quanto a maquininha custa para você no mês. Depois simule o pior caso, que quase sempre é o
          parcelado longo. Se a diferença assustar, vale definir um valor mínimo para parcelar ou embutir a taxa no
          preço a prazo.
        </p>

        <h2>Período promocional não é para sempre</h2>
        <p>
          A primeira opção de faixa é o período promocional: 30 dias a partir da chegada da maquininha ou R$ 5.000 em
          vendas, o que vier antes. Simule também a faixa em que você vai cair depois. É ela que vale no resto do ano.
        </p>
        <p>
          A faixa não é fixa. No começo de cada mês, a Ton olha quanto você vendeu no mês anterior e ajusta a taxa,
          para cima ou para baixo. Se as suas vendas variam muito, simule o mês bom e o mês ruim. A{" "}
          <a href="/taxas-ton">tabela completa de taxas</a> explica a regra e mostra todas as faixas lado a lado.
        </p>

        <h2>O que o simulador não cobre</h2>
        <ul>
          <li>
            O limite de parcelas de cada modelo. O simulador mostra de 2x a 21x, mas só a T3 e a T3 Smart passam de 12
            vezes. Na T1 e na T2 o máximo é 12x.
          </li>
          <li>
            Vendas pelo TapTon e por link de pagamento, que têm taxas próprias. Elas estão na{" "}
            <a href="/taxas-ton">tabela de taxas</a>.
          </li>
          <li>
            Pix sem chave cadastrada. O simulador mostra 0%, que é o que vale para quem cadastra uma chave Pix na
            Conta Ton. Sem a chave, são 0,49% depois da promoção.
          </li>
        </ul>

        <p className="nota">
          O simulador usa as taxas publicadas pela Ton na data indicada. Antes de fechar, confirme os valores em
          ton.com.br.
        </p>
      </article>

      <Modelos />
      <RecomendadorSecao />
      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
