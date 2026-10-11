"use client"

import { useState } from "react"

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

export default function Recomendador({ faixas, modelos, promo, whatsapp, local }: Props) {
  const [faixa, setFaixa] = useState("")
  const [onde, setOnde] = useState("")
  const [extra, setExtra] = useState("")
  // bandeira e prazo já vêm com a opção mais comum marcada; mudam só a taxa mostrada, não o modelo
  const [bandeira, setBandeira] = useState<"mv" | "oa">("mv")
  const [prazo, setPrazo] = useState<"d1" | "d0">("d1")

  const pronto = faixa && onde && extra
  const resultado = pronto ? indicar(faixa, onde, extra) : null
  const modelo = resultado ? modelos.find((m) => m.id === resultado.id) : null
  const faixaAtual = faixas.find((f) => f.id === faixa)
  const taxas = faixaAtual?.taxas[prazo][bandeira]
  const querVale = extra === "vale" || extra === "ambos"

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

  function Grupo({ titulo, opcoes, valor, mudar }: { titulo: string; opcoes: { id: string; label: string }[]; valor: string; mudar: (v: string) => void }) {
    return (
      <fieldset className="rc-grupo">
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

  return (
    <div className="rc-caixa">
      <Grupo titulo="1. Quanto você vende por mês?" opcoes={faixas} valor={faixa} mudar={setFaixa} />
      <Grupo titulo="2. Onde você vende?" opcoes={ONDE} valor={onde} mudar={setOnde} />
      <Grupo titulo="3. O seu cliente..." opcoes={EXTRA} valor={extra} mudar={setExtra} />
      <Grupo titulo="4. Qual bandeira ele mais usa?" opcoes={BANDEIRA} valor={bandeira} mudar={(v) => setBandeira(v as "mv" | "oa")} />
      <Grupo titulo="5. Quando você quer receber?" opcoes={PRAZO} valor={prazo} mudar={(v) => setPrazo(v as "d1" | "d0")} />

      <div className="rc-resultado" aria-live="polite">
        {!pronto && <p className="rc-espera">Responda as três primeiras perguntas para ver a indicação.</p>}

        {pronto && modelo && taxas && resultado && (
          <>
            <p className="rc-rotulo">Modelo indicado para você</p>
            <h3 className="rc-modelo">Ton {modelo.nome}</h3>
            <p className="rc-motivo">{resultado.motivo}</p>

            {querVale && (
              <p className="rc-aviso">
                Sobre o vale: ele só é liberado para CNPJ do ramo de alimentação, e você precisa pedir o credenciamento a
                cada bandeira. <a href="/ton-aceita-vale-alimentacao">Veja como funciona</a>.
              </p>
            )}

            <dl className="rc-taxas">
              <div>
                <dt>Débito</dt>
                <dd>{pct(taxas.deb)}</dd>
              </div>
              <div>
                <dt>Crédito à vista</dt>
                <dd>{pct(taxas.cre1)}</dd>
              </div>
              <div>
                <dt>Crédito 12x</dt>
                <dd>{pct(taxas.cre12)}</dd>
              </div>
            </dl>
            <p className="rc-nota">
              Taxas da sua faixa em {BANDEIRA.find((x) => x.id === bandeira)?.label}, recebendo{" "}
              {prazo === "d1" ? "em 1 dia útil" : "na hora"}. Nos primeiros 30 dias ou até R$ 5.000 em vendas, vale a
              taxa promocional:{" "}
              {bandeira === "mv"
                ? `${pct(promo.mv)} no débito e no crédito à vista`
                : `${pct(promo.oa)} no débito e ${pct(promo.oaCre1)} no crédito à vista`}
              . <a href="/taxas-ton">Tabela completa</a>.
            </p>

            <div className="rc-botoes">
              <a href={modelo.link} target="_blank" rel="noopener noreferrer" className="rc-botao">
                Pedir a {modelo.nome} por {modelo.preco}
              </a>
              <button type="button" className="rc-botao rc-botao-claro" onClick={zap}>
                Tirar dúvida no WhatsApp
              </button>
            </div>
            <p className="rc-nota">
              <a href={modelo.pagina}>Ver detalhes da {modelo.nome}</a>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
