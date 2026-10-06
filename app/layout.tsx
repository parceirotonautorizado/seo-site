import type { Metadata } from "next"
import Script from "next/script"

import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maquininhadecartoes.com.br"),
  title: {
    default: "Maquininhas Ton Paraná | Menores Taxas",
    template: "%s",
  },
  description:
    "Compare taxas, simule economia e encontre a melhor maquininha Ton para sua cidade no Paraná.",
  alternates: {
    canonical: "https://www.maquininhadecartoes.com.br/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>

        <Script
          id="gtm-script"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});

              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'
              ?'&l='+l:'';

              j.async=true;

              j.src='https://www.googletagmanager.com/gtm.js?id=' +i+dl;

              f.parentNode.insertBefore(j,f);

            
})(window,document,'script','dataLayer','GTM-WZRS8XND');
          `}
        </Script>

      </head>

      <body className="min-h-full flex flex-col">

        <noscript>

          <iframe
            
src="https://www.googletagmanager.com/ns.html?id=GTM-WZRS8XND"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />

        </noscript>

        <Navbar />
        <main>
          {children}
        </main>
        <Footer />

      </body>
    </html>
  )
}
