import type { Metadata } from "next"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
}

// O painel lê os contatos de um servidor que só existe no computador do dono do site.
// No site publicado ele responde "página não encontrada"; rodando localmente (npm run dev) continua funcionando.
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (process.env.NODE_ENV === "production") {
    notFound()
  }

  return children
}
