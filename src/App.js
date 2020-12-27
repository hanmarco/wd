import React, { useState, useEffect, useRef, useCallback } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import TopContent from "components/TopContent";
import MessageContent from "components/MessageContent";
import Calendar from "components/Calendar";
import Gallery from "components/Gallery";
import Location from "components/Location";
import Gift from "components/Gift";
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
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [pageLoad, setPageLoad] = useState(false);
  const mainImageLoad = useCallback(async ({ data, count }) => {
    if (Array.isArray(data)) {
      await Promise.all(
        data.map(async (item, i) => {
          await addImageProcess({
            src: item.img,
          });
        })
      );
    }
  }, []);
  const initLoad = useCallback(async () => {
    await mainImageLoad({ data: imageData });
    setPageLoad(true);
  }, [mainImageLoad]);
  useEffect(() => {
    initLoad();
    window.addEventListener("scroll", onScroll);
  }, [initLoad]);
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

  const handleParallax = ({ element = null, offset = 0, render }) => {
    const windowHeight = window.innerHeight;
    if (element) {
      const offsetY = offset < 0 ? 0 : offset;
      const elemenTop = element.getBoundingClientRect().top + offsetY + 180;
      const elementPosition = elemenTop - windowHeight;
      if (offsetY >= elementPosition) {
        return render();
      }
    }
  };
  const activeEle = (target) => {
    return handleParallax({
      element: target,
      offset: scrollY,
      render: () => {
        return true;
      },
    });
  };

  const calDom = document.querySelector(".calendar-container");

  return (
    <div className="wrap">
      <TopContent load={!isLoading} />
      {pageLoad && (
        <>
          <MessageContent />
          <Calendar active={activeEle(calDom)} />
          <Gallery />
          <Location />
          <Gift />
          <Footer />
        </>
      )}

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
      <div id="toast-container" />
    </div>
  );
}

export default App;
