import styles from "./Edit.module.css";
import { useContext, useEffect, useState, useRef } from "react";
import {useParams, useNavigate } from "react-router-dom";
import { stockServiceFactory } from "../../services/stockService";
import { AuthContext } from "../../context/AuthContext";
import WatchListContext from "../../context/WatchlistContext";
import { fetchQuote } from "../../api/stockApi";


export const Edit = () => {


  const { userId, token } = useContext(AuthContext);
  const stockService = stockServiceFactory(token, userId);
  const { id } = useParams();

  const symbolRef = useRef(null);

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    const symbol = symbolRef.current.value;

    fetchQuote(symbol).then((result) => {
      if (Object.values(result).some((val) => val)) {
        const obj = { symbol: symbol };
        stockService.edit(id, obj);

        navigate("/watchlist")
      } else {
        setError(new Error("There is no such stock!"));
        setTimeout(() => {
          setError(null);
        }, 1000);
      }
    });

    
  };

  useEffect(() => {
    const fetchSymbol = async () => {
      const watchlist = await stockService.getAll();
      const stock = watchlist.find((stock) => stock._id === id);
      symbolRef.current.value = stock.symbol;
    };

    fetchSymbol();
  }, [id]);

  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-center items-center">
      <form
        id="edit"
        method="post"
        onSubmit={onSubmit}
        className={`rounded-lg ${styles["form-container"]}`}
      >
        <h3 className={`flex justify-center ${styles["form-title"]}`}>
          Edit Stock
        </h3>
        <div className="flex flex-col py-2">
          <input
            type="text"
            className={styles["form-input"]}
            id="symbol"
            name="symbol"
            ref={symbolRef}
          />
        </div>
        <input className={styles["form-button"]} type="submit" value="Edit" />
        {error && (
          <div className="text-red-500 text-center">{error.message}</div>
        )}
      </form>
    </div>
  );
};
