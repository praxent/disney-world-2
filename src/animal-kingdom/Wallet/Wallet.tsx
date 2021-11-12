
import React from 'react';
import { useState } from 'react';
import styled from "styled-components";

const Styles = styled.div`
  .balance {
    position: fixed;
    top: 100px;
    left: 0;
    padding: 5px;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #000;
    z-index: 999;   
  }
`;

function Wallet( WrappedComponent: any ) {
    return function() {
        const [balance, setBalance] = useState(20);
        return (
            <Styles>
                <div className="balance">
                    <p>Your Wallet: ${balance}</p>
                    <WrappedComponent balance={balance} setBalance={setBalance} />
                </div>
            </Styles>
        )
    }
}

export default Wallet;