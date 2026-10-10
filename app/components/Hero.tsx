"use client"

import { CONFIG } from "@/lib/config"

type Props = {
  cidade?: string
  bairro?: string
}

export default function Hero({ cidade, bairro }: Props) {
  const titulo = bairro
    ? `Maquininha Ton no ${bairro}, ${cidade}`
    : cidade
    ? `Maquininha Ton em ${cidade}`
    : "Maquininha Ton | Menores taxas do Paraná"

  const descricao = bairro
    ? `Taxa de 0,57% no débito, PIX grátis e sem aluguel. A melhor maquininha para negócios no ${bairro}, em ${cidade}.`
    : cidade
    ? `Taxa de 0,57% no débito, PIX grátis e sem aluguel. Ideal para autônomos e empresas em ${cidade}.`
    : "Taxa de 0,57% no débito, PIX grátis e sem aluguel. Aceita mais de 50 bandeiras. Para CPF e CNPJ."

  return (
    <section className="hero">
      <img src="/hero.webp" className="hero-bg" alt="" aria-hidden="true" width={1320} height={1000} fetchPriority="high" />
      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="hero-layout">
        <div className="hero-content">
          <span className="hero-badge">🏆 Parceiro Autorizado Ton</span>

          <h1 className="hero-h1">{titulo}</h1>

          <p className="hero-desc">{descricao}</p>

          <div className="hero-pills">
            <span className="pill">0,57% Débito</span>
            <span className="pill">PIX Grátis</span>
            <span className="pill">Sem Aluguel</span>
            <span className="pill">Garantia Vitalícia</span>
          </div>

          <div className="hero-ctas">
            <a
              href={CONFIG.tonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
            >
              Pedir com Desconto →
            </a>
            <a href="#simulador" className="cta-secondary">
              Simular Taxas
            </a>
          </div>

          <p className="hero-nota">
            Frete grátis · Entrega rápida · Compra no site oficial da Ton
          </p>
        </div>

        <div className="hero-img-wrap">
          <img
            src="/maquininhas-todas.webp"
            alt="Maquininhas Ton T1, T2, T3 e T3 Smart"
            width={476}
            height={476}
            className="hero-img"
          />
        </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 560px;
          display: flex;
          align-items: center;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,80,30,0.92) 0%, rgba(0,40,15,0.85) 100%);
        }

        .hero-inner {
          position: relative;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 20px;
        }

        .hero-layout {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .hero-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .hero-img-wrap {
          flex-shrink: 0;
          width: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-img {
          width: 100%;
          max-width: 380px;
          object-fit: contain;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3));
        }

        .hero-badge {
          display: inline-block;
          background: rgba(136, 255, 0, 0.15);
          border: 1px solid rgba(136, 255, 0, 0.4);
          color: #88ff00;
          font-size: 13px;
          font-weight: 700;
          padding: 6px 16px;
          border-radius: 999px;
          width: fit-content;
        }

        .hero-h1 {
          font-size: 48px;
          font-weight: 900;
          color: #fff;
          line-height: 1.1;
          margin: 0;
        }

        .hero-desc {
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          line-height: 1.6;
          margin: 0;
        }

        .hero-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .pill {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 999px;
        }

        .hero-ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .cta-primary {
          display: inline-block;
          background: #88ff00;
          color: #0a2a10;
          text-decoration: none;
          padding: 16px 32px;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 800;
          transition: transform 0.15s, background 0.2s;
        }

        .cta-primary:hover {
          background: #72dd00;
          transform: translateY(-1px);
        }

        .cta-secondary {
          display: inline-block;
          background: transparent;
          border: 2px solid rgba(255,255,255,0.5);
          color: #fff;
          text-decoration: none;
          padding: 14px 28px;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 700;
          transition: border-color 0.2s, background 0.2s;
        }

        .cta-secondary:hover {
          border-color: #fff;
          background: rgba(255,255,255,0.08);
        }

        .hero-nota {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          margin: 0;
        }

        @media (max-width: 768px) {
          .hero {
            min-height: 480px;
          }

          .hero-layout {
            flex-direction: column-reverse;
            gap: 24px;
          }

          .hero-img-wrap {
            width: 100%;
            max-width: 280px;
            margin: 0 auto;
          }

          .hero-h1 {
            font-size: 32px;
          }

          .hero-desc {
            font-size: 16px;
          }

          .cta-primary, .cta-secondary {
            width: 100%;
            text-align: center;
          }
        }

        @media (max-width: 520px) {
          .hero-img-wrap {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
