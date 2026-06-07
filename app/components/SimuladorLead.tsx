"use client"

import { useState } from "react"

type Props = {
  cidade: string
  bairro: string
}

export default function SimuladorLead({ cidade, bairro }: Props) {
  const [valor, setValor] = useState(1000)

  const taxaConcorrente = 4.99
  const taxaTon = 3.05

  const economia =
    (valor * (taxaConcorrente / 100)) -
    (valor * (taxaTon / 100))

  return (
    <section
      style={{
        padding: "60px 20px",
        margin: "60px 0",
        background: "#000",
        color: "#fff",
        borderRadius: "16px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>

        {/* HEADLINE */}
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
          💰 Quanto você está perdendo no {bairro}?
        </h2>

        {/* SUB */}
        <p style={{ color: "#ccc", marginBottom: "25px" }}>
          Simule abaixo quanto você pode economizar por mês em {cidade}
        </p>

        {/* INPUT */}
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
          style={{
            padding: "14px",
            borderRadius: "8px",
            border: "none",
            width: "100%",
            maxWidth: "300px",
            fontSize: "16px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        />

        <p style={{ fontSize: "12px", color: "#aaa", marginBottom: "20px" }}>
          Valor mensal em vendas
        </p>

        {/* RESULTADO */}
        <div
          style={{
            background: "#111",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "25px",
          }}
        >
          <p style={{ color: "#aaa", marginBottom: "5px" }}>
            Economia estimada:
          </p>

          <h3 style={{ fontSize: "32px", color: "#00D700" }}>
            R$ {economia.toFixed(2)}
          </h3>
        </div>

        {/* URGÊNCIA */}
        <p style={{ fontSize: "13px", color: "#aaa", marginBottom: "20px" }}>
          ⚠️ Quanto mais você vende, mais perde em taxas altas
        </p>

        {/* CTA */}
        <a
          href="SEU_LINK_AQUI"
          style={{
            display: "inline-block",
            background: "#00D700",
            color: "#000",
            padding: "16px 28px",
            borderRadius: "999px",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          🚀 Quero pagar menos taxas
        </a>

        <p style={{ fontSize: "12px", color: "#777", marginTop: "10px" }}>
          Leva menos de 1 minuto • Sem compromisso
        </p>

      </div>
    </section>
  )
}