"use client"

declare global {
  interface Window {
    dataLayer: any[]
  }
}

import { useEffect, useState } from "react"
import { CONFIG } from "@/lib/config"
import { VM, RECEBIMENTO, BANDEIRAS, PLANS, TAXAS_ULTIMA_VERIFICACAO } from "@/lib/taxas"

type Props = {
  cidade?: string
  bairro?: string
}

export default function Simulador({
  cidade = "Curitiba",
  bairro = "Centro",
}: Props) {
  const [tier, setTier] = useState("promo")
  const [recv, setRecv] = useState("d1")
  const [band, setBand] = useState("mv")
  const [amount, setAmount] = useState(100)
  const [selInst, setSelInst] = useState(12)
  const [parcOpen, setParcOpen] = useState(false)
  const [padOpen, setPadOpen] = useState(false)
  const [padVal, setPadVal] = useState("")

  function padPress(key: string) {
    if (key === "⌫") {
      setPadVal((v) => v.slice(0, -1))
    } else if (key === "✓") {
      const n = parseInt(padVal || "0", 10)
      if (n > 0) setAmount(Math.min(n, 999999))
      setPadOpen(false)
    } else if (key === "C") {
      setPadVal("")
    } else {
      setPadVal((v) => {
        const next = v + key
        if (parseInt(next, 10) > 999999) return v
        return next.replace(/^0+/, "") || "0"
      })
    }
  }

  function openPad() {
    setPadVal(String(amount))
    setPadOpen(true)
  }

  const padDisplay = padVal
    ? Number(padVal).toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })
    : "R$ 0"

  const currentPlan =
    PLANS?.[tier]?.[recv]?.[band]

  const device =
    typeof navigator !== "undefined"
      ? /android/i.test(navigator.userAgent)
        ? "Android"
        : /iPhone|iPad|iPod/i.test(
            navigator.userAgent
          )
        ? "Apple"
        : /Windows/i.test(
            navigator.userAgent
          )
        ? "Windows"
        : /Mac/i.test(navigator.userAgent)
        ? "Mac"
        : "Outro"
      : "Desconhecido"

  const pageUrl =
    typeof window !== "undefined"
      ? window.location.href
      : ""

  const pix = currentPlan?.pix || 0

const deb = currentPlan?.deb || 0

const cre1 =
  currentPlan?.cre?.[1] || 0

const selRate =
  currentPlan?.cre?.[selInst] || 0

const vendasMensaisLabel =
  VM.find((v) => v.id === tier)
    ?.label || ""

const recebimentoLabel =
  RECEBIMENTO.find(
    (v) => v.id === recv
  )?.label || ""

const bandeirasLabel =
  BANDEIRAS.find(
    (v) => v.id === band
  )?.label || ""

