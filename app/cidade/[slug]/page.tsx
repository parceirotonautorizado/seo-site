export const dynamic = "force-static"

import type { Metadata } from "next"
import Hero from "@/app/components/Hero"
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

      <section
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "0 20px",
        }}
      >
        <h2>Sobre {cidade.nome}</h2>

        <p>
          {cidade.nome} faz parte da região de {cidade.regiao}, no Paraná, e possui aproximadamente {cidade.populacao} habitantes.
        </p>

        <p>
          Empresários, comerciantes e prestadores de serviços de {cidade.nome} podem utilizar maquininhas Ton para receber pagamentos por Pix, débito e crédito com taxas competitivas.
        </p>
      </section>
    </>
  )
}
