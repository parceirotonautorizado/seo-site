import cidades from "@/dados/cidades-pr.json"
import { MODELOS } from "@/lib/modelos"
import BuscaCidade from "@/app/components/BuscaCidade"

// Topo da página inicial: o que o site é e a busca por cidade.
export default function TopoInicial() {
  const lista = cidades.map((c) => ({ nome: c.nome, slug: c.slug }))

  return (
    <section className="s-topo">
      <div className="tp-container">
        <div className="tp-texto">
          <p className="tp-sobre">Guia de um parceiro Ton para o comércio do Paraná</p>
          <h1 className="tp-h1">Maquininha Ton no Paraná: veja pela sua cidade</h1>
          <p className="tp-desc">
            Taxas conferidas na fonte, os quatro modelos explicados sem enrolação e uma página para cada um dos 399
            municípios do estado, com dados do comércio local.
          </p>

          <BuscaCidade cidades={lista} />

          <p className="tp-links">
            <a href="/taxas-ton">Tabela de taxas</a>
            <a href="/simulador-ton">Simulador</a>
            <a href="/cidades">Todas as cidades</a>
          </p>
        </div>

        <aside className="tp-ficha" aria-label="Resumo dos modelos">
          <p className="tp-ficha-titulo">Adesão a partir de</p>
          <ul>
            {MODELOS.map((m) => (
              <li key={m.id}>
                <a href={m.pagina}>
                  <span>Ton {m.nome}</span>
                  <strong>{m.preco}</strong>
                </a>
              </li>
            ))}
          </ul>
          <p className="tp-ficha-nota">Sem aluguel. Débito a partir de 0,57% no período promocional.</p>
        </aside>
      </div>
    </section>
  )
}
