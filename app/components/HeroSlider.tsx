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
    ctaLink: CONFIG.tonLink,
    ctaSecundario: "Simular Taxas",
    ctaSecLink: "#simulador",
    imgDireita: "/promo-t3smart.png",
    imgAlt: "Promoção Ton T3 Smart — menor taxa do mercado",
    bgImg: null as string | null,
  },
  {
    id: 2,
    bg: "#001a0d",
    label: "PIX 0% de verdade",
    titulo: "Receba PIX\nsem pagar nada",
    subtitulo: "PIX 0% no período promocional. Débito 0,57%. Receba na mesma hora.",
    cta: "Pedir Maquininha",
    ctaLink: CONFIG.tonLink,
    ctaSecundario: "Ver Taxas",
    ctaSecLink: "#taxas",
    imgDireita: null as string | null,
    imgAlt: "",
    bgImg: "/promo-pix.png",
  },
  {
    id: 3,
    bg: "#004d26",
    label: "4 modelos disponíveis",
    titulo: "Escolha a maquininha\ncerta para você",
    subtitulo: "T1, T2, T3 ou T3 Smart. Todos com desconto de parceiro.",
    cta: "Ver Modelos",
    ctaLink: "#modelos",
    ctaSecundario: "Simular Taxas",
    ctaSecLink: "#simulador",
    imgDireita: "/maquininhas-todas.png",
    imgAlt: "T1, T2, T3 e T3 Smart — todos os modelos Ton",
    bgImg: null as string | null,
  },
]

const TICKER_ITEMS = [
  { type: "badge", text: "Novidade" },
  { type: "text",  text: "PIX 0% de verdade" },
  { type: "img",   src: "/t3-smart.webp" },
  { type: "sep" },
  { type: "badge", text: "Promoção" },
  { type: "text",  text: "Taxa 0,57% no débito" },
  { type: "img",   src: "/t3.webp" },
  { type: "sep" },
  { type: "badge", text: "Exclusivo" },
  { type: "text",  text: "Sem aluguel mensal" },
  { type: "img",   src: "/t2.png" },
  { type: "sep" },
  { type: "badge", text: "Garantia" },
  { type: "text",  text: "Vitalícia em todos os modelos" },
  { type: "img",   src: "/t1.webp" },
  { type: "sep" },
  { type: "badge", text: "Parceiro" },
  { type: "text",  text: "Desconto exclusivo no link" },
  { type: "img",   src: "/t3-smart.webp" },
  { type: "sep" },
] as const

