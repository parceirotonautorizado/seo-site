import type { Metadata } from "next"
import Script from "next/script"

import { Inter, Poppins } from "next/font/google"

import "./globals.css"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import WhatsAppButton from "@/app/components/WhatsAppButton"
import CookieBanner from "@/app/components/CookieBanner"
import StyledJsxRegistry from "@/app/registry"
import { CONFIG, OG_BASE } from "@/lib/config"
import { JsonLd } from "@/lib/jsonld"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
})

const TITULO = "Maquininhas Ton no Paraná | Taxas, Modelos e Simulador"
const DESCRICAO =
  "Compare as taxas da Ton, simule quanto você recebe por venda e veja qual maquininha combina com a sua cidade no Paraná."

export const metadata: Metadata = {
  metadataBase: new URL(CONFIG.dominio),
  title: {
    default: TITULO,
    template: "%s",
  },
  description: DESCRICAO,
  alternates: {
    canonical: `${CONFIG.dominio}/`,
  },
  openGraph: {
    title: TITULO,
    description: DESCRICAO,
    url: `${CONFIG.dominio}/`,
    ...OG_BASE,
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.jpg"],
  },
}

const siteLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${CONFIG.dominio}/#organization`,
      name: "Maquininhas Ton Paraná",
      url: `${CONFIG.dominio}/`,
      description:
        "Parceiro autorizado Ton (programa Renda Extra). Divulga as maquininhas Ton no Paraná e indica para compra no site oficial.",
      areaServed: { "@type": "State", name: "Paraná" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: `+${CONFIG.whatsapp}`,
        availableLanguage: "pt-BR",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${CONFIG.dominio}/#website`,
      url: `${CONFIG.dominio}/`,
      name: "Maquininhas Ton Paraná",
      inLanguage: "pt-BR",
      publisher: { "@id": `${CONFIG.dominio}/#organization` },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>

        {/* Tag Manager: só carrega se o visitante aceitou os cookies, e então na primeira interação ou após 8 s */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,i){
              var ok=false, ev=['scroll','mousemove','touchstart','keydown','click'];
              function aceitou(){ try { return localStorage.getItem('consentimento-cookies')==='aceito'; } catch(e){ return false; } }
              function carregar(){
                if(ok) return; ok=true;
                w.dataLayer=w.dataLayer||[];
                w.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                var j=d.createElement('script'); j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i;
                d.head.appendChild(j);
              }
              function go(){ if(aceitou()) carregar(); }
              w.__carregarMedicao=carregar;
              ev.forEach(function(e){ w.addEventListener(e,go,{once:true,passive:true}); });
              if(d.readyState==='complete') setTimeout(go,8000);
              else w.addEventListener('load',function(){ setTimeout(go,8000); });
            })(window,document,'GTM-WZRS8XND');
          `}
        </Script>

      </head>

      <body className="min-h-full flex flex-col">


        <JsonLd data={siteLd} />

        <StyledJsxRegistry>
          <Navbar />
          <p className="aviso-parceiro">
            Site de um parceiro autorizado Ton. A compra é feita no site oficial da Ton, com o desconto de parceiro.
          </p>
          <main>
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
        </StyledJsxRegistry>

      </body>
    </html>
  )
}
