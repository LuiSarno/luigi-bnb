import React from "react"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Card from "./components/card"
import Data from "./data"

export default function App() {
    const cardElements = Data.map(item => {
        return   <Card 
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
    />
    })
    
    
    return (
      <div>
        <Navbar />
        <Hero />
        
        
        {cardElements}
        
        
        
        
        
        
        
        
        {/* <Card
          img="katie.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zaferes"
          price={136}
        />  */}
      </div>
    );
}
