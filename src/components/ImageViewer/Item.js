/* eslint-disable jsx-a11y/alt-text */
import React, { useMemo } from "react";

function Item({ src, name, imgRef }) {
  return (
    <div className="swiper-slide">
      <div className="image">
        <img ref={imgRef} data-src={src} className="swiper-lazy" />
      </div>
      <div className="info-box">
        <h2>{name}</h2>
      </div>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </div>
  );
}

export default Item;
