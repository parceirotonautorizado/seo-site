"use client"

import { CONFIG } from "@/lib/config"

export default function TaxasDestaque() {
  return (
    <section id="taxas" className="taxas-section">
      <div className="taxas-container">
        <div className="taxas-header">
          <span className="taxas-badge">Plano Ton Mega+</span>
          <h2 className="taxas-title">As menores taxas do mercado</h2>
          <p className="taxas-sub">
            Liberado para CPF e CNPJ. Receba na hora ou em 1 dia útil.
          </p>
        </div>

        <div className="taxas-grid">
          <div className="taxa-card destaque">
            <div className="taxa-tipo">PIX</div>
            <div className="taxa-valor">0%</div>
            <div className="taxa-label">Grátis no período promo</div>
          </div>
          <div className="taxa-card">
            <div className="taxa-tipo">Débito</div>
            <div className="taxa-valor">0,57%</div>
            <div className="taxa-label">Visa e Mastercard</div>
          </div>
          <div className="taxa-card">
            <div className="taxa-tipo">Crédito 1x</div>
            <div className="taxa-valor">0,57%</div>
            <div className="taxa-label">Visa e Mastercard</div>
          </div>
          <div className="taxa-card">
            <div className="taxa-tipo">Crédito 12x</div>
            <div className="taxa-valor">7,97%</div>
            <div className="taxa-label">Visa e Mastercard</div>
          </div>
        </div>

        <p className="taxas-nota">
          * Taxas promocionais válidas por 30 dias ou até R$ 5.000 em vendas. Após esse período, aplicam-se as taxas padrão do seu plano.
        </p>

        <a
          href={CONFIG.tonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="taxas-cta"
        >
          Garantir essas taxas →
        </a>
      </div>

      <style jsx>{`
        .taxas-section {
          padding: 80px 20px;
          background: #fff;
        }

        .taxas-container {
          max-width: 960px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }

        .taxas-header {
          text-align: center;
        }

        .taxas-badge {
          display: inline-block;
          background: #e8f5ec;
          color: #009641;
          font-size: 13px;
          font-weight: 700;
          padding: 6px 16px;
          border-radius: 999px;
          margin-bottom: 16px;
        }

        .taxas-title {
          font-size: 36px;
          font-weight: 900;
          color: #1a1a1a;
          margin: 0 0 12px;
          line-height: 1.2;
        }

        .taxas-sub {
          color: #666;
          font-size: 16px;
          margin: 0;
        }

        .taxas-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          width: 100%;
        }

        .taxa-card {
          background: #f9fafb;
          border-radius: 20px;
          padding: 28px 20px;
          text-align: center;
          border: 2px solid transparent;
          transition: border-color 0.2s;
        }

        .taxa-card.destaque {
          background: #e8f5ec;
          border-color: #009641;
        }

        .taxa-tipo {
          font-size: 14px;
          font-weight: 600;
          color: #888;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .taxa-valor {
          font-size: 42px;
          font-weight: 900;
          color: #009641;
          line-height: 1;
          margin-bottom: 8px;
        }

        .taxa-label {
          font-size: 12px;
          color: #999;
        }

        .taxas-nota {
          font-size: 12px;
          color: #aaa;
          text-align: center;
          max-width: 600px;
        }

        .taxas-cta {
          display: inline-block;
          background: #009641;
          color: #fff;
          text-decoration: none;
          padding: 16px 36px;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 700;
          transition: background 0.2s;
        }

        .taxas-cta:hover {
          background: #007a34;
        }

        @media (max-width: 768px) {
          .taxas-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .taxas-title {
            font-size: 28px;
          }

          .taxa-valor {
            font-size: 34px;
          }
        }

        @media (max-width: 420px) {
          .taxas-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  )
}
