import { bairros } from "@/bairros"

export async function generateStaticParams() {
  const paths: { slug: string; bairro: string }[] = []

  Object.entries(bairros).forEach(([cidade, listaBairros]) => {
    listaBairros.forEach((bairro) => {
      paths.push({
        slug: cidade,
        bairro,
      })
    })
  })

  return paths
}
