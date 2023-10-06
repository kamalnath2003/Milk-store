
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import { useEffect } from 'react';

const App = ()=>{
 

  return (
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    </BrowserRouter>


  );
}

export default App;
