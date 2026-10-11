import { CONFIG } from "@/lib/config"
import { MODELOS } from "@/lib/modelos"
import { PLANS, VM } from "@/lib/taxas"
import Recomendador from "@/app/components/Recomendador"

// Seção "qual maquininha é a minha?". Monta no servidor só os dados de que o teste precisa.
export default function RecomendadorSecao({ local }: { local?: string }) {
  const faixas = VM.filter((f) => f.id !== "promo").map((f) => {
    const p = PLANS[f.id].d1.mv
    return { id: f.id, label: f.label, deb: p.deb, cre1: p.cre[1], cre12: p.cre[12] }
  })
  const modelos = MODELOS.map((m) => ({ id: m.id, nome: m.nome, preco: m.preco, parcela: m.parcela, link: m.link, pagina: m.pagina }))
  const promo = { deb: PLANS.promo.d1.mv.deb, cre1: PLANS.promo.d1.mv.cre[1] }

  return (
    <section id="qual-maquininha" className="s-rc">
      <div className="rc-container">
        <h2 className="rc-titulo">Qual maquininha é a sua? Três perguntas</h2>
        <p className="rc-sub">
          A taxa depende de quanto você vende. O modelo depende de onde e de como você vende. Responda e veja os dois.
        </p>
        <Recomendador faixas={faixas} modelos={modelos} promo={promo} whatsapp={CONFIG.whatsapp} local={local} />
      </div>
    </section>
  )
}
