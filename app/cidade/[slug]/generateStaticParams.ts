import { cidades } from "@/cidades"

export async function generateStaticParams() {
  return cidades.map((cidade) => ({
    slug: cidade
  }))
}