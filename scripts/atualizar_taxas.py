"""Regenera lib/taxas.ts a partir dos dados publicados pela Ton em https://www.ton.com.br/planos-e-taxas

A página oficial traz todas as taxas em JSON (planos, faixas, prazos, bandeiras e parcelas de 1x a 21x).
Uso: python3 scripts/atualizar_taxas.py
"""
import datetime, json, re, subprocess

URL = "https://www.ton.com.br/planos-e-taxas"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/126.0 Safari/537.36"

# Nome da faixa no site da Ton -> id usado no nosso simulador
FAIXAS = {
    "Período Promocional": "promo",
    "Até R$ 3 mil": "ate3",
    "De R$ 3 mil a R$ 6 mil": "t3a6",
    "De R$ 6 mil a R$ 10 mil": "t6a10",
    "De R$ 10 mil a R$ 30 mil": "t10a30",
    "Acima de R$ 30 mil": "t30p",
}
PRAZOS = {"one-business-day": "d1", "same-day": "d0", "fourteen-business-days": "d14", "thirty-business-days": "d30"}


def condicao(c):
    """Devolve {mv: {deb, cre}, oa: {deb, cre}} conferindo que Visa=Master e Elo=Amex."""
    g = {(x["payment_method"], x["card_brand"]): [y["mdr"] for y in x["installments"]] for x in c["mdrs"]}
    for a, b in (("visa", "mastercard"), ("elo", "amex")):
        for m in ("debit_card", "credit_card"):
            assert g[(m, a)] == g[(m, b)], f"taxas diferentes entre {a} e {b}"
    return {
        grupo: {"deb": g[("debit_card", marca)][0], "cre": {i + 1: v for i, v in enumerate(g[("credit_card", marca)])}}
        for grupo, marca in (("mv", "visa"), ("oa", "elo"))
    }


def ts(obj, pix, indent):
    pad = " " * indent
    linhas = []
    for grupo in ("mv", "oa"):
        d = obj[grupo]
        cre = d["cre"]
        itens = [f"{k}: {v:g}" for k, v in cre.items()]
        quebras = [", ".join(itens[i:i + 7]) for i in range(0, len(itens), 7)]
        cre_txt = (",\n" + pad + "         ").join(quebras)
        pix_txt = f"pix: {pix:g}, " if pix is not None else ""
        linhas.append(f"{pad}{grupo}: {{ {pix_txt}deb: {d['deb']:g},\n{pad}  cre: {{ {cre_txt} }} }},")
    return "\n".join(linhas)


