import React, { useEffect } from 'react'
import { useState } from 'react'
import "../assets/trafficlight.css"

export default function TrafficLight() {
  const [currentLight, setCurrentLight] = useState("black")

  
  const handleClick = (color) => {
    setCurrentLight(color);
  };


return(
  <div className="container">
  <div className="traffic-light">
    <div
      className={`light red ${currentLight === 'red' ? 'active' : ''}`}
      onClick={() => handleClick('red')}
    ></div>
    <div
      className={`light yellow ${currentLight === 'yellow' ? 'active' : ''}`}
      onClick={() => handleClick('yellow')}
    ></div>
    <div
      className={`light green ${currentLight === 'green' ? 'active' : ''}`}
      onClick={() => handleClick('green')}
    ></div>
  </div>
  <div className="radio-buttons">
    <label>
      <input
        type="radio"
        value="red"
        checked={currentLight === 'red'}
        onChange={() => handleClick('red')}
      />
      Red
    </label>
    <label>
      <input
        type="radio"
        value="yellow"
        checked={currentLight === 'yellow'}
        onChange={() => handleClick('yellow')}
      />
      Yellow
    </label>
    <label>
      <input
        type="radio"
        value="green"
        checked={currentLight === 'green'}
        onChange={() => handleClick('green')}
      />
      Green
    </label>
  </div>
</div>
);
};

