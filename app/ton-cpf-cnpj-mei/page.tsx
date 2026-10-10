import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import Guias from "@/app/components/Guias"

const PATH = "/ton-cpf-cnpj-mei"
const TITULO = "Ton para CPF, CNPJ e MEI: o que muda no pedido"
const DESCRICAO = "Dá para pedir a maquininha Ton só com CPF? O que muda para quem tem CNPJ ou é MEI, e quando o CNPJ passa a ser necessário."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

export default function TonCpfCnpjMei() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Ton para CPF, CNPJ e MEI", path: PATH },
        ])}
      />

      <article className="txt">
        <h1>Ton para CPF, CNPJ e MEI: o que muda</h1>

        <p>
          Dá para pedir a maquininha da Ton só com o CPF. Essa é a resposta curta. A longa tem um porém: algumas
          coisas só destravam com CNPJ, e vale saber quais antes de decidir.
        </p>

        <h2>Pedindo só com CPF</h2>
        <p>
          Autônomo, ambulante, prestador de serviço, quem vende por conta própria e ainda não abriu empresa: todos
          podem comprar a maquininha no CPF e aceitar débito, crédito e Pix. A tabela de taxas que a Ton publica
          não separa CPF de CNPJ. O que define quanto você paga por venda é a sua faixa de vendas no mês.
        </p>

        <h2>O que só o CNPJ libera</h2>
        <p>
          A diferença prática mais conhecida é o vale-refeição e o vale-alimentação. As bandeiras de vale só
          credenciam CNPJ do ramo de alimentação. Quem está no CPF fica sem essa opção, mesmo tendo a maquininha
          certa. Explicamos isso em <a href="/ton-aceita-vale-alimentacao">a Ton aceita vale-alimentação?</a>
        </p>

        <h2>E o MEI?</h2>
        <p>
          MEI é CNPJ. Quando você abre o MEI, recebe um CNPJ na hora. Então, para a Ton, o MEI entra como pessoa
          jurídica e tem acesso ao que o CNPJ libera, desde que a atividade permita.
        </p>
        <p>
          O MEI tem limite de faturamento de R$ 81 mil por ano. Esse limite é da categoria, não da maquininha. Quem
          passa dele precisa mudar de enquadramento, com ou sem máquina de cartão.
        </p>
        <p>
          Outra dúvida comum: o MEI não é obrigado por lei a ter conta bancária de pessoa jurídica. Dito isso, separar
          o dinheiro da venda do dinheiro de casa facilita muito a vida, e é o que a própria Ton recomenda.
        </p>

        <h2>Comecei no CPF. Devo abrir CNPJ?</h2>
        <p>
          Depende do tamanho que a coisa tomou. Se a maquininha é para um bico de fim de semana, o CPF resolve. Se
          virou a sua renda principal, se você quer aceitar vale ou se o cliente pede nota, o MEI costuma ser o
          próximo passo. Abrir é gratuito e feito pela internet.
        </p>
        <p>
          Sobre imposto e declaração, este site não substitui um contador. Vendas no cartão ficam registradas, e
          quanto antes você organizar isso, menos dor de cabeça terá.
        </p>

        <h2>Qual maquininha para cada caso</h2>
        <ul>
          <li>Começando no CPF e vendendo pouco: a T1 é a mais barata e resolve.</li>
          <li>Autônomo que atende na rua ou em domicílio: a T2, que tem chip próprio.</li>
          <li>Loja ou balcão com CNPJ: a T3, que imprime o comprovante.</li>
          <li>Restaurante ou mercado com CNPJ que quer aceitar vale: T2, T3 ou T3 Smart. A T1 não aceita.</li>
        </ul>
        <p>
          As taxas de cada faixa de vendas estão na <a href="/taxas-ton">tabela de taxas</a>, e os detalhes do modelo
          mais completo em <a href="/ton-t3-smart">Ton T3 Smart</a>.
        </p>

        <a className="cc-cta" href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer">
          Pedir a maquininha no site da Ton
        </a>

        <h2>Fontes</h2>
        <p className="nota">Informações conferidas em {GUIAS_CONFERIDO_EM}.</p>
        <ul className="fontes">
          <li>
            <a href="https://blog.ton.com.br/maquina-de-cartao-para-pessoa-fisica/" target="_blank" rel="noopener noreferrer">
              Máquina de cartão para pessoa física
            </a>
            , Blog do Ton, 23 de junho de 2026.
          </li>
          <li>
            <a href="https://blog.ton.com.br/qual-a-diferenca-entre-mei-e-cnpj/" target="_blank" rel="noopener noreferrer">
              Qual a diferença entre MEI e CNPJ?
            </a>
            , Blog do Ton.
          </li>
          <li>
            <a href="https://blog.ton.com.br/mei-precisa-ter-conta-pj/" target="_blank" rel="noopener noreferrer">
              MEI precisa ter conta PJ?
            </a>
            , Blog do Ton.
          </li>
          <li>
            <a href="https://blog.ton.com.br/bandeiras-de-cartao-maquininha-ton/" target="_blank" rel="noopener noreferrer">
              Bandeiras aceitas na maquininha do Ton
            </a>
            , Blog do Ton.
          </li>
        </ul>
      </article>

      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
