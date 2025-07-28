import React from 'react'
import CardComponent from '../components/CardComponent'
import w1 from '../assets/Pictures/w4.jpg'
import w2 from '../assets/Pictures/w5.webp'
import w3 from '../assets/Pictures/w7.webp'
import w4 from '../assets/Pictures/w8.webp'
import w5 from '../assets/Pictures/w9.webp'
import w6 from '../assets/Pictures/w10.webp'
import w7 from '../assets/Pictures/w11.webp'
import w8 from '../assets/Pictures/w12.webp'
import Dropdown from '../components/Dropdown'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
const cardData = [
  {
    image: w1,
    title: 'Titan | Men\'s Watch',
    description: 'Titan Minimals Quartz analog with date...',
    price: '3,999',
    oldPrice: '5,999',
    discount: '20%',
    dropped: '2000'
  },
  {
    image: w2,
    title: 'Titan | Men\'s Watch',
    description: 'Titan Karishma Multifunction...',
    price: '2,999',
    oldPrice: '3,999',
    discount: '10%',
    dropped: '1000'
  },
  {
    image: w3,
    title: 'Titan | Unisex Watch',
    description: 'Titan Zeal with AMOLED display...',
    price: '2,560',
    oldPrice: '3,700',
    discount: '13%',
    dropped: '300'
  },
  {
    image: w4,
    title: 'Titan | Unisex Watch',
    description: 'Titan Zeal with AMOLED display...',
    price: '2,560',
    oldPrice: '3,700',
    discount: '13%',
    dropped: '300'
  },
  {
    image: w5,
    title: 'Titan | Unisex Watch',
    description: 'Titan Zeal with AMOLED display...',
    price: '2,560',
    oldPrice: '3,700',
    discount: '13%',
    dropped: '300'
  },
  {
    image: w6,
    title: 'Titan | Unisex Watch',
    description: 'Titan Zeal with AMOLED display...',
    price: '2,560',
    oldPrice: '3,700',
    discount: '13%',
    dropped: '300'
  },
  {
    image: w7,
    title: 'Titan | Unisex Watch',
    description: 'Titan Zeal with AMOLED display...',
    price: '2,560',
    oldPrice: '3,700',
    discount: '13%',
    dropped: '300'
  },
  {
    image: w8,
    title: 'Titan | Unisex Watch',
    description: 'Titan Zeal with AMOLED display...',
    price: '2,560',
    oldPrice: '3,700',
    discount: '13%',
    dropped: '300'
  },
  // Add more card data similarly...
];

const Sale = () => (
  <div style={{paddingTop:'90px'}}>
    <Navbar/>
    <Dropdown/>
    <div
    style={{
      position: 'absolute',
      top: '10px',
      left: '10px',
      backgroundColor: 'orange',
      color: 'white',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: 'bold',
      zIndex: 1000
    }}
  >
    SALE
  </div>
    <div className="underline-full"></div>
    <div>
      <Link to="/" className='text-decoration-none text-dark me-2'>Home</Link><i class="bi bi-chevron-double-right"></i>
      <b>Sale</b>
    </div>
    <div className="row row-cols-1 row-cols-md-4 g-4 px-4 mx-4 py-3 bg-white">
    {cardData.map((card, index) => (
      <CardComponent key={index} {...card} />
    ))}
  </div>
  <Footer/>
  </div>
);

export default Sale