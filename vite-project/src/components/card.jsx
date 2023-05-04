import React from "react"
//import katie from "../assets/katie.png"
import star from "../assets/star.png"

export default function Card(props) {
  return (
    <div className="card">
      <img src={`public/images/${props.img}`} className="card--image"></img>
      <div className="card--stats">
        <img src={star} className="card--star"></img>
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount}) •</span>
        <span className="grey">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  );
}