import React from 'react';
import styled from "styled-components";

const Styles = styled.div`
  color: red;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;

function Activity1() {
  return (
    <Styles>
      <div className="container">
        Hello from Activity 1 Animal Kingdom
      </div>
    </Styles>
  )
}

export default Activity1