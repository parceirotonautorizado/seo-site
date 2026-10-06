export const dynamic = "force-static"

import type { Metadata } from "next"
import Hero from "@/app/components/Hero"
import TaxasDestaque from "@/app/components/TaxasDestaque"
import Simulador from "@/app/components/Simulador"
import FaqSection from "@/app/components/FaqSection"
import { CONFIG } from "@/lib/config"
import cidades from "@/dados/cidades-pr.json"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return cidades.map((cidade) => ({
    slug: cidade.slug,
  }))
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params

  const cidade = cidades.find((c) => c.slug === slug)

  if (!cidade) {
    return {
      title: "Cidade não encontrada",
    }
  }

  return {
    title: `Maquininhas Ton em ${cidade.nome} | Menores Taxas`,
    description: `Compare taxas e escolha a melhor maquininha Ton em ${cidade.nome}. Pix, débito e crédito com taxas competitivas.`,
    alternates: {
      canonical: `https://www.maquininhadecartoes.com.br/cidade/${slug}`,
    },
  }
}

export default async function CidadePage({ params }: Props) {
  const { slug } = await params

  const cidade = cidades.find((c) => c.slug === slug)

  if (!cidade) {
    return <div>Cidade não encontrada</div>
  }

  return (
    <>
      <Hero cidade={cidade.nome} />

      <TaxasDestaque />

      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "16px", color: "#1a1a1a" }}>
          Maquininha Ton em {cidade.nome}
        </h2>

        <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "16px" }}>
          {cidade.nome} faz parte da região de {cidade.regiao}, no Paraná, e possui aproximadamente {cidade.populacao} habitantes.
          Empresários, comerciantes e prestadores de serviços de {cidade.nome} podem utilizar maquininhas Ton para receber
          pagamentos por Pix, débito e crédito com as menores taxas do mercado.
        </p>

        <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "32px" }}>
          Com a Ton, você recebe na hora, não paga aluguel e tem garantia vitalícia. O pedido é feito pelo site oficial
          da Ton com o desconto de parceiro já aplicado.
        </p>

        <a
          href={CONFIG.tonLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#009641",
            color: "#fff",
            textDecoration: "none",
            padding: "16px 32px",
            borderRadius: "999px",
            fontSize: "16px",
            fontWeight: 700,
          }}
        >
          Pedir Maquininha em {cidade.nome} →
        </a>
      </section>

      <section id="simulador" style={{ padding: "60px 20px", background: "#f4f5f4" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "10px", textAlign: "center", color: "#1a1a1a" }}>
            Simule as taxas em {cidade.nome}
          </h2>
          <p style={{ textAlign: "center", color: "#666", marginBottom: "30px" }}>
            Descubra quanto você vai receber por cada venda
          </p>
          <Simulador cidade={cidade.nome} bairro="Centro" />
        </div>
      </section>

      <FaqSection />
    </>
  )
}
