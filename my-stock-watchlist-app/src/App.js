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
import { Logout } from "./components/Logout/Logout";
import { Details } from "./components/Details/Details";
import StockDataContext from "./context/StockDataContext";
import StockArrayContext from "./context/StockArrayContext";
import WatchListContext from "./context/WatchlistContext";
import { AuthProvider } from "./context/AuthContext";
import { Edit } from "./components/Edit/Edit";
import { RouteGuard } from "./components/common/RoutGuard.js";


function App() {
  const [symbol, setSymbol] = useState("");
  const [error, setError] = useState(null);

  const clearStockData = () => {
    setSymbol("");
    setError(null);
  };

  const stockData = {
    symbol,
    setSymbol,
    clearStockData,
    error,
    setError,
  };

  const [stockArray, setStockArray] = useState([]);
  const [watchlistArray, setWatchlistArray] = useState([]);
  const [watchlistError, setWatchlistError] = useState(null);


  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <div className="App-main">
          <StockDataContext.Provider value={stockData}>
            <StockArrayContext.Provider value={{ stockArray, setStockArray }}>
              <WatchListContext.Provider
                value={{ watchlistArray, setWatchlistArray, watchlistError, setWatchlistError }}
              >

                <Routes>
                  <Route path="/" element={<Hero />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/dashboard" element={<Dashboard />} />

                  <Route element={<RouteGuard/>}>
                    <Route path="/watchlist" element={<WatchList />} />
                    <Route path="/watchlist/:id" element={<Details />} />
                    <Route path="/watchlist/:id/edit" element={<Edit />} />

                  </Route>


                  <Route path="*" element={<Error404 />} />
                </Routes>

              </WatchListContext.Provider>
            </StockArrayContext.Provider>
          </StockDataContext.Provider>
        </div>
        <Footer className="App-footer" />
      </div>
    </AuthProvider>
  );
}

export default App
