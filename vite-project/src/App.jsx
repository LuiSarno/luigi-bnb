import React from "react"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Card from "./components/card"
import Katie from "./assets/katie.png"

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card 
            img = {Katie}
            rating = "5.0"
            reviewCount = {6}
            country = "USA"
            title = "Life lessons with Katie Zaferes"
            price = {136}
            
            />
        </div>
    )
}
