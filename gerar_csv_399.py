import re

entrada = "cidades.ts"
saida = "planilhas/cidades-pr-399.csv"

with open(entrada, "r", encoding="utf-8") as f:
    conteudo = f.read()

nomes = re.findall(r'nome:\s*"([^"]+)"', conteudo)
slugs = re.findall(r'slug:\s*"([^"]+)"', conteudo)

with open(saida, "w", encoding="utf-8") as f:
    f.write("nome,slug,codigo_ibge,estado,regiao,populacao,descricao,economia\n")

    for nome, slug in zip(nomes, slugs):
        linha = f'"{nome}","{slug}","","PR","","","",""\n'
        f.write(linha)

print(f"{len(nomes)} cidades exportadas para {saida}")
