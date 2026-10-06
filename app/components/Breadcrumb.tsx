type Props = {
  cidade: string
  bairro?: string
}

export default function Breadcrumb({ cidade, bairro }: Props) {
  return (
    <nav
      aria-label="breadcrumb"
      style={{
        maxWidth: "900px",
        margin: "20px auto",
        padding: "0 20px",
        fontSize: "14px",
        color: "#666",
      }}
    >
      <a
        href="/"
        style={{
          textDecoration: "none",
          color: "#009900",
        }}
      >
        Home
      </a>

      <span> › </span>

      <a
        href={`/cidade/${cidade.toLowerCase().replace(/\s/g, "-")}`}
        style={{
          textDecoration: "none",
          color: "#009900",
        }}
      >
        {cidade}
      </a>

      {bairro && (
        <>
          <span> › </span>

          <span>{bairro}</span>
        </>
      )}
    </nav>
  )
}
