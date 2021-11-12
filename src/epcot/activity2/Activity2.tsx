import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Styles = styled.div`
  color: blue;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }

img{
width: 600px;}
`;

function Activity2() {
    const [count, setCount] = useState(0);
    const [menu, setMenu] = useState(Array);
    useEffect(() => {
        document.title = `drinks in 220 Restaurant`;
    });
    function substract(menuItem) {
        const newMenu = [...menu];

        let indexFound = -1;
        newMenu.forEach((newMenuItem,index) => {
            if (newMenuItem.id === menuItem.id && newMenuItem.quantity > 0) {
                newMenuItem.quantity -= 1;
            } 
        });
        setMenu(newMenu);
    }

    return (
        <Styles>
            <div className="container">
                <img src='http://localhost:3000/captain-only/images/space-220.jpg' />
            </div>
            <div>
                <p>Click below to  show drinks in 220 Restaurant</p>
                <button onClick={() => {
                    setCount(count + 1);
                    fetch('http://localhost:4000/space_220')
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            setMenu(data);
                        });
                }}>
                    Get Menu
                </button>
                <ul>
                    {menu.map(menuItem => (
                        <li onClick={() => { substract(menuItem) }}>
                            <a href="#">
                                {menuItem.name} remaining items {menuItem.quantity}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </Styles >
    )

}

export default Activity2
