import React, { useState } from 'react';
import styled from "styled-components";
import boatImage from './boat-ride.jpg';

const Styles = styled.div`
  color: red;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  .ride-animation {
    animation: shake 0.5s;
    animation-iteration-count: infinite;
  }

  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }
`;

function Activity1() {
  var [ride, setRide] = useState(false);
  return (
    <Styles>
      <div className="container">
        Hello from Activity 1 Magic Kingdom
        <button onClick={() =>  {
            setRide(!ride);
          } }>toggle ride</button>
        <div className={ride ? "ride-animation" : ""}><img src={boatImage}/></div>;
      </div>
      
    </Styles>
  )
}

export default Activity1