import express from "express";
import { calculateFee } from "../services/taxEngine.js";

const router = express.Router();

const PLANS = {
  pix: 0,
  deb: 0.57,
  cre: {
    1: 0.57,
    12: 7.97
  }
};

router.post("/simulate", (req, res) => {
  try {
    const { amount = 100 } = req.body;

    const pix = calculateFee({
      rate: PLANS.pix,
      amount
    });

    const debit = calculateFee({
      rate: PLANS.deb,
      amount
    });

    const credit1x = calculateFee({
      rate: PLANS.cre,
      amount,
      installments: 1
    });

    const credit12x = calculateFee({
      rate: PLANS.cre,
      amount,
      installments: 12
    });

    res.json({
      amount,
      results: {
        pix,
        debit,
        credit_1x: credit1x,
        credit_12x: credit12x
      }
    });

  } catch (error) {
    console.error("❌ ERRO NA SIMULAÇÃO:", error.message);

    res.status(500).json({
      error: error.message
    });
  }
});

export default router;