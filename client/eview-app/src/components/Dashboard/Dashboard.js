import Search from "../Search/Search";
import { useContext } from "react";
import stockContext from "../../context/stockContext";

export const Dashboard = () => {
  const { stockSymbol } = useContext(stockContext);


  
  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
        <div className="pt-20 m-8 ">
          <label className="font-semibold text-2xl text-zinc-700 mx-5 px-5">
            Search stock symbol
          </label>
          <Search />
        </div>
      </div>
    </>
  );
};
