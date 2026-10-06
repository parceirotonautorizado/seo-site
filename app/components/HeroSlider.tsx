"use client"

import { useState, useEffect, useCallback } from "react"
import { CONFIG } from "@/lib/config"

const SLIDES = [
  {
    id: 1,
    bg: "#003d1f",
    label: "Promoção exclusiva",
    titulo: "Taxa de 0,57%\nno débito e crédito",
    subtitulo: "PIX 0% de verdade. Sem aluguel. Garantia vitalícia. Para CPF e CNPJ.",
    cta: "Pedir com Desconto",
    ctaSecundario: "Simular Taxas",
    ctaLink: CONFIG.tonLink,
    ctaSecLink: "#simulador",
    imagem: "/promo-t3smart.png",
    imagemAlt: "Maquininha Ton T3 Smart",
    imagemPos: "right",
    bgImagem: null,
  },
  {
    id: 2,
    bg: "#001a0d",
    label: "PIX 0% de verdade",
    titulo: "Receba PIX\nsem pagar nada",
    subtitulo: "PIX 0% no período promocional. Débito 0,57%. Receba na mesma hora.",
    cta: "Pedir Maquininha",
    ctaSecundario: "Ver Taxas",
    ctaLink: CONFIG.tonLink,
    ctaSecLink: "#taxas",
    imagem: null,
    imagemAlt: "",
    imagemPos: "bg",
    bgImagem: "/promo-pix.png",
  },
  {
    id: 3,
    bg: "#004d26",
    label: "4 modelos disponíveis",
    titulo: "Escolha a maquininha\ncerta para o seu negócio",
    subtitulo: "T1, T2, T3 ou T3 Smart. Todos com as menores taxas do mercado.",
    cta: "Ver Modelos",
    ctaSecundario: "Simular Taxas",
    ctaLink: "#modelos",
    ctaSecLink: "#simulador",
    imagem: "/maquininhas-todas.png",
    imagemAlt: "Todos os modelos Ton",
    imagemPos: "right",
    bgImagem: null,
  },
]

