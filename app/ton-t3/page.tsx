import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd, produtoLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import { MODELOS } from "@/lib/modelos"
import Guias from "@/app/components/Guias"
import Modelos from "@/app/components/Modelos"
import RecomendadorSecao from "@/app/components/RecomendadorSecao"

const PATH = "/ton-t3"
const TITULO = "Ton T3: a maquininha de balcão que imprime comprovante"
const DESCRICAO = "Conheça a Ton T3: bobina para imprimir o comprovante, chip 3G grátis e Wi-Fi, Pix por QR Code. Veja quando ela compensa mais que a T2 e a T3 Smart."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

export default function TonT3() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Ton T3", path: PATH },
        ])}
      />

      <JsonLd data={produtoLd(MODELOS.find((m) => m.id === "t3")!)} />

      <article className="txt">
        <h1>Ton T3: a que imprime o comprovante</h1>

        <p>
          A T3 existe por um motivo bem concreto: tem cliente que só sai tranquilo com o papelzinho na mão. Se o seu
          balcão é assim, é ela. Se não é, provavelmente você está pagando por uma bobina que não vai usar.
        </p>

        <h2>O que a T3 tem</h2>
        <ul>
          <li>Bobina para imprimir o comprovante. Dá para imprimir ou mandar por SMS, você escolhe na hora.</li>
          <li>Chip 3G grátis e Wi-Fi, então não depende do celular.</li>
          <li>Pix por QR Code ou por aproximação, direto na máquina.</li>
          <li>Cartão por aproximação.</li>
          <li>Teclado físico, que muita gente acha mais rápido que tela de toque.</li>
          <li>Parcelamento em até 21 vezes para novos clientes. Na T1 e na T2 o limite é 12.</li>
        </ul>

        <h2>Onde a T3 faz sentido</h2>
        <p>
          No balcão. Loja de roupa, farmácia, material de construção, oficina, casa agropecuária, mercearia. Lugares em
          que a maquininha fica parada perto do caixa e o cliente, muitas vezes mais velho, pede a via impressa. Para
          quem precisa guardar comprovante para conferir o caixa no fim do dia, o papel também ajuda.
        </p>
        <p>
          Ela aceita vale-refeição e vale-alimentação, com as mesmas condições da T2 e da T3 Smart: CNPJ do ramo de
          alimentação e credenciamento com cada bandeira. Os detalhes estão em{" "}
          <a href="/ton-aceita-vale-alimentacao">a Ton aceita vale-alimentação?</a>
        </p>

        <h2>T3 ou T3 Smart?</h2>
        <p>
          As duas imprimem. A <a href="/ton-t3-smart">T3 Smart</a> troca o teclado por uma tela grande de toque com
          Android, tem chip 4G e, segundo a Ton, bateria de longa duração. A T3 é mais simples e mais barata.
        </p>
        <p>
          Minha leitura: para balcão de movimento normal, a T3 basta. A T3 Smart começa a valer quando tem fila e cada
          segundo no caixa conta, ou quando você roda a maquininha o dia inteiro longe da tomada.
        </p>

        <h2>T3 ou T2?</h2>
        <p>
          Se ninguém pede comprovante impresso, a <a href="/ton-t2">T2</a> entrega o resto por menos e cabe no bolso.
          A T3 é maior e foi feita para ficar no balcão, não para andar na rua.
        </p>

        <h2>Um detalhe que quase ninguém lembra</h2>
        <p>
          Bobina acaba, e sempre na pior hora. A Ton anuncia a bobina como grátis. Vale ver no aplicativo como pedir a
          reposição e deixar um rolo de reserva no caixa, porque sem papel a T3 volta a ser uma maquininha de SMS.
        </p>

        <h2>E as taxas?</h2>
        <p>
          São as mesmas dos outros modelos e dependem da sua faixa de vendas. Veja a{" "}
          <a href="/taxas-ton">tabela de taxas</a>.
        </p>

        <a className="cc-cta" href={CONFIG.tonModelos.t3} target="_blank" rel="noopener noreferrer">
          Ver a T3 no site da Ton
        </a>
        <h2>Fontes</h2>
        <p className="nota">Informações conferidas no site e no blog da Ton em {GUIAS_CONFERIDO_EM}. Preço e condições mudam; confira no site da Ton antes de pedir.</p>
        <ul className="fontes">
          <li>
            Maquininha T3, site da Ton.
          </li>
          <li>
            Maquininha Ton: conheça todos os modelos, Blog do Ton.
          </li>
          <li>
            Bandeiras aceitas na maquininha do Ton, Blog do Ton.
          </li>
        </ul>
      </article>

      <Modelos />
      <RecomendadorSecao />
      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
