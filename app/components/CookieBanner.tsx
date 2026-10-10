"use client"

import { useEffect, useState } from "react"

const CHAVE = "consentimento-cookies"

declare global {
  interface Window {
    __carregarMedicao?: () => void
  }
}

export default function CookieBanner() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(CHAVE)) setVisivel(true)
    } catch {
      // navegador sem armazenamento local: não mostra o aviso e não carrega a medição
    }
  }, [])

  function responder(resposta: "aceito" | "recusado") {
    try {
      localStorage.setItem(CHAVE, resposta)
    } catch {}
    setVisivel(false)
    if (resposta === "aceito") window.__carregarMedicao?.()
  }

  if (!visivel) return null

  return (
    <div className="ck" role="dialog" aria-label="Aviso de cookies">
      <p className="ck-texto">
        Usamos cookies de medição para saber quais páginas são visitadas. Você pode aceitar ou recusar.{" "}
        <a href="/politica-de-privacidade">Saiba mais</a>
      </p>
      <div className="ck-botoes">
        <button type="button" className="ck-btn ck-recusar" onClick={() => responder("recusado")}>
          Recusar
        </button>
        <button type="button" className="ck-btn ck-aceitar" onClick={() => responder("aceito")}>
          Aceitar
        </button>
      </div>
    </div>
  )
}
