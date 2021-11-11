import React, {useState, useEffect} from 'react';
import styled from "styled-components";

import rainForestCafe from "./images/Rainforest-Cafe.jpg"
const Styles = styled.div`
  color: blue;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
    background-image: url(${rainForestCafe});
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
  }

  .content {
    color: white;
    background-color: rgba(0,0,0,0.7);
    padding: 20px;
  }

  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 0 auto;
    width: 100%;
  }

  .product {
    border: 1px solid white;
    margin: 5px;
    padding: 5px;
    width: 200px;
    height: 200px;
    border-radius: 5px;
  }
`;

function Activity2() {
  const [menu, setMenu] = useState([]);
  const fetchMenu = () => {
    fetch("http://localhost:4000/rainforest_cafe")
      .then(response => response.json())
      .then(data => setMenu(data));
  };

  useEffect( () => {
    fetchMenu();
    return () => {
      console.log("cleanup");
    }
  }, []);

  return (
    <Styles>
      <div className="container">
        <div className="content">
          <h1>Activity 2</h1>
          <p>
          Welcome to the wildest food place in the world!
          </p>
          <div className="products">
            {menu.map((item) => {
              return (
                <div key={item.id} className="product">
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                  <p>{item.quantity}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default Activity2