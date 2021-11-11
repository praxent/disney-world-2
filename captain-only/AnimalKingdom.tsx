import React from 'react';
import animalKingdom from "./images/animal-kingdom.jpg";
import {Link} from "react-router-dom";
import {CONFIG} from "./config";
import styled from "styled-components";

const Styles = styled.div`
  .label.activity1 {
    left: 700px;
    top: -250px;
  }
  
  .label.activity2 {
    left: 300px;
    top: -200px;
  }
  
  .label.activity3 {
    left: 380px;
    top: -600px;
  }
`;

function AnimalKingdom() {
  return (
    <Styles className="park animal-kingdom flex-column">
      <div className="flex-row">
        <div className="map-container">
          <img src={animalKingdom} className="map"/>
          <div className="labels">
            {CONFIG.ACTIVITY >= 1 && <Link to={CONFIG.ROUTE.ANIMAL_KINGDOM_A1}><span className="label pulse activity1">Fossil Fun Games</span></Link>}
            {CONFIG.ACTIVITY >= 2 && <Link to={CONFIG.ROUTE.ANIMAL_KINGDOM_A2}><span className="label pulse activity2">Rainforest Cafe</span></Link>}
            {CONFIG.ACTIVITY >= 3 && <Link to={CONFIG.ROUTE.ANIMAL_KINGDOM_A3}><span className="label pulse activity3">Zoo</span></Link>}
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default AnimalKingdom