import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import Data from "./data";

export default function App() {
  const cardElements = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />

      <section className="cards-list">{cardElements}</section>
    </div>
  );
}
