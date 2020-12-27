import React, { useState } from "react";
import Popup from "./Popup";

export default function Gift() {
  const data = {
    man: [
      {
        title: "신랑 이주형 계좌번호",
        bank: "국민은행",
        account: "90190367037",
      },
      {
        title: "혼주 이재풍 계좌번호",
        bank: "농협",
        account: "3520754218303",
      },
    ],
    woman: [
      {
        title: "신부 이은준 계좌번호",
        bank: "국민은행",
        account: "98930244362",
      },
      {
        title: "혼주 이성원 계좌번호",
        bank: "국민은행",
        account: "79620201023785",
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
