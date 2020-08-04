import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
function MainLoading({ load, onEnd }) {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);
  const loaderInterval = useRef(null);
  const loaderTimeout = useRef(null);
  const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  useEffect(() => {
    loaderInterval.current = setInterval(() => {
      setProgress(progress + getRandomArbitrary(10, 20));
    }, 500);
    if (progress >= 70) {
      clearInterval(loaderInterval.current);
    }
    if (load === true) {
      setProgress(100);
      clearTimeout(loaderTimeout.current);
      loaderTimeout.current = setTimeout(() => {
        setShowText(true);
        window.scrollTo(0, 0);
        setTimeout(() => {
          return onEnd(true);
        }, 1000);
      }, 500);
    }
    return () => clearInterval(loaderInterval.current);
  }, [progress, load]);

  return (
    <div className="main-loading-wrap">
      <div className="main-loading">
        <div className={classnames("text-wrap", { active: showText })}>
          <div className="text">{`Joohyung & Eunjoon`}</div>
        </div>
        <div className="progress-wrap">
          <div className="progress" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

export default MainLoading;
