// Foto de uso dentro de um artigo. As imagens em /public/fotos são ilustrativas e foram geradas por IA;
// a legenda sempre avisa isso.
export default function FotoUso({ arquivo, alt, legenda }: { arquivo: string; alt: string; legenda: string }) {
  return (
    <figure className="foto-uso">
      <img
        src={`/fotos/${arquivo}.webp`}
        srcSet={`/fotos/${arquivo}-640.webp 640w, /fotos/${arquivo}.webp 1280w`}
        sizes="(max-width: 780px) 100vw, 740px"
        alt={alt}
        width={1280}
        height={720}
        loading="lazy"
        decoding="async"
      />
      <figcaption>{legenda} Imagem ilustrativa, criada com inteligência artificial.</figcaption>
    </figure>
  )
}
