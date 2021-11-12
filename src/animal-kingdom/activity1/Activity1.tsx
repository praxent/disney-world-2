import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import splash from "./images/splash.png";
import target from "./images/target.png";
import waterGun from "./images/water-gun.svg";

const Styles = styled.div`
  color: red;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }
  .game {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
    max-width: 100px;
  }
  .target-container {
    position: relative;
    top: 0;
    left: 0;
  }
  .target {
    height: 80px;
    width: 80px;
    position: relative;
    top: 0;
    left: 0;
  }
  .splash {
    height: 40px;
    width: 40px;
    position: absolute;
    top: 20px;
    left: 20px;
    animation:pulse 1s infinite;
  }
  @keyframes pulse {
    0% {
      transform: scale(0.95);
    }
    70% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(0.95);
    }
  }
  .waterGun {
    height: 50px;
    width: 50px;
  }
  .water-gun-trigger {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 70px;
    border: none;
    color: white;
    padding: 5px;
    border-radius: 50%;
  }
  .water-gun-trigger:hover {
    background-color: #00aad4;
    transition: background-color 0.5s;
    transform: scale(1.1);
  }
  .water-gun-trigger:active {
    transform: scale(0.9);
  }

  .slider-container {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .slider {
    width: 100%;
    height: 80px;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    position: relative;
  }
  .slider-image {
    height: 100px;
    border: 0;
    position: absolute;
  }
`;

function Activity1() {
  const [shooting, setShooting] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0); // 0-800

  return (
    <Styles>
      <div className="container">
        <h1>Fossil Fun Games</h1>
        <div className="slider-container">
          <div className="slider">
            <img
              src="https://www.pikpng.com/pngl/b/381-3817218_jurassic-world-dinosaur-png-png-download-jurassic-park.png"
              alt="dino" 
              className="slider-image"
              style={{ left: sliderPosition }} 
            />
          </div>
        </div>
        <div className="game">
          <div className="target-container">
            <img className="target" src={target} alt="target" />
            {shooting && <img className="splash" src={splash} alt="splash" />}
          </div>
          <SquirtGun
            setShooting={setShooting}
            setSliderPosition={setSliderPosition}
            shooting={shooting}
            position={sliderPosition}
          />
        </div>
        {sliderPosition >= 800 && 
          <div>
            <h2>You Win! Have a dino</h2>
            <img src="https://target.scene7.com/is/image/Target/GUEST_60454535-c70a-4d3c-abe8-a2adb402699a?wid=488&hei=488&fmt=pjpeg" alt="" />
          </div>
        }
      </div>
    </Styles>
  )
}

function SquirtGun(props) {
  const onClick = async () => {
    props.setShooting(!props.shooting);
    if (props.position < 800 && !props.shooting) {
      props.setSliderPosition(props.position + 100);
    }
  }
  return (
    <button onClick={onClick} className="water-gun-trigger">
      <img className="waterGun" src={waterGun} alt="water gun" />
    </button>
  )
} 

export default Activity1