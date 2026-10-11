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
    imagem: "/maquininha-ton-t3-smart.webp",
    imagemPequena: "/maquininha-ton-t3-smart-240.webp",
    alt: "Maquininha Ton T3 Smart, com tela touchscreen e impressora de comprovante",
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
    imagem: "/maquininha-ton-t3.webp",
    imagemPequena: "/maquininha-ton-t3-240.webp",
    alt: "Maquininha Ton T3, com teclado e bobina para imprimir o comprovante",
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
    imagem: "/maquininha-ton-t2.webp",
    imagemPequena: "/maquininha-ton-t2-240.webp",
    alt: "Maquininha Ton T2, modelo compacto com teclado e chip próprio",
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
    imagem: "/maquininha-ton-t1.webp",
    imagemPequena: "/maquininha-ton-t1-240.webp",
    alt: "Maquininha Ton T1, modelo de entrada que funciona pelo Bluetooth do celular",
    ...PRECOS.t1,
    cta: "Pedir T1",
    destaque: false,
    link: CONFIG.tonModelos.t1,
    para: "Para quem está começando e anda sempre com o celular.",
    pagina: "/ton-t1",
  },
]
