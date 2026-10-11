"use client"

import { useEffect, useRef, useState } from "react"

type Taxas = { deb: number; cre1: number; cre12: number }
type Faixa = { id: string; label: string; taxas: Record<"d1" | "d0", Record<"mv" | "oa", Taxas>> }
type Modelo = { id: string; nome: string; preco: string; parcela: string; link: string; pagina: string }

type Props = {
  faixas: Faixa[]
  modelos: Modelo[]
  promo: { mv: number; oa: number; oaCre1: number }
  whatsapp: string
  local?: string
}

const ONDE = [
  { id: "balcao", label: "No balcão ou no caixa" },
  { id: "rua", label: "Na rua, em entrega ou na casa do cliente" },
  { id: "celular", label: "Sozinho, sempre com o celular" },
]

const EXTRA = [
  { id: "impresso", label: "Pede comprovante impresso" },
  { id: "vale", label: "Paga com vale-refeição ou alimentação" },
  { id: "ambos", label: "As duas coisas" },
  { id: "nenhum", label: "Nenhuma das duas" },
]

const BANDEIRA = [
  { id: "mv", label: "Visa e Mastercard" },
  { id: "oa", label: "Elo e Amex" },
]

const PRAZO = [
  { id: "d1", label: "Em 1 dia útil" },
  { id: "d0", label: "Na hora" },
]

const pct = (v: number) => `${v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`

// Regra da indicação. As taxas não dependem do modelo; o modelo depende de onde e como a pessoa vende.
function indicar(faixa: string, onde: string, extra: string): { id: string; motivo: string } {
  const vendeMuito = faixa === "t10a30" || faixa === "t30p"
  const querImpresso = extra === "impresso" || extra === "ambos"
  const querVale = extra === "vale" || extra === "ambos"

  if (querImpresso) {
    return vendeMuito
      ? {
          id: "t3smart",
          motivo:
            "Você precisa imprimir comprovante e vende bastante. A T3 Smart imprime, tem tela de toque e chip 4G, o que agiliza o caixa quando tem fila.",
        }
      : {
          id: "t3",
          motivo:
            "Você precisa imprimir comprovante. A T3 é a mais barata que tem bobina, e funciona com chip próprio e Wi-Fi.",
        }
  }

  if (onde === "balcao") {
    return vendeMuito
      ? {
          id: "t3smart",
          motivo:
            "Com esse volume no balcão, a tela de toque e o chip 4G da T3 Smart deixam cada venda mais rápida. Se preferir gastar menos, a T2 faz o básico.",
        }
      : {
          id: "t2",
          motivo:
            "Sem precisar de comprovante impresso, a T2 resolve o balcão por menos: tem chip próprio e Wi-Fi e manda o comprovante por SMS.",
        }
  }

  if (onde === "rua") {
    return {
      id: "t2",
      motivo:
        "Para vender fora do ponto fixo, a T2 é a escolha: cabe no bolso e tem chip próprio, então não depende do seu celular.",
    }
  }

  // sozinho, com o celular
  if (querVale) {
    return {
      id: "t2",
      motivo: "A T1 não aceita vale. A T2 é o modelo mais barato que aceita, e ainda funciona sem depender do celular.",
    }
  }
  return faixa === "ate3" || faixa === "t3a6"
    ? {
        id: "t1",
        motivo:
          "Para quem anda sempre com o celular e está nessa faixa de vendas, a T1 basta. É a mais barata e funciona pelo Bluetooth do aparelho.",
      }
    : {
        id: "t2",
        motivo:
          "Você já vende um bom volume. A T2 custa pouco a mais que a T1 e tem chip próprio, então não para se o celular ficar sem bateria ou sem sinal.",
      }
}

type GrupoProps = { titulo: string; opcoes: { id: string; label: string }[]; valor: string; mudar: (v: string) => void; compacto?: boolean }

