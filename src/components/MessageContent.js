import React from "react";

function MessageContent() {
  return (
    <div className="message-container">
      <div className="message-wraper">
        <div className="emoji" />
        <div className="message">
          <p>
            코로나의 종식을 예측할 수 없는 요즘,
            <br />
            긴 고민 끝에 결혼식을 진행하게되었습니다.
            <br />
            어려운 시기, 참석이 어려우시더라도
            <br />
            부담갖지 마시고 멀리서나마
            <br />
            축복해주시는 마음 감사히 받겠습니다.
          </p>
        </div>
        <div className="contact">
          <div className="dic">
            <span>이재풍</span>
            <span>고애숙의</span>
            <span className="role">차남</span>
            <span className="name">주형</span>
          </div>
          <div className="dic">
            <span>이성원</span>
            <span>유승인의</span>
            <span className="role">장녀</span>
            <span className="name">은준</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageContent;
