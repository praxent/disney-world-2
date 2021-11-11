import React from 'react';
import styled from "styled-components";

const Styles = styled.div`
  color: green;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;

function Activity3() {
  return (
    <Styles>
      <div className="container">
        Hello from Activity 3 Blizzard Beach
      </div>
    </Styles>
  )
}

export default Activity3