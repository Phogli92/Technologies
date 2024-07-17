import React from "react";
import './Components.css'
export default function navBar(props) {
  return (
    <>
      <div className="Navbar">
        <div className="logo">
          <img src={props.logo} alt="" />
          <h3>Artificial Intelligence</h3>
        </div>
        <div className="links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="buttons"><button>Sign In</button></div>
      </div>
    </>
  );
}
