import React from "react";
import CalText from "images/calText";
function Calendar() {
  return (
    <div className="calendar-container">
      <div className="calendar-wrapper">
        <div className="title">
          <h2>09</h2>
          <div className="bar" />
        </div>
        <div className="contents">
          <CalText />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
