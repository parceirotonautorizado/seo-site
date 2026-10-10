import { CONFIG } from "@/lib/config"

// Menu do topo. O menu do celular abre e fecha com uma caixa de seleção escondida, sem JavaScript.
export default function Navbar() {
  return (
    <header className="s-nav navbar-header">
      <input type="checkbox" id="nav-toggle" className="nav-toggle" aria-label="Abrir ou fechar o menu" />

      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <span className="logo-ton">TON</span>
          <span className="logo-sub"> Maquininha</span>
        </a>

        <nav className="navbar-links">
          <a href="#taxas">Taxas</a>
          <a href="#modelos">Modelos</a>
          <a href="#simulador">Simulador</a>
          <a href="#faq">Dúvidas</a>
        </nav>

        <a href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer" className="navbar-cta">
          Pedir com Desconto
        </a>

        <label htmlFor="nav-toggle" className="hamburger" aria-hidden="true">
          <span /><span /><span />
        </label>
      </div>

      <div className="mobile-menu">
        <a href="#taxas">Taxas</a>
        <a href="#modelos">Modelos</a>
        <a href="#simulador">Simulador</a>
        <a href="#faq">Dúvidas</a>
        <a href={CONFIG.tonLink} target="_blank" rel="noopener noreferrer" className="mobile-cta">
          Pedir com Desconto →
        </a>
      </div>
    </header>
  )
}
