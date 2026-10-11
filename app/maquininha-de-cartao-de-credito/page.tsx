import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import Guias from "@/app/components/Guias"

const PATH = "/maquininha-de-cartao-de-credito"
const TITULO = "Maquininha de cartão de crédito: como escolher a sua"
const DESCRICAO = "Como escolher uma maquininha de cartão de crédito: o que olhar em taxa, parcelado, prazo e conexão, e qual modelo da Ton serve para cada tipo de negócio."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

export default function MaquininhaCredito() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Maquininha de cartão de crédito", path: PATH },
        ])}
      />

      <article className="txt">
        <h1>Maquininha de cartão de crédito: como escolher a sua</h1>

        <p>
          Toda maquininha passa crédito. O que muda de uma para outra é quanto você paga por isso e o que acontece
          quando o cliente pede para parcelar. Antes de olhar modelo e cor, vale responder quatro perguntas.
        </p>
        <p className="nota">
          Este site é de um parceiro Ton e fala só das maquininhas da Ton. A compra é feita em ton.com.br, com o
          desconto de parceiro.
        </p>

        <h2>1. Seu cliente parcela?</h2>
        <p>
          É a pergunta que mais mexe no bolso. A taxa do crédito à vista é uma, a do parcelado em 12 vezes é várias
          vezes maior. Quem vende roupa, móvel, conserto ou qualquer coisa de valor mais alto vive de parcelado e
          precisa olhar essa linha da tabela, não a taxa do anúncio.
        </p>
        <p>
          Na Ton, a T1 e a T2 parcelam em até 12 vezes. A T3 e a T3 Smart chegam a 21 vezes para novos clientes. A{" "}
          <a href="/taxas-ton">tabela de taxas</a> mostra quanto custa cada parcela.
        </p>

        <h2>2. Em quanto tempo você precisa do dinheiro?</h2>
        <p>
          Dá para receber na hora ou em 1 dia útil. Receber na hora custa um pouco mais em cada venda. Se você compra
          mercadoria todo dia, talvez valha. Se o caixa aguenta esperar um dia, a taxa menor rende mais no fim do mês.
        </p>

        <h2>3. Onde você vende?</h2>
        <ul>
          <li>
            <strong>No balcão:</strong> a <a href="/ton-t3">T3</a> imprime o comprovante, e a{" "}
            <a href="/ton-t3-smart">T3 Smart</a> faz o mesmo com tela de toque.
          </li>
          <li>
            <strong>Na rua, em entrega ou na casa do cliente:</strong> a <a href="/ton-t2">T2</a> tem chip próprio e
            cabe no bolso.
          </li>
          <li>
            <strong>Sozinho e sempre com o celular:</strong> a <a href="/ton-t1">T1</a> é a mais barata e usa o
            Bluetooth do aparelho.
          </li>
        </ul>

        <h2>4. Quanto você vende por mês?</h2>
        <p>
          Na Ton, a taxa depende da sua faixa de vendas do mês anterior. Quem vende até R$ 3 mil paga mais por venda do
          que quem vende R$ 30 mil. Seja honesto com esse número ao simular. Colocar a faixa que você gostaria de ter,
          e não a que tem, é o jeito mais comum de se decepcionar depois.
        </p>

        <h2>O que não entra na conta e deveria</h2>
        <p>
          Aluguel e mensalidade. Para quem vende pouco, um custo fixo todo mês pesa mais que a taxa. Na Ton não há
          aluguel: você paga uma taxa de adesão única, à vista ou em até 12 vezes, e depois só a taxa de cada venda.
        </p>
        <p>
          Vale-refeição é outro ponto. Se você tem restaurante ou mercado, veja antes se o modelo aceita. Explicamos em{" "}
          <a href="/ton-aceita-vale-alimentacao">a Ton aceita vale-alimentação?</a>
        </p>

        <h2>Faça a conta com a sua venda</h2>
        <p>
          Pegue a venda mais comum do seu negócio e jogue no <a href="/simulador-ton">simulador</a>. Ele mostra em
          reais quanto cai na conta, no débito, no crédito à vista e no parcelado. É mais útil do que qualquer
          porcentagem solta.
        </p>

        <a className="cc-cta" href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer">
          Ver as maquininhas no site da Ton
        </a>

        <h2>Fontes</h2>
        <p className="nota">Informações da Ton conferidas em {GUIAS_CONFERIDO_EM}. Confirme valores no site da Ton antes de pedir.</p>
        <ul className="fontes">
          <li><a href="https://www.ton.com.br" target="_blank" rel="noopener noreferrer">Site da Ton</a>, páginas dos modelos e perguntas frequentes.</li>
          <li>Regulamento do Plano Ton Mega+, versão de 21/09/2026.</li>
        </ul>
      </article>

      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
