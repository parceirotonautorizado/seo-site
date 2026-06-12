import json
import csv
import unicodedata

def normalizar(texto):
    texto = unicodedata.normalize("NFKD", texto)
    texto = texto.encode("ascii", "ignore").decode("ascii")
    return texto.lower().strip()

with open("dados/cidades-pr.json", encoding="utf-8") as f:
    cidades = json.load(f)

populacoes = {}

with open("02_anexo_ii_populacao_dos_municipios.csv", encoding="utf-8") as f:
    reader = csv.DictReader(f)

    for row in reader:
        nome = normalizar(row["nome"])

        if nome == "munhoz de mello":
            nome = "munhoz de melo"

        if nome == "pinhal do sao bento":
            nome = "pinhal de sao bento"

        populacoes[nome] = row["populacao"]

atualizadas = 0

for cidade in cidades:
    chave = normalizar(cidade["nome"])

    if chave in populacoes:
        cidade["populacao"] = populacoes[chave]
        atualizadas += 1

with open("dados/cidades-pr.json", "w", encoding="utf-8") as f:
    json.dump(cidades, f, ensure_ascii=False, indent=2)

print(f"{atualizadas} cidades atualizadas.")
