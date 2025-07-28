import React from 'react'
import CardComponent from '../components/CardComponent'
import { cardData } from '../data/Product';

const CardGrid = () => {
  const main = cardData.filter(item => item.category === 'main');
  return (
  <div className="row row-cols-1 row-cols-md-6 g-4 px-4 mx-4 py-3 bg-white">
    {main.map((card, index) => (
      <CardComponent key={index} {...card} />
    ))}
  </div>
  )
};

export default CardGrid;
