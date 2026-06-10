import json

with open("municipios-pr.json", "r", encoding="utf-8") as f:
    municipios = json.load(f)

with open("dados/cidades-pr.json", "r", encoding="utf-8") as f:
    cidades = json.load(f)

municipios_por_nome = {
    m["nome"]: m
    for m in municipios
}

for cidade in cidades:
    nome = cidade["nome"]

    if nome in municipios_por_nome:
        municipio = municipios_por_nome[nome]

        cidade["codigo_ibge"] = str(municipio["id"])

        cidade["regiao"] = municipio["regiao-imediata"]["nome"]

with open("dados/cidades-pr.json", "w", encoding="utf-8") as f:
    json.dump(cidades, f, ensure_ascii=False, indent=2)

print(f"{len(cidades)} cidades atualizadas.")
