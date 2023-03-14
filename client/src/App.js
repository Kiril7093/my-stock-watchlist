import { Routes, Route } from 'react-router-dom';
import { About } from './components/views/About';
import { Footer } from './components/views/Footer';
import { Head } from './components/views/Head.js';
// import './App.css';

import { Home } from './components/views/Home';








function App() {
    return (
    <>
     <Head/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>


    </Routes>
    
    


     <Footer/>

   </>

    );
}

export default App;


{/* <Route path='*' element={<h1>404</h1>} /> */}