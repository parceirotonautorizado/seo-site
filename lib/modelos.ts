import { CONFIG } from "@/lib/config"

// Preços conferidos no catálogo da Ton em 10/10/2026 (valor à vista e em 12x, antes de cupom)
export const MODELOS_CONFERIDO_EM = "10/10/2026"

export const MODELOS = [
  {
    id: "t3smart",
    nome: "T3 Smart",
    subtitulo: "Android com visor touchscreen, chip 4G e comprovante impresso",
    badge: "Mais Vendida",
    imagem: "/m-t3-smart.webp",
    preco: "R$ 153,50",
    parcela: "ou 12x de R$ 12,79",
    cta: "Pedir T3 Smart",
    destaque: true,
    link: CONFIG.tonModelos.t3smart,
  },
  {
    id: "t3",
    nome: "T3",
    subtitulo: "Com bobina para imprimir o comprovante, chip 3G e Wi-Fi",
    badge: "Custo-Benefício",
    imagem: "/m-t3.webp",
    preco: "R$ 86,40",
    parcela: "ou 12x de R$ 7,20",
    cta: "Pedir T3",
    destaque: false,
    link: CONFIG.tonModelos.t3,
  },
  {
    id: "t2",
    nome: "T2",
    subtitulo: "Compacta, com chip 3G e Wi-Fi, não depende do celular",
    badge: "Econômica",
    imagem: "/m-t2.webp",
    preco: "R$ 39,90",
    parcela: "ou 12x de R$ 3,33",
    cta: "Pedir T2",
    destaque: false,
    link: CONFIG.tonModelos.t2,
  },
  {
    id: "t1",
    nome: "T1",
    subtitulo: "Compacta, conecta ao celular via Bluetooth",
    badge: "Entrada",
    imagem: "/m-t1.webp",
    preco: "R$ 16,80",
    parcela: "ou 12x de R$ 1,40",
    cta: "Pedir T1",
    destaque: false,
    link: CONFIG.tonModelos.t1,
  },
]
