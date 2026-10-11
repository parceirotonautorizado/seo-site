'use client'

import { usePathname } from 'next/navigation'
import { Suspense, useState } from 'react'
import { CONFIG } from '@/lib/config'

function getPageUrl(pathname: string): string {
  return `${CONFIG.dominio}${pathname}`
}

const RING_STYLE = `
  @keyframes wha-ring {
    0%, 100% { transform: rotate(0deg) scale(1); }
    5%        { transform: rotate(-10deg) scale(1.05); }
    10%       { transform: rotate(10deg) scale(1.05); }
    15%       { transform: rotate(-8deg); }
    20%       { transform: rotate(8deg); }
    25%       { transform: rotate(-5deg); }
    30%       { transform: rotate(0deg); }
    60%       { transform: rotate(0deg) scale(1); }
  }

  .wha-btn {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 9999;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #00D700;
    color: #0a2200;
    font-family: inherit;
    font-weight: 700;
    font-size: 15px;
    padding: 13px 22px 13px 18px;
    border-radius: 6px;
    text-decoration: none;
    box-shadow: 0 4px 18px rgba(0,215,0,.40), 0 2px 6px rgba(0,0,0,.12);
    animation: wha-ring 2s ease-in-out infinite;
    transform-origin: center center;
    will-change: transform;
    transition: box-shadow .2s, background .2s;
  }

  .wha-btn:hover {
    background: #00d700;
    box-shadow: 0 6px 24px rgba(0,215,0,.55), 0 2px 8px rgba(0,0,0,.14);
  }

  .wha-btn:focus-visible {
    outline: 3px solid #00D700;
    outline-offset: 3px;
  }

  .wha-icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  .wha-caixa {
    position: fixed;
    bottom: 84px;
    right: 24px;
    z-index: 9999;
    width: 300px;
    max-width: calc(100vw - 32px);
    background: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 16px;
    box-shadow: 0 10px 34px rgba(0,0,0,.22);
    padding: 16px;
    font-family: inherit;
  }

  .wha-titulo {
    margin: 0 0 12px;
    font-size: 15px;
    font-weight: 700;
    color: #1a1a1a;
  }

  .wha-opcao {
    display: block;
    text-decoration: none;
    border-radius: 12px;
    padding: 12px 14px;
    margin-top: 8px;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.3;
  }

  .wha-opcao small {
    display: block;
    font-size: 12.5px;
    font-weight: 500;
    margin-top: 3px;
  }

  .wha-comprar { background: #00D700; color: #0a2200; }
  .wha-comprar small { color: #0a2200; }
  .wha-suporte { background: #f2f2f2; color: #1a1a1a; border: 1px solid #d9d9d9; }
  .wha-suporte small { color: #4a4a4a; }

  .wha-btn { border: none; cursor: pointer; }

  @media (max-width: 480px) {
    .wha-caixa { right: 16px; bottom: 72px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .wha-btn { animation: none; }
  }

  @media (max-width: 480px) {
    .wha-btn {
      bottom: 16px;
      right: 16px;
      font-size: 14px;
      padding: 11px 18px 11px 14px;
    }
    .wha-icon { width: 21px; height: 21px; }
  }
`

const WaIcon = () => (
  <svg
    className="wha-icon"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L0 24l6.326-1.501A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.803 9.803 0 01-5.023-1.38l-.36-.214-3.754.891.946-3.656-.235-.374A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
  </svg>
)

function Triagem({ comprarHref }: { comprarHref: string }) {
  const [aberto, setAberto] = useState(false)

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: RING_STYLE }} />

      {aberto && (
        <div className="wha-caixa" role="dialog" aria-label="Como podemos ajudar">
          <p className="wha-titulo">Como podemos ajudar?</p>

          <a href={comprarHref} target="_blank" rel="noopener noreferrer" className="wha-opcao wha-comprar">
            Quero comprar minha maquininha
            <small>Fale com o parceiro no WhatsApp</small>
          </a>

          <a href="/ton-whatsapp-telefone" className="wha-opcao wha-suporte">
            Já tenho maquininha e preciso de ajuda
            <small>Veja os canais de suporte da Ton</small>
          </a>
        </div>
      )}

      <button
        type="button"
        className="wha-btn"
        aria-expanded={aberto}
        aria-label="Abrir opções de atendimento"
        onClick={() => setAberto(!aberto)}
      >
        <WaIcon />
        {aberto ? "Fechar" : "Peça no WhatsApp"}
      </button>
    </>
  )
}

function WhatsAppButtonInner() {
  const pathname = usePathname()
  const pageUrl = getPageUrl(pathname)
  const mensagem = encodeURIComponent(`Olá! Quero comprar uma maquininha Ton. Vi pelo site: ${pageUrl}`)

  return <Triagem comprarHref={`https://wa.me/${CONFIG.whatsapp}?text=${mensagem}`} />
}

export default function WhatsAppButton() {
  const mensagem = encodeURIComponent("Olá! Quero comprar uma maquininha Ton.")

  return (
    <Suspense fallback={<Triagem comprarHref={`https://wa.me/${CONFIG.whatsapp}?text=${mensagem}`} />}>
      <WhatsAppButtonInner />
    </Suspense>
  )
}
