import express from "express"
import cors from "cors"
import fs from "fs"
import fetch from "node-fetch"

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

const FILE = "./leads.json"

//
// 🔥 GARANTE JSON
//
if (!fs.existsSync(FILE)) {
  fs.writeFileSync(FILE, JSON.stringify([]))
}

//
// 🔥 FUNÇÕES
//
function calc(value, rate) {
  const fee = (value * rate) / 100
  const liquid = value - fee

  return {
    rate,
    fee: fee.toFixed(2),
    liquid: liquid.toFixed(2),
  }
}

//
// 🔥 SIMULADOR
//
app.post("/simulate", async (req, res) => {
  try {
    const { amount = 100 } = req.body

    const pixRate = 0
    const debitRate = 0.57
    const credit1Rate = 0.57
    const credit12Rate = 7.97

    res.json({
      success: true,

      results: {
        pix: calc(amount, pixRate),

        debit: calc(amount, debitRate),

        credit_1x: calc(
          amount,
          credit1Rate
        ),

        credit_12x: calc(
          amount,
          credit12Rate
        ),
      },
    })

  } catch (err) {
    console.error(
      "Erro no simulador:",
      err
    )

    res.status(500).json({
      error: "Erro no simulador",
    })
  }
})

//
// 🔥 SALVAR LEAD
//
app.post("/lead", async (req, res) => {
  try {

    const leads = JSON.parse(
      fs.readFileSync(FILE)
    )

    //
    // 🔥 LEAD COMPLETO
    //
    const novoLead = {
      cidade:
        req.body.cidade || "",

      bairro:
        req.body.bairro || "",

      produto:
        req.body.produto || "",

      tipoVenda:
        req.body.tipoVenda || "",

      parcelas:
        req.body.parcelas || "",

      vendasMensais:
        req.body.vendasMensais || "",

      recebimento:
        req.body.recebimento || "",

      bandeiras:
        req.body.bandeiras || "",

      taxa:
        req.body.taxa || "",

      valorRecebido:
        req.body.valorRecebido || 0,

      amount:
        req.body.amount || 0,

      dispositivo:
        req.body.dispositivo || "",

      userAgent:
        req.body.userAgent || "",

      url:
        req.body.url || "",

      createdAt:
        new Date().toISOString(),
    }

    //
    // 🔥 SALVA LOCAL
    //
    leads.push(novoLead)

    fs.writeFileSync(
      FILE,
      JSON.stringify(leads, null, 2)
    )

    //
    // 🔥 ENVIA GOOGLE SHEETS
    //
    await fetch(
      "https://script.google.com/macros/s/AKfycbxxum4rcqlmgVPOOEi_AZzKdXAw2efQOiCY_2pxWTgD4SQ3saFc7Y7QXrZnBphEkY-fdw/exec",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(
          novoLead
        ),
      }
    )

    //
    // 🔥 RESPONSE
    //
    res.json({
      success: true,
      lead: novoLead,
    })

  } catch (err) {

    console.error(
      "Erro ao salvar lead:",
      err
    )

    res.status(500).json({
      error:
        "Erro ao salvar lead",
    })
  }
})

//
// 🔥 DASHBOARD
//
app.get("/leads", (req, res) => {
  try {

    const leads = JSON.parse(
      fs.readFileSync(FILE)
    )

    res.json(
      leads.reverse()
    )

  } catch (err) {

    console.error(
      "Erro ao buscar leads:",
      err
    )

    res.status(500).json({
      error:
        "Erro ao buscar leads",
    })
  }
})

//
// 🔥 START
//
app.listen(PORT, () => {
  console.log(
    `🔥 Backend rodando em http://localhost:${PORT}`
  )
})