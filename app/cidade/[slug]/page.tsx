export const dynamic = "force-static"

import { cidades } from "@/cidades"
import Hero from "@/app/components/Hero"

export async function generateStaticParams() {
  return cidades.map((cidade) => ({
    slug: cidade.slug,
  }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function CidadePage({ params }: Props) {
  const { slug } = await params

  const cidadeFormatada = slug.replace(/-/g, " ")

  return <Hero cidade={cidadeFormatada} />
}
