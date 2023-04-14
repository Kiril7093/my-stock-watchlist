import { Card } from "./Card";
import { OneWeekChart } from "./OneWeekChart.js";
import { XIcon } from "@heroicons/react/solid";

export const LoadingCard = (props) => {


  const handleRemove = () => {
    props.removeStock(props.symbol);
  };


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
  
      <OneWeekChart symbol={props.symbol} />
  
      <div className="flex justify-around mt-4">
        <button
          className=' text-black h-11 w-48 rounded-md flex justify-center items-center m-1 p2 transition duration-300 bg-zinc-100 hover:bg-zinc-200'
          onClick={() => props.addToWatchlist(props.symbol)}
        >
          Add to watchlist
        </button>

      </div>
    </Card>
  );
  
};
