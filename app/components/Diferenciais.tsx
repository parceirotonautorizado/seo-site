"use client"

const ITEMS = [
  {
    icone: "⚡",
    titulo: "Dinheiro na hora",
    texto:
      "Receba o valor das suas vendas no mesmo dia direto na conta digital Ton. De lá, PIX grátis para qualquer banco.",
  },
  {
    icone: "🏦",
    titulo: "Mais de 50 bandeiras",
    texto:
      "Aceite Pix, Visa, Mastercard, Elo, Vouchers (VR e VA) e muito mais. Nunca perca uma venda por falta de opção.",
  },
  {
    icone: "💳",
    titulo: "Zero aluguel",
    texto:
      "A maquininha é 100% sua. Pague uma vez (em até 12x) e esqueça taxas fixas, mensalidades e metas abusivas.",
  },
  {
    icone: "🛡️",
    titulo: "Garantia vitalícia",
    texto:
      "Troca gratuita em caso de problemas técnicos. Sem custo adicional, para sempre.",
  },
  {
    icone: "📦",
    titulo: "Frete grátis",
    texto:
      "Entrega rápida para todo o Paraná sem custo. Você recebe a maquininha em casa ou no seu negócio.",
  },
  {
    icone: "📱",
    titulo: "App completo",
    texto:
      "Gerencie vendas, emita relatórios e acompanhe seu faturamento pelo aplicativo Ton no celular.",
  },
]

export default function Diferenciais() {
  return (
    <section className="dif-section">
      <div className="dif-container">
        <div className="dif-header">
          <h2 className="dif-title">Por que escolher a Ton?</h2>
          <p className="dif-sub">
            Feita para autônomos, MEIs e empresas que querem pagar menos taxa e receber mais rápido.
          </p>
        </div>

        <div className="dif-grid">
          {ITEMS.map((item) => (
            <div key={item.titulo} className="dif-card">
              <div className="dif-icone">{item.icone}</div>
              <div>
                <h3 className="dif-card-title">{item.titulo}</h3>
                <p className="dif-card-text">{item.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .dif-section {
          padding: 80px 20px;
          background: #fff;
        }

        .dif-container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .dif-header {
          text-align: center;
        }

        .dif-title {
          font-size: 36px;
          font-weight: 900;
          color: #1a1a1a;
          margin: 0 0 12px;
        }

        .dif-sub {
          color: #666;
          font-size: 16px;
          margin: 0;
        }

        .dif-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .dif-card {
          background: #f9fafb;
          border-radius: 20px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .dif-icone {
          font-size: 36px;
          line-height: 1;
        }

        .dif-card-title {
          font-size: 18px;
          font-weight: 800;
          color: #1a1a1a;
          margin: 0 0 8px;
        }

        .dif-card-text {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 900px) {
          .dif-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .dif-title {
            font-size: 28px;
          }
        }

        @media (max-width: 520px) {
          .dif-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
