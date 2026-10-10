"use client"

import { CONFIG } from "@/lib/config"

export default function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-cols">
          <div className="footer-col footer-sobre">
            <div className="footer-logo">
              <span className="logo-ton">TON</span>
              <span className="logo-sub"> Maquininha</span>
            </div>
            <p className="footer-desc">
              Somos um <strong>Parceiro Autorizado Ton</strong> (programa Renda Extra / Renda Ton).
              Divulgamos as maquininhas e indicamos você para compra no site oficial com desconto de parceiro.
              A venda, entrega, conta e pagamento são feitos diretamente pela Ton / Pagar.me.
            </p>
            <div className="footer-badge">✓ Parceiro Autorizado Ton</div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Maquininhas</h4>
            <ul>
              <li><a href={CONFIG.tonModelos.t3smart} target="_blank" rel="noopener noreferrer">T3 Smart Mega+</a></li>
              <li><a href={CONFIG.tonModelos.t3} target="_blank" rel="noopener noreferrer">T3 Mega+</a></li>
              <li><a href={CONFIG.tonModelos.t2} target="_blank" rel="noopener noreferrer">T2 Mega+</a></li>
              <li><a href={CONFIG.tonModelos.t1} target="_blank" rel="noopener noreferrer">T1 Mega+</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Informações</h4>
            <ul>
              <li><a href="#taxas">Taxas e Planos</a></li>
              <li><a href="#faq">Perguntas Frequentes</a></li>
              <li><a href="#simulador">Simulador de Taxas</a></li>
              <li><a href="/cidades">Cidades atendidas</a></li>
              <li><a href="/mapa-do-site">Mapa do site</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Atendimento</h4>
            <ul>
              <li>
                <a
                  href={`https://wa.me/${CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="footer-seguro">
              <span>🔒 Site Seguro</span>
              <span>SSL Certificado</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {ano} Parceiro Ton. Todos os direitos reservados.
          </p>
          <p className="footer-disclaimer">
            Este site é mantido por um participante do programa Renda Extra da Ton / Pagar.me S.A. Não somos a empresa Ton nem fazemos parte do Grupo StoneCo. Ton® é marca registrada de Pagar.me Instituição de Pagamento S.A. (CNPJ 18.727.053/0001-74). Todas as transações são realizadas diretamente em ton.com.br.
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #1a1a1a;
          color: #ccc;
          padding: 60px 20px 30px;
        }

        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .footer-cols {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
        }

        .footer-logo {
          margin-bottom: 16px;
          display: flex;
          align-items: center;
        }

        .logo-ton {
          font-size: 20px;
          font-weight: 900;
          color: #88ff00;
          letter-spacing: -0.5px;
        }

        .logo-sub {
          font-size: 14px;
          font-weight: 600;
          color: #ccc;
        }

        .footer-desc {
          font-size: 13px;
          line-height: 1.7;
          color: #888;
          margin: 0 0 16px;
        }

        .footer-badge {
          display: inline-block;
          background: #222;
          border: 1px solid #333;
          color: #88ff00;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 999px;
        }

        .footer-col-title {
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-col ul a {
          color: #888;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }

        .footer-col ul a:hover {
          color: #88ff00;
        }

        .footer-seguro {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 12px;
          color: #666;
        }

        .footer-bottom {
          border-top: 1px solid #2a2a2a;
          padding-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-copy {
          font-size: 13px;
          color: #666;
          margin: 0;
        }

        .footer-disclaimer {
          font-size: 11px;
          color: #555;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 900px) {
          .footer-cols {
            grid-template-columns: 1fr 1fr;
          }

          .footer-sobre {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 520px) {
          .footer-cols {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  )
}
