import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd, artigoLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import Guias from "@/app/components/Guias"
import Modelos from "@/app/components/Modelos"
import RecomendadorSecao from "@/app/components/RecomendadorSecao"
import { MODELOS } from "@/lib/modelos"

const PATH = "/como-pedir-maquininha-ton"
const TITULO = "Como pedir a maquininha Ton: do pedido à primeira venda"
const DESCRICAO = "Passo a passo para pedir a maquininha Ton: escolha do modelo, pagamento da adesão, prazo de entrega de 3 a 7 dias úteis e ativação pelo aplicativo."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, type: "article", title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

export default function ComoPedirTon() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Como pedir a maquininha Ton", path: PATH },
        ])}
      />
      <JsonLd data={artigoLd({ titulo: TITULO, descricao: DESCRICAO, path: PATH, publicado: "10/10/2026", modificado: GUIAS_CONFERIDO_EM })} />

      <article className="txt">
        <h1>Como pedir a maquininha Ton</h1>

        <p>
          O pedido é feito no site da Ton e leva poucos minutos. A máquina chega pelo correio e você mesmo ativa,
          pelo aplicativo. Não tem visita de técnico nem contrato em papel. Este é o caminho inteiro, na ordem.
        </p>

        <h2>1. Escolha o modelo</h2>
        <p>É a única decisão que dá para errar. Em uma linha cada:</p>
        <ul>
          {MODELOS.map((m) => (
            <li key={m.id}>
              <a href={m.pagina}>Ton {m.nome}</a>, {m.preco}: {m.para.charAt(0).toLowerCase() + m.para.slice(1)}
            </li>
          ))}
        </ul>
        <p>
          Se ficou em dúvida, o <a href="/#qual-maquininha" data-secao="qual-maquininha">teste de três perguntas</a> indica um modelo pelo seu
          jeito de vender.
        </p>

        <h2>2. Faça o pedido</h2>
        <p>
          Toque no botão do modelo. Ele abre o carrinho no site da Ton, já com o{" "}
          <a href="/cupom-desconto-maquininha-ton">cupom de parceiro</a>. Lá você preenche seus dados e o endereço de
          entrega. Dá para pedir com CPF ou com CNPJ; a diferença está em{" "}
          <a href="/ton-cpf-cnpj-mei">Ton para CPF, CNPJ e MEI</a>.
        </p>

        <h2>3. Pague a adesão</h2>
        <p>
          Pix, boleto ou cartão em até 12 vezes. É uma taxa única: a Ton{" "}
          <a href="/maquininha-ton-tem-mensalidade">não cobra mensalidade nem aluguel</a>. O pagamento é feito no
          site da Ton, nunca para pessoa física e nunca por aqui.
        </p>

        <h2>4. Espere a entrega</h2>
        <p>
          A Central de Ajuda da Ton informa de 3 a 7 dias úteis para os quatro modelos, e o prazo depende da
          confirmação do pagamento. Pix confirma na hora; boleto demora mais. O frete é grátis para todo o Brasil,
          segundo o catálogo.
        </p>
        <p>
          Para o Paraná, conte com o prazo cheio se você está longe de Curitiba ou das cidades maiores. O
          acompanhamento do pedido é feito pelo aplicativo da Ton ou pela página de rastreio da Ton.
        </p>

        <h2>5. Faça o primeiro acesso no aplicativo</h2>
        <ol>
          <li>Baixe o aplicativo Ton e toque em Entrar.</li>
          <li>Toque em Meu primeiro acesso aqui.</li>
          <li>Digite o e-mail que você usou no pedido.</li>
          <li>Digite o código que chega por SMS e por e-mail.</li>
          <li>Crie uma senha de 8 caracteres, com letra e número.</li>
        </ol>

        <h2>6. Ative a maquininha</h2>
        <ol>
          <li>No aplicativo, abra o Menu.</li>
          <li>Toque em Ativar maquininha.</li>
          <li>Escolha o seu modelo.</li>
          <li>Na T2 e na T3, o aplicativo mostra um código. Digite na maquininha e aperte o botão verde.</li>
        </ol>
        <p>
          A T1 funciona pareada com o celular, então mantenha o Bluetooth ligado. O passo a passo de cada modelo
          está na Central de Ajuda da Ton.
        </p>

        <h2>7. Antes da primeira venda</h2>
        <ul>
          <li>
            Cadastre uma chave Pix na Conta Ton. É ela que mantém o Pix na maquininha sem taxa depois do período
            promocional.
          </li>
          <li>
            Escolha o <a href="/prazo-de-recebimento-ton">prazo de recebimento</a>: na hora ou em 1 dia útil.
          </li>
          <li>Faça uma venda de valor baixo para você mesmo e veja o dinheiro cair.</li>
        </ul>

        <h2>Deu problema no meio do caminho?</h2>
        <p>
          Pedido que não chega, aplicativo que não aceita o código, máquina que não liga: tudo isso é com o{" "}
          <a href="/ton-whatsapp-telefone">atendimento da Ton</a>. A gente ajuda a escolher antes da compra, mas não
          tem acesso ao seu pedido.
        </p>

        <a className="cc-cta" href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer">
          Pedir a maquininha no site da Ton
        </a>

        <h2>Fontes</h2>
        <p className="nota">Informações conferidas em {GUIAS_CONFERIDO_EM}. A Ton pode mudar regras, prazos e valores.</p>
        <ul className="fontes">
          <li>Prazo de entrega das máquinas Ton, Central de Ajuda Ton.</li>
          <li>Como realizar o primeiro acesso? e Como ativar a maquininha T3?, Central de Ajuda Ton.</li>
          <li>Maquininha sem mensalidade: como escolher a melhor opção, Blog do Ton, atualizado em 23 de junho de 2026.</li>
          <li>Catálogo, site da Ton.</li>
        </ul>
      </article>

      <Modelos />
      <RecomendadorSecao />
      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
