import { useContext, useEffect } from "react";
import { stockServiceFactory } from "../../services/stockService";
import WatchListContext from "../../context/WatchlistContext";

import { WatchlistCard } from "./WatchlistCard";
import { AuthContext } from "../../context/AuthContext";



export const WatchList = () => {
  const {
    watchlistArray,
    setWatchlistArray,
    setWatchlistError,
  } = useContext(WatchListContext);

  const { userId, token } = useContext(AuthContext);

  const stockService = stockServiceFactory(token, userId);


  
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

  const deleteWatchlistRecord = async (id) => {
    const deletedStock = await stockService.delete(id);

    const newArray = watchlistArray.filter((a) => a._id !== id);

    setWatchlistArray(newArray);
  };

  return (
    <div className="flex flex-col h-screen bg-zinc-200 mt-10 pt-10">
      <h1 className="text-3xl font-bold mb-2 mt-10 pt-10 self-center">
        My Watchlist
      </h1>

      <div className="flex items-center justify-center flex-1">
        <div
          className="flex flex-wrap justify-center gap-4"
          style={{ maxHeight: "calc(100vh - 300px)", overflowY: "auto" }}
        >
          {watchlistArray.map(
            (stock) =>
              stock._ownerId === userId && (
                <div
                  key={stock.symbol}
                  className="px-4 py-2 bg-white rounded-md shadow-md"
                >
                  {
                    <WatchlistCard
                      symbol={stock.symbol}
                      data-id={stock._id}
                      deleteWatchlistRecord={deleteWatchlistRecord}
                    />
                  }
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};
