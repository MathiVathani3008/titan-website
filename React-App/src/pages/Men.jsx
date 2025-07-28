// src/pages/Men.jsx
import React from 'react';
import { cardData } from '../data/Product';
import CardComponent from '../components/CardComponent';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown'

const Men = () => {
  const menWatches = cardData.filter(item => item.category === 'men');

  return (
    <div style={{paddingTop:'90px'}}>
      <Navbar/>
      <Dropdown/>
      <div className="underline-full"></div>
      <div>
        <Link to="/" className='text-decoration-none text-dark me-2'>Home</Link><i class="bi bi-chevron-double-right"></i>
        <b>Men</b>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4 px-4 mx-4 py-3 bg-white">
        {menWatches.map(item => (
          <CardComponent key={item.id} {...item} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Men;

