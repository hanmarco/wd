import React, { useState, useEffect } from "react";
import classnames from "classnames";
function BackImage({ src, className }) {
  const [imageLoad, setImageLoad] = useState(false);
  useEffect(() => {
    const initLoad = () => {
      const newImg = document.createElement("img");
      newImg.onload = () => {
        handleImageLoad();
      };
      newImg.onError = () => {
        handleImageError();
      };
      newImg.src = src;
    };
    initLoad();
  }, [src]);

  const handleImageLoad = () => {
    setImageLoad(true);
  };
  const handleImageError = () => {
    setImageLoad(true);
  };
  return (
    <div
      className={classnames("image-wrap", className, {
        load: imageLoad,
      })}
    >
      <div className="image" style={{ backgroundImage: `url("${src}")` }} />
    </div>
  );
}

export default BackImage;
