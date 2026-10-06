type Props = {
  cidade?: string
  bairro?: string
}

export default function Hero({
  cidade,
  bairro,
}: Props) {

  const titulo = bairro
    ? `Maquininhas Ton no ${bairro}, ${cidade}`

    : cidade
    ? `Maquininhas Ton em ${cidade}`

    : "Maquininhas Ton | Menores taxas do Brasil"

  const descricao = bairro

    ? `Encontre as melhores maquininhas da Ton no 
bairro ${bairro}, em ${cidade}. Compare taxas e 
escolha a melhor opção para seu negócio.`

    : cidade

    ? `Encontre as melhores maquininhas da Ton em 
${cidade}. Compare taxas e escolha a ideal para 
seu negócio.`

    : "Compare taxas, simule economia e encontre a melhor maquininha Ton para o seu negócio."

  return (
    <section className="hero">

      <img
        src="/hero.jpg"
        className="hero-background-img"
      />

      <div className="hero-overlay"></div>

      <div className="container">

        <div className="hero-content">

          <span className="hero-badge">
            Menores taxas do Brasil
          </span>

          <h1 className="hero-titulo">
            {titulo}
          </h1>

          <p className="hero-descricao">
            {descricao}
          </p>

        </div>

      </div>

    </section>
  )
}
