import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import Guias from "@/app/components/Guias"

const PATH = "/tapton-como-funciona"
const TITULO = "TapTon: como funciona a maquininha no celular"
const DESCRICAO = "Entenda o TapTon, a função do aplicativo da Ton que transforma o celular em maquininha: requisitos, passo a passo, o que aceita e as limitações."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

export default function TapTon() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "TapTon: como funciona", path: PATH },
        ])}
      />

      <article className="txt">
        <h1>TapTon: como funciona a maquininha no celular</h1>

        <p>
          O TapTon é uma função do aplicativo da Ton que faz o celular aceitar cartão por aproximação. Não tem
          aparelho para comprar nem mensalidade. Parece bom demais, e para alguns casos é mesmo. Para outros, não
          substitui a maquininha. Vale entender onde está a linha.
        </p>

        <h2>Como é uma venda pelo TapTon</h2>
        <ol>
          <li>Você abre o aplicativo da Ton e entra em Vender ou TapTon.</li>
          <li>Digita o valor e escolhe a forma de pagamento.</li>
          <li>O cliente encosta o cartão, o celular ou o relógio na parte de trás do seu aparelho.</li>
          <li>Se a venda pedir senha, aparece um teclado na tela para o cliente digitar.</li>
          <li>Pronto. Dá para mandar o comprovante para o cliente.</li>
        </ol>

        <h2>O que o seu celular precisa ter</h2>
        <p>
          NFC, que é a antena de pagamento por aproximação, e internet na hora da venda. Sem NFC, não funciona de
          jeito nenhum. Para conferir no Android, procure por NFC nas configurações de conexão.
        </p>
        <p>
          Sobre a versão do sistema, as páginas da Ton não dizem todas a mesma coisa. O blog fala em Android 10 ou
          superior e a Central de Ajuda, em Android 9. Para iPhone, a exigência também varia de uma página para outra.
          O jeito seguro é instalar o aplicativo e ver se a opção aparece para você.
        </p>

        <h2>O que ele aceita</h2>
        <ul>
          <li>Cartão de débito e de crédito por aproximação.</li>
          <li>Carteiras digitais, como Google Pay, Samsung Pay e Apple Pay.</li>
          <li>Relógios e outros aparelhos com pagamento por aproximação.</li>
          <li>Bandeiras Visa, Mastercard, Elo e Amex.</li>
          <li>Crédito parcelado em até 12 vezes.</li>
        </ul>

        <h2>O que ele não faz</h2>
        <p>
          Não lê cartão de chip, aquele que o cliente insere na máquina. Se o cartão do cliente não tem aproximação, ou
          se a aproximação está desativada, a venda não sai. Em bairro onde muita gente ainda usa cartão antigo, isso
          pesa. Ele também não imprime comprovante e não aceita vale-refeição.
        </p>

        <h2>Quanto custa</h2>
        <p>
          Nada para ativar e nada por mês. Você paga a taxa de cada venda, como em uma maquininha. Pode usar com CPF,
          com CNPJ ou como MEI. As taxas do TapTon são próprias, diferentes das da maquininha, e não mudam com a faixa
          de vendas. Estão na <a href="/taxas-ton">tabela de taxas</a>, junto com as da maquininha. As vendas pelo
          TapTon contam para a sua faixa de vendas do mês.
        </p>

        <h2>TapTon ou maquininha?</h2>
        <p>
          Eu vejo o TapTon como um bom começo e um ótimo reserva. Para quem está testando se vale vender no cartão, é
          o jeito de começar sem gastar. Para quem já tem maquininha, salva o dia em que ela ficou sem bateria ou em
          casa.
        </p>
        <p>
          Como ferramenta principal, tem dois limites. Um é o cartão de chip, que ele não lê. O outro é prático: o
          cliente encostar o cartão no seu celular pessoal, com a tela aberta, nem sempre passa a mesma confiança que
          uma maquininha. Se você vende todo dia, a <a href="/ton-t1">T1</a> ou a <a href="/ton-t2">T2</a> custam
          pouco e resolvem os dois pontos.
        </p>

        <h2>É seguro?</h2>
        <p>
          Segundo a Ton, as vendas pelo TapTon seguem as mesmas regras de segurança de pagamento da Stone, e os dados
          do cartão trafegam criptografados. O cuidado que cabe a você é o de sempre: manter o celular com senha e o
          aplicativo atualizado.
        </p>

        <a className="cc-cta" href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer">
          Conhecer a Ton no site da Ton
        </a>
        <h2>Fontes</h2>
        <p className="nota">Informações conferidas no site, no blog e na Central de Ajuda da Ton em {GUIAS_CONFERIDO_EM}. Os requisitos de aparelho mudam com frequência.</p>
        <ul className="fontes">
          <li>
            <a href="https://www.ton.com.br/tapton" target="_blank" rel="noopener noreferrer">
              Maquininha no celular: TapTon
            </a>
            , site da Ton.
          </li>
          <li>
            <a href="https://blog.ton.com.br/o-que-e-tapton/" target="_blank" rel="noopener noreferrer">
              TapTon: tudo o que você precisa saber
            </a>
            , Blog do Ton.
          </li>
          <li>
            <a href="https://ajuda.ton.com.br/pt_BR/tapton/o-que-e-e-como-usar" target="_blank" rel="noopener noreferrer">
              TapTon: o que é e como usar
            </a>
            , Central de Ajuda Ton.
          </li>
        </ul>
      </article>

      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
