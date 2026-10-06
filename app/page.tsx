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
      <section id="simulador">
        <Simulador cidade="Curitiba" bairro="Centro" />
      </section>
      <FaqSection />
    </>
  )
}
