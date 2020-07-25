import React, { useEffect, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { CURSOR_VIEWER_ARROW, CURSOR_VIEWER_CLOSE, CURSOR_DEFAULT } from 'type';
import env from 'env';
import Swiper from 'swiper';
import Item from './Item';
import Arrow from 'components/Buttons/Arrow';
import * as commonAction from 'store/modules/common';
import { useActions } from 'lib/hooks';
import './swiper.scss';
import './image-viewer.scss';

function ImageViewer({ data, index, name }) {
  const { setCursorType, setImageViewer } = useActions(commonAction);
  const nextRef = useRef(null);
  const imgRef = useRef(null);
  const prevRef = useRef(null);
  const imageViewerRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      // Enable lazy loading
      lazy: true,
      navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      },
      spaceBetween: 20,
    });
    swiper.slideTo(index, 0);
    disableBodyScroll(imageViewerRef.current);

    return () => {
      enableBodyScroll();
    };
  }, [index]);
  const handleMouseOver = () => {
    setCursorType(CURSOR_VIEWER_ARROW);
  };
  const handleMouseOut = () => {
    setCursorType(CURSOR_DEFAULT);
  };
  const handleCloseOver = e => {
    if (e.target.tagName.toUpperCase() !== 'IMG') {
      setCursorType(CURSOR_VIEWER_CLOSE);
    }
  };
  const handleClick = e => {
    if (e.target.tagName.toUpperCase() !== 'IMG') {
      handleClose();
    }
  };
  const handleClose = () => {
    clearTimeout(closeTimer.current);
    enableBodyScroll(imageViewerRef.current);
    setImageViewer({ open: false });
    closeTimer.current = setTimeout(() => {
      setCursorType(CURSOR_DEFAULT);
    }, 300);
  };
  return (
    <div className="image-viewer-wrap" ref={imageViewerRef}>
      <div className="swiper-container">
        <div className="swiper-wrapper" onClick={handleClick} onMouseOver={handleCloseOver} onMouseOut={handleMouseOut}>
          {data.map((item, i) => {
            return (
              <Item
                key={i}
                imgRef={imgRef}
                src={`${env.ENDPOINT_URL}/${item.img}`}
                name={name ? name : item.name || null}
                model={item.model || null}
                date={item.date || null}
              />
            );
          })}
        </div>

        <div ref={nextRef} className="btn-nav btn-next" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <Arrow type="next" white={true} />
        </div>
        <div ref={prevRef} className="btn-nav btn-prev" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <Arrow type="prev" white={true} />
        </div>
      </div>
      <div
        className="image-viewer-close"
        onClick={handleClose}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundImage: `url(${require('images/btn-close.svg')})` }}
      />
    </div>
  );
}

export default ImageViewer;
