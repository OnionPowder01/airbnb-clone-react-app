import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Data from "./components/Data";
import React from "react";

export default function App() {
  const cardsData = Data.map((item) => {
    console.log(item)
    return <Card 
              key={item.id} 
              item={item} />;
    
  });

  return (
    <div className="big-container">
      <Navbar />
      <Hero />
      <section className="cards-list">{cardsData}</section>
    </div>
  );
}
