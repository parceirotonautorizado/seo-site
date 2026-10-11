import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"
import { TAXAS_ULTIMA_VERIFICACAO } from "@/lib/taxas"

const TITULO = "Sobre o site | Maquininhas Ton Paraná"
const DESCRICAO = "Quem mantém este site, como ele ganha dinheiro, de onde vêm os dados das cidades e o que ele não faz."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}/sobre` },
  openGraph: { ...OG_BASE, title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}/sobre` },
}

export default function Sobre() {
  const whatsapp = `https://wa.me/${CONFIG.whatsapp}`

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Sobre o site", path: "/sobre" },
        ])}
      />

      <article className="txt">
        <h1>Sobre o site</h1>

        <p>
          Este site não é da Ton. Ele é mantido por um parceiro Ton, inscrito no programa Renda Extra, que é o
          programa de indicação da própria Ton. A gente explica as maquininhas, mostra as taxas e manda você para o
          site da Ton quando quiser comprar.
        </p>

        <h2>Como o site ganha dinheiro</h2>
        <p>
          Por indicação. Quando você clica em um botão de pedido aqui e fecha a compra no site da Ton, o parceiro
          recebe uma comissão. Você não paga nada a mais por isso, e o cupom de parceiro já vai aplicado no link. No dia em que conferimos, ele dava 20% de desconto na adesão da T2, da T3 e da T3 Smart.
        </p>
        <p>
          Dizemos isso logo de cara porque muda a forma de ler o site: quem escreve aqui tem interesse em que você
          compre. Por isso as taxas trazem a data em que foram conferidas e o aviso de que vale checar no site da Ton
          antes de fechar.
        </p>

        <h2>O que a gente faz e o que não faz</h2>
        <ul>
          <li>Mostra os quatro modelos e para que tipo de negócio cada um serve.</li>
          <li>Mantém um simulador para você ver quanto recebe em cada venda.</li>
          <li>Responde dúvidas pelo WhatsApp antes da compra.</li>
        </ul>
        <p>
          O que não passa por aqui: venda, entrega, cadastro, conta e suporte da maquininha. Tudo isso é direto com a
          Ton. Se a máquina der problema depois de comprada, o atendimento é o deles.
        </p>

        <h2>De onde vêm os dados das cidades</h2>
        <p>
          População, economia e número de empresas de cada cidade vêm do IBGE: Censo 2022, PIB dos Municípios e
          Cadastro Central de Empresas. Nos bairros de Curitiba, os números são do Censo 2022 por bairro. O ano de cada
          dado aparece na própria página.
        </p>
        <p>
          As distâncias entre cidades são em linha reta, então a estrada é sempre um pouco mais longa. E a sugestão de
          modelo para cada cidade parte desses números, não de uma visita ao lugar. Trate como ponto de partida.
        </p>

        <h2>Sobre as taxas</h2>
        <p>
          As taxas publicadas foram conferidas no site da Ton em {TAXAS_ULTIMA_VERIFICACAO}. A Ton pode mudar os
          valores quando quiser, e o que vale é sempre o que aparece no site da Ton na hora do pedido.
        </p>

        <h2>Achou um erro?</h2>
        <p>
          Avise. Se um dado da sua cidade estiver errado ou uma taxa tiver mudado, mande uma mensagem que a gente
          corrige.
        </p>
        <a className="cc-cta" href={whatsapp} target="_blank" rel="noopener noreferrer">
          Falar no WhatsApp
        </a>
      </article>
    </>
  )
}
