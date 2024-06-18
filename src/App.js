import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <Hero openPopup={openPopup} />
      <Menu isPopupOpen={isPopupOpen} closePopup={closePopup} />
    </div>
  );
}

export default App;
