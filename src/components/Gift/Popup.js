import React, { useRef, useEffect, useCallback } from "react";
import classnames from "classnames";
export default function Popup({ data, onClose, show }) {
  const giftRef = useRef(null);
  const handleOutsideClick = useCallback(
    (e) => {
      if (show) {
        if (giftRef.current && !giftRef.current.contains(e.target)) {
          return onClose();
        }
      }
    },
    [onClose, show]
  );
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const timer = useRef(null);
  const copyAccount = (item) => {
    clearTimeout(timer.current);
    const value = `${item.bank} ${item.account}`;
    const tempEl = document.createElement("textarea");
    const toastContainer = document.getElementById("toast-container");
    toastContainer.classList.remove("active");
    toastContainer.innerHTML = "복사완료";
    document.body.appendChild(tempEl);
    tempEl.value = value;
    tempEl.select();
    document.execCommand("copy");
    document.body.removeChild(tempEl);
    toastContainer.classList.remove("active");
    timer.current = setTimeout(() => {
      toastContainer.classList.add("active");
    }, 200);
    timer.current = setTimeout(() => {
      toastContainer.classList.remove("active");
    }, 1500);
  };

  return (
    <div ref={giftRef} className={classnames("gift-box", { show: show })}>
      {data.map((item, i) => {
        return (
          <div className="gif-content" key={i}>
            <div className="title">
              <h3>{item.title}</h3>
            </div>
            <div className="content">
              <div className="account">
                <p>{item.bank}</p>
                <p>{item.account}</p>
              </div>
              <div className="btn-copy" onClick={() => copyAccount(item)}>
                복사하기
              </div>
            </div>
          </div>
        );
      })}
      <div className="btn-close" onClick={onClose}></div>
    </div>
  );
}
