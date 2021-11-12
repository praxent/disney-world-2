import React from 'react';
import { useState } from 'react';
import styled from "styled-components";

const Styles = styled.div`
  .access-control {
    position: fixed;
    z-index: 9999;
    top: 5px;
    left: 5px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #000;
  }
`;


function AccessControl({user, setUser}) {
    const onClick = () => { setUser(user === 'child' ? 'adult' : 'child'); };
    return (
        <Styles>
            <div className="access-control">
                <p>User: { user }</p>
                <button onClick={onClick}>Toggle User</button>
            </div>
        </Styles>
    );
}

export default AccessControl;