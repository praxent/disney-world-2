import React from 'react';
import epcot from "./images/epcot.gif";
import {Link} from "react-router-dom";
import {CONFIG} from "./config";
import styled from "styled-components";

const Styles = styled.div`
  .label.activity1 {
    left: 110px;
    top: -188px;
  }
  
  .label.activity2 {
    left: -70px;
    top: -470px;
  }
  
  .label.activity3 {
    left: -220px;
    top: -334px;
  }
`;

function Epcot() {
  return (
    <Styles className="park epcot flex-column">
      <div className="flex-row">
        <div className="map-container">
          <img src={epcot} className="map" height="900"/>
          <div className="labels">
            {CONFIG.ACTIVITY >= 1 && <Link to={CONFIG.ROUTE.EPCOT_A1}><span className="label pulse activity1">Spaceship Earth</span></Link>}
            {CONFIG.ACTIVITY >= 2 && <Link to={CONFIG.ROUTE.EPCOT_A2}><span className="label pulse activity2">Space 220</span></Link>}
            {CONFIG.ACTIVITY >= 3 && <Link to={CONFIG.ROUTE.EPCOT_A3}><span className="label pulse activity3">Universe of Energy</span></Link>}
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default Epcot