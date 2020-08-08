import React ,{useState, useEffect}from "react";
import BackImage from "./BackImage";
import MainImage from "images/top.jpg";
import classnames from "classnames";
function TopContent({ load }) {
  const [imageLoad,setImageLoad] = useState(false)
  useEffect(()=>{
    if(load){
      setTimeout(() => {
        setImageLoad(true)
      }, 500);
    }
  },[load])
  return (
    <div className={classnames("top-container", { load: load })}>
      <div className="top-wrapper">
        <div className="main-image-wrap">
          <BackImage src={MainImage} />

          <div className="typo-graphic">
            {imageLoad && (
              <img
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
            <span className="name first">이주형</span>
            <span className="slash" />
            <span className="name second">이은준</span>
          </div>
          <p className="date">9월 5일 토요일 오전 11시</p>
          <p className="location">양재역 엘타워 5층 오르체홀</p>
        </div>
      </div>
    </div>
  );
}

export default TopContent;
