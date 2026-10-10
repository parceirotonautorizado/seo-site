import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import Guias from "@/app/components/Guias"

const PATH = "/ton-t1"
const TITULO = "Ton T1: a maquininha mais barata e para quem ela serve"
const DESCRICAO = "Conheça a Ton T1: funciona pelo Bluetooth do celular, cabe no bolso e envia comprovante por SMS. Veja para quem serve e o que ela não faz."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

export default function TonT1() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Ton T1", path: PATH },
        ])}
      />

      <article className="txt">
        <h1>Ton T1: a mais barata, e o que você abre mão por isso</h1>

        <p>
          A T1 é a porta de entrada da Ton. Custa menos que as outras três e cabe no bolso. Em troca, ela depende do
          seu celular para funcionar. Se isso é problema ou não, depende de como você vende.
        </p>

        <h2>Como a T1 funciona</h2>
        <p>
          Ela se conecta ao celular por Bluetooth e usa a internet dele para passar a venda. Sem celular por perto, ou
          com o celular sem sinal, a maquininha não vende. É o ponto que mais pega quem compra sem saber.
        </p>
        <ul>
          <li>Conexão por Bluetooth com o seu celular.</li>
          <li>Aceita cartão com chip e por aproximação.</li>
          <li>Comprovante enviado por SMS, sem impressão.</li>
          <li>Leve e compacta, feita para andar com você.</li>
          <li>Garantia da Ton, com troca grátis.</li>
        </ul>

        <h2>Para quem a T1 resolve</h2>
        <p>
          Para quem está começando e não sabe ainda quanto vai vender no cartão. Para quem trabalha sozinho e anda
          sempre com o celular: manicure, diarista, vendedor de porta em porta, feirante de fim de semana. E para quem
          já tem outra maquininha e quer uma de reserva na gaveta.
        </p>

        <h2>Quando ela não é a escolha certa</h2>
        <ul>
          <li>
            Se você quer aceitar vale-refeição ou vale-alimentação. A T1 não aceita. Veja em{" "}
            <a href="/ton-aceita-vale-alimentacao">a Ton aceita vale-alimentação?</a>
          </li>
          <li>Se o cliente pede comprovante impresso. Aí é a <a href="/ton-t3">T3</a>.</li>
          <li>
            Se mais de uma pessoa vende no seu negócio. Amarrar a maquininha ao celular de um funcionário dá dor de
            cabeça. A <a href="/ton-t2">T2</a> tem chip próprio e resolve isso.
          </li>
          <li>Se o sinal de celular é ruim onde você trabalha.</li>
        </ul>

        <h2>T1 ou vender direto pelo celular?</h2>
        <p>
          Boa pergunta, porque as duas dependem do celular. A diferença é que o{" "}
          <a href="/tapton-como-funciona">TapTon</a> não precisa de aparelho nenhum, mas só aceita pagamento por
          aproximação. A T1 lê também o cartão de chip, aquele que o cliente insere e digita a senha. Se a sua
          clientela usa cartão mais antigo, sem aproximação, a T1 ainda faz diferença.
        </p>

        <h2>E as taxas?</h2>
        <p>
          São as mesmas da tabela do plano, que depende da sua faixa de vendas e não do modelo. Estão todas na{" "}
          <a href="/taxas-ton">tabela de taxas</a>.
        </p>

        <a className="cc-cta" href={CONFIG.tonModelos.t1} target="_blank" rel="noopener noreferrer">
          Ver a T1 no site da Ton
        </a>
        <h2>Fontes</h2>
        <p className="nota">Informações conferidas no site e no blog da Ton em {GUIAS_CONFERIDO_EM}. Preço e condições mudam; confira no site oficial antes de pedir.</p>
        <ul className="fontes">
          <li>
            <a href="https://www.ton.com.br/maquininha/t1" target="_blank" rel="noopener noreferrer">
              Maquininha T1
            </a>
            , site oficial da Ton.
          </li>
          <li>
            <a href="https://blog.ton.com.br/t1-ton-e-t1-chip-tudo-sobre-as-maquininhas/" target="_blank" rel="noopener noreferrer">
              T1 Ton e T1 Chip: tudo sobre as maquininhas
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
