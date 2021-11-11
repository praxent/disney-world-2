import React, { useState } from 'react';
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
`;

function Activity1() {
  const [shooting, setShooting] = useState(false);
  return (
    <Styles>
      <div className="container">
        <h1>Fossil Fun Games</h1>
        <h2>Shoot!</h2>
        <div className="game">
          <div className="target-container">
            <img className="target" src={target} alt="target" />
            {shooting && <img className="splash" src={splash} alt="splash" />}
          </div>
          <SquirtGun setShooting={setShooting} shooting={shooting}/>
        </div>
      </div>
    </Styles>
  )
}

function SquirtGun(props) {
  const onClick = () => props.setShooting(!props.shooting);
  return (
    <button onClick={onClick} className="water-gun-trigger">
      <img className="waterGun" src={waterGun} alt="water gun" />
    </button>
  )
} 

export default Activity1