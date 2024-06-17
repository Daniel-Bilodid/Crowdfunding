import React from "react";
import "./hero.scss";
import logoHero from "../../assets/logo-mastercraft.svg";
import Fees from "../fees/Fees";
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__monitor-logo">
        <img src={logoHero} alt="logoHero" />
      </div>

      <div className="hero__monitor">
        <div className="hero__monitor-title">
          Mastercraft Bamboo Monitor Riser
        </div>

        <div className="hero__monitor-descr">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </div>

        <div className="hero__monitor-wrapper">
          <button className="hero__monitor-btn">Back this project</button>

          <button className="hero__monitor-bookmark">Bookmark</button>
        </div>
      </div>

      <Fees />
    </div>
  );
}
