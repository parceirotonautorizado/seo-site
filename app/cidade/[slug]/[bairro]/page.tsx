import { bairros } from "@/bairros"
import Hero from "@/app/components/Hero"
import { gerarTexto } from "@/lib/seoText"
import TapTonSection from "@/app/components/TapTonSection"
import CalcSection from "@/app/components/CalcSection"

export const dynamic = "force-static"

export async function generateStaticParams() {
  const params = []

  for (const cidade of bairros) {
    for (const bairro of cidade.bairros) {
      params.push({
        slug: cidade.slug,
        bairro: bairro.slug,
      })
    }
  }

  return params
}

type Props = {
  params: Promise<{
    slug: string
    bairro: string
  }>
}

export default async function BairroPage({ params }: Props) {
  const { slug, bairro } = await params

  const cidadeFormatada = slug.replace(/-/g, " ")
  const bairroFormatado = bairro.replace(/-/g, " ")

  const texto = gerarTexto(cidadeFormatada, bairroFormatado)

  return (
    <>
      <Hero cidade={cidadeFormatada} bairro={bairroFormatado} />

      <section style={{ padding: "60px 20px", maxWidth: "900px", margin: "0 auto" }}>

        <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Maquininha Ton no {bairroFormatado} em {cidadeFormatada}
        </h1>

        <p style={{ lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
          {texto}
        </p>

        <h2>Como é vender no {bairroFormatado} em {cidadeFormatada}</h2>

<p>O bairro {bairroFormatado}, em {cidadeFormatada}, possui forte movimento comercial.</p>
<p>Clientes buscam rapidez, praticidade e múltiplas formas de pagamento.</p>
<p>Negócios que não acompanham isso perdem vendas todos os dias.</p>

<h2>Vantagens de usar maquininha</h2>

<ul>
  <li>Aumenta suas vendas</li>
  <li>Mais formas de pagamento</li>
  <li>Atendimento mais rápido</li>
  <li>Mais segurança</li>
  <li>Melhor experiência do cliente</li>
</ul>

<p>Em regiões movimentadas como {bairroFormatado}, velocidade = mais lucro.</p>

{/* 🔥 BLOCO ESTRATÉGICO (NÃO REMOVE ISSO) */}
<CalcSection />

<h2>Como escolher a melhor maquininha</h2>

        {/* 🔥 NOVA SEÇÃO NO LUGAR DO SIMULADOR */}
        <TapTonSection cidade={cidadeFormatada} bairro={bairroFormatado} />

        <h3>Taxas</h3>
        <p>Taxas impactam diretamente seu lucro mensal.</p>

        <h3>Recebimento</h3>
        <p>Receber na hora pode fazer diferença no caixa.</p>

        <h3>Conectividade</h3>
        <p>Máquina lenta ou offline = venda perdida.</p>

        <h3>Suporte</h3>
        <p>Suporte rápido evita prejuízo.</p>

        <h2>Comparação entre maquininhas</h2>

        <p>Hoje existem diversas opções no mercado.</p>
        <p>Algumas focam em taxas baixas, outras em benefícios.</p>
        <p>O ideal é equilíbrio entre custo e benefício.</p>

        <h2>Dicas para vender mais</h2>

        <ul>
          <li>Aceite cartão e PIX</li>
          <li>Ofereça parcelamento</li>
          <li>Evite filas</li>
          <li>Use pagamento por aproximação</li>
          <li>Divulgue suas formas de pagamento</li>
        </ul>

        <p>Pequenos ajustes podem aumentar muito seu faturamento.</p>

        <h2>Vale a pena usar maquininha?</h2>

        <p>Sim — hoje é essencial.</p>
        <p>O comportamento do consumidor mudou.</p>
        <p>Quem não acompanha, fica para trás.</p>

        <h2>Conclusão</h2>

        <p>Investir em maquininha é investir no crescimento.</p>
        <p>Você vende mais e melhora a experiência do cliente.</p>
        <p>No {bairroFormatado}, isso pode ser decisivo.</p>

      </section>
    </>
  )
}