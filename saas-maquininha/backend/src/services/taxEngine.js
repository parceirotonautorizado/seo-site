export function calculateFee({ rate, amount, installments = 1 }) {
  if (rate === undefined || rate === null) {
    throw new Error("Rate not defined for this method");
  }

  let feePercent = 0;

  // PIX / débito
  if (typeof rate === "number") {
    feePercent = rate;
  }

  // crédito
  if (typeof rate === "object") {
    feePercent =
      installments === 1
        ? rate[1] ?? 0
        : rate[installments] ?? rate[1] ?? 0;
  }

  const feeValue = amount * (feePercent / 100);
  const receive = amount - feeValue;

  return {
    feePercent,
    feeValue: Number(feeValue.toFixed(2)),
    receive: Number(receive.toFixed(2))
  };
}