
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Dashboard } from './components/Dashboard/Dashboard';
import { WatchList } from './components/WatchList/WatchList';
import { Error404 } from './components/Error404/Error404';




function App() {
  return (
    <>

   <Navbar/>

   <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/watchlist' element={<WatchList/>}/>
      <Route path='*'  element={<Error404/>}/>
   </Routes>
  
   <Footer/>
  
    </>
  );
}

export default App;
