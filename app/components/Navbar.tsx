import { CONFIG } from "@/lib/config"

// Menu do topo. O menu do celular abre e fecha com uma caixa de seleção escondida, sem JavaScript.
// Cada link aponta para uma página real; se a página atual já tiver aquela seção (data-secao),
// um script do layout rola até ela em vez de trocar de página.
export default function Navbar() {
  return (
    <header className="s-nav navbar-header">
      <input type="checkbox" id="nav-toggle" className="nav-toggle" aria-label="Abrir ou fechar o menu" />

      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src="/parceiro-ton.png" alt="Parceiro Ton" width={136} height={48} className="logo-img" />
        </a>

        <nav className="navbar-links">
          <a href="/taxas-ton" data-secao="taxas">Taxas</a>
          <a href="/#modelos" data-secao="modelos">Modelos</a>
          <a href="/simulador-ton" data-secao="simulador">Simulador</a>
          <a href="/#faq" data-secao="faq">Dúvidas</a>
        </nav>

        <a href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer" className="navbar-cta">
          Pedir com Desconto
        </a>

        <label htmlFor="nav-toggle" className="hamburger" aria-hidden="true">
          <span /><span /><span />
        </label>
      </div>

      <div className="mobile-menu">
        <a href="/taxas-ton" data-secao="taxas">Taxas</a>
        <a href="/#modelos" data-secao="modelos">Modelos</a>
        <a href="/simulador-ton" data-secao="simulador">Simulador</a>
        <a href="/#faq" data-secao="faq">Dúvidas</a>
        <a href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer" className="mobile-cta">
          Pedir com Desconto →
        </a>
      </div>
    </header>
  )
}
