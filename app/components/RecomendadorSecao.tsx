import { CONFIG } from "@/lib/config"
import { MODELOS } from "@/lib/modelos"
import { PLANS, VM } from "@/lib/taxas"
import Recomendador from "@/app/components/Recomendador"

// Seção "qual maquininha é a minha?". Monta no servidor só os dados de que o teste precisa.
export default function RecomendadorSecao({ local }: { local?: string }) {
  // taxas[prazo][bandeira] de cada faixa: d1 = 1 dia útil, d0 = na hora; mv = Visa e Mastercard, oa = Elo e Amex
  const resumo = (p: any) => ({ deb: p.deb, cre1: p.cre[1], cre12: p.cre[12] })
  const faixas = VM.filter((f) => f.id !== "promo").map((f) => ({
    id: f.id,
    label: f.label,
    taxas: {
      d1: { mv: resumo(PLANS[f.id].d1.mv), oa: resumo(PLANS[f.id].d1.oa) },
      d0: { mv: resumo(PLANS[f.id].d0.mv), oa: resumo(PLANS[f.id].d0.oa) },
    },
  }))
  const modelos = MODELOS.map((m) => ({ id: m.id, nome: m.nome, preco: m.preco, parcela: m.parcela, link: m.link, pagina: m.pagina }))
  const promo = { mv: PLANS.promo.d1.mv.deb, oa: PLANS.promo.d1.oa.deb, oaCre1: PLANS.promo.d1.oa.cre[1] }

  return (
    <section id="qual-maquininha" className="s-rc">
      <div className="rc-container">
        <h2 className="rc-titulo">Qual maquininha é a sua? Responda e veja</h2>
        <p className="rc-sub">
          A taxa depende de quanto você vende, da bandeira e do prazo. O modelo depende de onde e de como você vende. Responda e veja os dois.
        </p>
        <Recomendador faixas={faixas} modelos={modelos} promo={promo} whatsapp={CONFIG.whatsapp} local={local} />
      </div>
    </section>
  )
}
