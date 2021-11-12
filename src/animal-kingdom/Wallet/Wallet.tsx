
import React from 'react';
import { useState } from 'react';
import styled from "styled-components";

const Styles = styled.div`
  color: blue;
  
  .balance {
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 5px;
    
  }
`;

function Wallet( WrappedComponent: any ) {
    return function() {
        const [balance, setBalance] = useState(20);
        return (
            <Styles>
                <p>Your Wallet: ${balance}</p>
                <WrappedComponent balance={balance} setBalance={setBalance} />
            </Styles>
        )
    }
}

export default Wallet;