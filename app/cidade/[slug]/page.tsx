type Props = {
  params: Promise<{ slug?: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const cidade = (slug ?? "").replace(/-/g, " ")

  return {
    title: `Maquininhas Ton em ${cidade} | Taxas e Comparação`,
    description: `Veja as melhores maquininhas da Ton em ${cidade}. Compare taxas e escolha a melhor opção.`
  }
}

export default async function CidadePage({ params }: Props) {
  const { slug } = await params
  const cidade = (slug ?? "cidade").replace(/-/g, " ")

  return (
    <main style={{ padding: 40 }}>
      <h1>Maquininhas Ton em {cidade}</h1>

      <p>
        Encontre as melhores maquininhas da Ton em {cidade}.
        Compare taxas e escolha a ideal para seu negócio.
      </p>
    </main>
  )
}