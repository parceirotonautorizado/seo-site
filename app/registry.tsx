"use client"

import React, { useState } from "react"
import { useServerInsertedHTML } from "next/navigation"
import { StyleRegistry, createStyleRegistry } from "styled-jsx"

// Envia os estilos do styled-jsx já no HTML do servidor, para a página não aparecer sem estilo
export default function StyledJsxRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  const [jsxStyleRegistry] = useState(() => createStyleRegistry())

  useServerInsertedHTML(() => {
    const styles = jsxStyleRegistry.styles()
    jsxStyleRegistry.flush()
    return <>{styles}</>
  })

  return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>
}
