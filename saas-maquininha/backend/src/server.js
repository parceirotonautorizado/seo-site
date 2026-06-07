import express from "express";
import cors from "cors";
import simulateRoute from "./routes/simulate.js";
import adminPlans from "./routes/admin.plans.js";

const app = express();

app.use(cors());
app.use(express.json());

// API pública (simulador)
app.use("/api", simulateRoute);

// API admin (tipo Stripe dashboard)
app.use("/api/admin", adminPlans);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});