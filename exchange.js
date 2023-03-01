const amount = document.getElementById("amount");
const wantCurrency = document.getElementById("wantCurrency");
const haveCurrency = document.getElementById("haveCurrency");
const convert = document.getElementById("convert");
const result = document.getElementById("result");

const apiKey = "API-KEY";

convert.addEventListener("click", () => {
  const amountTotal = amount.value;
  const wantCurrencyTotal = wantCurrency.value;
  const haveCurrencyTotal = haveCurrency.value;
  const url = `https://api.api-ninjas.com/v1/convertcurrency?want=${wantCurrencyTotal}&have=${haveCurrencyTotal}&amount=${amountTotal}`;

  fetch(url, {
    headers: {
      "X-API-KEY": apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const new_result = data.new_amount;

      result.innerHTML = `= ${new_result.toFixed(2)} ${wantCurrencyTotal}`;
    })
    .catch((error) => {
      console.error("Request failed:", error);
      result.innerHTML = "An error occurred ";
    });
});
