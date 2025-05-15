import React from 'react'
import Home from './screens/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../src/styles.css"
import Pricing from './components/Pricing';
import Contactus from './components/Contactus';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        
      </Route>
      <Route path="pricing" element={<Pricing />} ></Route>
      <Route path="contactus" element={<Contactus />} ></Route>
    </Routes>
    
  </BrowserRouter>
  )
}

export default App