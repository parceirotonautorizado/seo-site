export const dynamic = "force-static"
export const dynamicParams = false

import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Hero from "@/app/components/Hero"
import TaxasDestaque from "@/app/components/TaxasDestaque"
import Simulador from "@/app/components/Simulador"
import FaqSection from "@/app/components/FaqSection"
import { CONFIG, OG_BASE } from "@/lib/config"
import cidades from "@/dados/cidades-pr.json"
import { bairros } from "@/bairros"
import Breadcrumb from "@/app/components/Breadcrumb"
import CidadeConteudo from "@/app/components/CidadeConteudo"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"

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
    notFound()
  }

  const title = `Maquininhas Ton em ${cidade.nome} | Menores Taxas`
  const description = `Maquininha Ton em ${cidade.nome}: qual modelo combina com o comércio local, taxas, entrega com frete grátis e dados das ${cidade.empresas.toLocaleString("pt-BR")} empresas da cidade.`
  const url = `${CONFIG.dominio}/cidade/${slug}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...OG_BASE,
      title,
      description,
      url,
    },
  }
}

export default async function CidadePage({ params }: Props) {
  const { slug } = await params

  const cidade = cidades.find((c) => c.slug === slug)

  if (!cidade) {
    notFound()
  }

  const bairrosDaCidade = bairros.find((c) => c.slug === slug)?.bairros ?? []

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Cidades", path: "/cidades" },
          { nome: cidade.nome, path: `/cidade/${slug}` },
        ])}
      />

      <Hero cidade={cidade.nome} />

      <Breadcrumb cidade={cidade.nome} cidadeSlug={slug} />

      <CidadeConteudo cidade={cidade} />

      <TaxasDestaque />

      {bairrosDaCidade.length > 0 && (
        <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px 60px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 900, marginBottom: "16px", color: "#1a1a1a" }}>
            Maquininha Ton nos bairros de {cidade.nome}
          </h2>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: "4px 16px",
            }}
          >
            {bairrosDaCidade.map((b) => (
              <li key={b.slug}>
                <a
                  href={`/cidade/${slug}/${b.slug}`}
                  style={{ color: "#00702f", textDecoration: "none", display: "inline-block", padding: "10px 0" }}
                >
                  {b.nome}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section id="simulador">
        <Simulador cidade={cidade.nome} bairro="Centro" />
      </section>

      <FaqSection />
    </>
  )
}
