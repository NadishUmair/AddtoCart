
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./navbar";
import Home from "./home";
import Cart from "./cart";
import Footer from "./footer";

function App() {
  return (
    <div>
      
    <Router>
      <Navbar/>
       <Routes>
               <Route path="/" element={<Home/>} />
              <Route path="/cart" element={<Cart/>} />
       </Routes>
       <Footer/>
       </Router>
    </div>
  );
}

export default App;
