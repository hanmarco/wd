import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";

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
    <div className="App">
      <header className="App-header">은준이 사랑해</header>
    </div>
  );
}

export default App;
