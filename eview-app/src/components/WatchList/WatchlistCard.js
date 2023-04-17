import { useContext, useEffect, useState } from "react";
import { WatchlistChart } from "./WatchlistChart";
import { XIcon } from "@heroicons/react/solid";
import { AuthContext } from "../../context/AuthContext";
import WatchListContext from "../../context/WatchlistContext";

import { fetchQuote } from "../../api/stockApi.js";

export const WatchlistCard = ({ symbol, deleteWatchlistRecord }) => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    function loadStock() {
      if (symbol === "") {
        return;
      }

      let allStockDataObj = {};

      fetchQuote(symbol).then((result) => {
        if (Object.values(result).some((val) => val)) {
          allStockDataObj = {
            symbol: symbol,
            price: result.c,
            change: result.d,
            changePercent: result.dp,
            currency: "USD",
          };

          setStockData(allStockDataObj);
        }
      });
    }

    loadStock();
  }, [symbol]);

  return (
    <div
      className={`w-full h-full rounded-md relative p-8 border-2 bg-white border-neutral-200`}
    >
      <span className="absolute left-4 top-4 text-neutral-400 text-lg xl:text-xl 2xl">
        {symbol}
      </span>

      <button data-symbol={symbol} onClick={() => deleteWatchlistRecord(symbol)}>
        <XIcon className="h-5 w-5 text-neutral-400 absolute right-4 top-4" />
      </button>

      <div className='w-full  flex items-center justify-around'>
        {stockData && (
          <span className="text-2xl xl:text-4xl 2xl:text-5xl flex items-center">
            ${stockData.price}
            <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2">
              {stockData.currency}
            </span>
          </span>
        )}

        {stockData && (
          <span
            className={`text-lg xl: 2xl:text-2xl ${
              stockData.change > 0 ? "text-lime-500" : "text-red-500"
            }`}
          >
            {stockData.change} <span>({stockData.changePercent}%)</span>
          </span>
        )}
      </div>

      <div className="h-55" >

      <WatchlistChart symbol={symbol} />

      </div>


      <div className="flex justify-around mt-4">
        <button
          className="h-11 w-48 bg-indigo-700 rounded-md flex justify-center items-center m-1 p2 transition duration-300 hover:bg-indigo-100"
        >
          Details
        </button>
      </div>
    </div>
  );
};
