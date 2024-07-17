import React from "react";
import "./Components.css";

export default function FirstShowcase(props) {
  return (
    <>
      <div className="Showcase">
        <div className="text">
          <h3>Next genaretion platform</h3>
          <h1>Artificial intelligence & Syber security</h1>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <div className="buttons">
            <button>Get Started</button>
            <button>Watch Video</button>
          </div>
        </div>
        <div className="img">
          <img src={props.Img} alt="" />
        </div>
      </div>
        <div className="Logos">
            <img src={props.logo} alt="" />
        </div>
    </>
  );
}
