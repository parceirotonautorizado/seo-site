import express from "express";
const router = express.Router();

// LISTAR PLANOS
router.get("/plans", (req, res) => {
  res.json(getPlans());
});

// PEGAR UM PLANO
router.get("/plans/:name", (req, res) => {
  res.json(getPlan(req.params.name));
});

// ATUALIZAR PLANO (tipo Stripe dashboard edit)
router.put("/plans/:name", (req, res) => {
  const updated = updatePlan(req.params.name, req.body);
  res.json(updated);
});

export default router;