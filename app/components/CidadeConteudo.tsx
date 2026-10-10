import { CONFIG } from "@/lib/config"
import { conteudoCidade, type Cidade } from "@/lib/cidadeConteudo"

export default function CidadeConteudo({ cidade }: { cidade: Cidade }) {
  const c = conteudoCidade(cidade)

  return (
    <div className="cc">
      <section className="cc-sec">
        <h2 className="cc-h2">O comércio de {cidade.nome} em números</h2>

        {c.destaque && <p className="cc-p">{c.destaque}</p>}

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
        <h2 className="cc-h2">Qual maquininha Ton combina com quem vende em {cidade.nome}</h2>

        <p className="cc-p">
          A Ton tem quatro aparelhos, e a escolha depende de como e onde você vende. A ordem abaixo considera o perfil
          do comércio de {cidade.nome} descrito acima; as taxas de cada plano estão no simulador mais abaixo.
        </p>

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
        <h2 className="cc-h2">Entrega em {cidade.nome}</h2>

        <p className="cc-p">{c.entrega}</p>

        <a className="cc-cta" href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer">
          Pedir maquininha em {cidade.nome} →
        </a>
      </section>

      <section className="cc-sec">
        <h2 className="cc-h2">Perguntas sobre a maquininha Ton em {cidade.nome}</h2>

        {c.faq.map((item) => (
          <details key={item.q} className="cc-faq">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </section>

      <section className="cc-sec">
        <h2 className="cc-h2">Cidades perto de {cidade.nome}</h2>

        <ul className="cc-vizinhas">
          {c.vizinhas.map((v) => (
            <li key={v.slug}>
              <a href={`/cidade/${v.slug}`}>
                Maquininha Ton em {v.nome}
              </a>
              <span> · {v.km} km</span>
            </li>
          ))}
        </ul>

        <p className="cc-fonte">{c.fonte}</p>
      </section>
    </div>
  )
}
