import { bairros } from "@/bairros"

export default function sitemap() {
  const baseUrl = "https://se-site-ruddy.vercel.app"

  const urls = []

  for (const cidade of bairros) {
    urls.push({
      url: `${baseUrl}/cidade/${cidade.slug}`,
      lastModified: new Date(),
    })

    for (const bairro of cidade.bairros) {
      urls.push({
        url: `${baseUrl}/cidade/${cidade.slug}/${bairro.slug}`,
        lastModified: new Date(),
      })
    }
  }

  return urls
}