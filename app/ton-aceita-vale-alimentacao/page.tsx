import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import Guias from "@/app/components/Guias"
import Modelos from "@/app/components/Modelos"
import RecomendadorSecao from "@/app/components/RecomendadorSecao"

const PATH = "/ton-aceita-vale-alimentacao"
const TITULO = "A Ton aceita vale-alimentação e vale-refeição?"
const DESCRICAO = "A Ton aceita Alelo, Pluxee (Sodexo), Ticket, UpBrasil e VR nos modelos T2, T3 e T3 Smart, para CNPJ do ramo de alimentação. Veja como pedir o credenciamento."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

export default function TonValeAlimentacao() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "A Ton aceita vale-alimentação?", path: PATH },
        ])}
      />

      <article className="txt">
        <h1>A Ton aceita vale-alimentação e vale-refeição?</h1>

        <p>
          Aceita. Mas não é para todo mundo, não é em toda maquininha e não vem ligado de fábrica. Vale entender as
          três condições antes de comprar, porque é aqui que muita gente se frustra.
        </p>

        <h2>Quais vales passam</h2>
        <p>Segundo a Ton, as bandeiras de vale aceitas são cinco:</p>
        <ul>
          <li>Alelo</li>
          <li>Pluxee (a antiga Sodexo)</li>
          <li>Ticket</li>
          <li>UpBrasil</li>
          <li>VR</li>
        </ul>

        <h2>Condição 1: ter CNPJ do ramo de alimentação</h2>
        <p>
          Essas bandeiras exigem CNPJ e que a empresa atue em alimentação. Restaurante, lanchonete, padaria, mercado e
          açougue entram. Quem vende só com CPF não consegue habilitar vale, e uma loja de roupa com CNPJ também não.
          A regra é das bandeiras, não da Ton.
        </p>

        <h2>Condição 2: ter o modelo certo</h2>
        <p>
          Os vales funcionam na <strong>T2</strong>, na <strong>T3</strong> e na <strong>T3 Smart</strong>. A T1 e a
          T1 Chip ficaram de fora. Se aceitar vale é o motivo da sua compra, não pegue a T1 para economizar.
        </p>

        <h2>Condição 3: pedir o credenciamento</h2>
        <p>
          O vale não é ativado sozinho quando a maquininha chega. Você precisa pedir a cada bandeira que quer aceitar.
          O caminho é este:
        </p>
        <ol>
          <li>Entre na Central de Ajuda da Ton e procure a bandeira que você quer.</li>
          <li>Peça o credenciamento pelo site ou telefone da própria bandeira.</li>
          <li>Aguarde a liberação, que costuma levar de 24 a 48 horas.</li>
          <li>Confira no aplicativo ou no site da bandeira se já está ativo.</li>
        </ol>

        <h2>E a taxa do vale?</h2>
        <p>
          Aqui mora a pegadinha. A taxa do vale não é a da tabela da Ton. Taxa e prazo de recebimento são negociados
          direto com cada bandeira. Alelo cobra uma coisa, VR cobra outra. Pergunte antes de habilitar, porque as
          taxas de vale costumam ser bem mais altas que as de débito.
        </p>
        <p>
          As taxas de cartão comum, essas sim da Ton, estão na <a href="/taxas-ton">tabela de taxas</a>.
        </p>

        <h2>Vale a pena para o seu negócio?</h2>
        <p>
          Se você serve almoço perto de fábrica, escritório ou repartição, quase sempre vale. Boa parte do seu público
          recebe o benefício e escolhe onde comer pelo cartão que passa. Para um mercado de bairro, depende de
          quantos clientes perguntam pelo vale no caixa. Se ninguém pergunta, não tem por que correr atrás do
          credenciamento agora.
        </p>

        <h2>Outras bandeiras regionais</h2>
        <p>
          Além dos cinco vales, a Ton lista mais de 50 bandeiras, entre elas Banricompras, Goodcard, Senff, ValeCard e
          VeroCard. Várias delas podem ser usadas por CPF ou por CNPJ. A lista está na página{" "}
          <a href="/bandeiras-aceitas-ton">bandeiras aceitas pela Ton</a>.
        </p>

        <a className="cc-cta" href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer">
          Ver a T2, a T3 e a T3 Smart no site da Ton
        </a>

        <h2>Fontes</h2>
        <p className="nota">Informações conferidas em {GUIAS_CONFERIDO_EM}. As regras das bandeiras podem mudar.</p>
        <ul className="fontes">
          <li>
            Cartão diferente? Regional? Voucher? Na maquininha do Ton, passa!, Blog do Ton, atualizado em 21 de janeiro de 2026.
          </li>
        </ul>
      </article>

      <Modelos />
      <RecomendadorSecao />
      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
