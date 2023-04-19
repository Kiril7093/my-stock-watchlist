import { useContext } from "react";
import StockArrayContext from "../../context/StockArrayContext";
import WatchListContext from "../../context/WatchlistContext";
import { SearchStock } from "../SearchStock/SearchStock";
import { TableCompanies } from "../TableCompanies/TableCompanies";
import styles from "./Dashboard.module.css";
import { LoadingCard } from "../LoadingCard/LoadingCard.js";
import { stockServiceFactory } from "../../services/stockService";
import { AuthContext } from "../../context/AuthContext";
import pic2 from "../../asets/freePng3/png3.png"

export const Dashboard = () => {

  const { stockArray, setStockArray } = useContext(StockArrayContext);


  const { setWatchlistError } = useContext(WatchListContext);
  const { userId, token } = useContext(AuthContext);

  const removeStock = (symbol) => {
    const newStockArray = stockArray.filter((stock) => stock.symbol !== symbol);
    setStockArray(newStockArray);
  };



  const addToWatchlist = (value) => {
    const stockService = stockServiceFactory(token, userId);

    const transferToWatchlist = async (value) => {
      try {
        const watchlist = await stockService.getAll();
        const check = watchlist.some((stock) => stock.symbol == value);

        if (check === false) {
          const obj = { symbol: value };

          await stockService.create(obj);

          removeStock(value);


        } else {
          setWatchlistError({
            message: "This stock is already in your watchlist!",
          });

          setTimeout(() => {
            setWatchlistError(null);
          }, 1000);
        }
      } catch {
        const obj = { symbol: value };

        await stockService.create(obj);

        removeStock(value);
      }
    };

    

    transferToWatchlist(value);
  };



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
          <label className="font-semibold text-2xl text-zinc-700">
            Search stock symbol
          </label>
          <SearchStock />

          {stockArray.length > 0 && (
            <button
              type="submit"
              className="h-11 w-48 bg-indigo-700 rounded-md flex justify-center items-center m-1 p2 transition duration-300 hover:bg-indigo-100"
              onClick={() => {
                setStockArray([]);
              }}
            >
              Reset
            </button>
          )}

          {stockArray.length === 0&& (
             <img src={pic2} className="w-full" alt="/" />

          )}


          <div className="list-none">
            {" "}
            {stockArray.reverse().map((a) => (
              <li key={a.symbol}>
                <LoadingCard
                  {...a}
                  removeStock={removeStock}
                  addToWatchlist={addToWatchlist}
                />
              </li>
            ))}
          </div>



        </div>

        <div className={styles.table}>
          <TableCompanies />
        </div>
      </div>
    </div>
  );
};
