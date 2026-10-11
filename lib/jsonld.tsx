import { CONFIG, OG_BASE } from "@/lib/config"

type Crumb = { nome: string; path: string }

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.nome,
      item: `${CONFIG.dominio}${c.path}`,
    })),
  }
}

// Dados de produto das páginas de modelo. Quem vende é a Ton; o preço é a taxa de adesão do catálogo.
export function produtoLd(m: { nome: string; subtitulo: string; imagem: string; preco: string; pagina: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Maquininha Ton ${m.nome}`,
    description: m.subtitulo,
    image: `${CONFIG.dominio}${m.imagem}`,
    brand: { "@type": "Brand", name: "Ton" },
    offers: {
      "@type": "Offer",
      price: m.preco.replace(/[^0-9,]/g, "").replace(",", "."),
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: `${CONFIG.dominio}${m.pagina}`,
      seller: { "@type": "Organization", name: "Ton" },
    },
  }
}

// Artigo de guia. Datas no formato dd/mm/aaaa, como nas constantes de conferência.
export function artigoLd(a: { titulo: string; descricao: string; path: string; publicado: string; modificado: string; imagem?: string }) {
  const iso = (d: string) => d.split("/").reverse().join("-")
  const org = { "@type": "Organization", name: OG_BASE.siteName, url: CONFIG.dominio }
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.titulo,
    description: a.descricao,
    inLanguage: "pt-BR",
    mainEntityOfPage: `${CONFIG.dominio}${a.path}`,
    image: `${CONFIG.dominio}${a.imagem ?? "/og.jpg"}`,
    datePublished: iso(a.publicado),
    dateModified: iso(a.modificado),
    author: org,
    publisher: org,
  }
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  )
}
