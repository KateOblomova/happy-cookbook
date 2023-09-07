import { useState, useEffect } from 'react'
import { createClient } from "contentful";
import { Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Navpage from './components/Navpage';
import Error from "./components/ErrorPage";

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="starter" element={<Navpage/>} />
      <Route path="main" element={<Navpage/>} />
      <Route path="dessert" element={<Navpage/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
