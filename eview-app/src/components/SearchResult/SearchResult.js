import React, { useContext } from "react";
import StockContext from "../../context/stockContext";

export const SearchResult = ({ results }) => {
  const { setStockSymbol } = useContext(StockContext);

  return (
    <ul className="absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll bg-white border-neutral-200 custom-scrollbar max-w-xs">
      {results.map((item) => (
        <li
          key={item.symbol}
          className="p-4 m-2 flex items-center justify-between rounded-md cursor-pointer hover:bg-indigo-200 transition duration-300"
          onClick={() => {
            setStockSymbol(item.symbol);
          }}
        >
          <span>{item.symbol}</span>
          <span className="text-gray-600 text-sm ml-2 truncate">
            {item.description}
          </span>
        </li>
      ))}
    </ul>
  );
};


