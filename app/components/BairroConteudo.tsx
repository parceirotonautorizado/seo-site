import { CONFIG } from "@/lib/config"
import { conteudoBairro } from "@/lib/bairroConteudo"
import type { Bairro } from "@/bairros"

type Props = {
  bairro: Bairro
  cidade: string
  cidadeSlug: string
  todos: Bairro[]
}

export default function BairroConteudo({ bairro, cidade, cidadeSlug, todos }: Props) {
  const c = conteudoBairro(bairro, cidade, todos)
  const onde = `${c.em} ${bairro.nome}`

  return (
    <div className="cc">
      <section className="cc-sec">
        <h2 className="cc-h2">Como é o comércio {onde}</h2>

        {c.paragrafos.map((p, i) => (
          <p key={i} className="cc-p">
            {p}
          </p>
        ))}

        <dl className="cc-numeros">
          {c.numeros.map((item) => (
            <div key={item.rotulo} className="cc-numero">
              <dt>{item.rotulo}</dt>
              <dd>{item.valor}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="cc-sec">
        <h2 className="cc-h2">Qual maquininha Ton combina com quem vende {onde}</h2>

        <ol className="cc-modelos">
          {c.modelos.map((m) => (
            <li key={m.id}>
              <h3 className="cc-h3">Ton {m.nome}</h3>
              <p className="cc-p">{m.texto}</p>
              <a className="cc-link" href={CONFIG.tonModelos[m.id]} target="_blank" rel="noopener noreferrer">
                Ver a {m.nome} no site da Ton →
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="cc-sec">
        <h2 className="cc-h2">Entrega {onde}</h2>

        <p className="cc-p">{c.entrega}</p>

        <a className="cc-cta" href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer">
          Pedir maquininha {onde} →
        </a>
      </section>

      <section className="cc-sec">
        <h2 className="cc-h2">Perguntas sobre a maquininha Ton {onde}</h2>

        {c.faq.map((item) => (
          <details key={item.q} className="cc-faq">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </section>

      <section className="cc-sec">
        <h2 className="cc-h2">Outros bairros de {cidade}</h2>

        <ul className="cc-vizinhas">
          {c.outros.map((o) => (
            <li key={o.slug}>
              <a href={`/cidade/${cidadeSlug}/${o.slug}`}>Maquininha Ton: {o.nome}</a>
            </li>
          ))}
          <li>
            <a href={`/cidade/${cidadeSlug}`}>Todos os bairros e dados de {cidade}</a>
          </li>
        </ul>

        <p className="cc-fonte">{c.fonte}</p>
      </section>
    </div>
  )
}
