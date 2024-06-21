import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/logo.svg";
export default function Header() {
  let [burgerMenu, setBurgerMenu] = useState(false);

  const toggleBurger = () => {
    setBurgerMenu((prevState) => !prevState);
    console.log(burgerMenu);
  };

  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="header__burger-toggle" onClick={toggleBurger}>
        <div
          class={
            burgerMenu ? "header__btn-burger active" : "header__btn-burger"
          }
        >
          <span></span>
        </div>
      </div>
      <ul className="header__nav-list">
        <li className="header__nav-item">About</li>
        <li className="header__nav-item">Discover</li>
        <li className="header__nav-item">Get Started</li>
      </ul>

      <div
        className={
          burgerMenu ? "burger__menu burger__menu-active" : "burger__menu"
        }
      >
        <div className="burger__menu-item">About</div>
        <div className="burger__menu-hr"></div>
        <div className="burger__menu-item">Discover</div>
        <div className="burger__menu-hr"></div>
        <div className="burger__menu-item">Get Started</div>
      </div>
    </div>
  );
}