def main():
    html = subprocess.run(["curl", "-sfL", "-A", UA, "--max-time", "120", URL], check=True, capture_output=True).stdout.decode("utf-8", "ignore")
    estado = json.loads(re.search(r'<script id="__FRSH_STATE[^>]*>(.*?)</script>', html, re.S).group(1))
    planos = next(v["plans"] for v in estado["v"][0] if isinstance(v, dict) and "plans" in v)

    maquininha, tapton, link, atualizado = {}, None, None, ""
    for p in planos:
        cond = {PRAZOS[c["type"]]: condicao(c) for c in p["conditions"]}
        if p["type"] == "transactional":
            maquininha[FAIXAS[p["tierLabel"]]] = cond
            atualizado = max(atualizado, p["conditions_updated_at"][:10])
        elif p["type"] == "tap_phone":
            tapton = cond
        elif p["type"] == "link":
            link = cond
    assert set(maquininha) == set(FAIXAS.values()), "faltou alguma faixa"
    # travas de segurança: se a página mudar de formato, o script para em vez de publicar número errado
    assert tapton and link, "faltaram as taxas do TapTon ou do link de pagamento"
    for faixa, prazos in maquininha.items():
        assert set(prazos) == {"d1", "d0"}, f"prazos inesperados em {faixa}"
        for prazo in prazos.values():
            for grupo in prazo.values():
                assert len(grupo["cre"]) == 21, f"esperava 21 parcelas em {faixa}"
                assert all(0 < v < 40 for v in [grupo["deb"], *grupo["cre"].values()]), f"taxa fora do intervalo em {faixa}"

    # Data no horário de Brasília (o servidor do GitHub roda em UTC e adiantava o dia à noite)
    hoje = datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=-3))).date()
    data_br = lambda iso: "/".join(reversed(iso.split("-")))
    out = f'''// ─────────────────────────────────────────────────────────────────────────────
// TAXAS TON · arquivo central de taxas
//
// GERADO por scripts/atualizar_taxas.py a partir de {URL}
// Não edite à mão: rode o script de novo para atualizar.
//
// Pix QR Code na maquininha (regulamento do plano, item 4.1.3): 0% no período promocional.
// Depois, continua 0% para quem cadastrar uma chave Pix (CPF, CNPJ ou telefone) na Conta Ton;
// sem chave cadastrada, a taxa é PIX_SEM_CHAVE. Os valores "pix" abaixo consideram a chave cadastrada.
// ─────────────────────────────────────────────────────────────────────────────

// Dia em que este arquivo foi conferido no site da Ton
export const TAXAS_ULTIMA_VERIFICACAO = "{hoje.strftime('%d/%m/%Y')}"

// Dia em que a própria Ton atualizou as taxas pela última vez
export const TAXAS_ATUALIZADAS_PELA_TON = "{data_br(atualizado)}"

// Taxa do Pix na maquininha para quem NÃO cadastrou chave Pix na Conta Ton, depois do período promocional
export const PIX_SEM_CHAVE = 0.49

// Data do regulamento do plano usado como referência das regras
export const REGULAMENTO_DATA = "21/09/2026"

// Faixas de faturamento mensal
export const VM = [
  {{ id: "promo",  label: "Período Promocional" }},
  {{ id: "ate3",   label: "Até R$ 3 mil" }},
  {{ id: "t3a6",   label: "De R$ 3 mil a R$ 6 mil" }},
  {{ id: "t6a10",  label: "De R$ 6 mil a R$ 10 mil" }},
  {{ id: "t10a30", label: "De R$ 10 mil a R$ 30 mil" }},
  {{ id: "t30p",   label: "Acima de R$ 30 mil" }},
]

export const RECEBIMENTO = [
  {{ id: "d1", label: "1 dia útil" }},
  {{ id: "d0", label: "Na hora" }},
]

export const BANDEIRAS = [
  {{ id: "mv", label: "Mastercard e Visa" }},
  {{ id: "oa", label: "Elo e Amex" }},
]

// Estrutura: PLANS[faixa][recebimento][bandeira] = {{ pix, deb, cre: {{ 1..21 }} }}
// Parcelas de 13x a 21x só valem para T3 e T3 Smart (novos clientes); T1 e T2 vão até 12x.
export const PLANS: Record<string, any> = {{
'''
    for faixa in FAIXAS.values():
        out += f"  {faixa}: {{\n"
        for prazo in ("d1", "d0"):
            out += f"    {prazo}: {{\n{ts(maquininha[faixa][prazo], 0, 6)}\n    }},\n"
        out += "  },\n"
    out += "}\n\n// TapTon (celular como maquininha): taxas próprias, sem faixa de vendas\nexport const TAPTON: Record<string, any> = {\n"
    for prazo in ("d1", "d0"):
        out += f"  {prazo}: {{\n{ts(tapton[prazo], None, 4)}\n  }},\n"
    out += "}\n\n// Link de pagamento: taxas próprias, com recebimento em 14 ou 30 dias\nexport const LINK_PAGAMENTO: Record<string, any> = {\n"
    for prazo in ("d30", "d14"):
        out += f"  {prazo}: {{\n{ts(link[prazo], None, 4)}\n  }},\n"
    out += "}\n"
    open("lib/taxas.ts", "w", encoding="utf-8").write(out)
    print("lib/taxas.ts atualizado; taxas da Ton de", data_br(atualizado))


if __name__ == "__main__":
    main()
