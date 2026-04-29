const bairros = {
  curitiba: ["centro", "agua-verde"],
  londrina: ["centro"],
  maringa: ["zona-7"]
} as const;

type Cidade = keyof typeof bairros;

for (const cidade of Object.keys(bairros) as Cidade[]) {
  for (const bairro of bairros[cidade]) {
    paths.push({
      slug: cidade,
      bairro: bairro,
    });
  }
}
