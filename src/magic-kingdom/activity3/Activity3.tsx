import { Routes, Route, Link, Outlet } from "react-router-dom";
import React from 'react';
import styled from "styled-components";
import light from './light-element.jpg';
import dark from './dark-element.jpg';
import fire from './fire-element.jpg';
import water from './water-element.jpg';

const Styles = styled.div`
  color: green;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  img {
    width: 200px;
    height: 200px;
  }
`;

function DarkSpell() {
  return (<img src={dark} className="width=50px;height=50px" />)
}
function LightSpell() {
  return (<img src={light} className="width=50px;height=50px" />)
}
function FireSpell() {
  return (<img src={fire} className="width=50px;height=50px" />)
}
function WaterSpell() {
  return (<img src={water} className="width=50px;height=50px" />)
}

function Activity3() {
  
  return (
    <Styles>
      <div className="container">
        Hello from Activity 3 Magic Kingdom
        <br />
        <Link to="light">Light Spell</Link>
        <br />
        <Link to="dark">Dark Spell</Link>
        <br />
        <Link to="fire">Fire Spell</Link>
        <br />
        <Link to="water">Water Spell</Link>
        <br />
        <Outlet />
      </div>  
    </Styles>
  )
}

export default { Activity3, DarkSpell, LightSpell, FireSpell, WaterSpell };