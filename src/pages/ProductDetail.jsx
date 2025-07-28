
import React from 'react';
import { useParams } from 'react-router-dom';
import { cardData } from '../data/Product';
import { useCart } from '../Context/CartContext'
import Dropdown from '../components/Dropdown';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link ,useNavigate} from 'react-router-dom';
import i1 from '../assets/Pictures/c1.svg'
import i2 from '../assets/Pictures/c2.svg'
import i3 from '../assets/Pictures/c3.svg'
import i4 from '../assets/Pictures/c4.svg'
import i5 from '../assets/Pictures/c5.svg'
const ProductDetail = () => {
  const { id } = useParams();
  const product = cardData.find(item => item.id.toString() === id);
  const { addToCart, isInCart } = useCart();
  const navigate = useNavigate();

  if (!product) return <h2 className="text-center mt-5">Product not found</h2>;

  return (
    <div style={{paddingTop:'90px'}}>
      <Navbar/>
      <Dropdown/>
      <div className="underline-full"></div>
      <div className='ps-5'>
        <Link to="/" className='text-decoration-none text-dark me-2'>Home</Link><i class="bi bi-chevron-right"></i>{product.category}<i class="bi bi-chevron-right"></i><b>{product.title}</b>
      </div>
    <div className="container-fluid vh-100">
      <div className="row h-75">
        <div className='col-md-1'></div>
        <div className="col-md-5 d-flex  justify-content-center  w-90">
          <img src={product.image} alt={product.title} className="img-fluid rounded" />
        </div>
        <div className="col-md-5 d-flex flex-column ">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.description}</p>
          <h4 className="text-dark">
            MRP<i className="bi bi-currency-rupee"></i>{product.price}.00
          </h4><br></br><br></br>
          <div className="container text-center">
            <div className="row">
              <div
                  className="col p-3 border rounded mx-2 add-to-cart-box"
                  style={{
                    backgroundColor: isInCart(product.id) ? '#f3f3f3' : '',
                    color: isInCart(product.id) ? 'gray' : '',
                    cursor: isInCart(product.id) ? '' : 'pointer'
                  }}
                  onClick={() => {
                    if (!isInCart(product.id)) addToCart(product);
                    else {
                            navigate('/cart');
                          }
                  }}
                >
                  {isInCart(product.id) ? 'Go to Cart' : 'Add to Cart'}
                </div>
              <div className="col p-3 border rounded mx-2 text-white buy-now-box" style={{ backgroundColor: 'orange', cursor: 'pointer' }} onClick={() => navigate('/checkout')}>
               Buy Now 
              </div>
            </div>
          </div>
          <div className="container text-start  fs-6 border pt-3 bg-light mt-5">
            <div className="row">
              <div className="row">
                {[i1, i2, i3, i4, i5].map((icon, idx) => (
                  <div className="col text-start" key={idx}>
                    <img src={icon} alt="" />
                    <p>{['24 Months Warranty', 'Free Shipping Countryside', 'Easy Return', 'Pay On Delivery Available', 'Serviced Across India'][idx]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-1'></div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ProductDetail;
