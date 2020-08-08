/*global kakao*/
import React, { useEffect } from "react";
import { ReactComponent as MapTitle } from "images/map_title.svg";
import { ReactComponent as MapTitleSub } from "images/map_title_sub.svg";
import { ReactComponent as ButtonCall } from "images/btn_call.svg";
function Location() {
  useEffect(() => {
    const s1 = document.createElement("script");
    s1.type = "text/javascript";
    s1.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=465c5cbc31aebf9f041472f81a7ce063&libraries=services&autoload=false";
    document.head.appendChild(s1);
    s1.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("map");
        var position = new kakao.maps.LatLng(
          37.48240809185324,
          127.03566292830315
        );
        let options = {
          center: position,
          level: 4,
        };

        const map = new window.kakao.maps.Map(container, options);
        var imageSrc = require("../images/icon_location_mark.png"); // 마커이미지의 주소입니다
        var imageSize = new kakao.maps.Size(42, 52); // 마커이미지의 크기입니다
        var imageOption = { offset: new kakao.maps.Point(22, 49) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: position,
          image: markerImage,
          clickable: true,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var customOverlay = new kakao.maps.CustomOverlay({
          position: position,
          content: `<div class="marker">엘타워</div>`,
          yAnchor: 3,
          xAnchor: 0.5,
        });
        // 커스텀 오버레이를 지도에 표시합니다
        customOverlay.setMap(map);
        kakao.maps.event.addListener(marker, "click", function () {
          // 마커 위에 인포윈도우를 표시합니다
          window.open("http://kko.to/pJ15sTzYp");
        });

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(position);
      });
    };
  }, []);
  return (
    <div className="location-container">
      <div className="graphic_title map">
        <h2>
          <MapTitle />
        </h2>
        <p className="sub map">
          <MapTitleSub />
        </p>
      </div>
      <div className="map-wrapper">
        <div id="map" style={{ width: "100%", height: "210px" }}></div>
      </div>
      <div className="info-box-wrapper">
        <div className="title">
          <h3>서울 서초구 강남대로 213</h3>
          <h3>엘타워 5층 오르체홀</h3>
          <span className="tel">02-526-8600</span>
        </div>
        <div className="dic subway">
          <h3>지하철</h3>
          <p>3호선 양재역 9번출구 바로 앞</p>
        </div>
        <div className="dic bus">
          <h3>버스</h3>
          <p>지선 : 3412, 4432, 4435</p>
          <p>간선 : 140, 400, 405, 407, 421, 440</p>
        </div>
        <div className="dic parking">
          <h3>주차</h3>
          <p>엘타워 주차장 700대와</p>
          <p>바로 옆 환승주자창 900대 이용 가능</p>
        </div>
        <a className="btn-call" href="tel:02-526-8600">
          <ButtonCall />
        </a>
      </div>
    </div>
  );
}

export default Location;
