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
        document.title = `You clicked ${count} times`;
    });
    return (
        <Styles>
            <div className="container">
                <img src='http://localhost:3000/captain-only/images/space-220.jpg' />
            </div>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => {
                    setCount(count + 1);
                    fetch('http://localhost:4000/space_220')
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            setMenu(data);
                        });
                }}>
                    Click me
                </button>
                <ul>
                    {menu.map(name => (
                        <li>
                            item: {name.name} description: {name.description} add to cart
                        </li>
                    ))}
                </ul>
            </div>
        </Styles >
    )
}

export default Activity2
