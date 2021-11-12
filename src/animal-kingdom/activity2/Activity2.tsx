import React, {useState, useEffect} from 'react';
import styled from "styled-components";

import Wallet from '../Wallet/Wallet';

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
    margin: 10px;
    border-radius: 10px;
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
    margin: 10px;
    padding: 5px;
    width: 200px;
    height: 200px;
    border-radius: 5px;
    cursor: pointer;
  }
  .product:hover {
    transform: scale(1.02);
  }
  .product:active {
    transform: scale(0.98);
  }

  .product-title {
    font-size: 1.5em;
    font-weight: bold;
  }
  .product-description {
    font-size: 0.8em;
  }
  .product-quantity {
    font-size: 1em;
  }
`;

function Activity2Component(props: any) {
  const [menu, setMenu] = useState([]);

  const fetchMenu = () => {
    fetch("http://localhost:4000/rainforest_cafe")
      .then(response => response.json())
      .then(data => setMenu(data));
  };

  const buyProduct = (id) => {
    if(props.balance > 0 ) {
      const index = menu.findIndex(item => item.id === id);
      if(index>-1) {
        const newMenu = [...menu];
        newMenu[index].quantity--;
        setMenu(newMenu);
      }
      props.setBalance(props.balance - 1);
    }
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
          <h1>Menu</h1>
          <i>
          Welcome to the wildest food place in the world!
          </i>
          <hr />
          <div className="products">
            {menu.map((item) => {
              return (
                <button
                  key={item.id}
                  className="product"
                  disabled={item.quantity === 0 || props.balance === 0}
                  onClick={() => buyProduct(item.id)}
                >
                  <p className="product-title">{item.name}</p>
                  <p className="product-description">{item.description}</p>
                  <p> Available: <span className="product-quantity">{item.quantity}</span></p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </Styles>
  )
}

const Activity2 = Wallet(Activity2Component);

export default Activity2