"""Gera dados/bairros-curitiba.json com dados do Censo 2022 por bairro (IBGE, tabelas 9923 e 9922).

Uso: python3 scripts/enriquecer_bairros.py
"""
import json, re, subprocess, unicodedata

API = "https://servicodados.ibge.gov.br/api/v3/agregados"
CURITIBA = "N102%5BN6%5B4106902%5D%5D"


def get(url):
    return json.loads(subprocess.run(["curl", "-sf", "--max-time", "180", url], check=True, capture_output=True).stdout)


def slug(nome):
    s = unicodedata.normalize("NFD", nome).encode("ascii", "ignore").decode().lower()
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")


# Nome usado pelo IBGE -> slug usado no site
APELIDOS = {
    "alto-da-rua-xv": "alto-da-xv",
    "cidade-industrial-de-curitiba": "cidade-industrial",
    "botiatuvinha": "butiatuvinha",
}


def main():
    pop = get(f"{API}/9923/periodos/2022/variaveis/93?localidades={CURITIBA}&classificacao=1%5B0%5D")
    dom = get(f"{API}/9922/periodos/2022/variaveis/381%7C5930?localidades={CURITIBA}")

    bairros = {}
    for s in pop[0]["resultados"][0]["series"]:
        nome = s["localidade"]["nome"].replace(" - Curitiba - PR", "")
        chave = slug(nome)
        bairros[s["localidade"]["id"]] = {"slug": APELIDOS.get(chave, chave), "populacao": int(s["serie"]["2022"])}
    for var in dom:
        campo = "domicilios" if var["id"] == "381" else "media_moradores"
        for s in var["resultados"][0]["series"]:
            v = float(s["serie"]["2022"])
            bairros[s["localidade"]["id"]][campo] = int(v) if campo == "domicilios" else v

    lista = sorted(bairros.values(), key=lambda b: -b["populacao"])
    total = sum(b["populacao"] for b in lista)
    saida = {}
    for i, b in enumerate(lista):
        saida[b["slug"]] = {
            "populacao": b["populacao"],
            "ranking": i + 1,
            "percentual_cidade": round(100 * b["populacao"] / total, 1),
            "domicilios": b["domicilios"],
            "media_moradores": b["media_moradores"],
        }
    json.dump({"total_bairros": len(lista), "populacao_cidade": total, "bairros": saida},
              open("dados/bairros-curitiba.json", "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print(len(saida), "bairros")


if __name__ == "__main__":
    main()
