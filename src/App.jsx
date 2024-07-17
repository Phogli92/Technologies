import React, { useState } from "react";
import "./Component/Components.css"
import "./App.css";
import Img from "./Media/Showcase.png";
import Img2 from "./Media/about 4.png";
import Img3 from "./Media/welcome-3 1.png";
import Img4 from "./Media/about3 1.png"
import Img5 from "./Media/Group 396 (1).png"
import logo from "./Media/Group 404.png";
import Nav from "./Component/navBar";
import First from "./Component/FirstShowcase";
import Second from "./Component/SecondShowcase";
import Cards from "./Component/Cards";
import Third from "./Component/ThirdShowcase"
import Footer from "./Component/Footer"
function App() {
  let [cards, setCards] = useState([
    {
      id: 1,
      img: Img3,
      h3: "Naxly as the Winners in Global",
      p: "Lorem ipsum is placeholder text commonly used in print, and publishing industries",
    },
    {
      id: 2,
      img: Img3,
      h3: "Naxly as the Winners in Global",
      p: "Lorem ipsum is placeholder text commonly used in print, and publishing industries",
    },
    {
      id: 3,
      img: Img3,
      h3: "Naxly as the Winners in Global",
      p: "Lorem ipsum is placeholder text commonly used in print, and publishing industries",
    },
    {
      id: 4,
      img: Img3,
      h3: "Naxly as the Winners in Global",
      p: "Lorem ipsum is placeholder text commonly used in print, and publishing industries",
    },
    {
      id: 5,
      img: Img3,
      h3: "Naxly as the Winners in Global",
      p: "Lorem ipsum is placeholder text commonly used in print, and publishing industries",
    }
  ]);
  return (
    <>
      <Nav logo={Img5}/>
      <First Img={Img} logo={logo} />
      <Second Img={Img2} />
      <div className="Cards">{cards.map((e) => {
      return <Cards key={e.id} img={e.img} h3={e.h3} p={e.p}/>
      })}
      </div>
      <Third Img ={Img4}/>
      <Footer Img={Img5}/>
    </>
  );
}

export default App;
