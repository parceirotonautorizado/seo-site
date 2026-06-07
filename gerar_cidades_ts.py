import csv

cidades = []

with open("planilhas/cidades-pr.csv", encoding="utf-8") as arquivo:
    leitor = csv.DictReader(arquivo)

    for linha in leitor:
        cidades.append(
            f'''  {{
    nome: "{linha["nome"]}",
    slug: "{linha["slug"]}",
  }},'''
        )

conteudo = "export const cidades = [\n"
conteudo += "\n".join(cidades)
conteudo += "\n]\n"

with open("cidades.ts", "w", encoding="utf-8") as arquivo:
    arquivo.write(conteudo)

print(f"{len(cidades)} cidades geradas.")
