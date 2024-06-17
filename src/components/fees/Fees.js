import React from "react";
import "./fees.scss";

export default function fees() {
  return (
    <div className="fees">
      <div className="fees__wrapper">
        <div className="fees__money">
          <div className="fees__money-amount">$89,914</div>
          <div className="fees__money-total">of $100,000 backed</div>
        </div>
        <div className="fees__money-hr"></div>
        <div className="fees__backers">
          <div className="fees__backers-amount">5,007</div>

          <div className="fees__backers-total">total backers</div>
        </div>
        <div className="fees__days-hr"></div>
        <div className="fees__days">
          <div className="fees__days-amount">56</div>
          <div className="fees__days-total">days left</div>
        </div>
      </div>
      <div className="fees__progress">
        <div className="fees__fill"></div>
      </div>
    </div>
  );
}
