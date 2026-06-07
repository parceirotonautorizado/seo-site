import express from "express"

const router = express.Router()

router.post("/", async (req, res) => {
  try {
    const { cidade, bairro, amount, url, userAgent } = req.body

    console.log("🔥 NOVO LEAD:")
    console.log({
      cidade,
      bairro,
      amount,
      url,
      userAgent,
      data: new Date()
    })

    // 👉 AQUI você pode salvar no banco ou Google Sheets depois

    res.json({ ok: true })
  } catch (err) {
    console.error("Erro ao salvar lead:", err)
    res.status(500).json({ error: true })
  }
})

export default router