import type { Metadata } from "next"
import Script from "next/script"

import { Inter, Barlow_Condensed } from "next/font/google"

import "./globals.css"
import "./componentes.css"
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

// Títulos na Barlow Condensed, a alternativa que o guia de marca do parceiro Ton indica para a Ton Condensed
const titulo = Barlow_Condensed({
  variable: "--font-titulo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
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
      name: "Parceiro Ton Paraná",
      url: `${CONFIG.dominio}/`,
      description:
        "Parceiro Ton (programa Renda Extra). Divulga as maquininhas Ton no Paraná e indica para compra no site da Ton.",
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
      name: "Parceiro Ton Paraná",
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
      className={`${inter.variable} ${titulo.variable} h-full antialiased`}
    >
      <head>

        {/* Tag Manager: só carrega se o visitante permitiu a medição no banner de cookies (diretriz da Ton e ANPD) */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,i){
              var ok=false, ev=['scroll','mousemove','touchstart','keydown','click'];
              function carregar(){
                if(ok) return; ok=true;
                w.dataLayer=w.dataLayer||[];
                w.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                var j=d.createElement('script'); j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i;
                d.head.appendChild(j);
              }
              function aceitou(){ try { return localStorage.getItem('consentimento-cookies')==='aceito'; } catch(e){ return false; } }
              function go(){ if(aceitou()) carregar(); }
              w.__carregarMedicao=carregar;
              // fecha o menu do celular depois de tocar em um link dele
              d.addEventListener('click',function(e){
                var t=e.target; if(!t || !t.closest) return;
                if(t.closest('.mobile-menu a')){ var c=d.getElementById('nav-toggle'); if(c) c.checked=false; }
                // link de menu para uma seção que já existe nesta página: rola até ela em vez de sair da página
                var a=t.closest('a[data-secao]');
                if(a && d.getElementById(a.getAttribute('data-secao'))){ e.preventDefault(); w.location.hash=a.getAttribute('data-secao'); }
                // medição (só com consentimento): clique em botão de pedido com o link de parceiro e clique no WhatsApp
                var l=t.closest('a[href]');
                if(l && aceitou()){
                  var h=l.getAttribute('href')||'';
                  var tipo=h.indexOf('referrer=')>-1 ? 'clique_pedido' : (h.indexOf('wa.me/')>-1 ? 'clique_whatsapp' : '');
                  if(tipo){
                    w.dataLayer=w.dataLayer||[];
                    w.dataLayer.push({event:tipo, destino:(h.match(/productId=([A-Z0-9_]+)/)||[])[1]||'catalogo', texto:(l.textContent||'').trim().slice(0,60), pagina:w.location.pathname});
                  }
                }
              });
              ev.forEach(function(e){ w.addEventListener(e,go,{passive:true}); });
              if(d.readyState==='complete') setTimeout(function(){ go(); },8000);
              else w.addEventListener('load',function(){ setTimeout(function(){ go(); },8000); });
            })(window,document,'GTM-WZRS8XND');
          `}
        </Script>

      </head>

      <body className="min-h-full flex flex-col">


        <JsonLd data={siteLd} />

        <StyledJsxRegistry>
          <Navbar />
          <p className="aviso-parceiro">
            Site de um parceiro Ton. A compra é feita no site da Ton, com o desconto de parceiro.
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
