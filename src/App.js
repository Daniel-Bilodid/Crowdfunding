import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Menu />
    </div>
  );
}

export default App;
