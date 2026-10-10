import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"
import { TON_SUPORTE } from "@/lib/ton-contatos"
import Guias from "@/app/components/Guias"

const PATH = "/ton-whatsapp-telefone"
const TITULO = "WhatsApp e telefone da Ton: os canais oficiais"
const DESCRICAO =
  "O WhatsApp de atendimento da Ton, os telefones para quem já é cliente, a Central de Ajuda e quando usar cada canal. Com os cuidados contra golpe."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

export default function TonWhatsappTelefone() {
  const suporteWa = `https://wa.me/${TON_SUPORTE.whatsapp}`
  const parceiroWa = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("Olá! Quero comprar uma maquininha Ton e tenho uma dúvida.")}`

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "WhatsApp e telefone da Ton", path: PATH },
        ])}
      />

      <article className="txt">
        <h1>WhatsApp e telefone da Ton: os canais oficiais</h1>

        <p>
          Se você já tem maquininha e precisa de suporte, quem resolve é a Ton, não este site. Abaixo estão os canais
          oficiais, copiados do site e da Central de Ajuda da Ton em {TON_SUPORTE.conferidoEm}.
        </p>

        <h2>Já sou cliente e preciso de ajuda</h2>
        <ul>
          <li>
            <strong>WhatsApp de atendimento:</strong>{" "}
            <a href={suporteWa} target="_blank" rel="noopener noreferrer">{TON_SUPORTE.whatsappFormatado}</a>
          </li>
          <li>
            <strong>Telefone para clientes:</strong> {TON_SUPORTE.telefoneCliente}
          </li>
          <li>
            <strong>Central de Ajuda:</strong>{" "}
            <a href={TON_SUPORTE.centralDeAjuda} target="_blank" rel="noopener noreferrer">ajuda.ton.com.br</a>
          </li>
          <li>
            <strong>Aplicativo da Ton:</strong> o atendimento também é feito por dentro do app.
          </li>
        </ul>
        <p>
          Para quem ainda não é cliente, a Ton informa o telefone {TON_SUPORTE.telefoneNaoCliente}.
        </p>

        <h2>Qual canal usar em cada situação</h2>
        <p>
          <strong>Maquininha travada, sem sinal ou com defeito.</strong> Comece pelo aplicativo ou pelo WhatsApp de
          atendimento. É por esses canais que se pede a troca do aparelho.
        </p>
        <p>
          <strong>Dinheiro que não caiu ou conta bloqueada.</strong> Fale pelo aplicativo, com a conta aberta. O
          atendente precisa confirmar que é você, e pelo app isso é mais rápido.
        </p>
        <p>
          <strong>Entrega atrasada.</strong> Antes de ligar, veja o rastreio do pedido no site da Ton. Se o prazo
          estourou, WhatsApp ou telefone.
        </p>
        <p>
          <strong>Dúvida simples.</strong> A Central de Ajuda costuma ter a resposta pronta, sem fila.
        </p>

        <h2>Ainda não comprou?</h2>
        <p>
          Aí o caminho é outro. Este site é de um parceiro autorizado, e a gente ajuda a escolher o modelo e tira
          dúvida antes do pedido. A compra em si acontece no site oficial da Ton, com o desconto de parceiro.
        </p>
        <a className="cc-cta" href={parceiroWa} target="_blank" rel="noopener noreferrer">
          Quero comprar: falar com o parceiro
        </a>

        <h2>Cuidado com número falso</h2>
        <p>
          Golpista adora se passar por atendimento de maquininha. Alguns sinais de que o contato não é da Ton:
        </p>
        <ul>
          <li>O número chegou por mensagem, anúncio ou rede social, e não está no site oficial.</li>
          <li>Pedem senha, código que chegou por SMS ou foto do cartão.</li>
          <li>Pedem Pix ou boleto para liberar, desbloquear ou trocar a maquininha.</li>
          <li>Mandam link para instalar aplicativo fora da loja oficial do celular.</li>
        </ul>
        <p>
          Na dúvida, não responda. Abra o aplicativo da Ton ou digite ton.com.br no navegador e pegue o contato por lá.
          Mais sobre isso em <a href="/ton-e-confiavel">a Ton é confiável?</a>
        </p>

        <h2>Fontes</h2>
        <p className="nota">
          Contatos conferidos em {TON_SUPORTE.conferidoEm}. A Ton pode mudar números e horários; o que vale é o que
          está no site oficial.
        </p>
        <ul className="fontes">
          <li>
            <a href="https://www.ton.com.br" target="_blank" rel="noopener noreferrer">Rodapé do site oficial</a>,
            Ton.
          </li>
          <li>
            <a href="https://ajuda.ton.com.br/" target="_blank" rel="noopener noreferrer">Central de Ajuda</a>, Ton.
          </li>
        </ul>
      </article>

      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
