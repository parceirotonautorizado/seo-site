const TON_REFERRER = "4DFE24A5-33A5-4F4A-91DE-BE883C307153"

// Link direto para o carrinho da Ton com o modelo já escolhido e o código de parceiro
function tonCheckout(productId: string) {
  return `https://www.ton.com.br/checkout/cart?userTag=tonmega_tier&productId=${productId}&userAnticipation=0&referrer=${TON_REFERRER}&utm_source=revendedor&utm_medium=invite_share`
}

export const CONFIG = {
  whatsapp: "5545988195137",

  empresa: "Parceiro Ton",

  dominio: "https://www.maquininhadecartoes.com.br",

  // Catálogo da Ton com o código de parceiro (botões genéricos)
  tonLink: `https://www.ton.com.br/catalogo?referrer=${TON_REFERRER}&userAnticipation=0&utm_medium=invite_share&utm_source=revendedor`,

  // Carrinho por modelo (botões de cada maquininha)
  tonModelos: {
    t3smart: tonCheckout("TONMEGA_TIER_SMART_POS"),
    t3: tonCheckout("TONMEGA_TIER_S920"),
    t2: tonCheckout("TONMEGA_TIER_D195"),
    t1: tonCheckout("TONMEGA_TIER_D150"),
  },
}

// Campos de compartilhamento comuns a todas as páginas (o Next não herda openGraph do layout quando a página define o seu)
export const OG_BASE = {
  siteName: "Parceiro Ton Paraná",
  locale: "pt_BR",
  type: "website" as const,
  images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Maquininhas Ton no Paraná" }],
}
