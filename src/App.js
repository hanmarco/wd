import React, { useState, useEffect, useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import WebFont from "webfontloader";
import TopContent from "components/TopContent";
import MessageContent from "components/MessageContent";
import Calendar from "components/Calendar";
import Gallery from "components/Gallery";
import Location from "components/Location";
import Footer from "components/Footer";
import MainLoading from "components/MainLoading";
const imageData = [
  {
    img: require("./images/top.jpg"),
  },
  {
    img: require("./images/title_sub_animation.png"),
  },
];
function App() {
  const loadingRef = useRef(null);
  const [fontLoad, setFontLoad] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [pageLoad, setPageLoad] = useState(false);
  useEffect(() => {
    initLoad();
    window.addEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (isLoading) {
      disableBodyScroll(loadingRef.current);
    } else {
      enableBodyScroll(loadingRef.current);
    }
  }, [isLoading]);
  const onScroll = (e) => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);

    setScrollY(scrollTop);
  };
  const loadFont = () => {
    WebFont.load({
      google: {
        families: ["Nanum Myeongjo:400,800"],
      },
      loading: function () {
        setFontLoad(false);
      },
      inactive: () => {
        setFontLoad(true);
      },
      active: function () {
        console.log("load font");
        setFontLoad(true);
      },
    });
  };
  const initLoad = async () => {
    await loadFont();
    await mainImageLoad({ data: imageData });
    setPageLoad(true);
  };
  const onLoadingEnd = () => {
    setIsLoading(false);
  };
  const addImageProcess = ({ src }) => {
    return new Promise((resolve, reject) => {
      const img = document.createElement("img");
      img.onload = (e) => {
        resolve(true);
      };
      img.onerror = (err) => {
        resolve(true);
      };
      img.src = `${src}`;
    });
  };

  const mainImageLoad = async ({ data, count }) => {
    if (Array.isArray(data)) {
      const promises = await data.map(async (item, i) => {
        await addImageProcess({
          src: item.img,
        });
      });

      await Promise.all(promises);
    }
  };
  const handleParallax = ({ element = null, offset = 0, render }) => {
    const windowHeight = window.innerHeight;
    if (element) {
      const offsetY = offset < 0 ? 0 : offset;
      const elemenTop = element.getBoundingClientRect().top + offsetY + 80;
      const elementPosition = elemenTop - windowHeight;
      const isActive = offsetY >= elementPosition;
      return render(isActive);
    }
  };
  const activeEle = (target) => {
    return handleParallax({
      element: target,
      offset: scrollY,
      render: (isActive) => {
        return isActive ? true : false;
      },
    });
  };
  const calDom = document.querySelector(".calendar-container");
  return (
    <div className="wrap">
      <TopContent load={!isLoading} />
      <MessageContent />
      <Calendar active={activeEle(calDom)} />
      <Gallery />
      <Location />
      <Footer />
      <TransitionGroup component={React.Fragment}>
        {isLoading && (
          <CSSTransition
            key={isLoading}
            timeout={1000}
            classNames="loading-box"
          >
            <div ref={loadingRef}>
              <MainLoading load={pageLoad} onEnd={onLoadingEnd} />
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
      {/* <div className="demo">
        <img src={require("./images/demo.png")} />
      </div> */}
    </div>
  );
}

export default App;
