import React from "react";
import "./cards.scss";

export default function Card() {
  return (
    <div className="cards">
      <div className="card">
        <div className="card__text-wrapper">
          <div className="card__text-title">Bamboo Stand</div>
          <div className="card__text-pledge">Pledge $25 or more</div>
        </div>

        <div className="card__descr">
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you’ll be added to a special
          Backer member list.
        </div>

        <div className="card__btn-wrapper">
          <div className="card__btn-left">
            101 <span>left</span>
          </div>

          <button className="card__btn-reward">Select Reward</button>
        </div>
      </div>

      <div className="card">
        <div className="card__text-wrapper">
          <div className="card__text-title">Black Edition Stand</div>
          <div className="card__text-pledge">Pledge $75 or more</div>
        </div>

        <div className="card__descr">
          You get a Black Special Edition computer stand and a personal thank
          you. You’ll be added to our Backer member list. Shipping is included.
        </div>

        <div className="card__btn-wrapper">
          <div className="card__btn-left">
            64 <span>left</span>
          </div>

          <button className="card__btn-reward">Select Reward</button>
        </div>
      </div>

      <div className="card out-of">
        <div className="card__text-wrapper">
          <div className="card__text-title">Mahogany Special Edition</div>
          <div className="card__text-pledge">Pledge $200 or more</div>
        </div>

        <div className="card__descr">
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
          personal thank you. You’ll be added to our Backer member list.
          Shipping is included.
        </div>

        <div className="card__btn-wrapper">
          <div className="card__btn-left">
            0 <span>left</span>
          </div>

          <button className="card__btn-reward out__of-btn">Out of stock</button>
        </div>
      </div>
    </div>
  );
}
