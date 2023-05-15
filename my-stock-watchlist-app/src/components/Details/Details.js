import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import WatchListContext from "../../context/WatchlistContext";
import { stockServiceFactory } from "../../services/stockService";
import { AuthContext } from "../../context/AuthContext";
import { DetailsChart } from "./DetailsChart";
import { Overview } from "./Overview.js";
import {styles} from "./Details.module.css"
import { Link } from "react-router-dom";

export const Details = () => {
  const { userId, token } = useContext(AuthContext);
  const stockService = stockServiceFactory(token, userId);

  const { id } = useParams();

  const { watchlistArray, setWatchlistArray } = useContext(WatchListContext);

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
  }, [id]);

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
    <div className="h-screen grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand">


      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">

      </div>

      <div className='md:col-span-2 row-span-4 mr-20 ml-0'>
        {stockObj ? (
          <div className="grid grid-cols-12 grid-rows-8 gap-3 p-10 font-quicksand">
            <div className="col-start-2 col-end-11 row-start-1 row-end-7 -mt-20  ">
              <DetailsChart symbol={stockObj.symbol} />
            </div>
          </div>
        ) : (
          <div className="mt-28 pt-28 absolute top-1/2 left-1/2">
            Loading...
          </div>
        )}
      </div>

      <div>
        {stockObj ? (
          <div className="row-span-2 xl:row-span-3">
            <Overview symbol={stockObj.symbol} />
          </div>
        ) : (
          <div className="mt-28 pt-28 absolute top-1/2 left-1/2">
            Loading...
          </div>
        )}
      </div>

      <div className="absolute bottom-0 w-full flex justify-center">
  <div className="button-container flex">
    <div className="pl-10 ml-10 pr-0 mr-0 mb-7">
      <button
        className="bg-zinc-300 hover:bg-zinc-500 text-black font-bold py-3 px-5 mr-2 mb-10 rounded"
        
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>

    <div className="pl-10 ml-10 pr-0 mr-0 mt-3">
      <Link
        to={`/watchlist/${id}/edit`}
        className="bg-indigo-700  hover:bg-indigo-500 text-white font-bold py-3.5 px-8 mt-10"
      >
        Edit
      </Link>
    </div>
  </div>
</div>



    </div>
  );
};
