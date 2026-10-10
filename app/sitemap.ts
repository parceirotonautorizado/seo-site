import { bairros } from "@/bairros"
import cidades from "@/dados/cidades-pr.json"

export default function sitemap() {
  const baseUrl = "https://www.maquininhadecartoes.com.br"
  const lastModified = new Date()

  const urls = []

  urls.push({
    url: baseUrl,
    lastModified,
    priority: 1.0,
  })

  urls.push({
    url: `${baseUrl}/cidades`,
    lastModified,
    priority: 0.9,
  })

  urls.push({
    url: `${baseUrl}/mapa-do-site`,
    lastModified,
    priority: 0.5,
  })

  for (const cidade of cidades) {
    urls.push({
      url: `${baseUrl}/cidade/${cidade.slug}`,
      lastModified,
      priority: 0.8,
    })
  }

  for (const cidade of bairros) {
    for (const bairro of cidade.bairros) {
      urls.push({
        url: `${baseUrl}/cidade/${cidade.slug}/${bairro.slug}`,
        lastModified,
        priority: 0.6,
      })
    }
  }

  return urls
}
