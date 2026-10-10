export const dynamic = "force-static"
export const dynamicParams = false

import type { Metadata } from "next"
import { notFound } from "next/navigation"
import cidades from "@/dados/cidades-pr.json"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"
import { bairros } from "@/bairros"
import Hero from "@/app/components/Hero"
import { gerarTexto } from "@/lib/seoText"
import Breadcrumb from "@/app/components/Breadcrumb"
import TaxasDestaque from "@/app/components/TaxasDestaque"
import Simulador from "@/app/components/Simulador"
import FaqSection from "@/app/components/FaqSection"
import { CONFIG, OG_BASE } from "@/lib/config"

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

function buscar(slug: string, bairroSlug: string) {
  const cidade = cidades.find((c) => c.slug === slug)
  const bairro = bairros
    .find((c) => c.slug === slug)
    ?.bairros.find((b) => b.slug === bairroSlug)

  if (!cidade || !bairro) {
    notFound()
  }

  return { cidade: cidade.nome, bairro: bairro.nome }
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug, bairro } = await params

  const nomes = buscar(slug, bairro)
  const url = `${CONFIG.dominio}/cidade/${slug}/${bairro}`
  const title = `Maquininha Ton no ${nomes.bairro} em ${nomes.cidade} | Menores Taxas`
  const description = `Compare taxas, conheça vantagens e descubra a melhor maquininha Ton para negócios do ${nomes.bairro}, em ${nomes.cidade}.`

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      ...OG_BASE,
      title: `Maquininha Ton no ${nomes.bairro} em ${nomes.cidade}`,
      description,
      url,
    },
  }
}

export default async function BairroPage({ params }: Props) {
  const { slug, bairro } = await params

  const nomes = buscar(slug, bairro)
  const cidadeFormatada = nomes.cidade
  const bairroFormatado = nomes.bairro

  const texto = gerarTexto(cidadeFormatada, bairroFormatado)

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Cidades", path: "/cidades" },
          { nome: cidadeFormatada, path: `/cidade/${slug}` },
          { nome: bairroFormatado, path: `/cidade/${slug}/${bairro}` },
        ])}
      />

      <Hero cidade={cidadeFormatada} bairro={bairroFormatado} />

      <Breadcrumb cidade={cidadeFormatada} cidadeSlug={slug} bairro={bairroFormatado} />

      <TaxasDestaque />

      <section
        style={{
          padding: "60px 20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "20px", color: "#1a1a1a" }}>
          Aceitar cartão e Pix no {bairroFormatado}
        </h2>

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

      <section id="simulador">
        <Simulador cidade={cidadeFormatada} bairro={bairroFormatado} />
      </section>

      <FaqSection />
    </>
  )
}
