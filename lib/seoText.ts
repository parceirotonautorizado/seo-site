export function gerarTexto(cidade: string, bairro: string) {
  const intros = [
    `Se você trabalha no bairro ${bairro}, em ${cidade}, já percebeu como oferecer diferentes formas de pagamento impacta diretamente nas vendas.`,
    `Quem vende no ${bairro}, em ${cidade}, precisa acompanhar o comportamento do consumidor moderno.`,
    `No bairro ${bairro}, em ${cidade}, aceitar cartão deixou de ser opcional e virou necessidade.`
  ]

  const contextos = [
    `O ${bairro} é uma região com forte movimentação comercial, onde clientes valorizam rapidez e praticidade.`,
    `Em ${bairro}, o fluxo de pessoas exige soluções rápidas e eficientes para pagamento.`,
    `Negócios no ${bairro} enfrentam concorrência constante, o que exige diferenciação.`
  ]

  const vantagens = [
    `Aceitar cartão aumenta suas vendas e melhora a experiência do cliente.`,
    `Com uma maquininha, você vende mais e reduz perdas por falta de troco.`,
    `Pagamentos digitais facilitam o dia a dia e aumentam conversões.`
  ]

  const escolha = [
    `Na hora de escolher, avalie taxas, prazo de recebimento e estabilidade.`,
    `Escolher a maquininha certa evita custos desnecessários.`,
    `Uma boa escolha impacta diretamente no lucro do seu negócio.`
  ]

  const dicas = [
    `Ofereça parcelamento sempre que possível.`,
    `Divulgue que aceita cartão e PIX.`,
    `Evite filas com pagamento por aproximação.`,
    `Use tecnologia como aliada nas vendas.`,
  ]

  function pick(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  return `
${pick(intros)}

${pick(contextos)}

${pick(vantagens)}

${pick(escolha)}

Dicas práticas para vender mais no ${bairro}:
- ${pick(dicas)}
- ${pick(dicas)}
- ${pick(dicas)}

Se você atua no ${bairro}, em ${cidade}, investir em uma boa maquininha é um passo essencial para crescer.
`
}