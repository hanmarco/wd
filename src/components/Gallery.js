import React from "react";
import BackImage from "./BackImage";

const data = [
  {
    src: require("../images/image_0.jpg"),
  },
  {
    src: require("../images/image_0.jpg"),
  },
];
function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-wrapper">
        {data.map((item, i) => {
          return (
            <div key={i} style={{ backgroundImage: `url(${item.src})` }} />
          );
        })}
      </div>
      <div className="btn-more">더 많은 사진 보기</div>
    </div>
  );
}

export default Gallery;
