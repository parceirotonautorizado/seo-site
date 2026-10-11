"use client"

import { useEffect, useState } from "react"

const CHAVE = "consentimento-cookies"

declare global {
  interface Window {
    __carregarMedicao?: () => void
  }
}

// Banner de cookies no padrão pedido pela diretriz de sites da Ton e pela ANPD:
// a medição vem DESMARCADA e só é carregada se o visitante marcar ou aceitar.
export default function CookieBanner() {
  const [visivel, setVisivel] = useState(false)
  const [medicao, setMedicao] = useState(false)

  useEffect(() => {
    try {
      const salvo = localStorage.getItem(CHAVE)
      if (!salvo) setVisivel(true)
      else setMedicao(salvo === "aceito")
    } catch {
      // navegador sem armazenamento local: não mostra o aviso e não carrega a medição
    }

    // link "Preferências de cookies" do rodapé reabre o aviso
    function reabrir(e: MouseEvent) {
      const alvo = e.target as HTMLElement | null
      if (alvo?.closest?.("[data-cookies]")) {
        e.preventDefault()
        setVisivel(true)
      }
    }
    document.addEventListener("click", reabrir)
    return () => document.removeEventListener("click", reabrir)
  }, [])

  function salvar(aceitaMedicao: boolean) {
    try {
      localStorage.setItem(CHAVE, aceitaMedicao ? "aceito" : "recusado")
    } catch {}
    setMedicao(aceitaMedicao)
    setVisivel(false)
    if (aceitaMedicao) window.__carregarMedicao?.()
  }

  if (!visivel) return null

  return (
    <div className="ck" role="dialog" aria-label="Preferências de cookies">
      <p className="ck-texto">
        Este site usa cookies. Os de medição só são ativados se você permitir.{" "}
        <a href="/politica-de-privacidade">Saiba mais</a>
      </p>

      <label className="ck-opcao">
        <input type="checkbox" checked disabled readOnly />
        <span>
          <strong>Necessários</strong> (sempre ativos): guardam a sua escolha neste aviso.
        </span>
      </label>

      <label className="ck-opcao">
        <input type="checkbox" checked={medicao} onChange={(e) => setMedicao(e.target.checked)} />
        <span>
          <strong>Medição de audiência</strong>: mostram quais páginas são visitadas e como são usadas.
        </span>
      </label>

      <div className="ck-botoes">
        <button type="button" className="ck-btn ck-recusar" onClick={() => salvar(false)}>
          Recusar
        </button>
        <button type="button" className="ck-btn ck-recusar" onClick={() => salvar(medicao)}>
          Salvar escolha
        </button>
        <button type="button" className="ck-btn ck-aceitar" onClick={() => salvar(true)}>
          Aceitar todos
        </button>
      </div>
    </div>
  )
}
