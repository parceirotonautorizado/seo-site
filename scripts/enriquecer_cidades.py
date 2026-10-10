"""Enriquece dados/cidades-pr.json com dados oficiais por município.

Fontes (todas públicas):
- IBGE Localidades: regiões imediata/intermediária, micro e mesorregião
- IBGE Censo 2022 (tabela 4714): população, área, densidade
- IBGE PIB dos Municípios 2021 (tabela 5938): PIB e valor adicionado por setor
- IBGE Cadastro Central de Empresas: tabela 9509 (empresas e pessoal ocupado, último ano)
  e tabela 6449 (empresas por atividade, 2021)
- Coordenadas e DDD: github.com/kelvins/municipios-brasileiros

Uso: python3 scripts/enriquecer_cidades.py
"""
import csv, io, json, math, subprocess

API = "https://servicodados.ibge.gov.br/api"
PR = "N6[N3[41]]"


def get(url):
    # curl em vez de urllib: usa os certificados do sistema
    url = url.replace("[", "%5B").replace("]", "%5D").replace("|", "%7C")
    return subprocess.run(["curl", "-sf", "--max-time", "180", url], check=True, capture_output=True).stdout.decode("utf-8")


def series(tabela, periodo, variaveis, extra=""):
    """Devolve {variavel: {codigo_ibge: valor}} (ou {(variavel, categoria): {...}} com classificação)."""
    dados = json.loads(get(f"{API}/v3/agregados/{tabela}/periodos/{periodo}/variaveis/{variaveis}?localidades={PR}{extra}"))
    out, ano = {}, None
    for var in dados:
        for res in var["resultados"]:
            cat = "".join(list(c["categoria"].keys())[0] for c in res["classificacoes"])
            chave = f'{var["id"]}:{cat}' if cat else str(var["id"])
            out[chave] = {}
            for s in res["series"]:
                ano, valor = list(s["serie"].items())[0]
                try:
                    out[chave][s["localidade"]["id"]] = float(valor)
                except ValueError:
                    out[chave][s["localidade"]["id"]] = None  # dado omitido pelo IBGE (sigilo)
    return out, ano


def km(a, b):
    la1, lo1, la2, lo2 = map(math.radians, (a["lat"], a["lon"], b["lat"], b["lon"]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 6371 * 2 * math.asin(math.sqrt(h))


def main():
    caminho = "dados/cidades-pr.json"
    cidades = json.load(open(caminho, encoding="utf-8"))

    loc = {str(m["id"]): m for m in json.loads(get(f"{API}/v1/localidades/estados/41/municipios"))}
    censo, _ = series(4714, 2022, "93|6318|614")
    pib, ano_pib = series(5938, 2021, "37|513|517|6575|525")
    emp, ano_emp = series(9509, -1, "706|367|707|662")
    cnae, ano_cnae = series(6449, 2021, "2585", "&classificacao=12762[117363,117543,116910]")
    geo = {r["codigo_ibge"]: r for r in csv.DictReader(io.StringIO(get(
        "https://raw.githubusercontent.com/kelvins/municipios-brasileiros/main/csv/municipios.csv"))) if r["codigo_uf"] == "41"}

    for c in cidades:
        k = c["codigo_ibge"]
        m, g = loc[k], geo[k]
        vab = {n: pib[v][k] for n, v in (("agro", "513"), ("industria", "517"), ("servicos", "6575"), ("publico", "525"))}
        total_vab = sum(vab.values())
        pop = int(censo["93"][k])
        c.update({
            "populacao": pop,
            "area_km2": round(censo["6318"][k], 1),
            "densidade": round(censo["614"][k], 1),
            "regiao": m["regiao-imediata"]["nome"].replace(" ¿ ", " - "),
            "regiao_intermediaria": m["regiao-imediata"]["regiao-intermediaria"]["nome"],
            "mesorregiao": m["microrregiao"]["mesorregiao"]["nome"].replace(" Paranaense", ""),
            "ddd": g["ddd"],
            "lat": float(g["latitude"]),
            "lon": float(g["longitude"]),
            "pib_mil": int(pib["37"][k]),
            "pib_per_capita": round(pib["37"][k] * 1000 / pop),
            "setores": {n: round(100 * v / total_vab) for n, v in vab.items()},
            "empresas": int(emp["367"][k]),
            "unidades_locais": int(emp["706"][k]),
            "pessoal_ocupado": int(emp["707"][k]),
            "salario_medio": round(emp["662"][k] * 1000 / emp["707"][k] / 13) if emp["707"][k] else None,
            "empresas_comercio": (int(cnae["2585:117363"][k]) if cnae["2585:117363"][k] is not None else None),
            "empresas_alimentacao": (int(cnae["2585:117543"][k]) if cnae["2585:117543"][k] is not None else None),
            "empresas_industria": (int(cnae["2585:116910"][k]) if cnae["2585:116910"][k] is not None else None),
        })

    curitiba = next(c for c in cidades if c["slug"] == "curitiba")
    ranking = sorted(cidades, key=lambda c: -c["populacao"])
    for c in cidades:
        c["ranking_populacao"] = ranking.index(c) + 1
        c["km_curitiba"] = round(km(c, curitiba))
        proximas = sorted((o for o in cidades if o is not c), key=lambda o: km(c, o))[:6]
        c["vizinhas"] = [{"slug": o["slug"], "nome": o["nome"], "km": round(km(c, o))} for o in proximas]
        mesma = [o for o in cidades if o["regiao"] == c["regiao"]]
        polo = max(mesma, key=lambda o: o["populacao"])
        c["polo"] = None if polo is c else {"slug": polo["slug"], "nome": polo["nome"], "km": round(km(c, polo))}
        c["cidades_na_regiao"] = len(mesma)

    json.dump(cidades, open(caminho, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    json.dump({"censo": 2022, "pib": int(ano_pib), "empresas": int(ano_emp), "empresas_por_atividade": int(ano_cnae)},
              open("dados/fontes.json", "w", encoding="utf-8"), indent=2)
    print(len(cidades), "cidades atualizadas")


if __name__ == "__main__":
    main()
