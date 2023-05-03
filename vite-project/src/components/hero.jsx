import React from "react"
import Group from "../assets/groupimage.png"

export default function HeroSection(props) {

    return (
    <section className="hero" >
        <img src = {Group} className="hero--banner"></img>
        <h1 className="hero--title">Online Experiences</h1>
        <p className="hero--hook">Join unique interactive activities led by 
        one-of-a-kind hosts—all without leaving home.
</p>
    </section>
    )
}