import Hero from "./components/Hero"
import Simulador from "./components/Simulador"
import LeadForm from "./components/LeadForm"

export default function Home() {
  return (
    <>
      <Hero cidade="Paraná" />

      <section
        id="simulador"
        style={{
          padding: "80px 20px",
          background: "#F7F7F7",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "900",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            Simule quanto você pode economizar
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#666",
              marginBottom: "30px",
            }}
          >
            Compare taxas e descubra quanto você pode 
lucrar mais usando a Ton
          </p>

          <Simulador
            cidade="Curitiba"
            bairro="Centro"
          />
        </div>
      </section>

      <section
        style={{
          padding: "80px 20px",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "32px",
              fontWeight: "900",
              marginBottom: "10px",
            }}
          >
            Solicite uma proposta personalizada
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#666",
              marginBottom: "30px",
            }}
          >
            Preencha os dados abaixo e nossa equipe 
entrará em contato.
          </p>

          <LeadForm />
        </div>
      </section>
    </>
  )
}
