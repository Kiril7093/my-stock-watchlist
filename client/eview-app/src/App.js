
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';

import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';




function App() {
  return (
    <>

   <Navbar/>

   <Routes>
      <Route path='/' element={<Hero/>}/>
   </Routes>
  
   <Footer/>
    </>
  );
}

export default App;
