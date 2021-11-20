import React, { useState } from "react";
import Popup from "./Popup";

export default function Gift() {
  const data = {
    man: [
      {
        title: "신랑 한상현 계좌번호",
        bank: "국민은행",
        account: "94129309067",
      },
    ],
    woman: [
      {
        title: "신부 이채희 계좌번호",
        bank: "우리은행",
        account: "1002052576364",
      },
    ],
  };
  const [showM, setShowM] = useState(false);
  const [showW, setShowW] = useState(false);
  const handleShow = (type) => {
    setShowM(false);
    setShowW(false);
    if (type === "m") {
      setShowM(true);
    } else {
      setShowW(true);
    }
  };
  const handleClose = (type) => {
    setShowM(false);
    setShowW(false);
  };
  return (
    <div className="gift-container">
      <h2>신랑신부에게 축의금 전하기</h2>
      <div className="dic">
        <div className="btn-more" onClick={() => handleShow("m")}>
          신랑 계좌번호 보기
        </div>
        <Popup
          data={data["man"]}
          show={showM}
          onClose={() => handleClose("m")}
        />
      </div>
      <div className="dic">
        <div className="btn-more" onClick={() => handleShow("w")}>
          신부 계좌번호 보기
        </div>
        <Popup
          data={data["woman"]}
          show={showW}
          onClose={() => handleClose("w")}
        />
      </div>
    </div>
  );
}
