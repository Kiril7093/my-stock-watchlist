import { useContext, useEffect, useState } from "react";
import StockContext from "../../context/stockContext.js";
import { fetchQuote } from "../../api/stockApi";

export const LoadingCard = () => {
  const { StockSymbol } = useContext(StockContext);
  const [quote, setQuote] = useState({});

  useEffect(() => {
    async function getQuote() {
      const result = await fetchQuote(StockSymbol);
      setQuote(result);
    }

    getQuote();
  }, [StockSymbol]);

  return <div>{JSON.stringify(quote)}</div>;
};
