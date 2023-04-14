import { useContext } from "react";
import { useEffect } from "react";

import StockArrayContext from "../../context/StockArrayContext";

import { SearchStock } from "../SearchStock/SearchStock";
import { TableCompanies } from "../TableCompanies/TableCompanies";
import styles from "./Dashboard.module.css";
import { LoadingCard } from "../LoadingCard/LoadingCard.js";

export const Dashboard = () => {
  const { stockArray, setStockArray } = useContext(StockArrayContext);



  const removeStock = (symbol) => {
    const newStockArray = stockArray.filter((stock) => stock.symbol !== symbol);
    setStockArray(newStockArray);
  };

  const addToWatchlist=()=>{

    console.log('Hello');

  }
  

  return (
    <div className={styles.container}>
      <div className="w-full h-70% bg-zinc-200 flex flex-row justify-between">
        <div
          className={styles.search}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label className='font-semibold text-2xl text-zinc-700'>
            Search stock symbol
          </label>
          <SearchStock />

          <div className="list-none">
            {" "}
            {stockArray.reverse().map((a) => (
              <li key={a.symbol}>
                <LoadingCard {...a} removeStock={removeStock} addToWatchlist={addToWatchlist}/>
              </li>
            ))}
          </div>
          {stockArray.length > 0 && (
            <button
              type="submit"
              className="h-11 w-500px bg-indigo-700 rounded-md flex justify-center items-center m-1 p2 transition duration-300 hover:bg-indigo-100"
              onClick={() => {
                setStockArray([]);
              }}
            >
              Reset
            </button>
          )}
        </div>

        <div className={styles.table}>
          <TableCompanies />
        </div>
      </div>
    </div>
  );
};
