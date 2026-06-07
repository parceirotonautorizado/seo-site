"use client"

export default function CalcSection() {
  return (
    <section style={{ margin: "60px 0" }}>

      {/* HEADLINE FORTE */}
      <h2 style={{
        fontSize: "26px",
        fontWeight: "900",
        textAlign: "center",
        marginBottom: "10px"
      }}>
        💰 Descubra quanto você está perdendo em taxas
      </h2>

      {/* SUBTÍTULO (DOR + CURIOSIDADE) */}
      <p style={{
        textAlign: "center",
        color: "#666",
        marginBottom: "25px",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        A maioria dos vendedores paga mais taxas do que deveria.
        Faça uma simulação rápida e veja quanto você pode economizar por venda.
      </p>

      {/* CARD */}
      <div style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "30px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
        textAlign: "center"
      }}>

        <p style={{
          fontSize: "14px",
          color: "#888",
          marginBottom: "15px"
        }}>
          Simulação rápida
        </p>

        <div style={{
          background: "#F7F7F7",
          padding: "20px",
          borderRadius: "10px",
          fontWeight: "bold"
        }}>
          Simulador carregando...
        </div>

        {/* PROVA + SEGURANÇA */}
        <p style={{
          fontSize: "12px",
          color: "#777",
          marginTop: "15px"
        }}>
          ✔ Sem compromisso • ✔ Resultado imediato • ✔ 100% gratuito
        </p>

      </div>

      {/* CTA PRINCIPAL */}
      <div style={{ textAlign: "center", marginTop: "25px" }}>
        <a
          href="/#simulador"
          style={{
            display: "inline-block",
            background: "#00D700",
            color: "#000",
            padding: "16px 30px",
            borderRadius: "999px",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "16px",
            boxShadow: "0 6px 20px rgba(0,215,0,0.3)"
          }}
        >
          💰 Simular economia agora
        </a>

        <p style={{
          fontSize: "12px",
          color: "#888",
          marginTop: "10px"
        }}>
          Leva menos de 10 segundos
        </p>
      </div>

    </section>
  )
}