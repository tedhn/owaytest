import React from "react";

import "./index.scss";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="title">Shwe Sin Set Kyar</div>

      <div className="timeStamp">
        <div className="lineWrapper">
          <div className="time">06:00</div>

          <div className="line"></div>

          <div className="time">15:25</div>
        </div>

        <div className="duration">10 hrs 10 mins</div>
      </div>

      <div className="verticalLine"></div>

      <div className="promotion">
        <div className="text">per ticket</div>
        <div className="current">MMK 20,000</div>
        <div className="old">MMK 21,000</div>
      </div>

      <div className="button">Hide</div>
    </div>
  );
};

export default Nav;
