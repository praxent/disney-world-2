import React from 'react';
import magicKingdom from "./images/magic-kingdom.jpeg";
import {Link} from "react-router-dom";
import {CONFIG} from "./config";
import styled from "styled-components";

const Styles = styled.div`
  .label.activity1 {
    left: 200px;
    top: -400px;
  }
  
  .label.activity2 {
    left: 70px;
    top: -670px;
  }
  
  .label.activity3 {
    left: 100px;
    top: -800px;
  }
`;

function MagicKingdom() {
  return (
    <Styles className="park magic-kingdom flex-column">
      <div className="flex-row">
        <div className="map-container">
          <img src={magicKingdom} className="map"/>
          <div className="labels">
            {CONFIG.ACTIVITY >= 1 && <Link to={CONFIG.ROUTE.MAGIC_KINGDOM_A1}><span className="label pulse activity1">Pirates of the Carribean</span></Link>}
            {CONFIG.ACTIVITY >= 2 && <Link to={CONFIG.ROUTE.MAGIC_KINGDOM_A2}><span className="label pulse activity2">Liberty Tree Tavern</span></Link>}
            {CONFIG.ACTIVITY >= 3 && <Link to={CONFIG.ROUTE.MAGIC_KINGDOM_A3}><span className="label pulse activity3">Magic Lessons</span></Link>}
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default MagicKingdom