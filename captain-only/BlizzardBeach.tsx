import React from 'react';
import blizzardBeach from "./images/blizzard-beach.jpg";
import {Link} from "react-router-dom";
import {CONFIG} from "./config";
import styled from "styled-components";

const Styles = styled.div`
  .label.activity1 {
    left: 730px;
    top: -810px;
  }
  
  .label.activity2 {
    left: -120px;
    top: -200px;
  }
  
  .label.activity3 {
    left: -70px;
    top: -520px;
  }
`;

function BlizzardBeach() {
  return (
    <Styles className="park blizzard-beach flex-column">
      <div className="flex-row">
        <div className="map-container">
          <img src={blizzardBeach} className="map"/>
          <div className="labels">
            {CONFIG.ACTIVITY >= 1 && <Link to={CONFIG.ROUTE.BLIZZARD_BEACH_A1}><span className="label pulse activity1">Summit Plummet</span></Link>}
            {CONFIG.ACTIVITY >= 2 && <Link to={CONFIG.ROUTE.BLIZZARD_BEACH_A2}><span className="label pulse activity2">Lottawatta Lodge</span></Link>}
            {CONFIG.ACTIVITY >= 3 && <Link to={CONFIG.ROUTE.BLIZZARD_BEACH_A3}><span className="label pulse activity3">Melt Away Bad</span></Link>}
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default BlizzardBeach