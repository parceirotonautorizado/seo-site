import json
import csv
import unicodedata
import re

def slugify(texto):
    texto = unicodedata.normalize("NFKD", texto)
    texto = texto.encode("ascii", "ignore").decode("ascii")
    texto = texto.lower()
    texto = re.sub(r"[^a-z0-9]+", "-", texto)
    return texto.strip("-")

with open("municipios-pr.json", encoding="utf-8") as f:
    cidades = json.load(f)

with open("planilhas/cidades-pr.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)

    writer.writerow([
        "nome",
        "slug",
        "codigo_ibge",
        "estado",
        "regiao",
        "populacao"
    ])

    for cidade in cidades:
        writer.writerow([
            cidade["nome"],
            slugify(cidade["nome"]),
            cidade["id"],
            "PR",
            cidade["regiao-imediata"]["regiao-intermediaria"]["nome"],
            ""
        ])

print(f"{len(cidades)} cidades exportadas.")
