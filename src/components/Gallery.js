import React, { useState, useEffect, useCallback } from "react";
import BackImage from "./BackImage";
import { CSSTransition } from "react-transition-group";
import ImageViewer from "./ImageViewer";
import { Parallax, useController } from "react-scroll-parallax";
import Particles from "components/Particles";
import { ReactComponent as GalleryTitle } from "images/gallery_title.svg";
import { ReactComponent as GalleryTitleSub } from "images/gallery_title_sub.svg";

const arrayFullData = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    const imageData = { img: require(`../images/full/full_${i + 1}.jpg`) };
    arr.push(imageData);
  }
  return arr;
};

const data = [
  {
    thumb: require("../images/thum_1.jpg"),
    y: 0,
  },
  {
    thumb: require("../images/thum_2.jpg"),
    y: -30,
  },
  {
    thumb: require("../images/thum_3.jpg"),
    y: 30,
  },
  {
    thumb: require("../images/thum_4.jpg"),
    y: -30,
  },
  {
    thumb: require("../images/thum_5.jpg"),
    y: 30,
  },
];
const fullData = arrayFullData(7);

function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const { parallaxController } = useController();

  const addImageProcess = useCallback(
    ({ src }) => {
      return new Promise((resolve, reject) => {
        const img = document.createElement("img");
        img.onload = (e) => {
          parallaxController.update();
          resolve(true);
        };
        img.onerror = (err) => {
          resolve(true);
        };
        img.src = `${src}`;
      });
    },
    [parallaxController]
  );
  const galleryImageLoad = useCallback(async () => {
    if (Array.isArray(fullData)) {
      const promises = await fullData.map(async (item, i) => {
        await addImageProcess({
          src: item.img,
        });
      });

      await Promise.all(promises);
    }
  }, [addImageProcess]);
  useEffect(() => {
    galleryImageLoad();
  }, [galleryImageLoad]);
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
                y={[-item.y, item.y]}
                x={[-item.x || 0, item.x || 0]}
              >
                <div onClick={handleClick.bind(this, i)}>
                  <BackImage key={i} src={item.thumb} />
                </div>
              </Parallax>
            );
          })}
        </div>
      </div>
      <div className="btn-more" onClick={handleClick.bind(this, 5)}>
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
