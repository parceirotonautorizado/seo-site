"use client"

import { useState } from "react"

type Cidade = { nome: string; slug: string }

const limpar = (t: string) =>
  t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim()

// Campo "qual é a sua cidade?": leva direto à página da cidade escolhida.
export default function BuscaCidade({ cidades }: { cidades: Cidade[] }) {
  const [valor, setValor] = useState("")

  function ir(e: React.FormEvent) {
    e.preventDefault()
    const alvo = limpar(valor)
    if (!alvo) return
    const achada = cidades.find((c) => limpar(c.nome) === alvo) ?? cidades.find((c) => limpar(c.nome).startsWith(alvo))
    window.location.href = achada ? `/cidade/${achada.slug}` : "/cidades"
  }

  return (
    <form className="bc" onSubmit={ir} role="search">
      <label htmlFor="bc-campo" className="bc-rotulo">Qual é a sua cidade?</label>
      <div className="bc-linha">
        <input
          id="bc-campo"
          className="bc-campo"
          list="bc-cidades"
          placeholder="Ex.: Cascavel"
          autoComplete="off"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <button type="submit" className="bc-botao">Ver minha cidade</button>
      </div>
      <datalist id="bc-cidades">
        {cidades.map((c) => (
          <option key={c.slug} value={c.nome} />
        ))}
      </datalist>
    </form>
  )
}
