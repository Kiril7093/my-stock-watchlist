import './App.css';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Dashboard } from './components/Dashboard/Dashboard';
import { WatchList } from './components/WatchList/WatchList';
import { Error404 } from './components/Error404/Error404';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';

import StockContext from './context/stockContext';
import InputContext from './context/inputContext';

import { useState } from 'react';

function App() {
  const [stockSymbol, setStockSymbol] = useState('FB');
  const [input, setInput] = useState('');

  return (
    <>
      <Navbar />
      <InputContext.Provider value={{ input, setInput }}>
        <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </StockContext.Provider>
      </InputContext.Provider>
      <Footer />
    </>
  );
}

export default App;
