import { Routes, Route } from "react-router-dom";
import { About } from "./components/About/About";
import { Catalog } from "./components/Catalog/Catalog";
import Dashboard from "./components/Dashboard/Dashboard";

import { Footer } from "./components/Footer/Footer.js";
import { Header } from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { Login } from "./components/Login/Login";
import { MyWatchlit } from "./components/MyWatchlist/MyWatchlist.js";
import { Register } from "./components/Register/Register";
import { StockExplorer } from "./components/StockExplorer/StockExplorer";

import { TabNav } from "./components/TabNav/TabNav";

function App() {
  return (
    // <>
    //   <div style={{ marginLeft: "85px" }}>
    //     <TabNav />
    //   </div>

    //   <div style={{ marginBottom: "830px" }}>
    //     <Routes>
    //       <Route path="/" element={<Header />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/catalog" element={<Catalog />}></Route>
    //       <Route path="/register" element={<Register />} />
    //       <Route path="/login" element={<Login />}></Route>
    //       <Route path="/explorer" element={<StockExplorer/>}/>
    //       <Route path="/watchlist" element={<MyWatchlit/>}/>
    //       <Route path="*" element={<h1>404</h1>} />
    //     </Routes>
    //   </div>

    //   <Footer />
    // </>
      <div>Hello</div>
    // <Dashboard/>

    // <Hero/>
  );
}

export default App;
