"use client"

import { useState } from "react"

const PERGUNTAS = [
  {
    q: "Preciso ter CNPJ para comprar a Ton?",
    a: "Não! Você pode comprar usando apenas CPF. A Ton é ideal tanto para autônomos (CPF) quanto para empresas (CNPJ). Sem burocracia.",
  },
  {
    q: "A maquininha tem aluguel ou mensalidade?",
    a: "De jeito nenhum. Você paga uma taxa de adesão única, à vista ou em até 12x, e não há cobrança fixa depois. Zero aluguel, zero mensalidade, e a garantia vale enquanto você for cliente.",
  },
  {
    q: "Como eu recebo o dinheiro das vendas?",
    a: "O dinheiro cai direto na sua conta digital Ton. De lá, você faz PIX grátis para qualquer banco na mesma hora. Também é possível receber em 1 dia útil ou na hora, conforme seu plano.",
  },
  {
    q: "A maquininha tem garantia?",
    a: "Sim! A Ton oferece garantia vitalícia com troca gratuita em caso de problemas técnicos. Se der defeito, eles trocam.",
  },
  {
    q: "Aceita quais formas de pagamento?",
    a: "A Ton aceita Pix, cartão de débito e crédito (à vista ou parcelado em até 12x na T1 e na T2, e em até 21x na T3 e na T3 Smart), em mais de 50 bandeiras. Vale-refeição e vale-alimentação também passam, nos modelos T2, T3 e T3 Smart, para quem tem CNPJ do ramo de alimentação e faz o credenciamento com a bandeira do vale.",
  },
  {
    q: "Quanto tempo demora para receber a maquininha?",
    a: "O frete é grátis e a entrega costuma ser em 2 a 5 dias úteis dependendo da sua cidade no Paraná.",
  },
  {
    q: "O que é o período promocional de taxas?",
    a: "Ao ativar sua maquininha, você tem 30 dias ou R$ 5.000 em vendas com taxas especiais (Débito 0,57%, Crédito 0,57%). Após isso, são aplicadas as taxas padrão do seu plano.",
  },
  {
    q: "Posso ter mais de uma maquininha?",
    a: "Sim! Você pode ter quantas maquininhas precisar para o seu negócio, cada uma com seu próprio plano de taxas.",
  },
]

export default function FaqSection() {
  const [aberto, setAberto] = useState<number | null>(null)

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Dúvidas frequentes</h2>
          <p className="faq-sub">
            Tudo que você precisa saber antes de pedir sua maquininha.
          </p>
        </div>

        <div className="faq-lista">
          {PERGUNTAS.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${aberto === i ? "faq-aberto" : ""}`}
            >
              <button
                className="faq-pergunta"
                onClick={() => setAberto(aberto === i ? null : i)}
                aria-expanded={aberto === i}
              >
                <span>{item.q}</span>
                <span className="faq-seta">{aberto === i ? "−" : "+"}</span>
              </button>
              {aberto === i && (
                <div className="faq-resposta">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          padding: 80px 20px;
          background: #f4f5f4;
        }

        .faq-container {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .faq-header {
          text-align: center;
        }

        .faq-title {
          font-size: 36px;
          font-weight: 900;
          color: #1a1a1a;
          margin: 0 0 12px;
        }

        .faq-sub {
          color: #666;
          font-size: 16px;
          margin: 0;
        }

        .faq-lista {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .faq-item {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid transparent;
          transition: border-color 0.2s;
        }

        .faq-aberto {
          border-color: #006e00;
        }

        .faq-pergunta {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          padding: 20px 24px;
          font-size: 16px;
          font-weight: 700;
          color: #1a1a1a;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .faq-seta {
          font-size: 24px;
          color: #006e00;
          font-weight: 300;
          flex-shrink: 0;
          line-height: 1;
        }

        .faq-resposta {
          padding: 0 24px 20px;
          font-size: 15px;
          color: #555;
          line-height: 1.7;
        }

        @media (max-width: 600px) {
          .faq-title {
            font-size: 28px;
          }

          .faq-pergunta {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  )
}
