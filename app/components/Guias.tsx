import { GUIAS } from "@/lib/guias"

// Bloco de links para as páginas de tema. "atual" esconde a página em que o leitor já está.
export default function Guias({ atual, titulo = "Guias da Ton" }: { atual?: string; titulo?: string }) {
  // mostra no máximo 8; a lista completa fica no mapa do site
  const lista = GUIAS.filter((g) => g.path !== atual).slice(0, 8)

  return (
    <section className="guias">
      <h2 className="cc-h2">{titulo}</h2>
      <ul className="guias-lista">
        {lista.map((g) => (
          <li key={g.path}>
            <a href={g.path}>{g.titulo}</a>
            <span>{g.resumo}</span>
          </li>
        ))}
      </ul>
      <p className="guias-todos">
        <a href="/mapa-do-site">Ver todos os guias</a>
      </p>
    </section>
  )
}
