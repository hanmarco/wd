import React from "react";
import BackImage from "./BackImage";
import MainImage from "images/top.png";
function TopContent() {
  return (
    <div className="top-container">
      <div className="top-wrapper">
        <BackImage src={MainImage} />
        <div className="name-box-wrapper">
          <p>이은준</p>
          <p>이주형</p>
        </div>
        <div className="info-box-wrapper">
          <h2>Save the date</h2>
          <p className="date">2020 . 09 . 05</p>
          <p className="location">양재역 엘타워 5층 오르체홀 오전 11시</p>
        </div>
      </div>
      <div className="arrow-bottom"></div>
    </div>
  );
}

export default TopContent;
