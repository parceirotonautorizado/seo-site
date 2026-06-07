"use client"

import { useEffect, useMemo, useState } from "react"

type Props = {
  cidade?: string
  bairro?: string
}

const VM = [
  { id: "promo", label: "Período Promocional" },
  { id: "ate3", label: "Até R$ 3 mil" },
  { id: "t3a6", label: "De R$ 3 mil a R$ 6 mil" },
  { id: "t6a10", label: "De R$ 6 mil a R$ 10 mil" },
  { id: "t10a30", label: "De R$ 10 mil a R$ 30 mil" },
  { id: "t30p", label: "Acima de R$ 30 mil" },
]

const RECEBIMENTO = [
  { id: "d1", label: "1 dia útil" },
  { id: "d0", label: "Na hora" },
]

const BANDEIRAS = [
  { id: "mv", label: "Mastercard e Visa" },
  { id: "oa", label: "Elo e Amex" },
]

const PLANS: any = {
  promo: {
    d1: {
      mv: {
        pix: 0,
        deb: 0.57,
        cre: {
          1: 0.57,
          2: 3.97,
          3: 3.97,
          4: 4.97,
          5: 5.97,
          6: 6.97,
          7: 7.97,
          8: 7.97,
          9: 7.97,
          10: 7.97,
          11: 7.97,
          12: 7.97,
        },
      },

      oa: {
        pix: 0,
        deb: 2.57,
        cre: {
          1: 4.34,
          2: 7.02,
          3: 7.58,
          4: 8.38,
          5: 9.38,
          6: 10.38,
          7: 10.98,
          8: 11.38,
          9: 12.38,
          10: 12.88,
          11: 13.74,
          12: 13.78,
        },
      },
    },

    d0: {
      mv: {
        pix: 0,
        deb: 0.57,
        cre: {
          1: 0.57,
          2: 3.97,
          3: 3.97,
          4: 4.97,
          5: 5.97,
          6: 6.97,
          7: 7.97,
          8: 7.97,
          9: 7.97,
          10: 7.97,
          11: 7.97,
          12: 7.97,
        },
      },

      oa: {
        pix: 0,
        deb: 2.57,
        cre: {
          1: 4.34,
          2: 7.02,
          3: 7.58,
          4: 8.38,
          5: 9.38,
          6: 10.38,
          7: 10.98,
          8: 11.38,
          9: 12.38,
          10: 12.88,
          11: 13.74,
          12: 13.78,
        },
      },
    },
  },

  ate3: {
    d1: {
      mv: {
        pix: 0,
        deb: 1.69,
        cre: {
          1: 3.86,
          2: 9.86,
          3: 11.24,
          4: 12.59,
          5: 13.92,
          6: 15.22,
          7: 16.5,
          8: 17.76,
          9: 18.99,
          10: 20.19,
          11: 20.39,
          12: 20.39,
        },
      },

      oa: {
        pix: 0,
        deb: 2.98,
        cre: {
          1: 5.15,
          2: 11.3,
          3: 12.68,
          4: 14.03,
          5: 15.36,
          6: 16.66,
          7: 17.94,
          8: 19.2,
          9: 20.43,
          10: 21.78,
          11: 22.64,
          12: 22.68,
        },
      },
    },

    d0: {
      mv: {
        pix: 0,
        deb: 1.98,
        cre: {
          1: 4.86,
          2: 10.86,
          3: 12.24,
          4: 13.59,
          5: 14.92,
          6: 16.22,
          7: 17.5,
          8: 18.76,
          9: 19.99,
          10: 21.19,
          11: 21.39,
          12: 21.39,
        },
      },

      oa: {
        pix: 0,
        deb: 3.27,
        cre: {
          1: 6.15,
          2: 12.3,
          3: 13.68,
          4: 15.03,
          5: 16.36,
          6: 17.66,
          7: 18.94,
          8: 20.2,
          9: 21.43,
          10: 22.78,
          11: 23.64,
          12: 23.68,
        },
      },
    },
  },
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
      await fetch(
        "http://localhost:3001/lead",
        {
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

    window.open(
      `https://wa.me/5599999999999?text=${encodeURIComponent(
        text
      )}`,
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

          {/* MASCOTE */}
          <div className="mascot-wrap">
            <img
              src="/mascote.webp"
              alt="Mascote"
            />
          </div>

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
                  className="select"
                  value={tier}
                  onChange={(e) =>
                    setTier(e.target.value)
                  }
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
                  className="select"
                  value={recv}
                  onChange={(e) =>
                    setRecv(e.target.value)
                  }
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
                  className="select"
                  value={band}
                  onChange={(e) =>
                    setBand(e.target.value)
                  }
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

                <input
                  className="amount-input"
                  value={fM(amount)}
                  readOnly
                />

                <div className="slider-wrap">
                  <input
                    type="range"
                    min="1"
                    max="10000"
                    value={amount}
                    onChange={(e) =>
                      setAmount(
                        Number(e.target.value)
                      )
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
                          onClick={() =>
                            setSelInst(n)
                          }
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
                Taxas válidas para Visa,
                Mastercard, Elo e Amex.
              </p>

            </div>
          </div>
        </div>
      </div>

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
          border: 1px solid #ddd;
          font-size: 44px;
          font-weight: 900;
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
          color: #777;
          margin-top: 14px;
          text-align: center;
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