function Grupo({ titulo, opcoes, valor, mudar, compacto }: GrupoProps) {
  return (
    <fieldset className={`rc-grupo${compacto ? " rc-grupo-compacto" : ""}`}>
      <legend>{titulo}</legend>
      <div className="rc-opcoes">
        {opcoes.map((o) => (
          <button
            key={o.id}
            type="button"
            className={`rc-opcao${valor === o.id ? " rc-ativa" : ""}`}
            aria-pressed={valor === o.id}
            onClick={() => mudar(o.id)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </fieldset>
  )
}


export default function Recomendador({ faixas, modelos, promo, whatsapp, local }: Props) {
  const [faixa, setFaixa] = useState("")
  const [onde, setOnde] = useState("")
  const [extra, setExtra] = useState("")
  // bandeira e prazo já vêm com a opção mais comum marcada; mudam só a taxa mostrada, não o modelo
  const [bandeira, setBandeira] = useState<"mv" | "oa">("mv")
  const [prazo, setPrazo] = useState<"d1" | "d0">("d1")
  const [aberto, setAberto] = useState(false)
  const fechar = useRef<HTMLButtonElement>(null)

  const pronto = faixa && onde && extra
  const resultado = pronto ? indicar(faixa, onde, extra) : null
  const modelo = resultado ? modelos.find((m) => m.id === resultado.id) : null
  const faixaAtual = faixas.find((f) => f.id === faixa)
  const taxas = faixaAtual?.taxas[prazo][bandeira]
  const querVale = extra === "vale" || extra === "ambos"

  // abre o resultado em janela assim que as três perguntas estiverem respondidas (e de novo a cada mudança)
  useEffect(() => {
    if (faixa && onde && extra) setAberto(true)
  }, [faixa, onde, extra])

  // com a janela aberta: trava a rolagem do fundo, fecha no Esc e leva o foco para o botão de fechar
  useEffect(() => {
    if (!aberto) return
    const anterior = document.body.style.overflow
    document.body.style.overflow = "hidden"
    fechar.current?.focus()
    const tecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(false)
    }
    window.addEventListener("keydown", tecla)
    return () => {
      document.body.style.overflow = anterior
      window.removeEventListener("keydown", tecla)
    }
  }, [aberto])

  function zap() {
    const linhas = [
      "Olá! Fiz o teste no site e quero comprar uma maquininha Ton.",
      `Vendo por mês: ${faixaAtual?.label}`,
      `Bandeira mais usada: ${BANDEIRA.find((x) => x.id === bandeira)?.label}`,
      `Quero receber: ${PRAZO.find((x) => x.id === prazo)?.label}`,
      `Onde vendo: ${ONDE.find((o) => o.id === onde)?.label}`,
      `Meu cliente: ${EXTRA.find((e) => e.id === extra)?.label}`,
      `Modelo indicado: Ton ${modelo?.nome}`,
      local ? `Local: ${local}` : "",
      `Página: ${window.location.href}`,
    ].filter(Boolean)
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(linhas.join("\n"))}`, "_blank", "noopener")
  }

  return (
    <div className="rc-caixa">
      <Grupo titulo="1. Quanto você vende por mês?" opcoes={faixas} valor={faixa} mudar={setFaixa} />
      <Grupo titulo="2. Onde você vende?" opcoes={ONDE} valor={onde} mudar={setOnde} />
      <Grupo titulo="3. O seu cliente..." opcoes={EXTRA} valor={extra} mudar={setExtra} />

      <div className="rc-rodape">
        {pronto ? (
          <button type="button" className="rc-botao" onClick={() => setAberto(true)}>
            Ver minha indicação
          </button>
        ) : (
          <p className="rc-espera">Responda as três perguntas e a indicação aparece na hora.</p>
        )}
      </div>

      {aberto && modelo && taxas && resultado && (
        <div className="rc-fundo" onClick={() => setAberto(false)}>
          <div
            className="rc-janela"
            role="dialog"
            aria-modal="true"
            aria-labelledby="rc-janela-titulo"
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="rc-fechar" aria-label="Fechar" onClick={() => setAberto(false)} ref={fechar}>
              ×
            </button>

            <p className="rc-rotulo">A maquininha indicada para você</p>
            <h3 className="rc-modelo" id="rc-janela-titulo">Ton {modelo.nome}</h3>
            <p className="rc-motivo">{resultado.motivo}</p>

            {querVale && (
              <p className="rc-aviso">
                Sobre o vale: ele só é liberado para CNPJ do ramo de alimentação, e você precisa pedir o credenciamento a
                cada bandeira. <a href="/ton-aceita-vale-alimentacao">Veja como funciona</a>.
              </p>
            )}

            <table className="rc-tabela">
              <caption>Suas taxas na faixa: {faixaAtual?.label}</caption>
              <tbody>
                <tr>
                  <th scope="row">Débito</th>
                  <td>{pct(taxas.deb)}</td>
                </tr>
                <tr>
                  <th scope="row">Crédito à vista</th>
                  <td>{pct(taxas.cre1)}</td>
                </tr>
                <tr>
                  <th scope="row">Crédito em 12x</th>
                  <td>{pct(taxas.cre12)}</td>
                </tr>
                <tr>
                  <th scope="row">Adesão da {modelo.nome}</th>
                  <td>{modelo.preco}</td>
                </tr>
              </tbody>
            </table>

            <div className="rc-ajustes">
              <Grupo titulo="Bandeira" opcoes={BANDEIRA} valor={bandeira} mudar={(v) => setBandeira(v as "mv" | "oa")} compacto />
              <Grupo titulo="Receber" opcoes={PRAZO} valor={prazo} mudar={(v) => setPrazo(v as "d1" | "d0")} compacto />
            </div>

            <a href={modelo.link} target="_blank" rel="noopener noreferrer" className="rc-botao rc-botao-grande">
              Pedir a {modelo.nome} agora
            </a>
            <button type="button" className="rc-botao rc-botao-claro" onClick={zap}>
              Tirar dúvida no WhatsApp
            </button>

            <p className="rc-nota">
              Taxas em {BANDEIRA.find((x) => x.id === bandeira)?.label}, recebendo{" "}
              {prazo === "d1" ? "em 1 dia útil" : "na hora"}. Nos primeiros 30 dias ou até R$ 5.000 em vendas, vale a
              taxa promocional:{" "}
              {bandeira === "mv"
                ? `${pct(promo.mv)} no débito e no crédito à vista`
                : `${pct(promo.oa)} no débito e ${pct(promo.oaCre1)} no crédito à vista`}
              . {modelo.parcela.replace("ou ", "Adesão também em ")}. <a href={modelo.pagina}>Detalhes da {modelo.nome}</a>{" "}
              · <a href="/taxas-ton">Tabela completa</a>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
