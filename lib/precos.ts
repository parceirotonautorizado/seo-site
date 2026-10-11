// ─────────────────────────────────────────────────────────────────────────────
// PREÇOS DE ADESÃO · GERADO por scripts/atualizar_precos.mjs a partir de https://www.ton.com.br/catalogo
// Não edite à mão: rode o script de novo para atualizar.
//
// preco    = valor com o cupom de parceiro (entra sozinho pelo link de parceiro)
// semCupom = valor do catálogo sem o link; vazio quando o cupom não muda o preço do modelo
// ─────────────────────────────────────────────────────────────────────────────
// DADOS: {"pct":20,"comCupom":{"t3smart":true,"t3":true,"t2":true,"t1":false},"cupomEm":"10/10/2026","base":{"t1":1680,"t2":4988,"t3":10800,"t3smart":19188}}

// Dia em que os preços do catálogo foram conferidos no site da Ton
export const PRECOS_CONFERIDO_EM = "10/10/2026"

// Cupom de parceiro e dia em que ele foi visto aplicado no catálogo
export const CUPOM_PARCEIRO = "20%"
export const CUPOM_CONFERIDO_EM = "10/10/2026"

export const PRECOS: Record<string, { preco: string; semCupom: string; parcela: string; valor: string }> = {
  t3smart: { preco: "R$ 153,50", semCupom: "R$ 191,88", parcela: "ou 12x de R$ 12,79", valor: "153.50" },
  t3: { preco: "R$ 86,40", semCupom: "R$ 108,00", parcela: "ou 12x de R$ 7,20", valor: "86.40" },
  t2: { preco: "R$ 39,90", semCupom: "R$ 49,88", parcela: "ou 12x de R$ 3,33", valor: "39.90" },
  t1: { preco: "R$ 16,80", semCupom: "", parcela: "ou 12x de R$ 1,40", valor: "16.80" },
}
