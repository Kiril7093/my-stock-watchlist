import {useContext} from 'react';
import { Card } from "./Card";
import { RepresentativeChart } from "./RepresentativeChart";
import { XIcon } from "@heroicons/react/solid";
import { AuthContext } from '../../context/AuthContext';
import WatchListContext from "../../context/WatchlistContext";


export const LoadingCard = (props) => {


  const handleRemove = () => {
    props.removeStock(props.symbol);
  };

  const { isAuthenticated} = useContext(AuthContext);

  const { watchlistError}=useContext(WatchListContext);






  return (
    <Card>
      <span className="absolute left-4 top-4 text-neutral-400 text-lg xl:text-xl 2xl">
        {props.symbol}
      </span>
  
      <button onClick={handleRemove}>
        <XIcon className="h-5 w-5 text-neutral-400 absolute right-4 top-4" />
      </button>
  
      <div className="w-full h-full flex items-center justify-around">
        <span className="text-2xl xl:text-4xl 2xl:text-5xl flex items-center">
          ${props.price}
          <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2">
            {props.currency}
          </span>
        </span>
  
        <span
          className={`text-lg xl: 2xl:text-2xl ${
            props.change > 0 ? "text-lime-500" : "text-red-500"
          }`}
        >
          {props.change} <span>({props.changePercent}%)</span>
        </span>
      </div>
  
      <RepresentativeChart symbol={props.symbol} />
  
      <div className="flex justify-around mt-4">
        { isAuthenticated&&(
        <button
          className='h-11 w-48 bg-indigo-700 rounded-md flex justify-center items-center m-1 p2 transition duration-300 hover:bg-indigo-100'
          onClick={() => props.addToWatchlist(props.symbol)}
        >
          Add to watchlist
        </button>
        )}

      </div>

      { watchlistError&&(
       <div className="text-red-500 text-center">{watchlistError.message}</div>
      ) }
    </Card>
  );
  
};
