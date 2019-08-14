export const formatCurrency = amount => {
  const result = (amount / 100).toFixed(2);

  //If no cents just return the dollars
  if (result.toString().endsWith("00")) {
    return (amount / 100).toFixed(0);
  }

  return result;
};
