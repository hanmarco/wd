/* eslint-disable jsx-a11y/alt-text */
import React, { useMemo } from 'react';
import { format, toDate } from 'date-fns';

function Item({ src, name, model, date, imgRef }) {
  const dateFormat = useMemo(() => {
    if (date) {
      const toConvertDate = toDate(new Date(date));
      return format(toConvertDate, 'dd MMMM yyyy');
    } else {
      return null;
    }
  }, [date]);

  return (
    <div className="swiper-slide">
      <div className="image">
        <img ref={imgRef} data-src={src} className="swiper-lazy" />
      </div>
      <div className="info-box">
        <h2>{name}</h2>
        <p className="model">{model}</p>
        <p className="date">{dateFormat}</p>
      </div>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </div>
  );
}

export default Item;
