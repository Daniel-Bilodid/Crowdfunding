import { React, useState } from "react";
import "./fees.scss";

export default function Fees({ backed, backers, setBacked, setBackers }) {
  return (
    <div className="fees">
      <div className="fees__wrapper">
        <div className="fees__money">
          <div className="fees__money-amount">${backed}</div>
          <div className="fees__money-total">of $100,000 backed</div>
        </div>
        <div className="fees__money-hr"></div>
        <div className="fees__backers">
          <div className="fees__backers-amount">{backers}</div>

          <div className="fees__backers-total">total backers</div>
        </div>
        <div className="fees__days-hr"></div>
        <div className="fees__days">
          <div className="fees__days-amount">56</div>
          <div className="fees__days-total">days left</div>
        </div>
      </div>
      <div className="fees__progress">
        <div
          style={{
            width: `${(backed / 100000) * 100}%`,
            maxWidth: "100%",
            transition: "width 1s ease",
          }}
          className="fees__fill"
        ></div>
      </div>
    </div>
  );
}
