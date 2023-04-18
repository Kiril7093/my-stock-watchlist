import { fetchStockDetails } from "../../api/stockApi";
import { useEffect, useState } from "react";
import {styles} from './Overview.module.css'

export const Overview = ({ symbol }) => {
  const [stockDetails, setStockDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchStockDetails(symbol);
        setStockDetails(data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [symbol]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };

  const convertMillionToBillion = (number) => {
    return (number / 1000).toFixed(2) + "B";
  };

  return (
    <div className="flex flex-col w-full h-full rounded-md relative  border-2 bg-white border-neutral-200">
      <ul className="flex-1 flex-col justify-between divide-y-1 pl-0 pr-8  py-8  mr-8 ">
        {Object.keys(detailsList).map((item) => {
          return (
            <li key={item} className="flex-1 flex justify-between items-center">
              <span className="text-black">{detailsList[item]}</span>
              <span className="text-black">
                {stockDetails && item === "marketCapitalization"
                  ? `${convertMillionToBillion(stockDetails[item])}`
                  : stockDetails && stockDetails[item]}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
