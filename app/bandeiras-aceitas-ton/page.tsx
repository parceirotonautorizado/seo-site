import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import Guias from "@/app/components/Guias"
import { PLANS, VM, TAXAS_ULTIMA_VERIFICACAO } from "@/lib/taxas"

const PATH = "/bandeiras-aceitas-ton"
const TITULO = "Bandeiras aceitas pela Ton: cartões, vales e regionais"
const DESCRICAO = "Visa, Mastercard, Elo e Amex passam em toda maquininha Ton. Vales e bandeiras regionais só na T2, T3 e T3 Smart. Veja a lista e o que muda na taxa."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

const pct = (v: number) => `${v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`

const VALES = ["Alelo", "Pluxee (a antiga Sodexo)", "Ticket", "UpBrasil", "VR"]

const REGIONAIS = [
  "Abrapetite", "Accredito", "AmazonCard", "Avancard", "Banco Ponto Forte", "Banescard", "Banricompras",
  "Biq Benefícios", "BNB Clube", "BNCard", "Bônus Cred", "BsCash", "CardIdeal (UzziPay)", "CDC Card", "Credpar",
  "Eucard", "GoiasCard", "Goodcard", "GreenCard", "Inttegracard", "KPI", "Lecard", "Libercard", "MaxxCard",
  "Megavale", "Meu Vale", "MultVale", "NGV Card", "Nutricard", "Nutricash", "O2 Plus Card", "One Card",
  "Personal Card", "RealCard", "Romcard", "Senff", "TrioCard", "Uauh Benefícios", "ValeCard", "Vegas", "VeroCard",
  "Viasoft Pay", "Volus", "YuCard", "Zuumcard",
]

