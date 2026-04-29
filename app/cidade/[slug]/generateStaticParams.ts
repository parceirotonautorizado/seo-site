const bairros = {
  curitiba: ["centro", "agua-verde"],
  londrina: ["centro"],
  maringa: ["zona-7"]
};

for (const cidade of Object.keys(bairros) as (keyof typeof bairros)[]) {
  for (const bairro of bairros[cidade]) {
    paths.push({
      slug: cidade,
      bairro: bairro,
    });
  }
}
