import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import Guias from "@/app/components/Guias"

const PATH = "/ton-e-confiavel"
const TITULO = "A Ton é confiável? O que dá para conferir antes de comprar"
const DESCRICAO = "Quem está por trás da Ton, o que diz o Banco Central, a nota no Reclame Aqui e os cuidados para não cair em golpe na hora de pedir a maquininha."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

export default function TonConfiavel() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "A Ton é confiável?", path: PATH },
        ])}
      />

      <article className="txt">
        <h1>A Ton é confiável?</h1>

        <p>
          Antes de responder, um aviso: quem escreve este site ganha comissão quando você compra a maquininha. Então
          não leve a nossa palavra. Abaixo está o que dá para conferir por conta própria, com o endereço de cada
          fonte.
        </p>

        <h2>Quem está por trás</h2>
        <p>
          A Ton é uma marca do grupo Stone, o mesmo das maquininhas verdes que você vê em loja grande. O regulamento
          do plano, de 21/09/2026, identifica o Pagar.me S.A., CNPJ 18.727.053/0001-74, como desenvolvedor da
          plataforma e dono da marca Ton. No rodapé do site oficial aparece também a Stone Instituição de Pagamento
          S.A., CNPJ 16.501.555/0001-57, com sede em São Paulo. As duas são empresas do mesmo grupo.
        </p>
        <p>
          A Stone é voltada a empresas maiores. A Ton é a linha feita para autônomo, MEI e negócio pequeno, sem
          aluguel: você paga uma taxa de adesão única pela maquininha.
        </p>

        <h2>O que diz o Banco Central</h2>
        <p>
          O site da Ton informa que a empresa é instituição de pagamento autorizada pelo Banco Central do Brasil, nas
          modalidades de credenciadora e emissora de moeda eletrônica. Em português simples: ela tem licença para
          processar vendas no cartão e para manter a conta onde o seu dinheiro cai.
        </p>
        <p>
          Dá para checar isso sem passar pela Ton. O Banco Central publica a lista de instituições autorizadas, e a
          consulta é pelo CNPJ.
        </p>

        <h2>Reclamações</h2>
        <p>
          No dia em que conferimos, o site da Ton exibia nota 9,4 de 10 no Reclame Aqui. É a própria empresa mostrando
          o número, então veja direto na fonte. Mais útil que a nota é ler as reclamações recentes: elas mostram onde
          a coisa costuma dar errado e se a empresa responde.
        </p>
        <p>
          Toda empresa de maquininha tem reclamação. O que interessa é o tipo. As mais comuns nesse mercado são
          atraso na entrega, conta bloqueada para análise e taxa diferente da esperada. Esta última quase sempre
          nasce do mesmo engano, que vem a seguir.
        </p>

        <h2>Onde as pessoas mais se frustram</h2>
        <p>
          Na taxa. O anúncio fala em 0,57% e Pix grátis, e isso é verdade nos primeiros 30 dias ou até R$ 5.000 em
          vendas. Depois entra a taxa da sua faixa de vendas, que é mais alta. O Pix na maquininha continua grátis
          só para quem cadastra uma chave Pix na Conta Ton; sem a chave, passa a 0,49%. Não é golpe, está escrito. Mas muita gente só descobre no segundo mês. A{" "}
          <a href="/taxas-ton">tabela completa de taxas</a> mostra o antes e o depois.
        </p>
        <p>
          O outro ponto é o vale-refeição. Só funciona em três dos quatro modelos, só para CNPJ de alimentação e
          precisa de credenciamento. Explicamos em{" "}
          <a href="/ton-aceita-vale-alimentacao">a Ton aceita vale-alimentação?</a>
        </p>

        <h2>Cuidado com golpe em nome da Ton</h2>
        <p>
          Marca conhecida atrai golpista. Alguns cuidados resolvem quase tudo:
        </p>
        <ul>
          <li>A compra só acontece em ton.com.br. Confira o endereço antes de digitar qualquer dado.</li>
          <li>Ninguém da Ton pede senha, código de verificação ou Pix para liberar maquininha.</li>
          <li>Desconfie de maquininha da Ton vendida em marketplace ou rede social por preço muito abaixo.</li>
          <li>Boleto ou Pix para pessoa física não é pagamento da Ton.</li>
        </ul>

        <h2>E sites de parceiro, como este?</h2>
        <p>
          Existem e são permitidos. A Ton tem um programa de indicação, e o parceiro ganha comissão por venda. O que
          separa um parceiro legítimo de um golpe é simples: o parceiro manda você para o site oficial e nunca recebe
          o seu pagamento. É o que acontece aqui. Todos os nossos botões abrem ton.com.br, e a compra, a entrega e a
          conta ficam com a Ton. Mais sobre isso na página <a href="/sobre">Sobre o site</a>.
        </p>

        <h2>Então, é confiável?</h2>
        <p>
          Pelo que dá para verificar, sim: empresa de um grupo grande, com autorização do Banco Central e canal de
          reclamação ativo. O risco real não é a Ton sumir com o seu dinheiro. É você comprar esperando uma taxa e
          pagar outra, ou escolher o modelo errado. Os dois se resolvem lendo antes.
        </p>

        <a className="cc-cta" href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer">
          Ir para o site oficial da Ton
        </a>
        <h2>Fontes</h2>
        <p className="nota">Informações conferidas em {GUIAS_CONFERIDO_EM}. A nota no Reclame Aqui muda com o tempo.</p>
        <ul className="fontes">
          <li>
            <a href="https://www.ton.com.br" target="_blank" rel="noopener noreferrer">
              Rodapé e página inicial
            </a>
            , site oficial da Ton.
          </li>
          <li>
            <a href="https://blog.ton.com.br/ton-e-da-stone-tire-suas-dividas/" target="_blank" rel="noopener noreferrer">
              Ton é da Stone?
            </a>
            , Blog do Ton.
          </li>
          <li>
            <a href="https://www.bcb.gov.br/estabilidadefinanceira/encontreinstituicao" target="_blank" rel="noopener noreferrer">
              Encontre uma instituição
            </a>
            , Banco Central do Brasil.
          </li>
          <li>
            <a href="https://www.reclameaqui.com.br/empresa/ton/" target="_blank" rel="noopener noreferrer">
              Página da Ton
            </a>
            , Reclame Aqui.
          </li>
        </ul>
      </article>

      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
