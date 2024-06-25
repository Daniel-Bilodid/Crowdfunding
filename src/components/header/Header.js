import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/logo.svg";
export default function Header({ isPopupOpen }) {
  let [burgerMenu, setBurgerMenu] = useState(false);

  const toggleBurger = () => {
    setBurgerMenu((prevState) => !prevState);
  };

  return (
    <div className="header">
      <div
        className={
          isPopupOpen ? "header__logo  active__header" : "header__logo"
        }
      >
        <img src={logo} alt="logo" />
      </div>
      {burgerMenu && <div className="header__overlay-active"></div>}
      <div className="header__burger-toggle" onClick={toggleBurger}>
        <div
          class={
            burgerMenu ? "header__btn-burger active" : "header__btn-burger"
          }
        >
          <span></span>
        </div>
      </div>
      <ul
        className={
          isPopupOpen ? "header__nav-list active__header" : "header__nav-list"
        }
      >
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
