export const dynamic = "force-static"
export const dynamicParams = false

import type { Metadata } from "next"
import Guias from "@/app/components/Guias"
import { notFound } from "next/navigation"
import cidades from "@/dados/cidades-pr.json"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"
import { bairros } from "@/bairros"
import Hero from "@/app/components/Hero"
import BairroConteudo from "@/app/components/BairroConteudo"
import { preposicao } from "@/lib/bairroConteudo"
import Breadcrumb from "@/app/components/Breadcrumb"
import TaxasDestaque from "@/app/components/TaxasDestaque"
import Modelos from "@/app/components/Modelos"
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

  const todos = bairros.find((c) => c.slug === slug)?.bairros ?? []

  return { cidade: cidade.nome, bairro: bairro.nome, dados: bairro, todos, em: preposicao(bairro.slug) }
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug, bairro } = await params

  const nomes = buscar(slug, bairro)
  const url = `${CONFIG.dominio}/cidade/${slug}/${bairro}`
  const base = `Maquininha Ton ${nomes.em} ${nomes.bairro}, ${nomes.cidade}`
  const title = base.length <= 41 ? `${base} | Taxas e Modelos` : `${base} | Taxas`
  const description = `Maquininha Ton ${nomes.em} ${nomes.bairro}, em ${nomes.cidade}: como é o comércio do bairro, qual modelo combina, taxas e entrega com frete grátis.`

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      ...OG_BASE,
      title: `Maquininha Ton ${nomes.em} ${nomes.bairro}, ${nomes.cidade}`,
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

      <Hero cidade={cidadeFormatada} bairro={bairroFormatado} em={nomes.em} />

      <TaxasDestaque />

      <Modelos />

      <Breadcrumb cidade={cidadeFormatada} cidadeSlug={slug} bairro={bairroFormatado} />

      <BairroConteudo bairro={nomes.dados} cidade={cidadeFormatada} cidadeSlug={slug} todos={nomes.todos} />

      <Guias />

      <section id="simulador">
        <Simulador cidade={cidadeFormatada} bairro={bairroFormatado} />
      </section>

      <FaqSection />
    </>
  )
}
