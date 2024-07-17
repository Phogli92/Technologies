import "./Components.css";
import React from "react";

export default function Footer(props) {
  return (
    <>
      <div className="LineBoss">
        <div className="line">
          <div className="logo">
            <img src={props.Img} alt="" />
            <h4>Artificial Intelligence</h4>
          </div>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and layouts and visual mockups.
          </p>
          <div className="contact">
            <a href="Company@gmail.com">Company@gmail.com</a>
            <a href="(064) 332-1233">Phone: (064) 332-1233</a>
            <a href="https://www.google.com/maps">
              450 Wall Street, USA, New York
            </a>
          </div>
        </div>
        <div className="column">
          <ul>
            <h3>INFORMATION</h3>
            <li>New Collection</li>
            <li>About Store</li>
            <li>Contact Us</li>
            <li>Latest News</li>
            <li>Our Sitemap</li>
            <li>Orders History</li>
          </ul>
        </div>
        <div className="column">
          <ul>
            <h3>FOOTER MENU</h3>
            <li>Instagram profile</li>
            <li>New Collection</li>
            <li>Contact Us</li>
            <li>Latest New</li>
            <li>Terms & Conditions</li>
            <li>Purchase Theme</li>
          </ul>
        </div>
        <div className="column">
          <ul>
            <h3>USEFUL LINKS</h3>
            <li>Instagram profile</li>
            <li>New Collection</li>
            <li>Contact Us</li>
            <li>Latest News</li>
            <li>Terms & Conditions</li>
            <li>Purchase Theme</li>
          </ul>
        </div>
        <div className="column">
            <h3>ABOUT THE STORE</h3>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>
            <a href="www.company.com">www.company.com</a>
    
        </div>
      </div>
    </>
  );
}
