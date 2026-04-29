import { bairros } from "@/bairros"

export async function generateStaticParams() {
  const paths = []

  for (const cidade in bairros) {
    for (const bairro of bairros[cidade]) {
      paths.push({
        slug: cidade,
        bairro: bairro,
      })
    }
  }

  return paths
}