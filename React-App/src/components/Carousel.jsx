import React from 'react'
import watch from '../assets/premium/ci3.webp'
import watch1 from '../assets/premium/ci1.jpg'
import watch2 from '../assets/premium/ci4.webp'
import watch3 from '../assets/premium/ci5.webp'

const Carousel = () => {
  return (
    <div>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1500">
      <img src={watch} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="1500">
      <img src={watch1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="1500">
      <img src={watch2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item active" data-bs-interval="1500">
      <img src={watch3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      
    </div>
  )
}

export default Carousel
