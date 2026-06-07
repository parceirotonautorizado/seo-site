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
// GARANTE ARQUIVO
//
if (!fs.existsSync(FILE)) {
  fs.writeFileSync(FILE, JSON.stringify([]))
}

//
// SALVAR LEAD
//
app.post("/lead", async (req, res) => {
  try {
    const leads = JSON.parse(
      fs.readFileSync(FILE)
    )

    const novoLead = {
      cidade: req.body.cidade || "",
      bairro: req.body.bairro || "",

      produto: req.body.produto || "",

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

      taxa: req.body.taxa || "",

      valorRecebido:
        req.body.valorRecebido || "",

      amount: req.body.amount || "",

      dispositivo:
        req.body.dispositivo || "",

      url: req.body.url || "",

      createdAt:
        req.body.createdAt ||
        new Date().toISOString(),
    }

    //
    // SALVA LOCAL
    //
    leads.push(novoLead)

    fs.writeFileSync(
      FILE,
      JSON.stringify(leads, null, 2)
    )

    //
    // GOOGLE SHEETS
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

    res.json({
      success: true,
    })

  } catch (err) {
    console.error(err)

    res.status(500).json({
      error:
        "Erro ao salvar lead",
    })
  }
})

//
// LISTAR LEADS
//
app.get("/leads", (req, res) => {
  try {
    const leads = JSON.parse(
      fs.readFileSync(FILE)
    )

    res.json(leads.reverse())

  } catch (err) {
    console.error(err)

    res.status(500).json({
      error:
        "Erro ao buscar leads",
    })
  }
})

//
// START
//
app.listen(PORT, () => {
  console.log(
    `🔥 Backend rodando em http://localhost:${PORT}`
  )
})