type Props = {
  cidade: string
  cidadeSlug: string
  bairro?: string
}

export default function Breadcrumb({ cidade, cidadeSlug, bairro }: Props) {
  const link = { textDecoration: "none", color: "#006e00" }

  return (
    <nav
      aria-label="breadcrumb"
      style={{
        maxWidth: "900px",
        margin: "20px auto",
        padding: "0 20px",
        fontSize: "14px",
        color: "#555",
      }}
    >
      <a href="/" style={link}>
        Início
      </a>

      <span> › </span>

      <a href="/cidades" style={link}>
        Cidades
      </a>

      <span> › </span>

      {bairro ? (
        <>
          <a href={`/cidade/${cidadeSlug}`} style={link}>
            {cidade}
          </a>

          <span> › </span>

          <span>{bairro}</span>
        </>
      ) : (
        <span>{cidade}</span>
      )}
    </nav>
  )
}
