import type { Metadata } from "next"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd, breadcrumbLd, artigoLd } from "@/lib/jsonld"
import { GUIAS_CONFERIDO_EM } from "@/lib/guias"
import Guias from "@/app/components/Guias"
import Modelos from "@/app/components/Modelos"
import RecomendadorSecao from "@/app/components/RecomendadorSecao"
import { MODELOS, MODELOS_CONFERIDO_EM, CUPOM_PARCEIRO, CUPOM_CONFERIDO_EM } from "@/lib/modelos"

const PATH = "/cupom-desconto-maquininha-ton"
const TITULO = "Cupom de desconto Ton: como pegar o desconto de parceiro"
const DESCRICAO = "O desconto de parceiro na maquininha Ton entra sozinho pelo link, sem digitar código. Veja em quais modelos vale e quanto fica cada um."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${CONFIG.dominio}${PATH}` },
  openGraph: { ...OG_BASE, type: "article", title: TITULO, description: DESCRICAO, url: `${CONFIG.dominio}${PATH}` },
}

export default function CupomTon() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { nome: "Início", path: "/" },
          { nome: "Cupom de desconto Ton", path: PATH },
        ])}
      />
      <JsonLd data={artigoLd({ titulo: TITULO, descricao: DESCRICAO, path: PATH, publicado: "10/10/2026", modificado: GUIAS_CONFERIDO_EM })} />

      <article className="txt">
        <h1>Cupom de desconto da maquininha Ton</h1>

        <p>
          Você não precisa caçar código. O desconto de parceiro da Ton não é digitado no carrinho: ele vem preso ao
          link de quem indica. Abriu o catálogo pelo link de um parceiro, o preço já aparece menor.
        </p>
        <p>
          Este site é de um parceiro Ton, então os botões daqui já levam o cupom. Abaixo está quanto ele muda em cada
          modelo, conferido direto no catálogo.
        </p>

        <h2>Quanto fica cada maquininha com o cupom</h2>
        <div className="tab-wrap">
          <table className="tab">
            <caption>Taxa de adesão, conferida em {MODELOS_CONFERIDO_EM}</caption>
            <thead>
              <tr>
                <th scope="col">Modelo</th>
                <th scope="col">Sem o cupom</th>
                <th scope="col">Com o cupom de parceiro</th>
                <th scope="col">Pedir</th>
              </tr>
            </thead>
            <tbody>
              {MODELOS.map((m) => (
                <tr key={m.id}>
                  <th scope="row">
                    <a href={m.pagina}>Ton {m.nome}</a>
                  </th>
                  <td>{m.semCupom || m.preco}</td>
                  <td>
                    <strong>{m.preco}</strong> {m.semCupom ? "" : "(mesmo preço)"}
                  </td>
                  <td>
                    <a href={m.link} target="_blank" rel="noopener noreferrer">
                      {m.cta}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="nota">
          Cupom de {CUPOM_PARCEIRO} visto aplicado no catálogo da Ton em {CUPOM_CONFERIDO_EM}. A adesão pode ser
          parcelada em até 12x no cartão. Preço e cupom são da Ton e podem mudar sem aviso.
        </p>

        <h2>Como usar, passo a passo</h2>
        <ol>
          <li>Toque em um dos botões de pedido desta página. Ele abre o site da Ton já com o cupom.</li>
          <li>Confira no carrinho se o valor é o da coluna da direita.</li>
          <li>Preencha o cadastro e pague a adesão no site da Ton. Nada é pago aqui.</li>
        </ol>
        <p>
          Se o valor no carrinho estiver diferente do que mostramos, vale o do carrinho. A Ton troca preços e
          promoções de tempos em tempos, e a gente confere todo mês.
        </p>

        <h2>Por que na T1 o preço não muda</h2>
        <p>
          No dia da conferência, a T1 aparecia com o mesmo valor com ou sem cupom. Ela já é a mais barata da linha.
          O cupom pesou na T2, na T3 e na T3 Smart.
        </p>

        <h2>Cuidado com código de cupom solto na internet</h2>
        <ul>
          <li>Código para digitar, achado em site de cupom, muitas vezes está vencido ou nem existe.</li>
          <li>Ninguém precisa do seu CPF, da sua senha ou de um Pix adiantado para liberar desconto.</li>
          <li>A compra acontece só em ton.com.br. Confira o endereço antes de digitar qualquer dado.</li>
        </ul>

        <h2>O desconto vale mais que a taxa?</h2>
        <p>
          Não. O cupom mexe na adesão, que você paga uma vez. A taxa você paga em toda venda, todo mês. Economizar
          R$ 30 na máquina e escolher o modelo errado sai caro. Antes de pedir, veja a{" "}
          <a href="/taxas-ton">tabela de taxas</a> e faça o <a href="/#qual-maquininha" data-secao="qual-maquininha">teste de três perguntas</a>{" "}
          para saber qual modelo combina com o seu jeito de vender.
        </p>

        <a className="cc-cta" href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer">
          Abrir o catálogo da Ton com o cupom
        </a>

        <h2>Fontes</h2>
        <p className="nota">Informações conferidas em {GUIAS_CONFERIDO_EM}. A Ton pode mudar regras, prazos e valores.</p>
        <ul className="fontes">
          <li>Catálogo da Ton, aberto com e sem o link de parceiro.</li>
        </ul>
      </article>

      <Modelos />
      <RecomendadorSecao />
      <Guias atual={PATH} titulo="Leia também" />
    </>
  )
}
