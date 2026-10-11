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

        <p>Escolha o seu caso. São dois caminhos diferentes, e o certo resolve mais rápido.</p>

        <h2>Quero comprar minha maquininha</h2>
        <p>
          Fale com a gente pelo WhatsApp. Pode perguntar o que quiser antes de pedir: qual modelo serve para o seu
          negócio, como ficam as taxas no seu volume de vendas, como funciona o pedido.
        </p>
        <a className="cc-cta" href={`${whatsapp}?text=${encodeURIComponent("Olá! Quero comprar uma maquininha Ton.")}`} target="_blank" rel="noopener noreferrer">
          Quero comprar: chamar no WhatsApp
        </a>

        <h2>Já tenho maquininha e preciso de ajuda</h2>
        <p>
          Aí é com a Ton. Entrega atrasada, troca de aparelho, problema na conta ou no recebimento são resolvidos pelos
          canais de atendimento deles. A gente não tem acesso ao seu pedido nem à sua conta, então chamar aqui só atrasa a
          solução.
        </p>
        <a className="cc-cta" href="/ton-whatsapp-telefone" style={{ background: "#333" }}>
          Preciso de suporte: ver canais da Ton
        </a>

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
