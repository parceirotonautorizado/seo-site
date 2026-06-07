import csv
import json
import urllib.request
import unicodedata
import re

URL = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/41/municipios"

def slugify(texto):
    texto = unicodedata.normalize("NFKD", texto)
    texto = texto.encode("ascii", "ignore").decode("ascii")
    texto = texto.lower()
    texto = re.sub(r"[^a-z0-9]+", "-", texto)
    return texto.strip("-")

print("Baixando municípios do Paraná...")

with urllib.request.urlopen(URL) as response:
    municipios = json.loads(response.read())

linhas = []

for cidade in municipios:
    nome = cidade["nome"]

    linhas.append({
        "nome": nome,
        "slug": slugify(nome),
        "codigo_ibge": cidade["id"],
        "estado": "PR",
        "regiao": "",
        "populacao": ""
    })

linhas.sort(key=lambda x: x["nome"])

arquivo_saida = "planilhas/cidades-pr.csv"

with open(arquivo_saida, "w", newline="", encoding="utf-8") as csvfile:
    campos = [
        "nome",
        "slug",
        "codigo_ibge",
        "estado",
        "regiao",
        "populacao"
    ]

    writer = csv.DictWriter(csvfile, fieldnames=campos)

    writer.writeheader()

    for linha in linhas:
        writer.writerow(linha)

print(f"{len(linhas)} cidades exportadas para {arquivo_saida}")
