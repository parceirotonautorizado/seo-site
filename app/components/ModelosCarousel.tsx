"use client"

import { useRef, useState, useEffect } from "react"
import { CONFIG } from "@/lib/config"

const MODELOS = [
  {
    id: "t3smart",
    nome: "T3 Smart",
    subtitulo: "Android com visor touchscreen, aceita VR e VA",
    badge: "Mais Vendida",
    imagem: "/m-t3-smart.webp",
    preco: "R$ 143,91",
    parcela: "ou 12x de R$ 11,99",
    cta: "Pedir T3 Smart",
    destaque: true,
  },
  {
    id: "t3",
    nome: "T3",
    subtitulo: "Com bobina, impressão de comprovante e chip 4G",
    badge: "Custo-Benefício",
    imagem: "/m-t3.webp",
    preco: "R$ 81,00",
    parcela: "ou 12x de R$ 6,75",
    cta: "Pedir T3",
    destaque: false,
  },
  {
    id: "t2",
    nome: "T2",
    subtitulo: "Bateria de longa duração, Wi-Fi e chip 4G",
    badge: "Econômica",
    imagem: "/m-t2.webp",
    preco: "R$ 37,41",
    parcela: "ou 12x de R$ 3,12",
    cta: "Pedir T2",
    destaque: false,
  },
  {
    id: "t1",
    nome: "T1",
    subtitulo: "Compacta, conecta ao celular via Bluetooth",
    badge: "Entrada",
    imagem: "/m-t1.webp",
    preco: "R$ 16,80",
    parcela: "ou 12x de R$ 1,40",
    cta: "Pedir T1",
    destaque: false,
  },
]

