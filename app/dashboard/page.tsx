"use client"

import { useEffect, useState } from "react"

export default function Dashboard() {
  const [leads, setLeads] = useState<any[]>([])

  useEffect(() => {
    async function carregar() {
      try {
        const res = await fetch(
          "http://localhost:3001/leads"
        )

        const data =
          await res.json()

        setLeads(data)

      } catch (err) {
        console.error(err)
      }
    }

    carregar()
  }, [])

  function money(v: number) {
    return Number(v || 0)
      .toLocaleString(
        "pt-BR",
        {
          style: "currency",
          currency: "BRL",
        }
      )
  }

  return (
    <main
      style={{
        padding: "40px",
        fontFamily: "Arial",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "900",
          marginBottom: "10px",
        }}
      >
        📊 Dashboard de Leads
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "30px",
        }}
      >
        Leads capturados
        automaticamente pelo
        simulador
      </p>

      <div
        style={{
          display: "grid",
          gap: "20px",
        }}
      >
        {leads.length === 0 && (
          <div>
            Nenhum lead ainda...
          </div>
        )}

        {leads.map(
          (lead, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "24px",
                borderRadius: "18px",
                border:
                  "1px solid #eee",
                boxShadow:
                  "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >

              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: "900",
                  marginBottom:
                    "18px",
                  color: "#05751a",
                }}
              >
                🟢 Nova Simulação
              </h2>

              <div
                style={{
                  display: "grid",
                  gap: "8px",
                }}
              >

                <p>
                  <strong>
                    Cidade:
                  </strong>{" "}
                  {lead.cidade ||
                    "--"}
                </p>

                <p>
                  <strong>
                    Bairro:
                  </strong>{" "}
                  {lead.bairro ||
                    "--"}
                </p>

                <p>
                  <strong>
                    Produto:
                  </strong>{" "}
                  {lead.produto ||
                    "--"}
                </p>

                <p>
                  <strong>
                    Tipo Venda:
                  </strong>{" "}
                  {lead.tipoVenda ||
                    "--"}
                </p>

                <p>
                  <strong>
                    Parcelas:
                  </strong>{" "}
                  {lead.parcelas ||
                    "--"}
                </p>

                <p>
                  <strong>
                    Vendas Mensais:
                  </strong>{" "}
                  {lead.vendasMensais ||
                    "--"}
                </p>

                <p>
                  <strong>
                    Recebimento:
                  </strong>{" "}
                  {lead.recebimento ||
                    "--"}
                </p>

                <p>
                  <strong>
                    Bandeiras:
                  </strong>{" "}
                  {lead.bandeiras ||
                    "--"}
                </p>

                <p>
                  <strong>
                    Taxa:
                  </strong>{" "}
                  {lead.taxa ||
                    "--"}
                </p>

                <p>
                  <strong>
                    Valor da Venda:
                  </strong>{" "}
                  {money(
                    lead.amount
                  )}
                </p>

                <p>
                  <strong>
                    Valor Líquido:
                  </strong>{" "}
                  {money(
                    lead.valorRecebido
                  )}
                </p>

                <p>
                  <strong>
                    Dispositivo:
                  </strong>{" "}
                  {lead.dispositivo ||
                    "--"}
                </p>

                <p
                  style={{
                    wordBreak:
                      "break-all",
                  }}
                >
                  <strong>
                    URL:
                  </strong>{" "}
                  {lead.url ||
                    "--"}
                </p>

                <p
                  style={{
                    fontSize:
                      "12px",
                    color: "#777",
                    marginTop:
                      "12px",
                  }}
                >
                  {lead.createdAt}
                </p>

              </div>
            </div>
          )
        )}
      </div>
    </main>
  )
}