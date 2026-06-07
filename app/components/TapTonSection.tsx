type Props = {
  cidade: string
  bairro: string
}

export default function TapTonSection({ cidade, bairro }: Props) {
  return (
    <section
      style={{
        padding: "60px 20px",
        margin: "60px 0",
        background: "#000",
        color: "#fff",
        borderRadius: "16px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* HEADLINE */}
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
          🚀 Pare de perder dinheiro no {bairro}
        </h2>

        {/* SUBHEAD */}
        <p style={{ fontSize: "16px", color: "#ccc", marginBottom: "30px" }}>
          No {bairro}, em {cidade}, muitos negócios estão pagando taxas altas sem perceber.
          Veja abaixo quanto você pode economizar por venda.
        </p>

        {/* BLOCOS DE TAXA */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "12px",
            marginBottom: "30px",
          }}
        >
          <div style={box}>
            <span>Pix</span>
            <strong style={gratis}>GRÁTIS</strong>
          </div>

          <div style={box}>
            <span>Débito</span>
            <strong>0,79%</strong>
          </div>

          <div style={box}>
            <span>Crédito 1x</span>
            <strong>3,05%</strong>
          </div>

          <div style={box}>
            <span>Crédito 12x</span>
            <strong>12,29%</strong>
          </div>
        </div>

        {/* COPY DE IMPACTO */}
        <p style={{ fontSize: "14px", color: "#aaa", marginBottom: "25px" }}>
          Cada venda com taxa menor = mais lucro no seu bolso.
          Pequenas diferenças podem gerar centenas de reais por mês.
        </p>

        {/* CTA PRINCIPAL */}
        <a
          href="#simulador"
          style={{
            display: "inline-block",
            background: "#00D700",
            color: "#000",
            padding: "16px 28px",
            borderRadius: "999px",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "16px",
            marginBottom: "12px",
          }}
        >
          💰 Simular economia agora
        </a>

        {/* CTA SECUNDÁRIO */}
        <p style={{ fontSize: "12px", color: "#777" }}>
          Sem compromisso • Leva menos de 30 segundos
        </p>
      </div>
    </section>
  )
}

const box = {
  background: "#111",
  padding: "16px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "4px",
}

const gratis = {
  color: "#00D700",
}