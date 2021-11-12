import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import { json } from 'stream/consumers';
import styled from "styled-components";

const Styles = styled.div`
  color: blue;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;

type Lodge = {
  id:number,
  description: string,
  name : string,
  quantity: number,
  type: string
}

function Activity2() {

 let [lodges, setlodges] = useState<Lodge[]>([])
 let isDisabled = false;
  useEffect(() => {
    fetch(`http://localhost:4000/lottawatta_lodge`)
    .then(response => response.json())
    .then(json => {
      setlodges(json)
      console.log(json)
    })
  },[])

  function reduceCount( index : number){
    
    let items = [...lodges]
    let item : Lodge = {...items[index]}

    if(item.quantity !== 0)
    {
      item.quantity -= 1;
      items[index] = item;
      setlodges(items);
      return
    }

    isDisabled = true
  }
  
  return (
        <>
          <div>
          <img src = "https://www.disneyfoodblog.com/wp-content/uploads/2019/05/Lottawatta-Lodge-Blizzard-Beach-2.jpg" width="300px"/>
        <br/>
          <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Type</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {
              lodges.map((lodge,i)=> (
                 <tr key={i}>
                    <td>{lodge.name}</td>
                    <td>{lodge.description}</td>
                    <td>{lodge.type}</td>
                    <td>{lodge.quantity}</td>
                    <td><button onClick = {()=>{reduceCount(i)}} disabled = {isDisabled}>SELL</button></td>
                 </tr>
              ))
            }
          </tbody>
        </table>
          </div>
        </>
  )
}

export default Activity2