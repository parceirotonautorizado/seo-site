import { CONFIG } from "@/lib/config"

type Props = {
  cidade?: string
  bairro?: string
  // preposição antes do nome do bairro: "no", "na", "nas" ou "em"
  em?: string
}

export default function Hero({ cidade, bairro, em = "no" }: Props) {
  const titulo = bairro
    ? `Maquininha Ton ${em} ${bairro}, ${cidade}`
    : cidade
    ? `Maquininha Ton em ${cidade}`
    : "Maquininha Ton no Paraná"

  const descricao = bairro
    ? `Como é o comércio do bairro, qual modelo combina com quem vende ${em} ${bairro} e quanto custa cada venda.`
    : cidade
    ? `Como é o comércio de ${cidade}, qual modelo combina com quem vende aí e quanto custa cada venda.`
    : "Taxas, modelos e simulador da maquininha Ton para quem vende no Paraná."

  return (
    <section className="s-capa">
      <div className="cp-container">
        <div className="cp-texto">
          <p className="cp-sobre">Parceiro Ton · Paraná</p>

          <h1 className="cp-h1">{titulo}</h1>

          <p className="cp-desc">{descricao}</p>

          <div className="cp-botoes">
            <a href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer" className="cp-botao">
              Pedir com desconto
            </a>
            <a href="/simulador-ton" data-secao="simulador" className="cp-botao cp-botao-claro">
              Simular taxas
            </a>
          </div>
        </div>

        <ul className="cp-ficha">
          <li><strong>0,57%</strong><span>no débito e no crédito à vista, no período promocional</span></li>
          <li><strong>0%</strong><span>no Pix da maquininha, com chave Pix cadastrada</span></li>
          <li><strong>R$ 0</strong><span>de aluguel e de mensalidade</span></li>
          <li><strong>Grátis</strong><span>o frete para todo o Paraná</span></li>
        </ul>
      </div>
    </section>
  )
}
