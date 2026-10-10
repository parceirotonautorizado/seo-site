import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd } from "@/lib/jsonld"

const TITULO = "Política de privacidade e cookies | Maquininhas Ton Paraná"
const DESCRICAO = "Quais dados este site coleta, para que servem, como funcionam os cookies de medição e como recusar."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}/politica-de-privacidade` },
  openGraph: { ...OG_BASE, title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}/politica-de-privacidade` },
}

export default function Privacidade() {
  const whatsapp = `https://wa.me/${CONFIG.whatsapp}`

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Privacidade e cookies", path: "/politica-de-privacidade" },
        ])}
      />

      <article className="txt">
        <h1>Política de privacidade e cookies</h1>

        <p>
          Esta página diz o que o site coleta quando você navega por aqui e o que fazemos com isso. É curta porque o
          site coleta pouco.
        </p>

        <h2>Cookies de medição</h2>
        <p>
          Usamos o Google Tag Manager para carregar ferramentas de medição de audiência do Google. Elas mostram quais
          páginas são visitadas, de que tipo de aparelho e por onde as pessoas chegaram. Não vemos seu nome nem seu
          telefone por esse caminho.
        </p>
        <p>
          Essas ferramentas só são carregadas se você clicar em Aceitar no aviso de cookies. Se recusar, nada de
          medição é carregado e o site funciona do mesmo jeito.
        </p>
        <p>
          Mudou de ideia? Apague os dados deste site nas configurações do navegador e o aviso aparece de novo na
          próxima visita.
        </p>

        <h2>O simulador</h2>
        <p>
          Quando você usa o simulador e clica para falar no WhatsApp, o site registra os dados da simulação: cidade,
          tipo de venda, parcelas, faixa de vendas, valor simulado, a página em que você estava, o tipo de aparelho e a
          hora. Esse registro não leva seu nome nem seu número. Ele serve para entendermos quais simulações as pessoas
          mais fazem.
        </p>

        <h2>WhatsApp</h2>
        <p>
          Se você nos chama no WhatsApp, passamos a ter o seu número e o que você escrever, como em qualquer conversa.
          Usamos só para responder. O WhatsApp tem a política de privacidade dele.
        </p>

        <h2>Compra no site da Ton</h2>
        <p>
          Os botões de pedido levam ao site oficial da Ton com um código que identifica a indicação. Cadastro,
          pagamento e todos os dados da compra ficam com a Ton, sob a política de privacidade dela. Nada disso passa
          por este site.
        </p>

        <h2>Hospedagem</h2>
        <p>
          O site é hospedado na Vercel, que guarda registros técnicos de acesso, como endereço IP e horário, para
          manter o serviço funcionando e seguro.
        </p>

        <h2>Seus direitos</h2>
        <p>
          A Lei Geral de Proteção de Dados garante que você pode perguntar quais dados seus temos, pedir correção ou
          pedir que sejam apagados. Para qualquer um desses pedidos, fale com a gente pelo{" "}
          <a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>.
        </p>

        <p>Última atualização: outubro de 2026.</p>
      </article>
    </>
  )
}
