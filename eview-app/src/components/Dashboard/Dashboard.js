// import Search from "../Search/Search";
import { useContext } from "react";
import stockContext from "../../context/stockContext";
import { LoadingCard } from "../LoadingCard/LoadingCard";
import { SearchStock } from "../SearchStock/SearchStock";

export const Dashboard = () => {
  const { stockSymbol } = useContext(stockContext);



  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
        <div className="pt-20 m-8">
          <label className="font-semibold text-2xl text-zinc-700 mx-7 px-7">
            Search stock symbol
          </label>
          <SearchStock/>
        </div>


      </div>
    </>
  );
};