export default function HeroSlider() {
  const [atual, setAtual] = useState(0)
  const [animando, setAnimando] = useState(false)

  const irPara = useCallback(
    (idx: number) => {
      if (animando) return
      setAnimando(true)
      setTimeout(() => {
        setAtual(idx)
        setAnimando(false)
      }, 300)
    },
    [animando]
  )

  const proximo = useCallback(() => {
    irPara((atual + 1) % SLIDES.length)
  }, [atual, irPara])

  const anterior = useCallback(() => {
    irPara((atual - 1 + SLIDES.length) % SLIDES.length)
  }, [atual, irPara])

  useEffect(() => {
    const t = setInterval(proximo, 6000)
    return () => clearInterval(t)
  }, [proximo])

  const slide = SLIDES[atual]

  return (
    <section className="slider-section">
      {/* FUNDO */}
      <div
        className="slider-bg"
        style={{ background: slide.bg }}
      />
      {slide.bgImagem && (
        <img
          src={slide.bgImagem}
          alt=""
          aria-hidden="true"
          className="slider-bg-img"
        />
      )}
      <div className="slider-overlay" />

      {/* CONTEÚDO */}
      <div className={`slider-inner ${animando ? "fade-out" : "fade-in"}`}>
        <div className="slide-layout">

          {/* TEXTO */}
          <div className="slide-texto">
            <span className="slide-label">{slide.label}</span>

            <h1 className="slide-h1">
              {slide.titulo.split("\n").map((linha, i) => (
                <span key={i}>
                  {linha}
                  {i < slide.titulo.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p className="slide-sub">{slide.subtitulo}</p>

            <div className="slide-pills">
              <span className="pill">✓ Frete Grátis</span>
              <span className="pill">✓ Sem Aluguel</span>
              <span className="pill">✓ Garantia Vitalícia</span>
            </div>

            <div className="slide-ctas">
              <a
                href={slide.ctaLink}
                target={slide.ctaLink.startsWith("http") ? "_blank" : undefined}
                rel={slide.ctaLink.startsWith("http") ? "noopener noreferrer" : undefined}
                className="slide-cta-primary"
              >
                {slide.cta} →
              </a>
              <a href={slide.ctaSecLink} className="slide-cta-secondary">
                {slide.ctaSecundario}
              </a>
            </div>
          </div>

          {/* IMAGEM DO PRODUTO */}
          {slide.imagem && slide.imagemPos === "right" && (
            <div className="slide-img-wrap">
              <img
                src={slide.imagem}
                alt={slide.imagemAlt}
                className="slide-img"
              />
            </div>
          )}
        </div>
      </div>

      {/* SETAS */}
      <button className="seta seta-left" onClick={anterior} aria-label="Anterior">
        ‹
      </button>
      <button className="seta seta-right" onClick={proximo} aria-label="Próximo">
        ›
      </button>

      {/* DOTS */}
      <div className="dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === atual ? "dot-ativo" : ""}`}
            onClick={() => irPara(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .slider-section {
          position: relative;
          min-height: 560px;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .slider-bg {
          position: absolute;
          inset: 0;
          transition: background 0.5s ease;
        }

        .slider-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .slider-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
        }

        .slider-inner {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 60px;
          z-index: 2;
          transition: opacity 0.3s ease;
        }

        .fade-in { opacity: 1; }
        .fade-out { opacity: 0; }

        .slide-layout {
          display: flex;
          align-items: center;
          gap: 60px;
        }

        .slide-texto {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .slide-label {
          display: inline-block;
          background: rgba(136, 255, 0, 0.18);
          border: 1px solid rgba(136, 255, 0, 0.45);
          color: #88ff00;
          font-size: 13px;
          font-weight: 700;
          padding: 6px 16px;
          border-radius: 999px;
          width: fit-content;
          letter-spacing: 0.3px;
        }

        .slide-h1 {
          font-size: 52px;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.1;
          margin: 0;
        }

        .slide-sub {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: 0;
          max-width: 520px;
        }

        .slide-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .pill {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.22);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 999px;
        }

        .slide-ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 4px;
        }

        .slide-cta-primary {
          display: inline-block;
          background: #88ff00;
          color: #0a2a10;
          text-decoration: none;
          padding: 16px 32px;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 800;
          transition: transform 0.15s, background 0.2s;
          white-space: nowrap;
        }

        .slide-cta-primary:hover {
          background: #72dd00;
          transform: translateY(-2px);
        }

        .slide-cta-secondary {
          display: inline-flex;
          align-items: center;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.45);
          color: #fff;
          text-decoration: none;
          padding: 14px 28px;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 700;
          transition: border-color 0.2s, background 0.2s;
          white-space: nowrap;
        }

        .slide-cta-secondary:hover {
          border-color: #fff;
          background: rgba(255, 255, 255, 0.1);
        }

        .slide-img-wrap {
          flex-shrink: 0;
          width: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slide-img {
          width: 100%;
          max-width: 400px;
          object-fit: contain;
          filter: drop-shadow(0 24px 48px rgba(0, 0, 0, 0.4));
          animation: floatImg 4s ease-in-out infinite;
        }

        @keyframes floatImg {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* SETAS */
        .seta {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #fff;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          font-size: 28px;
          line-height: 1;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          backdrop-filter: blur(4px);
        }

        .seta:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .seta-left { left: 20px; }
        .seta-right { right: 20px; }

        /* DOTS */
        .dots {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 10;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.35);
          border: none;
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
          padding: 0;
        }

        .dot-ativo {
          background: #88ff00;
          transform: scale(1.3);
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .slider-inner {
            padding: 60px 24px;
          }

          .slide-layout {
            flex-direction: column;
            gap: 32px;
          }

          .slide-img-wrap {
            width: 100%;
            max-width: 280px;
            margin: 0 auto;
          }

          .slide-h1 {
            font-size: 36px;
          }

          .slide-sub {
            font-size: 16px;
          }

          .slider-section {
            min-height: auto;
          }
        }

        @media (max-width: 520px) {
          .slide-img-wrap {
            display: none;
          }

          .slide-h1 {
            font-size: 30px;
          }

          .slide-cta-primary,
          .slide-cta-secondary {
            width: 100%;
            text-align: center;
            justify-content: center;
          }

          .seta {
            width: 36px;
            height: 36px;
            font-size: 22px;
          }
        }
      `}</style>
    </section>
  )
}
