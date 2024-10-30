
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import './App.css';
import Header from './Components/Header';
import OurFoods from './Components/OurFoods';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Signin from './Components/Signin';

function App() {
  const [count, setCount] = useState(0)
  const handleAdd = ()=>{
    setCount (count+1)
  }
  return (
    <>
    <BrowserRouter>
      <Header count = {count}/>
      <Routes>
        <Route path="/" element={<Home handleAdd = {handleAdd} />}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/ourfood" element={<OurFoods/>}/>
        <Route path="/signin" element={<Signin/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
     

    </>
  )
}

export default App;