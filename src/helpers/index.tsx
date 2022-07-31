export const numberToCurrency = (number: number, fractionDigits: number) => {
  return Number(number).toLocaleString('en-UK', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: fractionDigits,
  });
};
