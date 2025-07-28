import React from 'react'
import CardComponent from '../components/CardComponent'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown'
import { cardData } from '../data/Product';



const SmartWatches = () => {
  const SmartWatches = cardData.filter(item => item.category === 'smartwatches');
  return (
    <div style={{paddingTop:'90px'}}>
    <Navbar/>
    <Dropdown/>
    <div className="underline-full"></div>
    <div>
      <Link to="/" className='text-decoration-none text-dark me-2'>Home</Link><i class="bi bi-chevron-double-right"></i>
      <b>Smart Watches</b>
    </div>
    <div className="row row-cols-1 row-cols-md-4 g-4 px-4 mx-4 py-3 bg-white">
    {SmartWatches.map((card, index) => (
      <CardComponent key={index} {...card} />
    ))}
  </div>
  <Footer/>
  </div>
  )
}

export default SmartWatches
