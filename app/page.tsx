import HeroSlider from "./components/HeroSlider"
import TaxasDestaque from "./components/TaxasDestaque"
import ModelosSection from "./components/ModelosSection"
import Diferenciais from "./components/Diferenciais"
import Simulador from "./components/Simulador"
import FaqSection from "./components/FaqSection"

export default function Home() {
  return (
    <>
      <HeroSlider />
      <TaxasDestaque />
      <ModelosSection />
      <Diferenciais />

      <section id="simulador" style={{ padding: "80px 20px", background: "#f4f5f4" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 900,
              marginBottom: "10px",
              textAlign: "center",
              color: "#1a1a1a",
            }}
          >
            Simule as taxas das suas vendas
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#666",
              marginBottom: "30px",
              fontSize: "16px",
            }}
          >
            Descubra exatamente quanto você vai receber por cada venda
          </p>
          <Simulador cidade="Curitiba" bairro="Centro" />
        </div>
      </section>

      <FaqSection />
    </>
  )
}