const tipoVenda =
  selInst > 1
    ? "Crédito Parcelado"
    : "Crédito"

  function calcRecv(rate: number) {
    return amount * (1 - rate / 100)
  }

  function fR(v: number) {
    return `${v.toFixed(2).replace(".", ",")}%`
  }

  function fM(v: number) {
    return v.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  async function handleLead() {
    try {
      await fetch("/api/lead",{
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
  cidade,
  bairro,

  produto: "Maquininhas",

  tipoVenda,

  parcelas: `${selInst}x`,

  vendasMensais:
    vendasMensaisLabel,

  recebimento:
    recebimentoLabel,

  bandeiras:
    bandeirasLabel,

  pix: `${pix}%`,

  debito: `${deb}%`,

  credito1x: `${cre1}%`,

  taxa: `${selRate}%`,

  valorRecebido:
    calcRecv(selRate),

  amount,

  dispositivo: device,

  url: pageUrl,

  createdAt:
    new Date().toISOString(),
}),
        }
      )
    } catch (err) {
      console.error(err)
    }

    const text = `
Olá!

Cidade:
${cidade}

Bairro:
${bairro}

Produto:
Maquininhas

Tipo:
${tipoVenda}

Parcelamento:
${selInst}x

Vendas Mensais:
${vendasMensaisLabel}

Recebimento:
${recebimentoLabel}

Bandeiras:
${bandeirasLabel}

Valor da venda:
${fM(amount)}

Taxa:
${fR(selRate)}

Valor líquido:
${fM(calcRecv(selRate))}

Dispositivo:
${device}

URL:
${pageUrl}
`
if (typeof window !== "undefined") {
  window.dataLayer = window.dataLayer || []

  window.dataLayer.push({
    event: "lead_simulador_submit",

    cidade,

    bairro,

    tipoVenda,

    parcelas: `${selInst}x`,

    vendasMensais:
      vendasMensaisLabel,

    valorVenda: amount,
  })
}
    window.open(
      `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    )
  }

  useEffect(() => {
    if (!currentPlan?.cre?.[selInst]) {
      setSelInst(12)
    }
  }, [tier, recv, band])

  return (
    <section className="calc-section">
      <h2 className="calc-title">
        Simule as taxas das suas vendas
      </h2>

      {/* TABS */}
      <div className="tabs-wrap">
        <div className="tabs-inner">
          <button className="tab-btn active">
            Maquininhas
          </button>

          <button className="tab-btn">
            TapTon
          </button>
        </div>
      </div>

      {/* CARD */}
      <div className="main-card">
        <div className="card-body">


          <div className="left-panel">

            {/* CONTROLES */}
            <div className="controls-side">

              <div className="panel-title">
                Maquininhas
              </div>

{/* VENDAS */}
<div className="select-row">

  <div className="select-label">
    Vendas Mensais
  </div>

  <select
    aria-label="Vendas Mensais"
    className="select"

    value={tier}

    onChange={(e) => {

      setTier(e.target.value)

      window.dataLayer =
        window.dataLayer || []

      window.dataLayer.push({
        event:
          "simulador_vendas_mensais",

        valor:
          e.target.value,
      })

    }}
  >

    {VM.map((v) => (

      <option
        key={v.id}

        value={v.id}
      >
        {v.label}
      </option>

    ))}

  </select>

</div>

{/* RECEBIMENTO */}
<div className="select-row">

  <div className="select-label">
    Recebimento
  </div>

  <select
    aria-label="Recebimento"
    className="select"

    value={recv}

    onChange={(e) => {

      setRecv(e.target.value)

      window.dataLayer =
        window.dataLayer || []

      window.dataLayer.push({
        event:
          "simulador_recebimento",

        valor:
          e.target.value,
      })

    }}
  >

    {RECEBIMENTO.map((v) => (

      <option
        key={v.id}

        value={v.id}
      >
        {v.label}
      </option>

    ))}

  </select>

</div>

{/* BANDEIRA */}
<div className="select-row">

  <div className="select-label">
    Bandeiras
  </div>

  <select
    aria-label="Bandeiras"
    className="select"

    value={band}

    onChange={(e) => {

      setBand(e.target.value)

      window.dataLayer =
        window.dataLayer || []

      window.dataLayer.push({
        event:
          "simulador_bandeiras",

        valor:
          e.target.value,
      })

    }}
  >

    {BANDEIRAS.map((v) => (

      <option
        key={v.id}

        value={v.id}
      >
        {v.label}
      </option>

    ))}

  </select>

</div>

              {/* VALOR */}
              <div className="amount-section">
                <div className="amount-label">
                  Valor da venda
                </div>

                <button
                  className="amount-input"
                  onClick={openPad}
                  title="Clique para digitar o valor"
                >
                  {fM(amount)}
                  <span className="amount-edit-icon">✎</span>
                </button>

                <div className="slider-wrap">
                  <input
                    type="range"
                    aria-label="Valor da venda"
                    min="1"
                    max="100000"
                    value={amount}
                    onChange={(e) =>
                      setAmount(Number(e.target.value))
                    }
                  />
                </div>
              </div>
            </div>

            {/* RESULTADOS */}
            <div className="results-side">

              {/* PIX */}
              <div className="result-row">
                <div>
                  <div className="res-type">
                    Pix
                  </div>

                  <div className="res-rate">
                    {fR(pix)}
                  </div>
                </div>

                <div className="res-right">
                  <div className="res-recv-label">
                    Você recebe
                  </div>

                  <div className="res-recv-value">
                    {fM(calcRecv(pix))}
                  </div>
                </div>
              </div>

              {/* DÉBITO */}
              <div className="result-row">
                <div>
                  <div className="res-type">
                    Débito
                  </div>

                  <div className="res-rate">
                    {fR(deb)}
                  </div>
                </div>

                <div className="res-right">
                  <div className="res-recv-label">
                    Você recebe
                  </div>

                  <div className="res-recv-value">
                    {fM(calcRecv(deb))}
                  </div>
                </div>
              </div>

              {/* 1X */}
              <div className="result-row">
                <div>
                  <div className="res-type">
                    Crédito 1x
                  </div>

                  <div className="res-rate">
                    {fR(cre1)}
                  </div>
                </div>

                <div className="res-right">
                  <div className="res-recv-label">
                    Você recebe
                  </div>

                  <div className="res-recv-value">
                    {fM(calcRecv(cre1))}
                  </div>
                </div>
              </div>

              {/* PARCELADO */}
             
                <div
                className="result-row clickable"
              
                onClick={() =>
                  setParcOpen(!parcOpen)
                }
              >
                
                <div>

                  <div className="res-type">
                    Crédito {selInst}x
                  </div>

                  <div className="res-rate">
                    {fR(selRate)}
                  </div>

                </div>

                <div className="res-right">
                  <div className="res-recv-label">
                    Você recebe
                  </div>

                  <div className="res-recv-value">
                    {fM(calcRecv(selRate))}
                  </div>
                </div>
              </div>

              {/* EXPANSÃO */}
              {parcOpen && (
                <div className="parc-expand">

                  <div className="parc-pills">
                    {Object.keys(
                      currentPlan?.cre || {}
                    )
                      .map(Number)
                      .filter((n) => n >= 2)
                      .map((n) => (
                        <button
                          key={n}
                          className={`parc-pill ${
                            selInst === n
                              ? "active"
                              : ""
                          }`}
                          onClick={() => {

                            setSelInst(n)
                          
                            window.dataLayer =
                              window.dataLayer || []
                          
                            window.dataLayer.push({
                          
                              event:
                                "simulador_parcelas",
                          
                              parcelas: n,
                          
                            })
                          
                          }}
                        >
                          {n}x
                        </button>
                      ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <button
                className="cta-btn"
                onClick={handleLead}
              >
                💬 Pedir maquininha
              </button>

              <p className="calc-note">
                Taxas verificadas em {TAXAS_ULTIMA_VERIFICACAO} · Válidas para Visa, Mastercard, Elo e Amex.
                Pix na maquininha: 0% no período promocional e, depois, 0% com chave Pix cadastrada na Conta Ton
                (0,49% sem chave). Parcelas de 13x a 21x valem só para T3 e T3 Smart. TapTon e link de pagamento têm taxas próprias.
                Valores sujeitos a alteração pela Ton.
                Confirme as taxas atuais em{" "}
                <a href="https://ton.com.br" target="_blank" rel="noopener noreferrer" className="calc-note-link">
                  ton.com.br
                </a>
                {" "}antes de contratar. Somos um Parceiro Autorizado Ton, não a empresa Ton.
              </p>

            </div>
          </div>
        </div>
      </div>

      {/* TECLADO NUMÉRICO */}
      {padOpen && (
        <div className="pad-overlay" onClick={() => setPadOpen(false)}>
          <div className="pad-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pad-header">
              <span className="pad-label">Valor da venda</span>
              <button className="pad-close" onClick={() => setPadOpen(false)}>✕</button>
            </div>

            <div className="pad-display">{padDisplay}</div>

            <div className="pad-grid">
              {["1","2","3","4","5","6","7","8","9","C","0","⌫"].map((k) => (
                <button
                  key={k}
                  className={`pad-key${k === "C" ? " pad-key-clear" : ""}${k === "⌫" ? " pad-key-back" : ""}`}
                  onClick={() => padPress(k)}
                >
                  {k}
                </button>
              ))}
            </div>

            <button className="pad-confirm" onClick={() => padPress("✓")}>
              Confirmar
            </button>
          </div>
        </div>
      )}

      {/* CSS */}
      <style jsx>{`
        .calc-section {
          padding: 60px 16px;
          background: #f4f5f4;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }

        .calc-title {
          font-size: 42px;
          font-weight: 900;
          text-align: center;
          line-height: 1.1;
        }

        .tabs-wrap {
          display: flex;
          justify-content: center;
        }

        .tabs-inner {
          background: #eef1f0;
          border-radius: 999px;
          padding: 8px;
          display: flex;
          gap: 8px;
        }

        .tab-btn {
          border: none;
          background: transparent;
          padding: 14px 24px;
          border-radius: 999px;
          font-weight: 700;
          cursor: pointer;
        }

        .tab-btn.active {
          background: white;
          color: #05751a;
        }

        .main-card {
          width: 100%;
          max-width: 1100px;
          background: #88ff00;
          border-radius: 40px;
          padding: 6px;
        }

        .card-body {
          display: flex;
          background: white;
          border-radius: 36px;
          overflow: hidden;
        }

        .mascot-wrap {
          width: 250px;
          background: #88ff00;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .mascot-wrap img {
          width: 220px;
        }

        .left-panel {
          flex: 1;
          display: flex;
        }

        .controls-side {
          width: 50%;
          padding: 40px 24px;
          border-right: 1px solid #eee;
        }

        .results-side {
          width: 50%;
          padding: 40px 24px;
          display: flex;
          flex-direction: column;
        }

        .panel-title {
          font-size: 34px;
          font-weight: 900;
          color: #05751a;
          margin-bottom: 30px;
          font-style: italic;
        }

        .select-row {
          margin-bottom: 20px;
        }

        .select-label {
          font-size: 13px;
          color: #666;
          margin-bottom: 8px;
        }

        .select {
          width: 100%;
          padding: 14px;
          border-radius: 14px;
          border: 1px solid #ddd;
          font-size: 15px;
          font-weight: 700;
        }

        .amount-label {
          font-size: 13px;
          color: #666;
          margin-bottom: 8px;
        }

        .amount-input {
          width: 100%;
          padding: 18px;
          border-radius: 14px;
          border: 2px solid #ddd;
          font-size: 44px;
          font-weight: 900;
          background: #fff;
          cursor: pointer;
          text-align: left;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          transition: border-color 0.2s;
          color: #1a1a1a;
        }

        .amount-input:hover {
          border-color: #006e00;
        }

        .amount-edit-icon {
          font-size: 20px;
          color: #006e00;
          opacity: 0.7;
          flex-shrink: 0;
        }

        /* ── TECLADO NUMÉRICO ── */
        .pad-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          z-index: 1000;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .pad-modal {
          background: #fff;
          border-radius: 28px 28px 0 0;
          padding: 24px 20px 32px;
          width: 100%;
          max-width: 420px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          animation: slideUp 0.22s ease;
        }

        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }

        .pad-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .pad-label {
          font-size: 14px;
          font-weight: 700;
          color: #666;
        }

        .pad-close {
          background: #f0f0f0;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #555;
        }

        .pad-display {
          font-size: 48px;
          font-weight: 900;
          color: #1a1a1a;
          text-align: center;
          padding: 12px 0 4px;
          letter-spacing: -1px;
          min-height: 70px;
        }

        .pad-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .pad-key {
          background: #f4f5f4;
          border: none;
          border-radius: 18px;
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          height: 72px;
          cursor: pointer;
          transition: background 0.12s, transform 0.1s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pad-key:active {
          background: #e0e0e0;
          transform: scale(0.94);
        }

        .pad-key-clear {
          color: #e05a00;
          background: #fff4ee;
        }

        .pad-key-clear:active {
          background: #ffe0cc;
        }

        .pad-key-back {
          color: #555;
          font-size: 24px;
        }

        .pad-confirm {
          background: #006e00;
          color: #fff;
          border: none;
          border-radius: 18px;
          height: 68px;
          font-size: 18px;
          font-weight: 800;
          cursor: pointer;
          transition: background 0.2s;
          letter-spacing: 0.3px;
        }

        .pad-confirm:hover {
          background: #003c00;
        }

        .slider-wrap {
          margin-top: 14px;
        }

        input[type="range"] {
          width: 100%;
        }

        .result-row {
          display: flex;
          justify-content: space-between;
          padding: 16px 0;
          border-bottom: 1px solid #eee;
        }

        .clickable {
          cursor: pointer;
        }

        .res-type {
          font-size: 15px;
          font-weight: 700;
        }

        .res-rate {
          font-size: 28px;
          font-weight: 900;
          color: #05751a;
        }

        .res-right {
          text-align: right;
        }

        .res-recv-label {
          font-size: 12px;
          color: #666;
        }

        .res-recv-value {
          font-size: 28px;
          font-weight: 900;
        }

        .parc-expand {
          background: #f7f7f7;
          padding: 16px;
          border-radius: 14px;
          margin-top: 12px;
        }

        .parc-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .parc-pill {
          border: none;
          padding: 10px 14px;
          border-radius: 999px;
          background: white;
          font-weight: 700;
          cursor: pointer;
        }

        .parc-pill.active {
          background: #05751a;
          color: white;
        }

        .cta-btn {
          margin-top: 28px;
          background: #20252a;
          color: white;
          border: none;
          border-radius: 999px;
          padding: 18px;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
        }

        .calc-note {
          font-size: 12px;
          color: #5f5f5f;
          margin-top: 14px;
          text-align: center;
          line-height: 1.6;
        }

        .calc-note-link {
          color: #006e00;
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .card-body {
            flex-direction: column;
          }

          .left-panel {
            flex-direction: column;
          }

          .controls-side,
          .results-side {
            width: 100%;
          }

          .mascot-wrap {
            width: 100%;
          }

          .calc-title {
            font-size: 30px;
          }

          .amount-input {
            font-size: 32px;
          }

          .res-rate,
          .res-recv-value {
            font-size: 22px;
          }
        }
      `}</style>
    </section>
  )
}
