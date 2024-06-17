import React from "react";
import "./header.scss";
import logo from "../../assets/logo.svg";
export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="header__nav-list">
        <li className="header__nav-item">About</li>
        <li className="header__nav-item">Discover</li>
        <li className="header__nav-item">Get Started</li>
      </ul>
    </div>
  );
}
