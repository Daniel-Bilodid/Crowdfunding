import React, { useState } from "react";
import "./menu.scss";

export default function Menu({ isPopupOpen, closePopup }) {
  const [checkedStates, setCheckedStates] = useState({
    noReward: false,
    bambooStand: false,
    blackEdition: false,
  });

  const [noRewardInput, setNoRewardInput] = useState("");
  const [bambooStandInput, setBambooStandInput] = useState("");
  const [blackEditionInput, setBlackEditionInput] = useState("");
  const [error, setError] = useState("");
  const onSubmit = () => {
    console.log(bambooStandInput);
    if (checkedStates.noReward) {
      if (noRewardInput > 0) {
        setError("");
        setNoRewardInput("");
        setCheckedStates(false);
        closePopup();
        return;
      } else {
        console.log("reward");
        setError(
          <>
            <div className="error__msg">Pledge should be higher than 0$</div>
          </>
        );
      }
    }
    if (checkedStates.bambooStand) {
      if (bambooStandInput >= 25) {
        closePopup();
        setError("");
        setBambooStandInput("");
        setCheckedStates(false);
      } else {
        setError(
          <>
            <div className="error__msg">Pledge should be higher than 25$</div>
          </>
        );
      }
    }

    if (checkedStates.blackEdition) {
      if (blackEditionInput >= 75) {
        closePopup();
        setError("");
        setBlackEditionInput("");
        setCheckedStates(false);
      } else {
        setError(
          <>
            <div className="error__msg">Pledge should be higher than 75$</div>
          </>
        );
      }
    }
  };

  const handleCheckboxChange = (item) => {
    setCheckedStates({
      noReward: false,
      bambooStand: false,
      blackEdition: false,

      [item]: true,
    });
    setError("");
  };
  return (
    <div
      className={`menu-container ${
        isPopupOpen ? "menu-container--active" : ""
      }`}
    >
      {isPopupOpen && <div className="menu-overlay" onClick={closePopup}></div>}
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
            <div className="menu__card-reward">
              <input
                className="menu__card-check"
                type="checkbox"
                checked={checkedStates.noReward}
                onChange={() => handleCheckboxChange("noReward")}
              />
              <div
                className={
                  checkedStates.noReward
                    ? `menu__card-title menu__card-active`
                    : "menu__card-title"
                }
              >
                Pledge with no reward
              </div>
            </div>

            <div className="menu__card-descr">
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </div>

            <div
              className={
                checkedStates.noReward
                  ? "menu__card-footer footer__active"
                  : " menu__card-footer "
              }
            >
              <div className="menu__card-hr"></div>
              <div className="card__text-wrapper">
                <div className="menu__card-enter">Enter your pledge</div>
                <div className="menu__card-btns">
                  <input
                    className="menu__card-input"
                    onChange={(event) => setNoRewardInput(event.target.value)}
                    placeholder="0.00"
                  />
                  <button className="menu__card-button" onClick={onSubmit}>
                    Continue
                  </button>
                </div>
              </div>
              {error}
            </div>
          </div>

          <div className="menu__card">
            <div className="menu__card-wrapper">
              <div className="card__text-wrapper">
                <input
                  className="menu__card-check"
                  type="checkbox"
                  checked={checkedStates.bambooStand}
                  onChange={() => handleCheckboxChange("bambooStand")}
                />
                <div
                  className={
                    checkedStates.bambooStand
                      ? `menu__card-title menu__card-active`
                      : "menu__card-title"
                  }
                >
                  Bamboo Stand
                </div>
                <div className="menu__card-subtitle">Pledge $25 or more</div>
              </div>
              <div className="menu__card-left">
                101 <span>left</span>
              </div>
            </div>

            <div className="menu__card-descr">
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </div>

            {checkedStates.bambooStand && (
              <div className="menu__card-footer footer__active">
                <div className="menu__card-hr"></div>
                <div className="card__text-wrapper">
                  <div className="menu__card-enter">Enter your pledge</div>
                  <div className="menu__card-btns">
                    <input
                      className="menu__card-input"
                      value={bambooStandInput}
                      onChange={(event) =>
                        setBambooStandInput(event.target.value)
                      }
                      placeholder="0.00"
                    />
                    <button className="menu__card-button" onClick={onSubmit}>
                      Continue
                    </button>
                  </div>
                </div>

                {error}
              </div>
            )}
          </div>

          <div className="menu__card">
            <div className="menu__card-wrapper">
              <div className="card__text-wrapper">
                <input
                  className="menu__card-check"
                  type="checkbox"
                  checked={checkedStates.blackEdition}
                  onChange={() => handleCheckboxChange("blackEdition")}
                />
                <div
                  className={
                    checkedStates.blackEdition
                      ? `menu__card-title menu__card-active`
                      : "menu__card-title"
                  }
                >
                  Black Edition Stand
                </div>
                <div className="menu__card-subtitle">Pledge $75 or more</div>
              </div>
              <div className="menu__card-left">
                64 <span>left</span>
              </div>
            </div>

            <div className="menu__card-descr">
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </div>

            {checkedStates.blackEdition && (
              <div className="menu__card-footer footer__active">
                <div className="menu__card-hr"></div>
                <div className="card__text-wrapper">
                  <div className="menu__card-enter">Enter your pledge</div>
                  <div className="menu__card-btns">
                    <input
                      className="menu__card-input"
                      placeholder="0.00"
                      value={blackEditionInput}
                      onChange={(event) =>
                        setBlackEditionInput(event.target.value)
                      }
                    />
                    <button className="menu__card-button" onClick={onSubmit}>
                      Continue
                    </button>
                  </div>
                </div>
                {error}
              </div>
            )}
          </div>

          <div className="menu__card out-of">
            <div className="menu__card-wrapper">
              <div className="card__text-wrapper">
                <input className="menu__card-check" type="checkbox" />
                <div className="menu__card-title">Mahogany Special Edition</div>
                <div className="menu__card-subtitle">Pledge $200 or more</div>
              </div>
              <div className="menu__card-left">
                0 <span>left</span>
              </div>
            </div>

            <div className="menu__card-descr">
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </div>

            {checkedStates.mahoganyEdition && (
              <div className="menu__card-footer footer__active">
                <div className="menu__card-hr"></div>
                <div className="card__text-wrapper">
                  <div className="menu__card-enter">Enter your pledge</div>
                  <div className="menu__card-btns">
                    <input className="menu__card-input" placeholder="0.00" />
                    <button className="menu__card-button">Continue</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
