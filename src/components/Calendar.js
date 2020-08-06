import React from "react";
import classnames from "classnames";
import { ReactComponent as Cal } from "images/calText.svg";
function Calendar({ active }) {
  return (
    <div className={classnames("calendar-container", { active: active })}>
      <div className="calendar-wrapper">
        <div className="contents">
          <Cal />
        </div>
      </div>
      <div className="bar" />
      <div className="circle" />
    </div>
  );
}

export default Calendar;
