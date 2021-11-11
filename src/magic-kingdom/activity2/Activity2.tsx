import React, { useCallback, useEffect, useState } from 'react';
import styled from "styled-components";
import libertyTree from './liberty-tree-tavern.jpg';

const Styles = styled.div`
  color: blue;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;

function Activity2() {
  var [items, setItems] = useState([]);
  useEffect(() => {
  const url = "http://localhost:4000/liberty_tree";

  const fetchData = async () => {
      try {
          const response = await fetch(url);
          const json = await response.json();
          setItems(json);
          console.dir(json);
      } catch (error) {
          console.log("error", error);
      }
    };
    fetchData();
  }, []);

  function buyItem(item : object, index : string) {
    let newItems = items;
    newItems[parseInt(index)].quantity--;
    setItems(newItems);
    // setItems({
    //   items.map(el => (el.id === index ? Object.assign({}, el, { item }) : el))
    // });
    console.log("bought " + item.name + ". Remaining: " + item.quantity);
  }

  return (
    <Styles>
      <div className="container">
        Hello from Activity 2 Magic Kingdom
        <br />
        <img src={libertyTree}/>;
        <br />
        <div className="items-grid">
          {items.map((item,index)=>{
              return <div className="item-row">
                <div className="item-col">{item.name}</div>
                <div className="item-col">{item.quantity}</div>
                <div className="item-col"><button onClick={() => buyItem(item, index)}>Buy one!</button></div>
              </div>
          })}
        </div>
      </div>
    </Styles>
  )
}

export default Activity2