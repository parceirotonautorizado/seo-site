import { MODELOS } from "@/lib/modelos"
import CarrosselSetas from "@/app/components/CarrosselSetas"

// Carrossel dos quatro modelos. Renderizado no servidor; só as setas rodam no navegador.
export default function ModelosCarousel() {
  return (
    <section id="modelos" className="s-mc mc-section">
      <div className="mc-header-wrap">
        <div className="mc-header">
          <span className="mc-label">4 modelos disponíveis</span>
          <h2 className="mc-title">
            A maquininha certa para<br />
            <span>o seu negócio</span>
          </h2>
          <p className="mc-sub">
            Todas com PIX 0%, sem aluguel e garantia vitalícia. Desconto de parceiro já aplicado. T2, T3 e T3 Smart
            aceitam vale-refeição e vale-alimentação para CNPJ do ramo de alimentação.
          </p>
        </div>
      </div>

      <div className="mc-track-wrap">
        <div className="mc-track" id="mc-track">
          {MODELOS.map((m) => (
            <div key={m.id} className={`mc-card${m.destaque ? " mc-card-destaque" : ""}`}>
              {m.destaque && <div className="mc-card-top-badge">★ Mais Vendida</div>}

              <div className="mc-img-wrap">
                <img src={m.imagem} alt={`Maquininha Ton ${m.nome}`} className="mc-img" width={480} height={720} loading="lazy" decoding="async" />
              </div>

              <div className="mc-card-body">
                <div>
                  <span className="mc-badge">{m.badge}</span>
                  <p className="mc-nome">{m.nome}</p>
                  <p className="mc-sub-text">{m.subtitulo}</p>
                </div>

                <div className="mc-preco-wrap">
                  <p className="mc-preco">{m.preco}</p>
                  <p className="mc-parcela">{m.parcela}</p>
                </div>

                <a
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mc-cta"
                >
                  {m.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CarrosselSetas alvo="mc-track" />
    </section>
  )
}
