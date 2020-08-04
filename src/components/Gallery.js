import React, { useState, useRef } from "react";
import BackImage from "./BackImage";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ImageViewer from "./ImageViewer";
import { Parallax } from "react-scroll-parallax";
import Particles from "components/Particles";
import { ReactComponent as GalleryTitle } from "images/gallery_title.svg";
import { ReactComponent as GalleryTitleSub } from "images/gallery_title_sub.svg";

const arrayFullData = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    const imageData = { full: require(`../images/full/full_${i + 1}.png`) };
    arr.push(imageData);
  }
  return arr;
};

const data = [
  {
    thumb: require("../images/thum_1.png"),
    y: 0,
  },
  {
    thumb: require("../images/thum_2.png"),
    y: 30,
  },
  {
    thumb: require("../images/thum_3.png"),
    y: 10,
  },
  {
    thumb: require("../images/thum_4.png"),
    y: 10,
  },
  {
    thumb: require("../images/thum_5.png"),
    y: 20,
  },
  {
    thumb: require("../images/thum_6.png"),
    y: 10,
  },
  {
    thumb: require("../images/thum_7.png"),
    y: 30,
  },
];
const fullData = arrayFullData(12);

function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const nodeRef = useRef(null);
  const handleClick = (idx) => {
    setIndex(idx);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="gallery-container">
      <div className="gallery-wrapper">
        <div className="graphic_title">
          <h2>
            <GalleryTitle />
          </h2>
          <p className="sub gallery">
            <GalleryTitleSub />
          </p>
        </div>
        <div className="contents">
          {data.map((item, i) => {
            return (
              <Parallax
                key={`copy-${i}`}
                className="paral-image"
                offsetYMin={-item.y}
                offsetYMax={item.y}
                slowerScrollRate
              >
                <div onClick={handleClick.bind(this, i)}>
                  <BackImage key={i} src={item.thumb} />
                </div>
              </Parallax>
            );
          })}
        </div>
      </div>
      <div className="btn-more" onClick={handleClick.bind(this, 7)}>
        더 많은 사진 보기
      </div>

      <CSSTransition
        in={open}
        timeout={500}
        unmountOnExit
        classNames="image-viewer"
      >
        <ImageViewer data={fullData} index={index} onClose={handleClose} />
      </CSSTransition>
      <Particles />
    </div>
  );
}

export default Gallery;
