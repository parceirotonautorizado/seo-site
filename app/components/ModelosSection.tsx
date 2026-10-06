"use client"

import { CONFIG } from "@/lib/config"

const MODELOS = [
  {
    id: "t3smart",
    nome: "T3 Smart",
    subtitulo: "Android com visor touch",
    badge: "MAIS VENDIDA",
    badgeColor: "#ff6b00",
    imagem: "/t3-smart.webp",
    preco: "R$ 143,91",
    parcela: "12x de R$ 11,99",
    recursos: [
      "Visor touchscreen Android",
      "Aceita VR e VA",
      "Bobina grátis inclusa",
      "Chip 4G + Wi-Fi",
      "Garantia vitalícia",
    ],
    destaque: true,
  },
  {
    id: "t3",
    nome: "T3",
    subtitulo: "Com bobina e impressão",
    badge: "CUSTO-BENEFÍCIO",
    badgeColor: "#009641",
    imagem: "/t3.webp",
    preco: "R$ 81,00",
    parcela: "12x de R$ 6,75",
    recursos: [
      "Impressão de comprovante",
      "Aceita VR e VA",
      "Bobina grátis inclusa",
      "Chip 4G + Wi-Fi",
      "Garantia vitalícia",
    ],
    destaque: false,
  },
  {
    id: "t2",
    nome: "T2",
    subtitulo: "Bateria de longa duração",
    badge: "ECONÔMICA",
    badgeColor: "#0066cc",
    imagem: "/t2.png",
    preco: "R$ 37,41",
    parcela: "12x de R$ 3,12",
    recursos: [
      "Bateria 12h+",
      "Aceita cartão e PIX",
      "Chip 4G + Wi-Fi",
      "Desconto no link",
      "Garantia vitalícia",
    ],
    destaque: false,
  },
  {
    id: "t1",
    nome: "T1",
    subtitulo: "Conexão via Bluetooth",
    badge: "ENTRADA",
    badgeColor: "#666",
    imagem: "/t1.webp",
    preco: "R$ 16,80",
    parcela: "12x de R$ 1,40",
    recursos: [
      "Conecta ao celular",
      "Aceita cartão e PIX",
      "Compacta e portátil",
      "Desconto no link",
      "Garantia vitalícia",
    ],
    destaque: false,
  },
]

export default function ModelosSection() {
  return (
    <section id="modelos" className="modelos-section">
      <div className="modelos-container">
        <div className="modelos-header">
          <h2 className="modelos-title">Escolha sua maquininha</h2>
          <p className="modelos-sub">
            Preços com desconto de parceiro. O desconto é aplicado automaticamente ao clicar em pedir.
          </p>
        </div>

        <div className="modelos-grid">
          {MODELOS.map((m) => (
            <div key={m.id} className={`modelo-card ${m.destaque ? "modelo-destaque" : ""}`}>
              {m.destaque && <div className="destaque-faixa">★ Mais Vendida</div>}

              <div className="modelo-img-wrap">
                <img
                  src={m.imagem}
                  alt={`Maquininha Ton ${m.nome}`}
                  className="modelo-img"
                />
              </div>

              <div className="modelo-top">
                <span
                  className="modelo-badge"
                  style={{ background: m.badgeColor }}
                >
                  {m.badge}
                </span>
                <h3 className="modelo-nome">{m.nome}</h3>
                <p className="modelo-sub-text">{m.subtitulo}</p>
              </div>

              <div className="modelo-preco-wrap">
                <div className="modelo-preco">{m.preco}</div>
                <div className="modelo-parc">à vista ou {m.parcela}</div>
              </div>

              <ul className="modelo-recursos">
                {m.recursos.map((r) => (
                  <li key={r}>
                    <span className="check">✓</span> {r}
                  </li>
                ))}
              </ul>

              <a
                href={CONFIG.tonLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`modelo-cta ${m.destaque ? "cta-primary" : "cta-secondary"}`}
              >
                Pedir {m.nome} →
              </a>
            </div>
          ))}
        </div>

        <p className="modelos-nota">
          Frete grátis para todo o Paraná. Entrega rápida. Pagamento feito diretamente pelo site oficial da Ton.
        </p>
      </div>

      <style jsx>{`
        .modelos-section {
          padding: 80px 20px;
          background: #f4f5f4;
        }

        .modelos-container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .modelos-header {
          text-align: center;
        }

        .modelos-title {
          font-size: 36px;
          font-weight: 900;
          color: #1a1a1a;
          margin: 0 0 12px;
        }

        .modelos-sub {
          color: #666;
          font-size: 16px;
          margin: 0;
        }

        .modelos-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          width: 100%;
          align-items: start;
        }

        .modelo-card {
          background: #fff;
          border-radius: 24px;
          padding: 28px 22px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .modelo-img-wrap {
          background: #f4f5f4;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          height: 180px;
          margin-top: 20px;
        }

        .modelo-img {
          max-height: 148px;
          max-width: 100%;
          object-fit: contain;
        }

        .modelo-destaque {
          border-color: #009641;
          transform: scale(1.02);
        }

        .destaque-faixa {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          background: #009641;
          color: #fff;
          text-align: center;
          font-size: 12px;
          font-weight: 700;
          padding: 6px;
          letter-spacing: 0.5px;
        }

        .modelo-top {
          padding-top: 24px;
        }

        .modelo-badge {
          display: inline-block;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 999px;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }

        .modelo-nome {
          font-size: 28px;
          font-weight: 900;
          color: #1a1a1a;
          margin: 0 0 4px;
        }

        .modelo-sub-text {
          color: #888;
          font-size: 14px;
          margin: 0;
        }

        .modelo-preco-wrap {
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
          padding: 16px 0;
        }

        .modelo-preco {
          font-size: 30px;
          font-weight: 900;
          color: #009641;
          line-height: 1;
        }

        .modelo-parc {
          font-size: 13px;
          color: #888;
          margin-top: 4px;
        }

        .modelo-recursos {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .modelo-recursos li {
          font-size: 14px;
          color: #444;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .check {
          color: #009641;
          font-weight: 700;
          flex-shrink: 0;
        }

        .modelo-cta {
          display: block;
          text-align: center;
          text-decoration: none;
          padding: 14px;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 700;
          transition: all 0.2s;
        }

        .cta-primary {
          background: #009641;
          color: #fff;
        }

        .cta-primary:hover {
          background: #007a34;
        }

        .cta-secondary {
          background: #f0f0f0;
          color: #333;
        }

        .cta-secondary:hover {
          background: #e0e0e0;
        }

        .modelos-nota {
          font-size: 13px;
          color: #aaa;
          text-align: center;
        }

        @media (max-width: 1024px) {
          .modelos-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .modelo-destaque {
            transform: none;
          }
        }

        @media (max-width: 540px) {
          .modelos-grid {
            grid-template-columns: 1fr;
          }

          .modelos-title {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  )
}
