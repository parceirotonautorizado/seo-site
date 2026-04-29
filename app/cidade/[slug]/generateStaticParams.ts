type Cidade = "curitiba" | "londrina" | "maringa";

const bairros: Record<Cidade, string[]> = {
  curitiba: [],
  londrina: [],
  maringa: []
};

for (const cidade in bairros) {
  for (const bairro of bairros[cidade as Cidade]) {
    paths.push({
      slug: cidade,
      bairro: bairro,
    });
  }
}
