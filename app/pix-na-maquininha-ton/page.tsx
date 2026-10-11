import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd, artigoLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import Guias from "@/app/components/Guias"
import FotoUso from "@/app/components/FotoUso"
import Modelos from "@/app/components/Modelos"
import RecomendadorSecao from "@/app/components/RecomendadorSecao"
import { PIX_SEM_CHAVE, REGULAMENTO_DATA } from "@/lib/taxas"

const PATH = "/pix-na-maquininha-ton"
const TITULO = "Pix na maquininha Ton: tem taxa? Como funciona e como ativar"
const DESCRICAO = "O Pix na maquininha Ton sai sem taxa para quem cadastra chave de celular, CPF ou CNPJ na Conta Ton. Veja os modelos, como ativar e como vender."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, type: "article", title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

const pct = (v: number) => `${v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`
const reais = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

export default function PixMaquininhaTon() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Pix na maquininha Ton", path: PATH },
        ])}
      />
      <JsonLd data={artigoLd({ titulo: TITULO, descricao: DESCRICAO, path: PATH, publicado: "10/10/2026", modificado: GUIAS_CONFERIDO_EM })} />

      <article className="txt">
        <h1>Pix na maquininha Ton</h1>

        <p>
          O cliente aponta o celular para o QR Code na tela da maquininha, paga, e o dinheiro cai na sua Conta Ton.
          E pode sair de graça, desde que você faça um cadastro que leva um minuto.
        </p>

        <h2>Tem taxa?</h2>
        <div className="tab-wrap">
          <table className="tab tab-livre">
            <thead>
              <tr>
                <th scope="col">Situação</th>
                <th scope="col">Taxa do Pix na maquininha</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Período promocional</th>
                <td data-rotulo="Taxa">0%</td>
              </tr>
              <tr>
                <th scope="row">Depois, com chave de celular, CPF ou CNPJ cadastrada na Conta Ton</th>
                <td data-rotulo="Taxa">0%</td>
              </tr>
              <tr>
                <th scope="row">Depois, sem uma dessas chaves</th>
                <td data-rotulo="Taxa">{pct(PIX_SEM_CHAVE)} por venda</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="nota">
          Regra do regulamento do Plano Ton Mega+, versão de {REGULAMENTO_DATA}, e da página de Pix da Ton.
        </p>
        <p>
          Em uma venda de R$ 100 sem a chave, ficam {reais(PIX_SEM_CHAVE)} na taxa. Parece pouco, mas é dinheiro
          jogado fora, porque cadastrar a chave não custa nada.
        </p>

        <h2>Qual chave zera a taxa</h2>
        <p>
          A Ton cita três: celular, CPF ou CNPJ. A chave aleatória serve para ativar o Pix na máquina, mas, pelo que
          a Ton descreve, quem fica só com ela paga os {pct(PIX_SEM_CHAVE)}.
        </p>

        <h2>Em quais modelos funciona</h2>
        <p>
          A página de Pix da Ton cita a <a href="/ton-t2">T2</a>, a <a href="/ton-t3">T3</a> e a{" "}
          <a href="/ton-t3-smart">T3 Smart</a>. Se cobrar por Pix direto na máquina é importante para você, escolha
          entre essas três. Quem tem a <a href="/ton-t1">T1</a> pode receber Pix pela Conta Ton, no aplicativo.
        </p>

        <h2>Como ativar</h2>
        <ol>
          <li>No aplicativo Ton, abra Pix.</li>
          <li>Toque em Minhas chaves e em Cadastrar chave.</li>
          <li>Escolha o tipo: celular, CPF, CNPJ ou aleatória.</li>
          <li>Reinicie a maquininha para ela reconhecer o Pix.</li>
        </ol>

        <FotoUso
          arquivo="maquininha-ton-t3-pix-feira"
          alt="Feirante mostra o QR Code do Pix na maquininha Ton T3 e o cliente lê com a câmera do celular"
          legenda="O cliente aponta a câmera do banco para o QR Code na tela da maquininha."
        />

        <h2>Como vender</h2>
        <ol>
          <li>Digite o valor da venda na maquininha.</li>
          <li>Toque em Pagar.</li>
          <li>Escolha Pix.</li>
          <li>O cliente lê o QR Code ou paga por aproximação.</li>
        </ol>
        <p>Segundo a Ton, depois de aprovado o valor cai em até 1 minuto.</p>

        <h2>Pix na maquininha ou Pix na chave?</h2>
        <p>
          Você pode simplesmente passar a sua chave e esperar o cliente mandar. Funciona, mas tem três problemas no
          balcão: o cliente digita valor errado, você precisa conferir se caiu, e comprovante falso existe. Com o QR
          Code da maquininha o valor já vai certo e a própria máquina confirma o pagamento.
        </p>

        <h2>Vale mais a pena que cartão?</h2>
        <p>
          Para você, quase sempre. Com a chave cadastrada, o Pix não tem taxa, e o débito e o crédito têm. Por isso
          muita loja dá um desconto pequeno no Pix. Veja na <a href="/taxas-ton">tabela de taxas</a> quanto o cartão
          custa na sua faixa e decida o tamanho do desconto.
        </p>

        <a className="cc-cta" href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer">
          Ver a T2, a T3 e a T3 Smart no site da Ton
        </a>

        <h2>Fontes</h2>
        <p className="nota">Informações conferidas em {GUIAS_CONFERIDO_EM}. A Ton pode mudar regras, prazos e valores.</p>
        <ul className="fontes">
          <li>Pix na Maquininha Ton, site da Ton.</li>
          <li>Regulamento do Plano Ton Mega+, versão de 21/09/2026.</li>
        </ul>
      </article>

      <Modelos />
      <RecomendadorSecao />
      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
