import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [backed, setBacked] = useState(89914);
  const [backers, setBackers] = useState(5007);
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <main className="App">
      <Header />
      <Hero backed={backed} backers={backers} openPopup={openPopup} />
      <Menu
        backed={backed}
        backers={backers}
        setBacked={setBacked}
        setBackers={setBackers}
        isPopupOpen={isPopupOpen}
        closePopup={closePopup}
      />
    </main>
  );
}

export default App;
