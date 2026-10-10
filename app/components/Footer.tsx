import { CONFIG } from "@/lib/config"

export default function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="s-footer footer">
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
              A venda, entrega, conta e pagamento são feitos diretamente pela Ton.
            </p>
            <div className="footer-badge">✓ Parceiro Autorizado Ton</div>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Maquininhas</p>
            <ul>
              <li><a href={CONFIG.tonModelos.t3smart} target="_blank" rel="noopener noreferrer">T3 Smart Mega+</a></li>
              <li><a href={CONFIG.tonModelos.t3} target="_blank" rel="noopener noreferrer">T3 Mega+</a></li>
              <li><a href={CONFIG.tonModelos.t2} target="_blank" rel="noopener noreferrer">T2 Mega+</a></li>
              <li><a href={CONFIG.tonModelos.t1} target="_blank" rel="noopener noreferrer">T1 Mega+</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Informações</p>
            <ul>
              <li><a href="/maquininha-de-cartao-de-credito">Como escolher a maquininha</a></li>
              <li><a href="/maquininha-de-cartao-com-menor-taxa">Menor taxa: como comparar</a></li>
              <li><a href="/maquininha-de-cartao-no-celular">Maquininha no celular</a></li>
              <li><a href="/maquininha-de-cartao-para-pessoa-fisica">Para pessoa física</a></li>
              <li><a href="/taxas-ton">Tabela de taxas</a></li>
              <li><a href="/simulador-ton">Simulador</a></li>
              <li><a href="/ton-t1">Ton T1</a></li>
              <li><a href="/ton-t2">Ton T2</a></li>
              <li><a href="/ton-t3">Ton T3</a></li>
              <li><a href="/ton-t3-smart">Ton T3 Smart</a></li>
              <li><a href="/ton-aceita-vale-alimentacao">Vale-alimentação</a></li>
              <li><a href="/ton-cpf-cnpj-mei">CPF, CNPJ e MEI</a></li>
              <li><a href="/tapton-como-funciona">TapTon</a></li>
              <li><a href="/ton-e-confiavel">A Ton é confiável?</a></li>
              <li><a href="/ton-whatsapp-telefone">WhatsApp e telefone da Ton</a></li>
              <li><a href="/#faq" data-secao="faq">Perguntas Frequentes</a></li>
              <li><a href="/cidades">Cidades atendidas</a></li>
              <li><a href="/sobre">Sobre o site</a></li>
              <li><a href="/contato">Contato</a></li>
              <li><a href="/politica-de-privacidade">Privacidade e cookies</a></li>
              <li><a href="/mapa-do-site">Mapa do site</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Atendimento</p>
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
            Este site é mantido por um participante do programa Renda Extra da Ton. Não somos a empresa Ton nem fazemos parte do Grupo StoneCo. Ton® é marca do Pagar.me S.A. (CNPJ 18.727.053/0001-74), empresa do grupo Stone. Todas as transações são realizadas diretamente em ton.com.br.
          </p>
        </div>
      </div>
    </footer>
  )
}
