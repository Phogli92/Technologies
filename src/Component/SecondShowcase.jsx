import React from "react";
import "./Components.css";

export default function SecondShowcase(props) {
  return (
    <>
      <div className="Showcase">
        <div className="img">
          <img src={props.Img} alt="" />
        </div>
        <div className="text">
          <h1>Apply AI, Deep Learning and Data Sciece to solve</h1>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <div className="buttons">
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}
