import { Routes, Route } from "react-router-dom";
import { About } from "./components/About/About";
import { Catalog } from "./components/Catalog/Catalog";

import { Footer } from "./components/Footer/Footer.js";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { MyWatchlit } from "./components/MyWatchlist/MyWatchlist.js";
import { Register } from "./components/Register/Register";
import { StockExplorer } from "./components/StockExplorer/StockExplorer";

import { TabNav } from "./components/TabNav/TabNav";

function App() {
  return (
    <>
      <div style={{ marginLeft: "85px" }}>
        <TabNav />
      </div>

      <div style={{ marginBottom: "830px" }}>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/explorer" element={<StockExplorer/>}/>
          <Route path="/watchlist" element={<MyWatchlit/>}/>
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
