import React, { useContext, useEffect, useState } from "react";
import InputContext from "../../context/inputContext";
import stockContext from "../../context/stockContext";
import { XIcon, SearchIcon } from "@heroicons/react/solid";


import { fetchQuote } from "../../api/stockApi";

export const SearchStock = () => {
  const { input, setInput } = useContext(InputContext);
  const { stockSymbol, setStockSymbol } = useContext(stockContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    setInput(input);
  }, [input]);

  const clear = () => {
    setInput("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchQuote(input)
      .then((result) => {
        if (Object.values(result).some((val) => val)) {
          setStockSymbol(result);
          setError(null);
        } else {
          setError(new Error("There is no such stock!"));
          setStockSymbol(null);
        }
      })
      .catch((error) => {
        setError(new Error("There is no such stock!"));
        setStockSymbol(null);
      });
  };

  const searchStockSymbol = (input) => {
    fetchQuote(input)
      .then((result) => {
        if (Object.values(result).some((val) => val)) {
          setStockSymbol(result);
          setError(null);
        } else {
          setError(new Error("There is no such stock!"));
          setStockSymbol(null);
        }
      })
      .catch((error) => {
        setError(new Error("There is no such stock!"));
        setStockSymbol(null);
      });
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="flex items-center">
        <input
          type="text"
          value={input}
          className="w-80 marker:px-4 py-3 my-3 focus:outline-none rounded-md"
          placeholder="                Type stock symbol here..."
          onChange={(event) => setInput(event.target.value)}
        />
        {input && (
          <button onClick={clear} className="m-1">
            <XIcon className="h-4 w-4 fill-gray-500" />
          </button>
        )}
        <button
          type="submit"
          onClick={() => searchStockSymbol(input)}
          className="h-11 w-11 bg-indigo-700 rounded-md flex justify-center items-center m-1 p2 transition duration-300 hover:bg-indigo-100"
        >
          <SearchIcon className="h-4 w-4 fill-gray-100" />
        </button>
      </div>
      {error && <div className="text-red-500">{error.message}</div>}
    </form>
  );
};
