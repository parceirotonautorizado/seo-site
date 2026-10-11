import { CONFIG } from "@/lib/config"
import { PRECOS, PRECOS_CONFERIDO_EM, CUPOM_PARCEIRO, CUPOM_CONFERIDO_EM } from "@/lib/precos"

// Preços e cupom vêm de lib/precos.ts, gerado por scripts/atualizar_precos.mjs (roda todo mês junto com as taxas)
export const MODELOS_CONFERIDO_EM = PRECOS_CONFERIDO_EM
export { CUPOM_PARCEIRO, CUPOM_CONFERIDO_EM }

export const MODELOS = [
  {
    id: "t3smart",
    nome: "T3 Smart",
    subtitulo: "Android com visor touchscreen, chip 4G e comprovante impresso",
    badge: "Mais Vendida",
    imagem: "/m-t3-smart.webp",
    ...PRECOS.t3smart,
    cta: "Pedir T3 Smart",
    destaque: true,
    link: CONFIG.tonModelos.t3smart,
    para: "Para balcão com fila e para quem quer tudo em uma máquina só.",
    pagina: "/ton-t3-smart",
  },
  {
    id: "t3",
    nome: "T3",
    subtitulo: "Com bobina para imprimir o comprovante, chip 3G e Wi-Fi",
    badge: "Custo-Benefício",
    imagem: "/m-t3.webp",
    ...PRECOS.t3,
    cta: "Pedir T3",
    destaque: false,
    link: CONFIG.tonModelos.t3,
    para: "Para o balcão em que o cliente ainda pede o comprovante impresso.",
    pagina: "/ton-t3",
  },
  {
    id: "t2",
    nome: "T2",
    subtitulo: "Compacta, com chip 3G e Wi-Fi, não depende do celular",
    badge: "Econômica",
    imagem: "/m-t2.webp",
    ...PRECOS.t2,
    cta: "Pedir T2",
    destaque: false,
    link: CONFIG.tonModelos.t2,
    para: "Para quem vende na rua, em entrega ou na casa do cliente.",
    pagina: "/ton-t2",
  },
  {
    id: "t1",
    nome: "T1",
    subtitulo: "Compacta, conecta ao celular via Bluetooth",
    badge: "Entrada",
    imagem: "/m-t1.webp",
    ...PRECOS.t1,
    cta: "Pedir T1",
    destaque: false,
    link: CONFIG.tonModelos.t1,
    para: "Para quem está começando e anda sempre com o celular.",
    pagina: "/ton-t1",
  },
]
