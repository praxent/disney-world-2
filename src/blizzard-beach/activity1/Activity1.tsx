import React, {useState} from 'react';
import styled from "styled-components";

import RideDescription from "./components/RideDescription";

const Styles = styled.div`
  color: red;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;

function Activity1() {
  const [riding, setRiding] = useState<any>(true);

  function ToggleRiding(){
    setRiding(!riding)
  }

  return (
    <>
      <div className="container">
        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjemB1JAjmKfSCuQMNFz1X_c4Oc9ExQhEgAJG1svHdDJiDbJKPCTy_uOtTB-u9Gr2xExw&usqp=CAU" />
        <br/>
       <RideDescription riding = {riding}/>
        <br/>
        <button onClick = {ToggleRiding}> Toggle Riding </button>
      </div>
    </>
  )
}

export default Activity1