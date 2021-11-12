import React, { useCallback, useEffect, useState, useContext } from 'react';
import styled from "styled-components";
import UserContext from '../../../captain-only/user-context';
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
  const user = useContext(UserContext);
  useEffect(() => {
    const url = "http://localhost:4000/liberty_tree";

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            var filtered = json.filter((el) => el.type.toLowerCase() == user);
            console.dir(filtered);
            setItems(filtered);
        } catch (error) {
            console.log("error", error);
        }
      };
      fetchData();
  }, []);

  function buyItem(item : object, id : string) {
    let newItems = items.map(item =>
      {
        if (item.id == id){
          return {...item, quantity: item.quantity - 1};
        }
        return item;
      });
    setItems(newItems);
  }

  return (
    <Styles>
      <div className="container">
        Hello from Activity 2 Magic Kingdom
        <br />
        <img src={libertyTree}/>;
        <br />
        <div className="items-grid">
          {items.map((item)=> (
              <div className="item-row">
                <div className="item-col">{item.name}</div>
                <div className="item-col">{item.quantity}</div>
                <div className="item-col"><button onClick={() => buyItem(item, item.id)}>Buy one!</button></div>
              </div>
          ))}
        </div>
      </div>
    </Styles>
  )
}

export default Activity2