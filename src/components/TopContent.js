import React from "react";
import BackImage from "./BackImage";
import MainImage from "images/top.png";
import { ReactComponent as TitleSub } from "images/title_sub.svg";

function TopContent() {
  return (
    <div className="top-container">
      <div className="top-wrapper">
        <div className="main-image-wrap">
          <BackImage src={MainImage} />

          <div className="typo-graphic">
            <TitleSub />
          </div>
          <div className="tape left" />
          <div className="tape right" />
        </div>
        <div className="info-box-wrapper">
          <div className="name-box-wrapper">
            <span className="name">이주형</span>
            <span className="slash" />
            <span className="name">이은준</span>
          </div>
          <p className="date">9월 5일 토요일 오전 11시</p>
          <p className="location">양재역 엘타워 5층 오르체홀</p>
        </div>
      </div>
    </div>
  );
}

export default TopContent;
