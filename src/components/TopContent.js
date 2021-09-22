import React, { useState, useEffect } from "react";
import BackImage from "./BackImage";
import MainImage from "images/top.jpg";
import classnames from "classnames";
function TopContent({ load }) {
  const [imageLoad, setImageLoad] = useState(false);
  useEffect(() => {
    if (load) {
      setTimeout(() => {
        setImageLoad(true);
      }, 500);
    }
  }, [load]);
  return (
    <div className={classnames("top-container", { load: load })}>
      <div className="top-wrapper">
        <div className="main-image-wrap">
          <BackImage src={MainImage} />

          <div className="typo-graphic">
            {imageLoad && (
              <img
                width={220}
                height={80}
                src={require("../images/title_sub_animation.png")}
                alt="text_animation"
              />
            )}
          </div>
          <div className="tape left" />
          <div className="tape right" />
        </div>
        <div className="info-box-wrapper">
          <div className="name-box-wrapper">
            <span className="name first">한상현</span>
            <span className="slash" />
            <span className="name second">이채희</span>
          </div>
          <p className="date">2022년 1월 22일 토요일 오후 1시</p>
          <p className="location">대전 선샤인웨딩홀 5층 그랜드볼룸</p>
        </div>
      </div>
    </div>
  );
}

export default TopContent;
