Object.entries(bairros).forEach(([cidade, listaBairros]) => {
  listaBairros.forEach((bairro) => {
    paths.push({
      slug: cidade,
      bairro,
    });
  });
});
