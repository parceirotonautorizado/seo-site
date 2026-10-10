import { CONFIG } from "@/lib/config"

export default function TaxasDestaque() {
  return (
    <section id="taxas" className="s-taxas taxas-section">
      <div className="taxas-container">
        <div className="taxas-header">
          <span className="taxas-badge">Plano Ton Mega+</span>
          <h2 className="taxas-title">Taxas a partir de 0,57%</h2>
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
    </section>
  )
}