export default function BandeirasAceitasTon() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Bandeiras aceitas pela Ton", path: PATH },
        ])}
      />

      <article className="txt">
        <h1>Bandeiras aceitas pela Ton</h1>

        <p>
          A resposta curta: Visa, Mastercard, Elo e Amex passam em qualquer maquininha da Ton. Vale-alimentação,
          vale-refeição e bandeiras regionais passam só em três modelos, e precisam de um pedido à parte. É nessa
          segunda parte que mora a confusão, então vamos por grupo.
        </p>

        <h2>As quatro que passam em todo modelo</h2>
        <ul>
          <li>Visa</li>
          <li>Mastercard</li>
          <li>Elo</li>
          <li>American Express (Amex)</li>
        </ul>
        <p>
          Valem para débito e crédito na T1, na T2, na T3 e na T3 Smart, e também no{" "}
          <a href="/tapton-como-funciona">TapTon</a>, que usa o celular como maquininha. Você não precisa habilitar
          nada. A maquininha chega aceitando as quatro.
        </p>
        <p>
          Pix também entra, pelo QR Code na tela. E as páginas da Ton mostram Apple Pay, Google Pay e Samsung Pay na
          T1 e no TapTon, para quem paga encostando o celular ou o relógio.
        </p>

        <h2>A bandeira muda a taxa</h2>
        <p>
          Muita gente descobre isso só no extrato. A Ton tem duas tabelas: uma para Visa e Mastercard, outra para Elo
          e Amex. A segunda é mais cara, e a diferença aparece principalmente no débito.
        </p>
        <div className="tab-wrap">
          <table className="tab">
            <caption>Débito e crédito à vista, recebendo em 1 dia útil</caption>
            <thead>
              <tr>
                <th scope="col">Vendas por mês</th>
                <th scope="col">Débito, Visa e Master</th>
                <th scope="col">Débito, Elo e Amex</th>
                <th scope="col">Crédito à vista, Visa e Master</th>
                <th scope="col">Crédito à vista, Elo e Amex</th>
              </tr>
            </thead>
            <tbody>
              {VM.map((faixa) => {
                const p = PLANS[faixa.id].d1
                return (
                  <tr key={faixa.id}>
                    <th scope="row">{faixa.label}</th>
                    <td>{pct(p.mv.deb)}</td>
                    <td>{pct(p.oa.deb)}</td>
                    <td>{pct(p.mv.cre[1])}</td>
                    <td>{pct(p.oa.cre[1])}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className="nota">
          Taxas do plano Mega+ conferidas no site da Ton em {TAXAS_ULTIMA_VERIFICACAO}. A tabela completa, com
          parcelado e recebimento na hora, está em <a href="/taxas-ton">taxas da Ton</a>.
        </p>
        <p>
          Se a maior parte dos seus clientes paga com Elo, faça a conta com a coluna certa. O{" "}
          <a href="/simulador-ton">simulador</a> deixa escolher a bandeira e mostra o valor em reais.
        </p>

        <h2>Vale-alimentação e vale-refeição</h2>
        <p>A Ton lista cinco bandeiras de vale:</p>
        <ul>
          {VALES.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
        <p>
          Três condições. O vale só funciona na <strong>T2</strong>, na <strong>T3</strong> e na{" "}
          <strong>T3 Smart</strong>. Exige CNPJ do ramo de alimentação. E não vem ativado: você pede o credenciamento
          a cada bandeira. O passo a passo está na página{" "}
          <a href="/ton-aceita-vale-alimentacao">a Ton aceita vale-alimentação?</a>
        </p>

        <h2>Bandeiras regionais e de benefícios</h2>
        <p>
          Além dos vales, a Ton fala em mais de 50 bandeiras no total. As regionais e de benefícios que ela cita são
          estas:
        </p>
        <p className="nota">{REGIONAIS.join(", ")}.</p>
        <p>
          Elas seguem a mesma regra de modelo dos vales: T2, T3 e T3 Smart. A diferença é o cadastro. Várias podem
          ser habilitadas por CPF ou por CNPJ, depende da bandeira. Aqui no Paraná, quem atende cliente de convênio
          de empresa ou de frota costuma ouvir a pergunta no caixa, então vale conferir se a que pedem está na lista.
        </p>

        <h2>Como habilitar um vale ou uma regional</h2>
        <ol>
          <li>Procure a bandeira na Central de Ajuda da Ton.</li>
          <li>Peça o credenciamento pelo site ou telefone da própria bandeira.</li>
          <li>Aguarde a liberação, que costuma levar de 24 a 48 horas.</li>
          <li>Confira no aplicativo ou no site da bandeira se já está ativo.</li>
        </ol>
        <p>
          A taxa dessas bandeiras não é a da tabela da Ton. Taxa e prazo de recebimento você negocia direto com cada
          uma. Pergunte antes de habilitar.
        </p>

        <h2>E Hipercard, Diners, Cabal?</h2>
        <p>
          Não encontrei essas bandeiras nas páginas da Ton que consultei. As quatro principais que aparecem lá são
          Visa, Mastercard, Elo e Amex. Não vou dizer que passa nem que não passa. Se o seu cliente usa muito uma
          delas, confirme com o atendimento da Ton antes de pedir a maquininha.
        </p>

        <h2>Qual modelo pegar, olhando só para bandeira</h2>
        <ul>
          <li>
            Só cartão comum e Pix: qualquer uma serve. A <a href="/ton-t1">T1</a> é a mais barata.
          </li>
          <li>
            Precisa de vale ou de bandeira regional: <a href="/ton-t2">T2</a>, <a href="/ton-t3">T3</a> ou{" "}
            <a href="/ton-t3-smart">T3 Smart</a>. A T1 fica de fora.
          </li>
          <li>
            Vende pelo celular com o TapTon: só as quatro principais, e por aproximação.
          </li>
        </ul>

        <a className="cc-cta" href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer">
          Ver os modelos no site da Ton
        </a>

        <h2>Fontes</h2>
        <p className="nota">Informações conferidas em {GUIAS_CONFERIDO_EM}. A lista de bandeiras pode mudar.</p>
        <ul className="fontes">
          <li>
            Cartão diferente? Regional? Voucher? Na maquininha do Ton, passa!, Blog do Ton, atualizado em 21 de janeiro de 2026.
          </li>
          <li>Páginas dos modelos, do TapTon e de planos e taxas, site da Ton.</li>
        </ul>
      </article>

      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
