import csv
import json

cidades = []

with open("planilhas/cidades-pr.csv", encoding="utf-8") as arquivo:
    leitor = csv.DictReader(arquivo)

    for linha in leitor:
        cidades.append(linha)

with open("dados/cidades-pr.json", "w", encoding="utf-8") as arquivo:
    json.dump(cidades, arquivo, ensure_ascii=False, indent=2)

print(f"{len(cidades)} cidades exportadas.")
