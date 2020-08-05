import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Item from "./Item";
import Arrow from "components/Buttons/Arrow";

import "./swiper.scss";
import "./image-viewer.scss";

function ImageViewer({ data, index, name, onClose }) {
  const nextRef = useRef(null);
  const imgRef = useRef(null);
  const prevRef = useRef(null);
  const imageViewerRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      // Enable lazy loading
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
      },
      spaceBetween: 20,
    });
    swiper.slideTo(index + 1, 0);
    disableBodyScroll(imageViewerRef.current);

    return () => {
      enableBodyScroll();
    };
  }, [index]);

  const handleClick = (e) => {
    if (e.target.tagName.toUpperCase() !== "IMG") {
      handleClose();
    }
  };
  const handleClose = () => {
    enableBodyScroll(imageViewerRef.current);
    onClose();
  };
  return (
    <div className="image-viewer-wrap" ref={imageViewerRef}>
      <div className="swiper-container">
        <div className="swiper-wrapper" onClick={handleClick}>
          {data.map((item, i) => {
            return (
              <Item
                key={i}
                imgRef={imgRef}
                src={`${item.img}`}
                name={name ? name : item.name || null}
                model={item.model || null}
                date={item.date || null}
              />
            );
          })}
        </div>
        <div className="swiper-pagination"></div>
        <div ref={nextRef} className="btn-nav btn-next">
          <Arrow type="next" white={true} />
        </div>
        <div ref={prevRef} className="btn-nav btn-prev">
          <Arrow type="prev" white={true} />
        </div>
      </div>
      <div
        className="image-viewer-close"
        onClick={handleClose}
        style={{ backgroundImage: `url(${require("images/btn-close.svg")})` }}
      />
    </div>
  );
}

export default ImageViewer;
