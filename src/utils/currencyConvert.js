export const formatCurrency = (amount, cart) => {
  const result = (amount / 100).toFixed(2);

  //If no cents just return the dollars
  if (!cart) {
    if (result.toString().endsWith("00")) {
      return (amount / 100).toFixed(0);
    }
  }

  return result;
};