export default function ModelosCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  function checkScroll() {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.addEventListener("scroll", checkScroll, { passive: true })
    checkScroll()
    return () => el.removeEventListener("scroll", checkScroll)
  }, [])

  function slide(dir: "prev" | "next") {
    const el = trackRef.current
    if (!el) return
    const cardW = el.querySelector(".mc-card")?.clientWidth || 320
    el.scrollBy({ left: dir === "next" ? cardW + 16 : -(cardW + 16), behavior: "smooth" })
  }

  return (
    <section id="modelos" className="mc-section">
      <div className="mc-header-wrap">
        <div className="mc-header">
          <span className="mc-label">4 modelos disponíveis</span>
          <h2 className="mc-title">
            A maquininha certa para<br />
            <span>o seu negócio</span>
          </h2>
          <p className="mc-sub">
            Todas com PIX 0%, sem aluguel e garantia vitalícia. Desconto de parceiro já aplicado.
          </p>
        </div>
      </div>

      <div className="mc-track-wrap">
        <div className="mc-track" ref={trackRef}>
          {MODELOS.map((m) => (
            <div key={m.id} className={`mc-card${m.destaque ? " mc-card-destaque" : ""}`}>
              {m.destaque && <div className="mc-card-top-badge">★ Mais Vendida</div>}

              <div className="mc-img-wrap">
                <img src={m.imagem} alt={`Maquininha Ton ${m.nome}`} className="mc-img" />
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
                  href={CONFIG.tonModelos[m.id as keyof typeof CONFIG.tonModelos] ?? CONFIG.tonLink}
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

      <div className="mc-nav">
        <button
          className={`mc-arrow${!canPrev ? " mc-arrow-disabled" : ""}`}
          onClick={() => slide("prev")}
          disabled={!canPrev}
          aria-label="Anterior"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"/><path d="M12 19L5 12L12 5"/>
          </svg>
        </button>
        <button
          className={`mc-arrow${!canNext ? " mc-arrow-disabled" : ""}`}
          onClick={() => slide("next")}
          disabled={!canNext}
          aria-label="Próximo"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12H19"/><path d="M12 5L19 12L12 19"/>
          </svg>
        </button>
      </div>

      <style jsx>{`
        .mc-section {
          background: #002b14;
          padding: 72px 0 56px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        /* ── HEADER ── */
        .mc-header-wrap {
          padding: 0 40px;
        }

        .mc-header {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .mc-label {
          display: inline-block;
          background: rgba(136,255,0,0.15);
          border: 1px solid rgba(136,255,0,0.35);
          color: #88ff00;
          font-size: 12px;
          font-weight: 700;
          padding: 5px 14px;
          border-radius: 999px;
          width: fit-content;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .mc-title {
          font-size: 48px;
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          margin: 0;
          letter-spacing: -0.5px;
        }

        .mc-title span {
          color: #88ff00;
        }

        .mc-sub {
          font-size: 16px;
          color: rgba(255,255,255,0.65);
          margin: 0;
          max-width: 520px;
          line-height: 1.6;
        }

        /* ── TRACK ── */
        .mc-track-wrap {
          width: 100%;
          overflow: hidden;
        }

        .mc-track {
          display: flex;
          gap: 16px;
          overflow-x: scroll;
          scroll-snap-type: x mandatory;
          -ms-overflow-style: none;
          scrollbar-width: none;
          padding: 0 40px;
          scroll-behavior: smooth;
        }

        .mc-track::-webkit-scrollbar {
          display: none;
        }

        /* ── CARD ── */
        .mc-card {
          scroll-snap-align: start;
          flex: 0 0 300px;
          background: #fff;
          border-radius: 28px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.2s;
        }

        .mc-card:hover {
          transform: translateY(-4px);
        }

        .mc-card-destaque {
          outline: 3px solid #88ff00;
        }

        .mc-card-top-badge {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          background: #009641;
          color: #fff;
          text-align: center;
          font-size: 11px;
          font-weight: 800;
          padding: 6px;
          letter-spacing: 0.5px;
          z-index: 1;
          text-transform: uppercase;
        }

        .mc-img-wrap {
          background: #f4f5f4;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .mc-img {
          max-height: 156px;
          max-width: 100%;
          object-fit: contain;
        }

        .mc-card-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex: 1;
          justify-content: space-between;
        }

        .mc-badge {
          display: inline-block;
          background: #e8f5ec;
          color: #007a34;
          font-size: 11px;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 999px;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .mc-card-destaque .mc-badge {
          background: #009641;
          color: #fff;
        }

        .mc-nome {
          font-size: 26px;
          font-weight: 900;
          color: #1a1a1a;
          margin: 0 0 4px;
          line-height: 1.1;
        }

        .mc-sub-text {
          font-size: 13px;
          color: #777;
          margin: 0;
          line-height: 1.5;
        }

        .mc-preco-wrap {
          border-top: 1px solid #f0f0f0;
          padding-top: 14px;
        }

        .mc-preco {
          font-size: 28px;
          font-weight: 900;
          color: #009641;
          margin: 0;
          line-height: 1;
        }

        .mc-parcela {
          font-size: 12px;
          color: #999;
          margin: 4px 0 0;
        }

        .mc-cta {
          display: block;
          background: #009641;
          color: #fff;
          text-decoration: none;
          text-align: center;
          padding: 14px;
          border-radius: 16px;
          font-size: 14px;
          font-weight: 700;
          transition: background 0.2s;
        }

        .mc-card-destaque .mc-cta {
          background: #88ff00;
          color: #0a2200;
        }

        .mc-cta:hover {
          background: #007a34;
        }

        .mc-card-destaque .mc-cta:hover {
          background: #72dd00;
        }

        /* ── SETAS ── */
        .mc-nav {
          display: flex;
          justify-content: center;
          gap: 12px;
          padding: 0 40px;
        }

        .mc-arrow {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }

        .mc-arrow:hover {
          background: rgba(255,255,255,0.2);
        }

        .mc-arrow-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        /* ── RESPONSIVO ── */
        @media (max-width: 768px) {
          .mc-section {
            padding: 56px 0 40px;
            gap: 32px;
          }

          .mc-header-wrap {
            padding: 0 20px;
          }

          .mc-title {
            font-size: 34px;
          }

          .mc-track {
            padding: 0 20px;
          }

          .mc-card {
            flex: 0 0 260px;
          }

          .mc-nav {
            padding: 0 20px;
          }
        }

        @media (max-width: 480px) {
          .mc-title {
            font-size: 28px;
          }

          .mc-card {
            flex: 0 0 240px;
          }
        }
      `}</style>
    </section>
  )
}
