"use client"

import { useState } from "react"
import { CONFIG } from "@/lib/config"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar-header">
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

        <a
          href={CONFIG.tonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-cta"
        >
          Pedir com Desconto
        </a>

        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          <a href="#taxas" onClick={() => setOpen(false)}>Taxas</a>
          <a href="#modelos" onClick={() => setOpen(false)}>Modelos</a>
          <a href="#simulador" onClick={() => setOpen(false)}>Simulador</a>
          <a href="#faq" onClick={() => setOpen(false)}>Dúvidas</a>
          <a
            href={CONFIG.tonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-cta"
            onClick={() => setOpen(false)}
          >
            Pedir com Desconto →
          </a>
        </div>
      )}

      <style jsx>{`
        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: #fff;
          border-bottom: 1px solid #e8e8e8;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          height: 64px;
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .navbar-logo {
          text-decoration: none;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .logo-ton {
          font-size: 22px;
          font-weight: 900;
          color: #007a34;
          letter-spacing: -0.5px;
        }

        .logo-sub {
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }

        .navbar-links {
          display: flex;
          gap: 28px;
          flex: 1;
        }

        .navbar-links a {
          text-decoration: none;
          color: #444;
          font-size: 15px;
          font-weight: 600;
          transition: color 0.2s;
        }

        .navbar-links a:hover {
          color: #007a34;
        }

        .navbar-cta {
          background: #007a34;
          color: #fff;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
          transition: background 0.2s;
          flex-shrink: 0;
        }

        .navbar-cta:hover {
          background: #006a2d;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          margin-left: auto;
        }

        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #333;
          border-radius: 2px;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          padding: 16px 20px;
          border-top: 1px solid #eee;
          background: #fff;
          gap: 4px;
        }

        .mobile-menu a {
          text-decoration: none;
          color: #444;
          font-size: 16px;
          font-weight: 600;
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .mobile-cta {
          color: #007a34 !important;
          font-size: 16px;
          font-weight: 700 !important;
          padding: 14px 0 !important;
          border-bottom: none !important;
        }

        @media (max-width: 768px) {
          .navbar-links { display: none; }
          .navbar-cta { display: none; }
          .hamburger { display: flex; }
          .mobile-menu { display: flex; }
        }
      `}</style>
    </header>
  )
}
