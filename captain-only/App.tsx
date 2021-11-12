import './App.css'
import * as React from "react";
import {Route, Routes} from "react-router-dom";

import Instructions from "./Instructions";
import DisneyWorld from "./DisneyWorld";
import {CONFIG} from "./config";

import AnimalKingdom from ".//AnimalKingdom";
import {default as AnimalKingdomActivity1} from "../src/animal-kingdom/activity1/Activity1";
import {default as AnimalKingdomActivity2} from "../src/animal-kingdom/activity2/Activity2";
import {default as AnimalKingdomActivity3} from "../src/animal-kingdom/activity3/Activity3";

import BlizzardBeach from ".//BlizzardBeach";
import {default as BlizzardBeachActivity1} from "../src/blizzard-beach/activity1/Activity1";
import {default as BlizzardBeachActivity2} from "../src/blizzard-beach/activity2/Activity2";
import {default as BlizzardBeachActivity3} from "../src/blizzard-beach/activity3/Activity3";

import Epcot from ".//Epcot";
import {default as EpcotActivity1} from "../src/epcot/activity1/Activity1";
import {default as EpcotActivity2} from "../src/epcot/activity2/Activity2";
import {default as EpcotActivity3} from "../src/epcot/activity3/Activity3";

import MagicKingdom from ".//MagicKingdom";
import {default as MagicKingdomActivity1} from "../src/magic-kingdom/activity1/Activity1";
import {default as MagicKingdomActivity2} from "../src/magic-kingdom/activity2/Activity2";
import {default as MagicKingdomActivity3} from "../src/magic-kingdom/activity3/Activity3";

function App() {

  return (
    <>
      <Instructions />
      <Routes>
        <Route path={CONFIG.ROUTE.ROOT} element={<DisneyWorld/>}/>

        <Route path={CONFIG.ROUTE.ANIMAL_KINGDOM} element={<AnimalKingdom/>}/>
        <Route path={CONFIG.ROUTE.ANIMAL_KINGDOM_A1} element={<AnimalKingdomActivity1/>}/>
        <Route path={CONFIG.ROUTE.ANIMAL_KINGDOM_A2} element={<AnimalKingdomActivity2/>}/>
        <Route path={`${CONFIG.ROUTE.ANIMAL_KINGDOM_A3}/*`} element={<AnimalKingdomActivity3/>}/>

        <Route path={CONFIG.ROUTE.BLIZZARD_BEACH} element={<BlizzardBeach/>}/>
        <Route path={CONFIG.ROUTE.BLIZZARD_BEACH_A1} element={<BlizzardBeachActivity1/>}/>
        <Route path={CONFIG.ROUTE.BLIZZARD_BEACH_A2} element={<BlizzardBeachActivity2/>}/>
        <Route path={`${CONFIG.ROUTE.BLIZZARD_BEACH_A3}/*`} element={<BlizzardBeachActivity3/>}/>

        <Route path={CONFIG.ROUTE.EPCOT} element={<Epcot/>}/>
        <Route path={CONFIG.ROUTE.EPCOT_A1} element={<EpcotActivity1/>}/>
        <Route path={CONFIG.ROUTE.EPCOT_A2} element={<EpcotActivity2/>}/>
        <Route path={`${CONFIG.ROUTE.EPCOT_A3}/*`} element={<EpcotActivity3/>}/>

        <Route path={CONFIG.ROUTE.MAGIC_KINGDOM} element={<MagicKingdom/>}/>
        <Route path={CONFIG.ROUTE.MAGIC_KINGDOM_A1} element={<MagicKingdomActivity1/>}/>
        <Route path={CONFIG.ROUTE.MAGIC_KINGDOM_A2} element={<MagicKingdomActivity2/>}/>
        <Route path={`${CONFIG.ROUTE.MAGIC_KINGDOM_A3}/*`} element={<MagicKingdomActivity3/>}/>

        <Route path={CONFIG.ROUTE.ANY} element={<DisneyWorld/>}/>
      </Routes>
    </>
  )
}

export default App
