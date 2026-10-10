import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import Guias from "@/app/components/Guias"

const PATH = "/maquininha-de-cartao-para-pessoa-fisica"
const TITULO = "Maquininha de cartão para pessoa física: o que saber"
const DESCRICAO = "Dá para ter maquininha de cartão de crédito só com CPF. Veja quem pode pedir a da Ton, para onde vai o dinheiro, o que o CPF não libera e qual modelo escolher."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

export default function MaquininhaPessoaFisica() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Maquininha para pessoa física", path: PATH },
        ])}
      />

      <article className="txt">
        <h1>Maquininha de cartão de crédito para pessoa física</h1>

        <p>
          Dá para ter maquininha sem abrir empresa. Autônomo, ambulante, quem faz bico e quem vende por conta própria
          pode aceitar débito, crédito e Pix usando só o CPF. Abaixo está o que muda para quem vende assim.
        </p>
        <p className="nota">
          Este site é de um parceiro autorizado da Ton e fala só das maquininhas dela. Não comparamos preços de outras
          marcas porque não teríamos como garantir que estão atualizados.
        </p>

        <h2>Quem pode pedir</h2>
        <p>
          Pelo regulamento da Ton, qualquer pessoa física maior de 18 anos e legalmente capaz pode aderir ao plano.
          O cadastro passa por uma análise, como em qualquer serviço financeiro. Você pede pelo site, paga a taxa de
          adesão da maquininha e recebe em casa.
        </p>

        <h2>Para onde vai o dinheiro das vendas</h2>
        <p>
          Cai na sua Conta Ton, que é aberta junto com o cadastro. De lá você transfere para o seu banco. Um cuidado
          importante: a conta de destino precisa estar no mesmo CPF do cadastro. Não dá para vender no seu nome e
          mandar o dinheiro para a conta de outra pessoa. A Ton aceita conta corrente e poupança, inclusive conjunta,
          mas não conta salário.
        </p>

        <h2>A taxa é diferente para CPF?</h2>
        <p>
          A tabela que a Ton publica não separa CPF de CNPJ. O que define a taxa é quanto você vende por mês e o prazo
          em que quer receber. Veja a <a href="/taxas-ton">tabela completa</a>.
        </p>

        <h2>O que o CPF não libera</h2>
        <p>
          Vale-refeição e vale-alimentação. As bandeiras de vale só credenciam empresa com CNPJ do ramo de
          alimentação. Se você vende marmita e quer aceitar vale, vai precisar se formalizar. O caminho mais simples
          costuma ser o MEI, que explicamos em <a href="/ton-cpf-cnpj-mei">Ton para CPF, CNPJ e MEI</a>.
        </p>

        <h2>Qual modelo para quem está no CPF</h2>
        <ul>
          <li>
            <strong>Começando agora:</strong> a <a href="/ton-t1">T1</a> é a mais barata. Funciona ligada ao celular.
          </li>
          <li>
            <strong>Vende na rua ou atende em domicílio:</strong> a <a href="/ton-t2">T2</a> tem chip próprio e não
            depende do celular.
          </li>
          <li>
            <strong>Quer testar antes de comprar:</strong> o <a href="/tapton-como-funciona">TapTon</a> usa só o
            celular, sem maquininha.
          </li>
        </ul>
        <p>
          A T3 e a T3 Smart também podem ser pedidas no CPF. Só costumam ser mais máquina do que um autônomo precisa.
        </p>

        <h2>E o imposto?</h2>
        <p>
          Venda no cartão fica registrada. Isso não é problema, é só um fato para levar em conta. Se a maquininha
          virar a sua renda principal, converse com um contador sobre abrir MEI. Este site não substitui essa
          orientação.
        </p>

        <h2>Posso mudar para CNPJ depois?</h2>
        <p>
          Pode abrir o MEI quando quiser. Como a troca de cadastro é feita dentro da Ton, o caminho certo é falar com
          o atendimento deles pelos <a href="/ton-whatsapp-telefone">canais oficiais</a>.
        </p>

        <a className="cc-cta" href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer">
          Pedir a maquininha no site da Ton
        </a>

        <h2>Fontes</h2>
        <p className="nota">Informações da Ton conferidas em {GUIAS_CONFERIDO_EM}. Confirme valores no site oficial antes de pedir.</p>
        <ul className="fontes">
          <li><a href="https://blog.ton.com.br/maquina-de-cartao-para-pessoa-fisica/" target="_blank" rel="noopener noreferrer">Máquina de cartão para pessoa física</a>, Blog do Ton.</li>
          <li><a href="https://www.ton.com.br" target="_blank" rel="noopener noreferrer">Site oficial da Ton</a>, páginas dos modelos e perguntas frequentes.</li>
          <li>Regulamento do Plano Ton Mega+, versão de 21/09/2026.</li>
        </ul>
      </article>

      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
