import React from "react";
import { ReactComponent as Cal } from "images/calText.svg";
function Calendar() {
  return (
    <div className="calendar-container">
      <div className="calendar-wrapper">
        <div className="contents">
          <Cal />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
