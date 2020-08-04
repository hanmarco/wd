import React from "react";
import { Parallax } from "react-scroll-parallax";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

function Particles() {
  const data = [
    {
      x: -50,
      y: 100,
      top: 200,
    },
    {
      x: 10,
      y: 10,
      top: 400,
    },
    {
      x: 300,
      y: 10,
      top: 600,
    },
    {
      x: 10,
      y: 10,
      top: 800,
    },
    {
      x: 10,
      y: 10,
      top: 1000,
    },
    {
      x: 10,
      y: 10,
      top: 1200,
    },
  ];

  return (
    <div className="particle-container">
      {data.map((item, i) => {
        return (
          <div className="particle-box" style={{ top: item.top }}>
            <Parallax
              key={`particle-${i}`}
              className="paral-particle"
              offsetYMax={item.y}
              offsetXMin={item.x}
              slowerScrollRate
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
