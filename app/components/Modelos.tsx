import { MODELOS, MODELOS_CONFERIDO_EM, CUPOM_PARCEIRO, CUPOM_CONFERIDO_EM } from "@/lib/modelos"

// Os quatro modelos em lista, com a indicação de para quem cada um serve.
export default function Modelos() {
  const temCupom = MODELOS.some((m) => m.semCupom)
  return (
    <section id="modelos" className="s-modelos">
      <div className="mo-container">
        <h2 className="mo-titulo">Os quatro modelos, lado a lado</h2>
        <p className="mo-sub">
          Todos sem aluguel e com Pix a 0% para quem cadastra uma chave Pix. T2, T3 e T3 Smart aceitam vale-refeição
          e vale-alimentação para CNPJ do ramo de alimentação.
        </p>

        <ul className="mo-lista">
          {MODELOS.map((m) => (
            <li key={m.id} className="mo-item">
              <img src={m.imagem} alt={`Maquininha Ton ${m.nome}`} width={480} height={720} loading="lazy" decoding="async" className="mo-img" />

              <div className="mo-texto">
                <h3 className="mo-nome">Ton {m.nome}</h3>
                <p className="mo-para">{m.para}</p>
                <p className="mo-desc">{m.subtitulo}.</p>
                <a href={m.pagina} className="mo-saiba">Ver detalhes da {m.nome}</a>
              </div>

              <div className="mo-compra">
                {m.semCupom && (
                  <p className="mo-cupom">
                    <s>{m.semCupom}</s> {CUPOM_PARCEIRO} de desconto pelo nosso link
                  </p>
                )}
                <p className="mo-preco">{m.preco}</p>
                <p className="mo-parcela">{m.parcela}</p>
                <a href={m.link} target="_blank" rel="noopener noreferrer" className="mo-botao">
                  {m.cta}
                </a>
              </div>
            </li>
          ))}
        </ul>
        <p className="mo-nota">
          Preços conferidos no catálogo da Ton em {MODELOS_CONFERIDO_EM}
          {temCupom && (
            <>
              {" "}e cupom de {CUPOM_PARCEIRO} conferido em {CUPOM_CONFERIDO_EM}. O cupom entra sozinho quando você
              pede pelos botões desta página, e o valor riscado é o do catálogo sem o cupom
            </>
          )}
          . A Ton pode mudar preços e cupons quando quiser; vale o que aparecer no site da Ton na hora do pedido.
        </p>
      </div>
    </section>
  )
}
