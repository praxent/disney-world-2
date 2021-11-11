import React, { useState } from 'react';
import styled from "styled-components";

const Styles = styled.image`
  color: red;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
.rotate {
		-webkit-animation: rotation 2s infinite linear;
}

@-webkit-keyframes rotation {
		from {
				-webkit-transform: rotate(0deg);
		}
		to {
				-webkit-transform: rotate(359deg);
		}
}
`;

function Activity1() {
    const [checked, setChecked] = useState(false);
    const toggleChecked = () => setChecked(value => !value);
  return (
    <Styles>
      <div className="container">
              Hello from Activity 1 Epcot
              we are  {checked ? 'on the Ride!' : 'not Riding :('}
              <img src='../captain-only/images/spaceship-earth.jpg' className={checked ? 'rotate' : ''} />
              <input
                  type="checkbox"
                  checked={checked}
                  onChange={toggleChecked}
              />
      </div>
    </Styles>
  )
}

export default Activity1