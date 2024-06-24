import { React, useState } from "react";
import "./hero.scss";
import logoHero from "../../assets/logo-mastercraft.svg";
import Fees from "../fees/Fees";
import About from "../about/About";

export default function Hero({
  openPopup,
  backed,
  backers,
  setBacked,
  setBackers,
}) {
  const [bookmark, setBookmark] = useState("Bookmark");

  let bookmarkActive = () => {
    setBookmark((prevBookmark) =>
      prevBookmark === "Bookmark" ? "Bookmarked" : "Bookmark"
    );
  };

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
          <button onClick={openPopup} className="hero__monitor-btn">
            Back this project
          </button>
          <svg
            className="hero__monitor-svg"
            width="56"
            height="56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
              <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
            </g>
          </svg>

          <button
            className={
              bookmark === "Bookmarked"
                ? `hero__monitor-bookmark hero__monitor-activebg`
                : `hero__monitor-bookmark`
            }
            onClick={bookmarkActive}
          >
            <div className="bookmark-content">
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle className="bookmark-circle" cx="28" cy="28" r="28" />
                  <path
                    className="bookmark-path"
                    d="M23 19v18l5-5.058L33 37V19z"
                  />
                </g>
              </svg>
              <span
                className={
                  bookmark === "Bookmarked" ? `bookmark-content-bookmark` : ``
                }
              >
                {bookmark}
              </span>
            </div>
          </button>
        </div>
      </div>

      <Fees backed={backed} backers={backers} />
      <About openPopup={openPopup} />
    </div>
  );
}
