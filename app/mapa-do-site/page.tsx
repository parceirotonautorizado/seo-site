import type { Metadata } from "next"
import cidades from "@/dados/cidades-pr.json"
import { bairros } from "@/bairros"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"

export const metadata: Metadata = {
  title: "Mapa do site | Maquininhas Ton Paraná",
  description:
    "Todas as páginas do site em um só lugar: maquininha Ton nas 399 cidades do Paraná e nos bairros de Curitiba.",
  alternates: { canonical: `${CONFIG.dominio}/mapa-do-site` },
  openGraph: {
    ...OG_BASE,
    title: "Mapa do site | Maquininhas Ton Paraná",
    description: "Todas as páginas do site: cidades do Paraná e bairros de Curitiba.",
    url: `${CONFIG.dominio}/mapa-do-site`,
  },
}

const grade = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "2px 16px",
} as const

const link = { color: "#00702f", textDecoration: "none", display: "inline-block", padding: "9px 0" } as const
const h2 = { fontSize: "24px", fontWeight: 800, margin: "40px 0 12px", color: "#1a1a1a" } as const
const h3 = { fontSize: "17px", fontWeight: 700, margin: "24px 0 8px", color: "#1a1a1a" } as const

export default function MapaDoSite() {
  const regioes = new Map<string, typeof cidades>()

  for (const cidade of cidades) {
    const lista = regioes.get(cidade.regiao) ?? []
    lista.push(cidade)
    regioes.set(cidade.regiao, lista)
  }

  const ordenadas = [...regioes.entries()].sort((a, b) => a[0].localeCompare(b[0], "pt-BR"))
  const nomeCidade = (slug: string) => cidades.find((c) => c.slug === slug)?.nome ?? slug

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Mapa do site", path: "/mapa-do-site" },
        ])}
      />

      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 20px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 900, marginBottom: "12px", color: "#1a1a1a" }}>Mapa do site</h1>

        <p style={{ color: "#4a4a4a", lineHeight: 1.7, maxWidth: "760px" }}>
          Todas as páginas do site em um só lugar: {cidades.length} cidades do Paraná e{" "}
          {bairros.reduce((s, c) => s + c.bairros.length, 0)} bairros.
        </p>

        <h2 style={h2}>Páginas principais</h2>
        <ul style={grade}>
          <li><a href="/" style={link}>Página inicial</a></li>
          <li><a href="/#taxas" style={link}>Taxas da Ton</a></li>
          <li><a href="/#modelos" style={link}>Modelos de maquininha</a></li>
          <li><a href="/#simulador" style={link}>Simulador de taxas</a></li>
          <li><a href="/#faq" style={link}>Dúvidas frequentes</a></li>
          <li><a href="/cidades" style={link}>Cidades atendidas</a></li>
        </ul>

        {bairros.map((c) => (
          <div key={c.slug}>
            <h2 style={h2}>Bairros de {nomeCidade(c.slug)}</h2>
            <ul style={grade}>
              {c.bairros.map((b) => (
                <li key={b.slug}>
                  <a href={`/cidade/${c.slug}/${b.slug}`} style={link}>{b.nome}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <h2 style={h2}>Cidades do Paraná, por região</h2>
        {ordenadas.map(([regiao, lista]) => (
          <div key={regiao}>
            <h3 style={h3}>Região de {regiao}</h3>
            <ul style={grade}>
              {lista.map((cidade) => (
                <li key={cidade.slug}>
                  <a href={`/cidade/${cidade.slug}`} style={link}>{cidade.nome}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  )
}
