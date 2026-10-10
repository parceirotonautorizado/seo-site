import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"

const TITULO = "Contato | Maquininhas Ton Paraná"
const DESCRICAO = "Fale com o parceiro Ton pelo WhatsApp para tirar dúvidas antes de pedir a maquininha."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}/contato` },
  openGraph: { ...OG_BASE, title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}/contato` },
}

export default function Contato() {
  const whatsapp = `https://wa.me/${CONFIG.whatsapp}`

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Contato", path: "/contato" },
        ])}
      />

      <article className="txt">
        <h1>Contato</h1>

        <p>
          O atendimento é pelo WhatsApp. Pode perguntar o que quiser antes de comprar: qual modelo serve para o seu
          negócio, como ficam as taxas no seu volume de vendas, como funciona o pedido.
        </p>

        <a className="cc-cta" href={whatsapp} target="_blank" rel="noopener noreferrer">
          Chamar no WhatsApp
        </a>

        <h2>Já comprou e precisa de suporte?</h2>
        <p>
          Aí é com a Ton. Entrega atrasada, troca de aparelho, problema na conta ou no recebimento são resolvidos pelos
          canais oficiais deles, no aplicativo ou em{" "}
          <a href="https://www.ton.com.br" target="_blank" rel="noopener noreferrer">ton.com.br</a>. A gente não tem
          acesso ao seu pedido nem à sua conta.
        </p>

        <h2>Encontrou algo errado no site?</h2>
        <p>
          Dado desatualizado da sua cidade, taxa que mudou, link quebrado: mande pelo mesmo WhatsApp. Leia também a
          página <a href="/sobre">Sobre o site</a> para saber quem está por trás daqui e a{" "}
          <a href="/politica-de-privacidade">política de privacidade</a>.
        </p>
      </article>
    </>
  )
}
