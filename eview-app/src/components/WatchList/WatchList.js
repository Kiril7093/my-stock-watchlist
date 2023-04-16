import { useContext, useEffect } from "react";
import { stockServiceFactory } from "../../services/stockService";
import WatchListContext from "../../context/WatchlistContext";
import { AuthContext } from "../../context/AuthContext";
import { fetchQuote } from "../../api/stockApi";







export const WatchList = () => {
  const { watchlistArray, setWatchlistArray, watchlistError, setWatchlistError } =
    useContext(WatchListContext);

  const { userId } = useContext(AuthContext);


  const stockService = stockServiceFactory();

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const watchlist = await stockService.getAll();
        setWatchlistArray(watchlist);

 
      } catch (error) {
        setWatchlistError(error.message);
      }
    };
    fetchWatchlist();
  }, []);











  return (
    <div className="flex items-center justify-center h-screen bg-zinc-200">
      <div className="flex flex-wrap justify-center gap-4">
       
      {watchlistArray.map((stock) => (
  stock._ownerId === userId && (
    <div
      key={stock.symbol}
      className="px-4 py-2 bg-white rounded-md shadow-md"
    >
      {stock.symbol}
    </div>
  )
))}



      </div>
    </div>
  );
};
