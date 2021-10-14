import React from "react";
import { Parallax } from "react-scroll-parallax";

function Particles() {
  const data = [
    {
      x: 100,
      y: 100,
      top: 200,
    },
    {
      x: -100,
      y: 10,
      top: 400,
    },
    {
      x: 400,
      y: 10,
      top: 600,
    },
    {
      x: -200,
      y: 10,
      top: 800,
    },
    {
      x: 200,
      y: 10,
      top: 1000,
    },

	    {
      x: 200,
      y: 10,
      top: 1000,
    },
	 {
      x: 240,
      y: 10,
      top: 750,
    },
  ];

  return (
    <div className="particle-container">
      {data.map((item, i) => {
        return (
          <div key={i} className="particle-box" style={{ top: item.top }}>
            <Parallax
              key={`particle-${i}`}
              className="paral-particle"
              y={[-item.y, item.y]}
              x={[-item.x, item.x]}
            >
              <div key={i} className={`particle ${i % 3 === 0 && "even"}`} />
            </Parallax>
          </div>
        );
      })}
    </div>
  );
}

export default Particles;
