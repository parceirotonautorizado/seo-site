export const dynamic = "force-static"

import type { Metadata } from "next"
import { bairros } from "@/bairros"
import Hero from "@/app/components/Hero"
import { gerarTexto } from "@/lib/seoText"
import Breadcrumb from "@/app/components/Breadcrumb"
import TaxasDestaque from "@/app/components/TaxasDestaque"
import FaqSection from "@/app/components/FaqSection"
import { CONFIG } from "@/lib/config"

type Props = {
  params: Promise<{
    slug: string
    bairro: string
  }>
}

export async function generateStaticParams() {
  const params = []

  for (const cidade of bairros) {
    for (const bairro of cidade.bairros) {
      params.push({
        slug: cidade.slug,
        bairro: bairro.slug,
      })
    }
  }

  return params
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug, bairro } = await params

  const cidade = slug.replace(/-/g, " ")
  const bairroNome = bairro.replace(/-/g, " ")

  return {
    title: `Maquininha Ton no ${bairroNome} em ${cidade} | Menores Taxas`,

    description: `Compare taxas, conheça vantagens e descubra a melhor maquininha Ton
para negócios do ${bairroNome}, em ${cidade}.`,

    alternates: {
      canonical: `https://www.maquininhadecartoes.com.br/cidade/${slug}/${bairro}`,
    },

    openGraph: {
      title: `Maquininha Ton no ${bairroNome} em ${cidade}`,

      description: `Conheça as melhores opções de maquininhas Ton no ${bairroNome}, em
${cidade}.`,

      type: "website",
    },
  }
}

export default async function BairroPage({ params }: Props) {
  const { slug, bairro } = await params

  const cidadeFormatada = slug.replace(/-/g, " ")
  const bairroFormatado = bairro.replace(/-/g, " ")

  const texto = gerarTexto(cidadeFormatada, bairroFormatado)

  return (
    <>
      <Hero cidade={cidadeFormatada} bairro={bairroFormatado} />

      <Breadcrumb cidade={cidadeFormatada} bairro={bairroFormatado} />

      <TaxasDestaque />

      <section
        style={{
          padding: "60px 20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "20px", color: "#1a1a1a" }}>
          Maquininha Ton no {bairroFormatado} em {cidadeFormatada}
        </h1>

        <p style={{ lineHeight: "1.8", color: "#555", marginBottom: "28px", whiteSpace: "pre-line" }}>
          {texto}
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
            marginBottom: "60px",
          }}
        >
          Pedir Maquininha no {bairroFormatado} →
        </a>
      </section>

      <FaqSection />
    </>
  )
}
