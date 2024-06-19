import React from "react";
import "./menu.scss";

export default function Menu({ isPopupOpen, closePopup }) {
  return (
    <div className={`menu ${isPopupOpen ? "menu__active" : "menu"}`}>
      <div className="menu__content">
        <div className="menu__content-title">Back this project</div>

        <div className="menu__content-close" onClick={closePopup}>
          <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
              fill="#000"
              fill-rule="evenodd"
              opacity=".4"
            />
          </svg>
        </div>
      </div>

      <div className="menu__descr">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </div>

      <div className="menu__cards">
        <div className="menu__card">
          <div className="menu__card-wrapper">
            <input className="menu__card-check" type="checkbox" />
            <div className="menu__card-title">Pledge with no reward</div>
          </div>

          <div className="menu__card-descr">
            Choose to support us without a reward if you simply believe in our
            project. As a backer, you will be signed up to receive product
            updates via email.
          </div>
        </div>

        <div className="menu__card">
          <div className="menu__card-wrapper">
            <input className="menu__card-check" type="checkbox" />
            <div className="menu__card-title">Bamboo Stand</div>
            <div className="menu__card-subtitle">Pledge $25 or more</div>
            <div className="menu__card-left">
              101 <span>left</span>
            </div>
          </div>

          <div className="menu__card-descr">
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </div>
        </div>

        <div className="menu__card">
          <div className="menu__card-wrapper">
            <input className="menu__card-check" type="checkbox" />
            <div className="menu__card-title">Black Edition Stand</div>
            <div className="menu__card-subtitle">Pledge $75 or more</div>
            <div className="menu__card-left">
              64 <span>left</span>
            </div>
          </div>

          <div className="menu__card-descr">
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </div>
        </div>

        <div className="menu__card">
          <div className="menu__card-wrapper">
            <input className="menu__card-check" type="checkbox" />
            <div className="menu__card-title">Mahogany Special Edition</div>
            <div className="menu__card-subtitle">Pledge $200 or more</div>
            <div className="menu__card-left">
              0 <span>left</span>
            </div>
          </div>

          <div className="menu__card-descr">
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </div>
        </div>
      </div>
    </div>
  );
}
