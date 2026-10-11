import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import Guias from "@/app/components/Guias"

const PATH = "/ton-t3-smart"
const TITULO = "Ton T3 Smart: o que tem e para quem compensa"
const DESCRICAO = "Conheça a Ton T3 Smart: Android, visor sensível ao toque, chip e Wi-Fi, impressão de comprovante. Veja para quem ela vale mais que a T3."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

export default function TonT3Smart() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Ton T3 Smart", path: PATH },
        ])}
      />

      <article className="txt">
        <h1>Ton T3 Smart: o que ela tem e para quem compensa</h1>

        <p>
          A T3 Smart é a maquininha mais completa da Ton. É também a mais cara das quatro. A pergunta que importa,
          então, não é se ela é boa. É se o seu negócio usa o que ela tem a mais.
        </p>

        <h2>O que a T3 Smart tem</h2>
        <ul>
          <li>Sistema Android, com visor sensível ao toque.</li>
          <li>Chip 4G próprio e Wi-Fi, então não depende do seu celular.</li>
          <li>Bobina para imprimir o comprovante na hora.</li>
          <li>Pix por QR Code direto na tela da máquina.</li>
          <li>Pagamento por aproximação.</li>
          <li>Bateria de longa duração, segundo a Ton.</li>
          <li>Parcelamento em até 21 vezes para novos clientes. Na T1 e na T2 o limite é 12.</li>
        </ul>
        <p>
          As taxas não mudam por causa do modelo. Elas dependem da sua faixa de vendas e do prazo de recebimento, e
          estão na <a href="/taxas-ton">tabela de taxas</a>.
        </p>

        <h2>T3 Smart ou T3?</h2>
        <p>
          As duas têm chip próprio, Wi-Fi e imprimem comprovante. A diferença está na frente da máquina. A T3 tem
          teclado físico e uma tela simples. A T3 Smart tem tela grande de toque e roda Android.
        </p>
        <p>
          Se o seu balcão só precisa passar cartão e imprimir a via, a <a href="/ton-t3">T3</a> resolve e custa menos. A T3 Smart faz mais
          sentido quando a operação é mais corrida e a tela ajuda: digitar valor, escolher parcelas e mostrar o QR
          Code do Pix ficam mais rápidos.
        </p>

        <h2>Para quem ela costuma compensar</h2>
        <ul>
          <li>Restaurante, lanchonete e padaria com fila no caixa.</li>
          <li>Mercado e loja com movimento constante durante o dia.</li>
          <li>Quem quer uma máquina só para tudo: cartão, Pix e comprovante impresso.</li>
        </ul>
        <p>
          E para quem não compensa? Quem vende pouco no cartão, quem atende na rua e quer algo leve no bolso, quem
          está começando. Nesses casos a <a href="/ton-t1">T1</a> ou a <a href="/ton-t2">T2</a> fazem o mesmo serviço por bem menos.
        </p>

        <h2>Ela aceita vale-refeição e vale-alimentação?</h2>
        <p>
          Aceita, mas não é exclusividade dela: a T2 e a T3 também aceitam. Em todas, a condição é a mesma. Você
          precisa ter CNPJ do ramo de alimentação e pedir o credenciamento a cada bandeira de vale. Os detalhes estão
          em <a href="/ton-aceita-vale-alimentacao">a Ton aceita vale-alimentação?</a>
        </p>

        <h2>Como ativar</h2>
        <ol>
          <li>Abra o aplicativo da Ton e entre no Menu.</li>
          <li>Toque em Ativar maquininha.</li>
          <li>Escolha a opção T3 Smart.</li>
          <li>Digite na maquininha o código que aparece no aplicativo e aperte o botão verde.</li>
        </ol>

        <a className="cc-cta" href={CONFIG.tonModelos.t3smart} target="_blank" rel="noopener noreferrer">
          Ver a T3 Smart no site da Ton
        </a>

        <h2>Fontes</h2>
        <p className="nota">Informações conferidas em {GUIAS_CONFERIDO_EM}. Preço e condições mudam; confira no site da Ton.</p>
        <ul className="fontes">
          <li>
            <a href="https://blog.ton.com.br/maquininha-ton-conheca-todos-os-modelos/" target="_blank" rel="noopener noreferrer">
              Maquininha Ton: conheça todos os modelos
            </a>
            , Blog do Ton.
          </li>
          <li>
            <a href="https://ajuda.ton.com.br/pt_BR/m%C3%A1quina/t3-smart" target="_blank" rel="noopener noreferrer">
              Como ativar a maquininha T3 Smart
            </a>
            , Central de Ajuda Ton.
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
