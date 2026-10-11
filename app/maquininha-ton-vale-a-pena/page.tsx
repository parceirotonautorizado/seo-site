import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd, artigoLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import Guias from "@/app/components/Guias"
import Modelos from "@/app/components/Modelos"
import RecomendadorSecao from "@/app/components/RecomendadorSecao"
import { MODELOS } from "@/lib/modelos"
import { PLANS, PIX_SEM_CHAVE, TAXAS_ULTIMA_VERIFICACAO } from "@/lib/taxas"

const PATH = "/maquininha-ton-vale-a-pena"
const TITULO = "Maquininha Ton vale a pena? Prós, contras e para quem serve"
const DESCRICAO = "O que a maquininha Ton tem de bom, onde ela decepciona e para quem não compensa. Com a taxa que vale depois da promoção e a conta em reais."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, type: "article", title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

const pct = (v: number) => `${v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`
const reais = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
const sobra = (taxa: number) => reais(100 - taxa)

export default function TonValeAPena() {
  const promo = PLANS.promo.d1.mv
  const depois = PLANS.ate3.d1.mv
  const t1 = MODELOS.find((m) => m.id === "t1")!
  const t3smart = MODELOS.find((m) => m.id === "t3smart")!

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Maquininha Ton vale a pena?", path: PATH },
        ])}
      />

      <JsonLd data={artigoLd({ titulo: TITULO, descricao: DESCRICAO, path: PATH, publicado: "10/10/2026", modificado: GUIAS_CONFERIDO_EM })} />

      <article className="txt">
        <h1>Maquininha Ton vale a pena?</h1>

        <p>
          Para a maioria de quem vende pouco ou está começando, vale. Para alguns perfis, não. E quem escreve aqui
          ganha comissão quando você compra, então esta página mostra os dois lados com os números na mão. A decisão
          fica com você.
        </p>

        <p className="nota">
          Escrito por um parceiro Ton do Paraná. Atualizado em <time dateTime={GUIAS_CONFERIDO_EM.split("/").reverse().join("-")}>{GUIAS_CONFERIDO_EM}</time>.
        </p>

        <h2>A resposta em 30 segundos</h2>
        <ul>
          <li>
            <strong>Vale</strong> se você é autônomo, MEI ou tem um negócio pequeno, não quer pagar aluguel de
            máquina e vende principalmente em Visa e Mastercard.
          </li>
          <li>
            <strong>Pense duas vezes</strong> se quase todo o seu movimento é parcelado em muitas vezes, ou se a
            maior parte dos clientes usa Elo.
          </li>
          <li>
            <strong>Não vale</strong> se você quer aceitar vale-refeição e vende só com CPF, ou se espera que a taxa
            da propaganda dure para sempre.
          </li>
        </ul>

        <h2>O que ela tem de bom</h2>

        <h3>Não tem aluguel</h3>
        <p>
          Você paga uma taxa de adesão, uma vez. Hoje vai de {t1.preco} na T1 a {t3smart.preco} na T3 Smart, e dá
          para parcelar. Mês parado não gera cobrança. Para quem tem venda irregular, isso pesa mais que qualquer
          décimo de taxa.
        </p>

        <h3>Funciona com CPF</h3>
        <p>
          Não precisa de CNPJ nem de conta em banco. O dinheiro cai na Conta Ton, que abre junto com o cadastro. A
          diferença entre os cadastros está em <a href="/ton-cpf-cnpj-mei">Ton para CPF, CNPJ e MEI</a>.
        </p>

        <h3>Pix na maquininha sem taxa</h3>
        <p>
          O cliente lê o QR Code na tela e o Pix cai sem desconto. Tem uma condição, que quase ninguém lê: depois do
          período promocional, é preciso ter uma chave Pix cadastrada na Conta Ton. Sem a chave, a taxa passa a{" "}
          {pct(PIX_SEM_CHAVE)}. Cadastrar leva um minuto.
        </p>

        <h3>Você escolhe quando recebe</h3>
        <p>
          Na hora ou em 1 dia útil. Receber na hora custa mais em cada venda, receber no dia seguinte custa menos.
          Quem não depende do dinheiro no mesmo dia economiza escolhendo 1 dia útil.
        </p>

        <h3>Tem empresa grande por trás</h3>
        <p>
          A Ton é do grupo Stone e informa ser instituição de pagamento autorizada pelo Banco Central. Os detalhes e
          o que conferir estão em <a href="/ton-e-confiavel">a Ton é confiável?</a>
        </p>

        <h2>Onde ela decepciona</h2>

        <h3>A taxa da propaganda dura pouco</h3>
        <p>
          Os {pct(promo.deb)} valem nos primeiros 30 dias ou até R$ 5.000 em vendas, o que acabar primeiro. Depois
          entra a taxa da sua faixa de vendas. Veja a diferença em uma venda de R$ 100, para quem vende até R$ 3 mil
          por mês e recebe em 1 dia útil:
        </p>
        <div className="tab-wrap">
          <table className="tab">
            <caption>Quanto sobra de uma venda de R$ 100 (Visa e Mastercard)</caption>
            <thead>
              <tr>
                <th scope="col">Venda</th>
                <th scope="col">Na promoção</th>
                <th scope="col">Depois da promoção</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Débito</th>
                <td>{sobra(promo.deb)} (taxa de {pct(promo.deb)})</td>
                <td>{sobra(depois.deb)} (taxa de {pct(depois.deb)})</td>
              </tr>
              <tr>
                <th scope="row">Crédito à vista</th>
                <td>{sobra(promo.cre[1])} (taxa de {pct(promo.cre[1])})</td>
                <td>{sobra(depois.cre[1])} (taxa de {pct(depois.cre[1])})</td>
              </tr>
              <tr>
                <th scope="row">Crédito em 12x</th>
                <td>{sobra(promo.cre[12])} (taxa de {pct(promo.cre[12])})</td>
                <td>{sobra(depois.cre[12])} (taxa de {pct(depois.cre[12])})</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="nota">
          Taxas do plano Mega+ conferidas no site da Ton em {TAXAS_ULTIMA_VERIFICACAO}. As outras faixas estão na{" "}
          <a href="/taxas-ton">tabela completa</a>.
        </p>
        <p>
          Não é pegadinha, está escrito no regulamento. Mas é a principal fonte de reclamação: a pessoa faz a conta
          com a taxa do primeiro mês e se assusta no segundo. Faça a conta com a coluna da direita.
        </p>

        <h3>Parcelado longo sai caro</h3>
        <p>
          Olhe a última linha da tabela. Se você parcela em 12 vezes sem repassar nada ao cliente, uma parte boa da
          venda fica na taxa. Quem vende muito parcelado precisa embutir isso no preço ou limitar o número de
          parcelas.
        </p>

        <h3>Elo e Amex pagam mais</h3>
        <p>
          A Ton tem uma tabela para Visa e Mastercard e outra, mais cara, para Elo e Amex. No débito a diferença é
          grande. Se o seu bairro tem muito cartão Elo, isso muda a conta. Está tudo em{" "}
          <a href="/bandeiras-aceitas-ton">bandeiras aceitas pela Ton</a>.
        </p>

        <h3>A T1 depende do seu celular</h3>
        <p>
          A mais barata não tem chip nem Wi-Fi. Ela usa o Bluetooth e a internet do seu telefone. Acabou a bateria
          do celular, acabou a venda. Para quem vende o dia inteiro, a <a href="/ton-t2">T2</a> resolve isso com
          chip próprio.
        </p>

        <h3>Vale-refeição não é para todo mundo</h3>
        <p>
          Só funciona na T2, na T3 e na T3 Smart, só para CNPJ do ramo de alimentação e precisa de credenciamento em
          cada bandeira. Quem compra a T1 pensando em aceitar vale se frustra.
        </p>

        <h3>O atendimento é só com a Ton</h3>
        <p>
          Problema com a máquina ou com a conta se resolve pelos{" "}
          <a href="/ton-whatsapp-telefone">canais de atendimento da Ton</a>, por WhatsApp, telefone e central de
          ajuda. A gente tira dúvida antes da compra, mas não tem acesso à sua conta. Se você faz questão de
          resolver tudo com alguém no balcão, saiba disso antes.
        </p>

        <h2>Para quem costuma compensar</h2>
        <ul>
          <li>Quem está começando e não sabe quanto vai vender.</li>
          <li>Autônomo que atende na casa do cliente ou na rua.</li>
          <li>Loja pequena de bairro, com a maior parte das vendas no débito, no Pix e no crédito à vista.</li>
          <li>Quem tem movimento que sobe e desce ao longo do ano, como sorveteria e comércio de praia ou de safra.</li>
        </ul>

        <h2>Para quem costuma não compensar</h2>
        <ul>
          <li>Quem vende quase tudo em 10 ou 12 vezes e não pode mexer no preço.</li>
          <li>Quem precisa de vale-refeição e não tem CNPJ de alimentação.</li>
          <li>Quem faz questão de atendimento presencial.</li>
        </ul>

        <h2>Como decidir sem chute</h2>
        <ol>
          <li>
            Some quanto você vende por mês no cartão. É isso que define a sua faixa de taxa depois da promoção.
          </li>
          <li>
            Coloque esse valor no <a href="/simulador-ton">simulador</a>, com a bandeira e o prazo que você usaria.
            Ele mostra em reais quanto sobra.
          </li>
          <li>
            Faça o <a href="/#qual-maquininha" data-secao="qual-maquininha">teste de três perguntas</a>, logo abaixo, para ver qual modelo
            combina com o seu jeito de vender.
          </li>
        </ol>
        <p>
          Se o número do simulador fecha com a sua margem, vale a pena. Se não fecha, nenhum texto de vendedor
          deveria convencer você, nem este.
        </p>

        <a className="cc-cta" href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer">
          Ver os modelos no site da Ton
        </a>

        <h2>Fontes</h2>
        <p className="nota">Informações conferidas em {GUIAS_CONFERIDO_EM}. Taxas e condições podem mudar.</p>
        <ul className="fontes">
          <li>Planos e taxas e páginas dos modelos, site da Ton.</li>
          <li>Regulamento do Plano Ton Mega+, versão de 21/09/2026.</li>
          <li>Cartão diferente? Regional? Voucher? Na maquininha do Ton, passa!, Blog do Ton, atualizado em 21 de janeiro de 2026.</li>
        </ul>
      </article>

      <Modelos />
      <RecomendadorSecao />
      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
