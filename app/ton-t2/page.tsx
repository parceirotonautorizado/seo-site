import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd, produtoLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import { MODELOS } from "@/lib/modelos"
import Guias from "@/app/components/Guias"
import Modelos from "@/app/components/Modelos"
import RecomendadorSecao from "@/app/components/RecomendadorSecao"

const PATH = "/ton-t2"
const TITULO = "Ton T2: maquininha com chip próprio que cabe no bolso"
const DESCRICAO = "Conheça a Ton T2: chip 3G grátis e Wi-Fi, Pix por QR Code, comprovante por SMS. Veja para quem ela compensa mais que a T1 e a T3."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

export default function TonT2() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Ton T2", path: PATH },
        ])}
      />

      <JsonLd data={produtoLd(MODELOS.find((m) => m.id === "t2")!)} />

      <article className="txt">
        <h1>Ton T2: chip próprio, tamanho de bolso</h1>

        <p>
          A T2 é a maquininha do meio, e para muita gente é a conta certa. Ela resolve o maior defeito da T1, que é
          depender do celular, sem chegar ao preço e ao tamanho da T3.
        </p>

        <h2>O que a T2 tem</h2>
        <ul>
          <li>Chip 3G grátis, sem custo mensal, e conexão Wi-Fi.</li>
          <li>Funciona sozinha, sem celular por perto.</li>
          <li>Pix por QR Code ou por aproximação, direto na máquina.</li>
          <li>Cartão por aproximação.</li>
          <li>Comprovante por SMS. Ela não imprime.</li>
          <li>Leve e compacta, cabe no bolso.</li>
          <li>Parcelamento em até 12 vezes.</li>
        </ul>

        <h2>Para quem a T2 costuma ser a melhor escolha</h2>
        <p>
          Para quem vende longe do balcão. Entregador, motorista, técnico que atende em casa, feirante, ambulante,
          vendedor externo. Como ela tem chip, qualquer pessoa da equipe pode sair com a maquininha sem levar o
          celular do dono junto.
        </p>
        <p>
          Também é a porta de entrada para quem quer aceitar vale. A T2 é o modelo mais barato que aceita
          vale-refeição e vale-alimentação, desde que você tenha CNPJ do ramo de alimentação e faça o credenciamento
          com a bandeira. Uma lanchonete pequena não precisa ir direto para a T3 Smart por causa disso.
        </p>

        <h2>T2 ou T1?</h2>
        <p>
          A <a href="/ton-t1">T1</a> custa menos e depende do Bluetooth do seu celular. A T2 anda sozinha. Se você
          vende todo dia, se o celular vive sem bateria ou se outra pessoa também vende, a diferença de preço se paga
          rápido. Para um bico de fim de semana, a T1 dá conta.
        </p>

        <h2>T2 ou T3?</h2>
        <p>
          A pergunta é uma só: o seu cliente pede comprovante impresso? Se pede, é a <a href="/ton-t3">T3</a>, que
          tem bobina. Se o SMS resolve, a T2 faz o mesmo trabalho, ocupa menos espaço e custa menos.
        </p>

        <h2>Um cuidado com o chip</h2>
        <p>
          O chip da T2 é 3G. Na maior parte das cidades isso não muda nada, porque passar um cartão usa pouquíssimo
          dado. Em lugar onde o sinal de celular é fraco, deixe a maquininha conectada ao Wi-Fi do ponto de venda. Ela
          aceita os dois.
        </p>

        <h2>E as taxas?</h2>
        <p>
          Não mudam por causa do modelo. Dependem da sua faixa de vendas e do prazo em que você quer receber. Veja a{" "}
          <a href="/taxas-ton">tabela de taxas</a>.
        </p>

        <a className="cc-cta" href={CONFIG.tonModelos.t2} target="_blank" rel="noopener noreferrer">
          Ver a T2 no site da Ton
        </a>
        <h2>Fontes</h2>
        <p className="nota">Informações conferidas no site e no blog da Ton em {GUIAS_CONFERIDO_EM}. Preço e condições mudam; confira no site da Ton antes de pedir.</p>
        <ul className="fontes">
          <li>
            Maquininha T2, site da Ton.
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
