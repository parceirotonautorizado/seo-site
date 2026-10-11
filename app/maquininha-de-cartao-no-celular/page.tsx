import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import Guias from "@/app/components/Guias"

const PATH = "/maquininha-de-cartao-no-celular"
const TITULO = "Maquininha de cartão no celular: três jeitos de vender"
const DESCRICAO = "Três formas de aceitar cartão de crédito pelo celular com a Ton: TapTon, maquininha T1 por Bluetooth e link de pagamento. Veja qual serve para você."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

export default function MaquininhaCelular() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Maquininha no celular", path: PATH },
        ])}
      />

      <article className="txt">
        <h1>Maquininha de cartão de crédito no celular: três jeitos de vender</h1>

        <p>
          Quando alguém procura maquininha no celular, pode estar falando de três coisas diferentes. Uma usa só o
          aparelho. Outra usa uma maquininha pequena ligada a ele. A terceira nem precisa do cliente por perto. Cada
          uma resolve um problema.
        </p>
        <p className="nota">
          Este site é de um parceiro Ton e fala só das maquininhas da Ton. A compra é feita em ton.com.br, com o
          desconto de parceiro.
        </p>

        <h2>1. O celular como maquininha (TapTon)</h2>
        <p>
          O cliente encosta o cartão na parte de trás do seu celular e a venda sai. Não tem aparelho para comprar nem
          mensalidade. Na Ton essa função se chama TapTon e fica dentro do aplicativo.
        </p>
        <p>
          O limite é claro: só funciona com pagamento por aproximação. Cartão que precisa ser inserido não passa. E o
          seu celular precisa ter NFC. Detalhes em <a href="/tapton-como-funciona">TapTon: como funciona</a>.
        </p>
        <p><strong>Serve para:</strong> quem está testando, quem vende de vez em quando, e como reserva.</p>

        <h2>2. Maquininha pequena ligada ao celular (T1)</h2>
        <p>
          A <a href="/ton-t1">T1</a> é uma maquininha de verdade, com teclado e leitor de cartão, que se conecta ao
          celular por Bluetooth e usa a internet dele. É a mais barata da Ton.
        </p>
        <p>
          A vantagem sobre o TapTon é ler qualquer cartão, inclusive o de chip sem aproximação. A desvantagem é a
          mesma: sem celular com sinal, não vende.
        </p>
        <p><strong>Serve para:</strong> quem trabalha sozinho, anda sempre com o celular e atende todo tipo de cliente.</p>

        <h2>3. Link de pagamento</h2>
        <p>
          Você gera um link no aplicativo e manda por WhatsApp. O cliente paga com cartão de crédito de onde estiver.
          Não tem maquininha nem aproximação envolvida. O cadastro no aplicativo da Ton é gratuito e já dá acesso a
          essa função.
        </p>
        <p><strong>Serve para:</strong> venda a distância, encomenda, sinal de serviço, cliente de outra cidade.</p>

        <h2>As taxas não são as mesmas</h2>
        <p>
          Este é o detalhe que pega muita gente. Pelo regulamento da Ton, o TapTon e o link de pagamento têm taxas
          próprias, diferentes das da maquininha. A <a href="/taxas-ton">tabela de taxas</a> mostra as três lado a
          lado. A T1 usa a tabela da maquininha. No link de pagamento, repare também no prazo: o dinheiro leva 14 ou
          30 dias para cair. Antes de escolher o TapTon só porque é grátis para
          ativar, veja a taxa por venda.
        </p>

        <h2>E se eu não quiser depender do celular?</h2>
        <p>
          Aí o caminho é uma maquininha com chip próprio. A <a href="/ton-t2">T2</a> é a mais barata desse tipo: tem
          chip 3G e Wi-Fi, cabe no bolso e funciona mesmo se o celular ficou em casa ou sem bateria.
        </p>

        <h2>Qual escolher</h2>
        <ul>
          <li>Vendo pouco e quero começar sem gastar: TapTon.</li>
          <li>Vendo todo dia, sozinho, e meu cliente usa todo tipo de cartão: T1.</li>
          <li>Vendo a distância: link de pagamento.</li>
          <li>Tenho equipe ou sinal ruim de celular: T2.</li>
        </ul>

        <a className="cc-cta" href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer">
          Ver as opções no site da Ton
        </a>

        <h2>Fontes</h2>
        <p className="nota">Informações da Ton conferidas em {GUIAS_CONFERIDO_EM}. Confirme valores no site da Ton antes de pedir.</p>
        <ul className="fontes">
          <li>TapTon: tudo o que você precisa saber, Blog do Ton.</li>
          <li>Site da Ton, páginas dos modelos e perguntas frequentes.</li>
          <li>Regulamento do Plano Ton Mega+, versão de 21/09/2026.</li>
        </ul>
      </article>

      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
