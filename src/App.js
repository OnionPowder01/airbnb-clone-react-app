import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Data from "./components/Data"
import React from 'react';

export default function App() {
  const cardsData = Data.map(everyCard => {
    return <Card
    img={everyCard.coverImg}
    rating={everyCard.stats.rating}
    reviewCount={everyCard.stats.reviewCount}
    location={everyCard.location}
    title={everyCard.title}
    price={everyCard.price}
    />
  })

  return (
    <div className="big-container">
      <Navbar />
      <Hero />
      <section className="cards-list">
      {cardsData}
      </section>
    </div>
  );
}



