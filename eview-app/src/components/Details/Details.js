
import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import WatchListContext from "../../context/WatchlistContext";
import { stockServiceFactory } from "../../services/stockService";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";


export const Details = () => {


  const { userId, token } = useContext(AuthContext);
  const stockService = stockServiceFactory(token, userId);
  const { id } = useParams();

  const {
    watchlistArray,
    setWatchlistArray,
  } = useContext(WatchListContext);




  const [stockObj, setStockObj] = useState(null);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const watchlist = await stockService.getAll();
        const stock = watchlist.find((stock) => stock._id === id);
        setStockObj(stock);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStock();
  }, [id, stockService]);





  const navigate = useNavigate();

  const onDelete = async (id) => {
    try {
      await stockService.delete(id);
      const newArray = watchlistArray.filter((a) => a._id !== id);
      setWatchlistArray(newArray);
      navigate("/watchlist"); // Redirect to the Watchlist page
    } catch (error) {
      console.error(error);
    }
  };
  





  return (
    <div className="container flex justify-center items-center h-screen">
      <div className="w-full h-70% bg-zinc-200 flex flex-row justify-between">
        <div className="search relative z-10 w-full h-full flex flex-col items-center justify-center">
          {stockObj ? (
            <div className="mt-28 pt-28 absolute top-1/2 left-1/2">
              {stockObj.symbol}
            </div>
          ) : (
            <div className="mt-28 pt-28 absolute top-1/2 left-1/2">
              Loading...
            </div>
          )}

          <div className="absolute bottom-0 flex">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>


            <Link  to={`/watchlist/${id}/edit`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
