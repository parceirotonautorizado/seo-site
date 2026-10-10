"use client"

import { useEffect, useState } from "react"

const CHAVE = "consentimento-cookies"

export default function CookieBanner() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(CHAVE)) setVisivel(true)
    } catch {
      // navegador sem armazenamento local: não mostra o aviso
    }
  }, [])

  function responder(resposta: "aceito" | "recusado") {
    try {
      localStorage.setItem(CHAVE, resposta)
    } catch {}
    setVisivel(false)
  }

  if (!visivel) return null

  return (
    <div className="ck" role="dialog" aria-label="Aviso de cookies">
      <p className="ck-texto">
        Este site usa cookies de medição para saber quais páginas são visitadas. Se preferir, você pode desativar.{" "}
        <a href="/politica-de-privacidade">Saiba mais</a>
      </p>
      <div className="ck-botoes">
        <button type="button" className="ck-btn ck-recusar" onClick={() => responder("recusado")}>
          Desativar
        </button>
        <button type="button" className="ck-btn ck-aceitar" onClick={() => responder("aceito")}>
          Entendi
        </button>
      </div>
    </div>
  )
}
