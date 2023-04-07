import { useContext } from "react";
import stockContext from "../../context/stockContext";
import { LoadingCard } from "../LoadingCard/LoadingCard";
import { SearchStock } from "../SearchStock/SearchStock";
import { TableCompanies } from "../TableCompanies/TableCompanies";
import styles from './Dashboard.module.css';

export const Dashboard = () => {
  const { stockSymbol } = useContext(stockContext);

  return (
    <div className={styles.container}>
      <div className="w-full h-70% bg-zinc-200 flex flex-row justify-between">



<div className={styles.search} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
  <label className="font-semibold text-2xl text-zinc-700">
    Search stock symbol
  </label>
  <SearchStock />


</div>


        

        <div className={styles.table}>
          <TableCompanies />
        </div>

      </div>
    </div>
  );
};
