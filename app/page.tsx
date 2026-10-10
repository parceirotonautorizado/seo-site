import Guias from "@/app/components/Guias"
import HeroSlider from "./components/HeroSlider"
import TaxasDestaque from "./components/TaxasDestaque"
import ModelosCarousel from "./components/ModelosCarousel"
import Diferenciais from "./components/Diferenciais"
import Simulador from "./components/Simulador"
import FaqSection from "./components/FaqSection"

export default function Home() {
  return (
    <>
      <HeroSlider />
      <TaxasDestaque />
      <ModelosCarousel />
      <Diferenciais />
      <Guias />

      <section id="simulador">
        <Simulador cidade="Curitiba" bairro="Centro" />
      </section>
      <FaqSection />
    </>
  )
}
