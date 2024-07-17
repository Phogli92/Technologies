import React from 'react'
import './Components.css'

export default function ThirdShowcase(props) {
  return (
    <>
     <div className="Showcase">
        <div className="text">
          <h1>What our clients say about our awesome solutions</h1>
          <p>
          To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.
          </p>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .</p>
          <p>Lorem ipsum is placeholder previewing layouts and visual mockups.</p>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

        </div>
        <div className="img">
          <img src={props.Img} alt="" />
        </div>
      </div>
    </>
  )
}
