import React from "react";
import "./about.scss";
import Card from "../cards/Card";

export default function About({ openPopup }) {
  return (
    <div className="about">
      <h1 className="about__title">About this project</h1>

      <div className="about__text">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.{" "}
      </div>
      <div className="about__subtext">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </div>

      <Card openPopup={openPopup} />
    </div>
  );
}
