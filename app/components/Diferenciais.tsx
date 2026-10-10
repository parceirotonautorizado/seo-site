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
      "Sem aluguel e sem mensalidade. Você paga a adesão uma vez (em até 12x) e esquece taxas fixas e metas abusivas.",
  },
  {
    icone: "🛡️",
    titulo: "Garantia vitalícia",
    texto:
      "Troca gratuita em caso de problemas técnicos, sem custo adicional, enquanto você for cliente da Ton.",
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
    <section className="s-dif dif-section">
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
    </section>
  )
}
