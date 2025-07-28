import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Location from '../components/Location'
import Dropdown from '../components/Dropdown'
import CardGrid from '../components/CardGrid'
import Footer from '../components/Footer'
import Caro from  '../assets/Pictures/img1.webp'
import Brand from '../components/Brand'
import Container from '../components/container'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div  style={{paddingTop:'90px'}}>
      <Navbar/>
      <Dropdown/>
      <Location/>
      <Carousel/>
      <div style={{ padding: '90px' }}>
        <Link to="/nebula"><img src={Caro} className="img-fluid w-100" style={{ borderRadius: '10px' }} ></img></Link>
      </div>
      <p className='ps-5 fs-3'>Best Sellers</p>
      <CardGrid/>
      <Brand/>
      <Container/>
      <Footer/>
    </div>
  )
} 

export default Home
