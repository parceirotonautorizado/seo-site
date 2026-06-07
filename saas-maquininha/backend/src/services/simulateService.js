import fs from "fs";
import path from "path";
import { calculateFee } from "./taxEngine.js";

function loadPlans() {
  const file = path.resolve("src/data/plans.json");
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

export function simulateAmount(amount, planName = "default") {
  const plans = loadPlans();
  const plan = plans[planName];

  if (!plan) {
    throw new Error("Plan not found");
  }

  const pix = {
    feePercent: plan.pix,
    feeValue: 0,
    receive: amount
  };

  const debit = calculateFee({
    rate: plan.debit,
    amount
  });

  const credit1x = calculateFee({
    rate: plan.credit,
    amount,
    installments: 1
  });

  const credit12x = calculateFee({
    rate: plan.credit,
    amount,
    installments: 12
  });

  return {
    amount,
    plan: planName,
    results: {
      pix,
      debit,
      credit_1x: credit1x,
      credit_12x: credit12x
    }
  };
}