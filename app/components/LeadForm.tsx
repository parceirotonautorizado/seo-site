"use client"

declare global {
  interface Window {
    dataLayer: any[]
  }
}

import { useState } from "react"

export default function LeadForm() {
  const [nome, setNome] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [cidade, setCidade] = useState("")
  const [bairro, setBairro] = useState("")
  const [negocio, setNegocio] = useState("")
  const [faturamento, setFaturamento] = useState("")

  const [enviado, setEnviado] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault()

    setLoading(true)

    try {
      await fetch("/api/lead", {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          nome,
          whatsapp,
          cidade,
          bairro,
          negocio,
          faturamento,

          origem: window.location.href,

          createdAt:
            new Date().toISOString(),
        }),
      })

      setEnviado(true)
if (typeof window !== "undefined") {
  window.dataLayer = window.dataLayer || []

  window.dataLayer.push({
    event: "lead_form_submit",

    nome,

    cidade,

    bairro,

    negocio,
  })
}
    } catch (error) {
      console.error(error)
    }

    setLoading(false)
  }

  if (enviado) {
    return (
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "16px",
          textAlign: "center",
          boxShadow:
            "0 8px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "10px",
          }}
        >
          Ok {nome},
          seu interesse foi registrado.
        </h2>

        <p
          style={{
            color: "#666",
          }}
        >
          Aguarde que nossa equipe
          entrará em contato! 🙂
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}

      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",

        background: "#fff",

        padding: "40px",

        borderRadius: "20px",

        boxShadow:
          "0 8px 30px rgba(0,0,0,0.08)",
      }}
    >
      <input
        placeholder="Nome"

        value={nome}

        required

        onChange={(e) =>
          setNome(e.target.value)
        }

        style={inputStyle}
      />

      <input
        placeholder="WhatsApp"

        value={whatsapp}

        required

        onChange={(e) =>
          setWhatsapp(e.target.value)
        }

        style={inputStyle}
      />

      <input
        placeholder="Cidade"

        value={cidade}

        onChange={(e) =>
          setCidade(e.target.value)
        }

        style={inputStyle}
      />

      <input
        placeholder="Bairro"

        value={bairro}

        onChange={(e) =>
          setBairro(e.target.value)
        }

        style={inputStyle}
      />

      <input
        placeholder="Qual seu negócio?"

        value={negocio}

        onChange={(e) =>
          setNegocio(e.target.value)
        }

        style={inputStyle}
      />

      <input
        placeholder="Quanto vende por mês?"

        value={faturamento}

        onChange={(e) =>
          setFaturamento(e.target.value)
        }

        style={inputStyle}
      />

      <button
        type="submit"

        disabled={loading}

        style={{
          background: "#00D700",

          border: "none",

          padding: "18px",

          borderRadius: "999px",

          fontWeight: "900",

          fontSize: "16px",

          cursor: "pointer",
        }}
      >
        {loading
          ? "Enviando..."
          : "🚀 Solicitar contato"}
      </button>
    </form>
  )
}

const inputStyle = {
  width: "100%",

  padding: "16px",

  borderRadius: "12px",

  border: "1px solid #ddd",

  fontSize: "16px",
}
