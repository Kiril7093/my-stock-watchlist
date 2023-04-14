
import { useState } from "react";

import "./App.css";

import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { WatchList } from "./components/WatchList/WatchList";
import { Error404 } from "./components/Error404/Error404";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

import StockDataContext from './context/StockDataContext'
import StockArrayContext from "./context/StockArrayContext";




function App() {

  

  const [symbol, setSymbol] = useState('');
  const [price, setPrice] = useState(null);
  const [change, setChange] = useState(null);
  const [changePercent, setChangePercent] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [oneWeekChartData, setOneWeekChartData]= useState(null);


 
  const clearStockData=()=>{
    setSymbol('');
    setPrice(null);
    setChange(null);
    setChangePercent(null);
    setCurrency(null);
    setOneWeekChartData(null);
  }


  const stockData = {
    symbol,
    setSymbol,
    price,
    setPrice,
    change,
    setChange,
    changePercent,
    setChangePercent,
    currency,
    setCurrency,
    oneWeekChartData, 

    setOneWeekChartData,
    clearStockData
  };


  const [stockArray, setStockArray]=useState([]);




  const appStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  const mainStyle = {
    flexGrow: 1,
    position: "relative", // Make the main content relative
  };

  const footerStyle = {
    position: "fixed", // Keep the footer fixed at the bottom
    bottom: 0,
    width: "100%",
  };

  return (
    <div style={appStyle}>
      <Navbar />
      <div style={mainStyle}>
               
             <StockDataContext.Provider value={stockData}>
              <StockArrayContext.Provider value={{stockArray, setStockArray}}>
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/watchlist" element={<WatchList />} />
                <Route path="*" element={<Error404 />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
              </StockArrayContext.Provider>
           </StockDataContext.Provider> 

      </div>
      <Footer style={footerStyle} />
    </div>
  );
}

export default App;
