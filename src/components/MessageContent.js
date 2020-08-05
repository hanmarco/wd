import React from "react";

function MessageContent() {
  return (
    <div className="message-container">
      <div className="message-wraper">
        <div className="emoji" />
        <div className="message">
          <p>
            추운겨울날 따뜻한 설렘이 찾아왔습니다.
            <br />
            연인이 되었고 서로에게 스며들어
            <br />
            평생을 함께하고 싶어졌습니다.
            <br />
            이마음 그대로 지키고자 여러분 앞에서
            <br />
            영원한 사랑의 약속을 하려고합니다.
            <br />
            저희의 첫 시작을 오셔서 축복해주세요.
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
