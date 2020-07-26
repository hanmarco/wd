import React from "react";

function Location() {
  return (
    <div className="location-container">
      <div className="map-wrapper"></div>
      <div className="info-box-wrapper">
        <div className="title">
          <h3>서울 서초구 강남대로 213</h3>
          <h3>엘타워 5층 오르체홀</h3>
          <span className="tel">02-526-8600</span>
        </div>
        <div className="dic subway">
          <h3>지하철</h3>
          <p>3호선 양재역 10번출구 바로 앞</p>
        </div>
        <div className="dic bus">
          <h3>버스</h3>
          <p>지선 : 3412, 4432, 4435</p>
          <p>간선 : 140, 400, 405, 407, 421, 440</p>
        </div>
        <div className="dic parking">
          <h3>주차</h3>
          <p>건물 내 주차장 500대 가능</p>
        </div>
      </div>
    </div>
  );
}

export default Location;
