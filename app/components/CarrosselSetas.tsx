"use client"

import { useEffect, useState } from "react"

// Setas do carrossel de modelos: a única parte dele que precisa de JavaScript.
export default function CarrosselSetas({ alvo }: { alvo: string }) {
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  useEffect(() => {
    const el = document.getElementById(alvo)
    if (!el) return
    const conferir = () => {
      setCanPrev(el.scrollLeft > 8)
      setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
    }
    el.addEventListener("scroll", conferir, { passive: true })
    conferir()
    return () => el.removeEventListener("scroll", conferir)
  }, [alvo])

  function slide(dir: "prev" | "next") {
    const el = document.getElementById(alvo)
    if (!el) return
    const cardW = el.querySelector(".mc-card")?.clientWidth || 320
    el.scrollBy({ left: dir === "next" ? cardW + 16 : -(cardW + 16), behavior: "smooth" })
  }

  return (
    <div className="mc-nav">
      <button
        className={`mc-arrow${!canPrev ? " mc-arrow-disabled" : ""}`}
        onClick={() => slide("prev")}
        disabled={!canPrev}
        aria-label="Anterior"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5"/><path d="M12 19L5 12L12 5"/>
        </svg>
      </button>
      <button
        className={`mc-arrow${!canNext ? " mc-arrow-disabled" : ""}`}
        onClick={() => slide("next")}
        disabled={!canNext}
        aria-label="Próximo"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12H19"/><path d="M12 5L19 12L12 19"/>
        </svg>
      </button>
    </div>
  )
}
