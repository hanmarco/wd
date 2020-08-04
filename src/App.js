import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import TopContent from "components/TopContent";
import MessageContent from "components/MessageContent";
import Calendar from "components/Calendar";
import Gallery from "components/Gallery";
import Location from "components/Location";
import Footer from "components/Footer";
function App() {
  const [fontLoad, setFontLoad] = useState(false);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Nanum Myeongjo:400,800"],
      },
      loading: function () {
        setFontLoad(false);
      },
      inactive: () => {
        console.log("not loaded");
        setFontLoad(true);
      },
      active: function () {
        console.log("font loaded");
        setFontLoad(true);
      },
    });
  }, []);
  return (
    <div className="wrap">
      <TopContent />
      <MessageContent />
      <Calendar />
      <Gallery />
      <Location />
      <Footer />
      {/* <div className="demo">
        <img src={require("./images/demo.png")} />
      </div> */}
    </div>
  );
}

export default App;
