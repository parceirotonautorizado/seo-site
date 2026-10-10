import { GUIAS } from "@/lib/guias"

// Bloco de links para as páginas de tema. "atual" esconde a página em que o leitor já está.
export default function Guias({ atual, titulo = "Guias da Ton" }: { atual?: string; titulo?: string }) {
  const lista = GUIAS.filter((g) => g.path !== atual)

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
    </section>
  )
}
