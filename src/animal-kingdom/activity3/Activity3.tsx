import React from 'react';
import styled from "styled-components";
import {Route, Routes, Link, Outlet} from "react-router-dom";

const ROUTES = {
  ROOT: "/",
  VISIT_LION: "lion",
  VISIT_ZEBRA: "zebra",
  VISIT_GIRAFFE: "giraffe",
  VISIT_CHIMPANZEE: "chimpanzee",
}

const ANIMALS = {
  LION: {
    name: "Lion",
    sound: "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-audio-hero/audio_hero_AnimalLion TL01_41.mp3",
    image: "https://media3.giphy.com/media/289QF0kb6NzlzIcj2x/giphy.gif?cid=ecf05e47a495fbgq0i5sh95p8m2ebuu3zpb870l24h7n3i85&rid=giphy.gif&ct=g",
    description: "The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane. It is a social species, forming groups called prides. A lion's pride consists of a few adult males, related females, and cubs. Groups of female lions usually hunt together, preying mostly on large ungulates. The lion is an apex and keystone predator; although some lions scavenge when opportunities occur and have been known to hunt humans, the species typically does not."
  },
  ZEBRA: {
    name: "Zebra",
    sound: "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-audio-hero/audio_hero_Zebra_DIGIC13-42.mp3",
    image: "https://media4.giphy.com/media/H7wxee1VYpAQFj9nc7/giphy.gif?cid=ecf05e47ntc1msz15xtp5wvzfgyr3bgwzpemsdeo5dv00kz1&rid=giphy.gif&ct=g",
    description: "Zebras are African equines with distinctive black-and-white striped coats. There are three living species: the Grévy's zebra (Equus grevyi), plains zebra (E. quagga), and the mountain zebra (E. zebra). Zebras share the genus Equus with horses and asses, the three groups being the only living members of the family Equidae. Zebra stripes come in different patterns, unique to each individual. "
  },
  GIRAFFE: {
    name: "Giraffe",
    sound: "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_cartoon_horse_snort_66059.mp3",
    image: "https://media3.giphy.com/media/p4CauZc6QqiLC/giphy.gif?cid=ecf05e47t119bcmpwmhwqc7peuq24pfhrcgc4sxh7g1pz06s&rid=giphy.gif&ct=g",
    description: "Giraffes (genus Giraffa) are African artiodactyl mammals, the tallest living terrestrial animals and the largest ruminants. They are traditionally considered to be one species, Giraffa camelopardalis, with nine subspecies. However, the existence of up to nine extant giraffe species has been described, based upon research into the mitochondrial and nuclear DNA, as well as morphological measurements of Giraffa. Seven other prehistoric species, known from fossils, are extinct."
  },
  CHIMPANZEE: {
    name: "Chimpanzee",
    sound: "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-audio-hero/audio_hero_AnimalChimpanzee TL01_31.mp3",
    image: "https://media0.giphy.com/media/vexMhgUYTi6mQ/giphy.gif?cid=ecf05e471dbdy0t523ylj1r0x2tzpcopcva6wxt1ur3u7ogd&rid=giphy.gif&ct=g",
    description: "The chimpanzee (Pan troglodytes), also known as the common chimpanzee, or simply chimp, is a species of great ape native to the forest and savannah of tropical Africa. It has four confirmed subspecies and a fifth proposed subspecies. The chimpanzee and the closely related bonobo (sometimes called the pygmy chimpanzee) are classified in the genus Pan. Evidence from fossils and DNA sequencing shows that Pan is a sister taxon to the human lineage and is humans' closest living relative."
  }
}

const Styles = styled.div`
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
  .header {
    text-align: center;
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-item {
    margin-right: 20px;
    background-color: #f5f5f5;
    border-radius: 5px;
    padding: 10px;
    color: #333;
    border: 1px solid #ccc;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.2em;
    font-weight: bold;
  }
  .nav-item a {
    text-decoration: none;
    color: #333;
  }
  .nav-item:hover {
    background-color: #ccc;
  }
  .nav-item:active {
    transform: translateY(2px);
  }
`;


function Activity3() {
  return (
    <Routes>
      <Route path="/" element={<Activity3Root />}>
        <Route path="lion" element={<Animal animal={ANIMALS.LION} />}/>
        <Route path="zebra" element={<Animal animal={ANIMALS.ZEBRA} />}/>
      </Route>
    </Routes>
  )
}

function Activity3Root() {
  return (
    <Styles>
      <div className="container">
        <h1>Welcome to the Zoo</h1>
        <nav className="header">
          <Link className="nav-item" to="/animal-kingdom/activity3/lion">Lion</Link>
          <Link className="nav-item" to="/animal-kingdom/activity3/zebra">Zebra</Link>
          {/* <Link className="nav-item" to={ROUTES.VISIT_GIRAFFE}>Giraffe</Link>
          <Link className="nav-item" to={ROUTES.VISIT_ZEBRA}>Zebra</Link>
          <Link className="nav-item" to={ROUTES.VISIT_CHIMPANZEE}>Chimpanzee</Link> */}
        </nav>
        <div>
          HERE BE CONTENT:
          <Outlet />
        </div>
      </div>
    </Styles>
  )
}

function Animal({animal}) {
  return (
    <div>
      <h1>{animal.name}</h1>
      <p>{animal.description}</p>
      <img src={animal.image} alt={animal.name} />
    </div>
  )
}

export default Activity3