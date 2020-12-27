/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Item({ src, name, imgRef }) {
  return (
    <div className="swiper-slide">
      <div className="image">
        <img ref={imgRef} src={src} className="swiper-lazy" />
      </div>
    </div>
  );
}

export default Item;
