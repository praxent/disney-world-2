import React, {useState} from 'react';
import styled from "styled-components";

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

  function RideDescription(){
    if(riding){
      return <strong><span> A person moving down the slide </span></strong>
    }

    return <span> Person not sliding </span>
  }

  return (
    <>
      <div className="container">
        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjemB1JAjmKfSCuQMNFz1X_c4Oc9ExQhEgAJG1svHdDJiDbJKPCTy_uOtTB-u9Gr2xExw&usqp=CAU" />
        <br/>
       <RideDescription />
        <br/>
        <button onClick = {ToggleRiding}> Toggle Riding </button>
      </div>
    </>
  )
}

export default Activity1