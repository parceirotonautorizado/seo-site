import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

const FILE = path.resolve("src/data/plans.json");

// 🔥 GET PLANOS
router.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE, "utf-8"));
  res.json(data);
});

// 🔥 ATUALIZAR TAXA
router.post("/update", (req, res) => {
  const { plan, field, value, installment } = req.body;

  const data = JSON.parse(fs.readFileSync(FILE, "utf-8"));

  if (!data[plan]) {
    return res.status(404).json({ error: "Plan not found" });
  }

  if (field === "pix" || field === "debit") {
    data[plan][field] = value;
  }

  if (field === "credit") {
    data[plan].credit[installment] = value;
  }

  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));

  res.json({ success: true, data });
});

export default router;