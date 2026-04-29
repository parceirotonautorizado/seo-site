type Props = {
  params: Promise<{ slug?: string; bairro?: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug, bairro } = await params

  const cidade = (slug ?? "").replace(/-/g, " ")
  const nomeBairro = (bairro ?? "").replace(/-/g, " ")

  return {
    title: `Maquininhas Ton em ${nomeBairro}, ${cidade} | Taxas e Comparação`,
    description: `Veja as melhores maquininhas da Ton no bairro ${nomeBairro}, em ${cidade}. Compare taxas e escolha a melhor opção.`
  }
}

export default async function BairroPage({ params }: Props) {
  const { slug, bairro } = await params

  const cidade = (slug ?? "").replace(/-/g, " ")
  const nomeBairro = (bairro ?? "").replace(/-/g, " ")

  return (
    <main style={{ padding: 40 }}>
      <h1>Maquininhas Ton em {nomeBairro}, {cidade}</h1>

      <p>
        Encontre as melhores maquininhas da Ton no bairro {nomeBairro}, em {cidade}.
        Compare taxas e escolha a melhor opção para seu negócio.
      </p>
    </main>
  )
}