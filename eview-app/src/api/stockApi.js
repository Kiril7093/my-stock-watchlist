


import {chartConfig} from "../constants/confic"



const basePath = "https://finnhub.io/api/v1";

export const fetchStockDetails = async (stockSymbol) => {
  const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured : ${response.status}`;

    throw new Error(message);
  }

  return await response.json();
};



export const fetchQuote = async (stockSymbol) => {
  const url = `${basePath}/quote?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured : ${response.status}`;

    throw new Error(message);
  }

  let result = await response.json();

  return result;
};




// export const fetchHistoricalData = async (
//   stockSymbol,
//   resolution,
//   from,
//   to
// ) => {
//   const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${process.env.REACT_APP_API_KEY}`;

//   const response = await fetch(url);

//   if (!response.ok) {
//     const message = `An error has occured : ${response.status}`;

//     throw new Error(message);
//   }

//   let result = await response.json();

//   return result;
// };


export const fetchHistoricalData = async (
  stockSymbol,
  chartConfigKey // new parameter to accept configuration key
) => {
  const { days, weeks, months, years, resolution } = chartConfig[chartConfigKey];
  const from = Math.floor(Date.now() / 1000) - (days * 24 * 60 * 60) - (weeks * 7 * 24 * 60 * 60) - (months * 30 * 24 * 60 * 60) - (years * 365 * 24 * 60 * 60);
  const to = Math.floor(Date.now() / 1000);

  const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${process.env.REACT_APP_API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured : ${response.status}`;

    throw new Error(message);
  }

  let result = await response.json();

  return result;
};
