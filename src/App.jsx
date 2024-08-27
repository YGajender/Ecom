import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import { CartProvider } from "./components/Home"; 

function App() {
  return (
    <BrowserRouter>
      <CartProvider> 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
