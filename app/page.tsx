import Guias from "@/app/components/Guias"
import TopoInicial from "./components/TopoInicial"
import TaxasDestaque from "./components/TaxasDestaque"
import Modelos from "./components/Modelos"
import Diferenciais from "./components/Diferenciais"
import Simulador from "./components/Simulador"
import FaqSection from "./components/FaqSection"

export default function Home() {
  return (
    <>
      <TopoInicial />
      <TaxasDestaque />
      <Modelos />
      <Diferenciais />
      <Guias />

      <section id="simulador">
        <Simulador cidade="Curitiba" bairro="Centro" />
      </section>
      <FaqSection />
    </>
  )
}
