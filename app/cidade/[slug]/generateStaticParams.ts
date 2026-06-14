import { bairros } from "@/bairros"

export async function generateStaticParams() {
  return bairros.flatMap((cidade) =>
    cidade.bairros.map((bairro) => ({
      slug: cidade.slug,
      bairro: bairro.slug,
    }))
  )
}
