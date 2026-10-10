import type { Metadata } from "next"
import cidades from "@/dados/cidades-pr.json"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"

export const metadata: Metadata = {
  title: "Maquininha Ton nas cidades do Paraná | Lista completa",
  description:
    "Veja a lista das 399 cidades do Paraná com informações sobre a maquininha Ton: taxas, modelos e pedido com desconto de parceiro.",
  alternates: { canonical: `${CONFIG.dominio}/cidades` },
  openGraph: {
    ...OG_BASE,
    title: "Maquininha Ton nas cidades do Paraná",
    description: "Lista das 399 cidades do Paraná atendidas, organizadas por região.",
    url: `${CONFIG.dominio}/cidades`,
  },
}

export default function CidadesPage() {
  const regioes = new Map<string, typeof cidades>()

  for (const cidade of cidades) {
    const lista = regioes.get(cidade.regiao) ?? []
    lista.push(cidade)
    regioes.set(cidade.regiao, lista)
  }

  const ordenadas = [...regioes.entries()].sort((a, b) => a[0].localeCompare(b[0], "pt-BR"))

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Cidades", path: "/cidades" },
        ])}
      />

      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 20px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 900, marginBottom: "12px", color: "#1a1a1a" }}>
          Maquininha Ton nas cidades do Paraná
        </h1>

        <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "40px", maxWidth: "760px" }}>
          A Ton entrega em todo o Paraná com frete grátis. Escolha a sua cidade para ver as taxas, os modelos e pedir
          com o desconto de parceiro. São {cidades.length} municípios, organizados por região.
        </p>

        {ordenadas.map(([regiao, lista]) => (
          <div key={regiao} style={{ marginBottom: "36px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "#1a1a1a" }}>
              Região de {regiao}
            </h2>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "4px 16px",
              }}
            >
              {lista.map((cidade) => (
                <li key={cidade.slug}>
                  <a
                    href={`/cidade/${cidade.slug}`}
                    style={{ color: "#00702f", textDecoration: "none", display: "inline-block", padding: "10px 0" }}
                  >
                    {cidade.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  )
}