export default function HeroSlider() {
  const [atual, setAtual] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const irPara = useCallback(
    (idx: number) => {
      if (transitioning) return
      setTransitioning(true)
      setTimeout(() => {
        setAtual(idx)
        setTransitioning(false)
      }, 280)
    },
    [transitioning]
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

  const s = SLIDES[atual]

  return (
    <section
      className="hs"
      style={{ background: s.bg }}
    >
      {/* ── FUNDO FULL-BLEED (slide PIX) ── */}
      {s.bgImg && (
        <img src={s.bgImg} alt="" aria-hidden="true" className="hs-bg-img" />
      )}

      {/* ── IMAGEM À DIREITA (slides 1 e 3) ── */}
      {s.imgDireita && (
        <div className="hs-img-panel">
          {/* gradiente que cobre a transição texto → imagem */}
          <div className="hs-img-grad" style={{ background: `linear-gradient(to right, ${s.bg}, transparent)` }} />
          <img
            src={s.imgDireita}
            alt={s.imgAlt}
            className="hs-img"
          />
        </div>
      )}

      {/* ── OVERLAY ESCURO (legibilidade) ── */}
      <div className="hs-overlay" />

      {/* ── CONTEÚDO ── */}
      <div className={`hs-inner ${transitioning ? "hs-out" : "hs-in"}`}>
        <div className="hs-content">
          <span className="hs-label">{s.label}</span>

          <h1 className="hs-h1">
            {s.titulo.split("\n").map((l, i, arr) => (
              <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
            ))}
          </h1>

          <p className="hs-sub">{s.subtitulo}</p>

          <div className="hs-pills">
            <span className="hs-pill">✓ Frete Grátis</span>
            <span className="hs-pill">✓ Sem Aluguel</span>
            <span className="hs-pill">✓ Garantia Vitalícia</span>
          </div>

          <div className="hs-ctas">
            <a
              href={s.ctaLink}
              target={s.ctaLink.startsWith("http") ? "_blank" : undefined}
              rel={s.ctaLink.startsWith("http") ? "noopener noreferrer" : undefined}
              className="hs-btn-primary"
            >
              {s.cta} →
            </a>
            <a href={s.ctaSecLink} className="hs-btn-sec">
              {s.ctaSecundario}
            </a>
          </div>
        </div>

        {/* Imagem INLINE no mobile (abaixo do texto, sempre visível) */}
        {s.imgDireita && (
          <div className="hs-img-mobile">
            <img src={s.imgDireita} alt={s.imgAlt} className="hs-img-mob-img" />
          </div>
        )}
      </div>

      {/* ── SETAS ── */}
      <button className="hs-arrow hs-arrow-l" onClick={anterior} aria-label="Slide anterior">‹</button>
      <button className="hs-arrow hs-arrow-r" onClick={proximo}  aria-label="Próximo slide">›</button>

      {/* ── DOTS ── */}
      <div className="hs-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => irPara(i)}
            className={`hs-dot${i === atual ? " hs-dot-on" : ""}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── TICKER ── */}
      <div className="hs-ticker">
        <div className="hs-ticker-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="hs-ticker-inner" aria-hidden={copy === 1}>
              {TICKER_ITEMS.map((item, i) => (
                <span key={i} className="hs-ticker-item">
                  {item.type === "badge" && (
                    <span className="hs-ticker-badge">{item.text}</span>
                  )}
                  {item.type === "text" && (
                    <span className="hs-ticker-text">{item.text}</span>
                  )}
                  {item.type === "img" && (
                    <img src={item.src} alt="" width={32} height={32} className="hs-ticker-img" />
                  )}
                  {item.type === "sep" && (
                    <span className="hs-ticker-sep">✦</span>
                  )}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* ── BASE ── */
        .hs {
          position: relative;
          min-height: 580px;
          display: flex;
          align-items: center;
          overflow: hidden;
          transition: background 0.5s ease;
        }

        /* ── FUNDO (slide PIX) ── */
        .hs-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          z-index: 0;
        }

        /* ── IMAGEM LATERAL (slides 1 e 3) ── */
        .hs-img-panel {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 52%;
          z-index: 1;
          overflow: hidden;
        }

        .hs-img-grad {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 180px;
          z-index: 2;
        }

        .hs-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }

        /* ── OVERLAY ── */
        .hs-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            100deg,
            rgba(0,0,0,0.55) 0%,
            rgba(0,0,0,0.25) 55%,
            rgba(0,0,0,0.05) 100%
          );
          z-index: 2;
        }

        /* ── INNER ── */
        .hs-inner {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 60px 100px;
          transition: opacity 0.28s ease;
        }

        .hs-in  { opacity: 1; }
        .hs-out { opacity: 0; }

        /* ── CONTEÚDO (só texto + pills + CTAs) ── */
        .hs-content {
          max-width: 560px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .hs-label {
          display: inline-block;
          background: rgba(136,255,0,0.18);
          border: 1px solid rgba(136,255,0,0.4);
          color: #88ff00;
          font-size: 13px;
          font-weight: 700;
          padding: 5px 14px;
          border-radius: 999px;
          width: fit-content;
          letter-spacing: 0.3px;
        }

        .hs-h1 {
          font-size: 54px;
          font-weight: 900;
          color: #fff;
          line-height: 1.08;
          margin: 0;
        }

        .hs-sub {
          font-size: 17px;
          color: rgba(255,255,255,0.82);
          line-height: 1.6;
          margin: 0;
        }

        .hs-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .hs-pill {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 999px;
        }

        .hs-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 6px;
        }

        .hs-btn-primary {
          display: inline-block;
          background: #88ff00;
          color: #0a2a10;
          text-decoration: none;
          padding: 15px 30px;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 800;
          white-space: nowrap;
          transition: background 0.2s, transform 0.15s;
        }

        .hs-btn-primary:hover {
          background: #72dd00;
          transform: translateY(-2px);
        }

        .hs-btn-sec {
          display: inline-flex;
          align-items: center;
          background: transparent;
          border: 2px solid rgba(255,255,255,0.45);
          color: #fff;
          text-decoration: none;
          padding: 13px 26px;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 700;
          white-space: nowrap;
          transition: border-color 0.2s, background 0.2s;
        }

        .hs-btn-sec:hover {
          border-color: #fff;
          background: rgba(255,255,255,0.1);
        }

        /* Imagem mobile: escondida no desktop */
        .hs-img-mobile { display: none; }

        /* ── SETAS ── */
        .hs-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.28);
          color: #fff;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          font-size: 28px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(4px);
          transition: background 0.2s;
        }
        .hs-arrow:hover { background: rgba(255,255,255,0.28); }
        .hs-arrow-l { left: 16px; }
        .hs-arrow-r { right: 16px; }

        /* ── TICKER ── */
        .hs-ticker {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(6px);
          overflow: hidden;
          height: 44px;
          display: flex;
          align-items: center;
        }

        .hs-ticker-track {
          display: flex;
          width: max-content;
          animation: hs-marquee 30s linear infinite;
        }

        .hs-ticker-track:hover {
          animation-play-state: paused;
        }

        @keyframes hs-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .hs-ticker-inner {
          display: flex;
          align-items: center;
          gap: 0;
          white-space: nowrap;
        }

        .hs-ticker-item {
          display: inline-flex;
          align-items: center;
          padding: 0 14px;
        }

        .hs-ticker-badge {
          background: rgba(136,255,0,0.2);
          border: 1px solid rgba(136,255,0,0.5);
          color: #88ff00;
          font-size: 11px;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 999px;
          letter-spacing: 0.4px;
          text-transform: uppercase;
        }

        .hs-ticker-text {
          color: rgba(255,255,255,0.9);
          font-size: 13px;
          font-weight: 700;
        }

        .hs-ticker-img {
          width: 28px;
          height: 28px;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.75;
        }

        .hs-ticker-sep {
          color: rgba(136,255,0,0.5);
          font-size: 10px;
        }

        /* ── DOTS ── */
        .hs-dots {
          position: absolute;
          bottom: 58px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 10;
        }

        .hs-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: rgba(255,255,255,0.35);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.3s, transform 0.3s;
        }

        .hs-dot-on {
          background: #88ff00;
          transform: scale(1.35);
        }

        /* ══════════════════════════════════════
           RESPONSIVO
        ══════════════════════════════════════ */

        /* Tablet — 900px */
        @media (max-width: 900px) {
          .hs { min-height: auto; }

          /* Painel da imagem vira faixa no topo */
          .hs-img-panel {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 44%;
            opacity: 0.55;
          }

          .hs-inner {
            padding: 60px 24px 90px;
          }

          .hs-h1 { font-size: 38px; }
          .hs-sub { font-size: 15px; }
        }

        /* Mobile grande — 680px */
        @media (max-width: 680px) {
          /* Esconde o painel lateral — mostra imagem inline abaixo do texto */
          .hs-img-panel { display: none; }

          .hs-img-mobile {
            display: flex;
            justify-content: center;
            margin-top: 24px;
          }

          .hs-img-mob-img {
            max-height: 220px;
            max-width: 100%;
            object-fit: contain;
            filter: drop-shadow(0 12px 24px rgba(0,0,0,0.45));
            animation: floatY 3.5s ease-in-out infinite;
          }

          @keyframes floatY {
            0%, 100% { transform: translateY(0); }
            50%       { transform: translateY(-8px); }
          }

          .hs-inner {
            padding: 48px 20px 80px;
          }

          .hs-h1 { font-size: 32px; }
          .hs-content { max-width: 100%; }
        }

        /* Mobile médio — 480px */
        @media (max-width: 480px) {
          .hs-h1 { font-size: 28px; }

          .hs-btn-primary,
          .hs-btn-sec {
            width: 100%;
            text-align: center;
            justify-content: center;
          }

          .hs-arrow {
            width: 38px;
            height: 38px;
            font-size: 22px;
          }

          .hs-arrow-l { left: 8px; }
          .hs-arrow-r { right: 8px; }

          .hs-img-mob-img { max-height: 180px; }
        }

        /* Mobile pequeno — 360px */
        @media (max-width: 360px) {
          .hs-h1 { font-size: 24px; }
          .hs-sub { font-size: 14px; }
          .hs-pill { font-size: 11px; }
          .hs-btn-primary, .hs-btn-sec { font-size: 14px; padding: 12px 20px; }
          .hs-img-mob-img { max-height: 140px; }
        }
      `}</style>
    </section>
  )
}
