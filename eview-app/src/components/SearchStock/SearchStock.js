import React, { useContext, useState } from "react";
import StockDataContext from "../../context/StockDataContext";
import StockArrayContext from "../../context/StockArrayContext";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import { fetchQuote } from "../../api/stockApi";



export const SearchStock = () => {
  const {
    symbol,
    setSymbol,
    setPrice,
    setChange,
    setChangePercent,
    setCurrency,
    clearStockData,
  } = useContext(StockDataContext);

  const { stockArray, setStockArray } = useContext(StockArrayContext);

  const [error, setError] = useState(null);

  const clear = () => {
    clearStockData();
  };

  
  const handleSearch = (event) => {
    event.preventDefault();

    if (symbol === "") {
      return;
    }

    fetchQuote(symbol)
      .then((result) => {
        if (Object.values(result).some((val) => val)) {
          
          setPrice(result.c);
          setChange(result.d);
          setChangePercent(result.dp);
          setCurrency("USD");
          setError(null);

          const allStockDataObj = {
            symbol,
            price: result.c,
            change: result.d,
            changePercent: result.dp,
            currency: "USD",
          };
          
          const existingIndex = stockArray.findIndex(a => a.symbol === symbol);
          
          if (existingIndex !== -1) {
            const updatedStockArray = [...stockArray];
            updatedStockArray.splice(existingIndex, 1);
            setStockArray([allStockDataObj, ...updatedStockArray]);
          } else {
            setStockArray([allStockDataObj, ...stockArray]);
          }
          
          
          clearStockData();
        } else {
          setError(new Error("There is no such stock!"));

          setTimeout(() => {
            setError(null);
          }, 1000);


          clearStockData();
        }
      })
      .catch((error) => {
        setError(new Error("There is no such stock!"));

        setTimeout(() => {
          setError(null);
        }, 1000);
        
      });
  };





  return (
    <form onSubmit={handleSearch }>
      <div className="flex items-center">
        <input
          type="text"
          className="w-80 marker:px-4 py-3 my-3 focus:outline-none rounded-md"
          placeholder="                Type stock symbol here..."
          value={symbol}
          onChange={(event) => setSymbol(event.target.value)}
        />
        {symbol && (
          <button onClick={clear} className="m-1">
            <XIcon className="h-4 w-4 fill-gray-500" />
          </button>
        )}
        <button
          type="submit"
          className="h-11 w-11 bg-indigo-700 rounded-md flex justify-center items-center m-1 p2 transition duration-300 hover:bg-indigo-100"
        >
          <SearchIcon className="h-4 w-4 fill-gray-100" />
        </button>


      </div>
      {error && <div className="text-red-500 text-center">{error.message}</div>}
    </form>
  );
};
