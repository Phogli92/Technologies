import React from 'react'
import './Components.css'

export default function Cards(props) {
  return (
    <>
        <div className="card">
            <div className="img"><img src={props.img} alt="" /></div>
            <div className="text">
                <h3>{props.h3}</h3>
                <p>{props.p}</p>
            </div>
        </div>
    </>
  )
}
