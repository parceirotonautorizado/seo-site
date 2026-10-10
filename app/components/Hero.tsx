import { CONFIG } from "@/lib/config"

type Props = {
  cidade?: string
  bairro?: string
  // preposição antes do nome do bairro: "no", "na", "nas" ou "em"
  em?: string
}

export default function Hero({ cidade, bairro, em = "no" }: Props) {
  const titulo = bairro
    ? `Maquininha Ton ${em} ${bairro}, ${cidade}`
    : cidade
    ? `Maquininha Ton em ${cidade}`
    : "Maquininha Ton no Paraná"

  const descricao = bairro
    ? `Taxa de 0,57% no débito, PIX grátis e sem aluguel. Veja qual modelo combina com quem vende ${em} ${bairro}, em ${cidade}.`
    : cidade
    ? `Taxa de 0,57% no débito, PIX grátis e sem aluguel. Ideal para autônomos e empresas em ${cidade}.`
    : "Taxa de 0,57% no débito, PIX grátis e sem aluguel. Aceita mais de 50 bandeiras. Para CPF e CNPJ."

  return (
    <section className="s-hero hero">
      <img
        src="/hero.webp"
        srcSet="/hero-640.webp 640w, /hero.webp 1320w"
        sizes="100vw"
        className="hero-bg"
        alt=""
        aria-hidden="true"
        width={1320}
        height={1000}
        fetchPriority="high"
      />
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
            loading="lazy"
            width={476}
            height={476}
            className="hero-img"
          />
        </div>
        </div>
      </div>
    </section>
  )
}
