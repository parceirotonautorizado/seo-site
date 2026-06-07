"use client"

import { useEffect, useState } from "react"

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
        deb: 0.74,
        cre: {
          1: 2.99,
          2: 5.99,
          3: 7.99,
          4: 8.99,
          5: 9.99,
          6: 10.99,
          7: 11.99,
          8: 12.99,
          9: 13.99,
          10: 14.99,
          11: 15.99,
          12: 16.99,
        },
      },

      oa: {
        pix: 0,
        deb: 0.74,
        cre: {
          1: 3.99,
          2: 6.99,
          3: 8.99,
          4: 9.99,
          5: 10.99,
          6: 11.99,
          7: 12.99,
          8: 13.99,
          9: 14.99,
          10: 15.99,
          11: 16.99,
          12: 17.99,
        },
      },
    },

    d0: {
      mv: {
        pix: 0,
        deb: 1.49,
        cre: {
          1: 4.99,
          2: 7.49,
          3: 8.99,
          4: 9.99,
          5: 10.99,
          6: 11.99,
          7: 12.99,
          8: 13.99,
          9: 14.99,
          10: 15.99,
          11: 16.99,
          12: 17.99,
        },
      },

      oa: {
        pix: 0,
        deb: 1.49,
        cre: {
          1: 5.99,
          2: 8.49,
          3: 9.99,
          4: 10.99,
          5: 11.99,
          6: 12.99,
          7: 13.99,
          8: 14.99,
          9: 15.99,
          10: 16.99,
          11: 17.99,
          12: 18.99,
        },
      },
    },
  },

  ate3: {
    d1: {
      mv: {
        pix: 0,
        deb: 1.89,
        cre: {
          1: 4.99,
          2: 7.99,
          3: 8.99,
          4: 9.99,
          5: 10.99,
          6: 11.99,
          7: 12.99,
          8: 13.99,
          9: 14.99,
          10: 15.99,
          11: 16.99,
          12: 17.99,
        },
      },

      oa: {
        pix: 0,
        deb: 1.89,
        cre: {
          1: 5.99,
          2: 8.99,
          3: 9.99,
          4: 10.99,
          5: 11.99,
          6: 12.99,
          7: 13.99,
          8: 14.99,
          9: 15.99,
          10: 16.99,
          11: 17.99,
          12: 18.99,
        },
      },
    },
  },

  t3a6: {
    d1: {
      mv: {
        pix: 0,
        deb: 1.79,
        cre: {
          1: 4.79,
          2: 7.79,
          3: 8.79,
          4: 9.79,
          5: 10.79,
          6: 11.79,
          7: 12.79,
          8: 13.79,
          9: 14.79,
          10: 15.79,
          11: 16.79,
          12: 17.79,
        },
      },

      oa: {
        pix: 0,
        deb: 1.79,
        cre: {
          1: 5.79,
          2: 8.79,
          3: 9.79,
          4: 10.79,
          5: 11.79,
          6: 12.79,
          7: 13.79,
          8: 14.79,
          9: 15.79,
          10: 16.79,
          11: 17.79,
          12: 18.79,
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

  const pix = currentPlan?.pix || 0
  const deb = currentPlan?.deb || 0
  const cre1 = currentPlan?.cre?.[1] || 0
  const selRate =
    currentPlan?.cre?.[selInst] || 0

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

  function handleLead() {
    const text = `
Olá! Quero pedir minha maquininha.

Cidade: ${cidade}
Bairro: ${bairro}

Valor da venda:
${fM(amount)}

Parcelamento:
${selInst}x

Taxa:
${fR(selRate)}

Valor líquido:
${fM(calcRecv(selRate))}
`

    window.open(
      `https://wa.me/5541999999999?text=${encodeURIComponent(
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
        Simule suas taxas
      </h2>

      <div className="main-card">
        <div className="card-body">

          <div className="left-panel">

            <div className="controls-side">

              <div className="panel-title">
                Simulador
              </div>

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

            <div className="results-side">

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

              <button
                className="cta-btn"
                onClick={handleLead}
              >
                💬 Pedir maquininha
              </button>

            </div>
          </div>
        </div>
      </div>

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

        @media (max-width: 900px) {
          .left-panel {
            flex-direction: column;
          }

          .controls-side,
          .results-side {
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