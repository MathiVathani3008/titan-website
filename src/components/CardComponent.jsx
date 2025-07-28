import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../Context/WishlistContext';

const CardComponent = ({ id, image, title, description, price }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleWishlistClick = (e) => {
    e.preventDefault(); // Prevent Link from navigating when heart is clicked
    if (isInWishlist(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist({ id, image, title, description, price });
    }
  };

  return (
    <div className="col">
      <div className="card h-100 border-0 position-relative CardHoverLift">

        {/* Heart Icon */}
        <i
          className={`bi position-absolute top-0 end-0 m-2 fs-5 ${
            isInWishlist(id) ? 'bi-heart-fill text-danger' : 'bi-heart'
          }`}
          style={{ cursor: 'pointer', zIndex: 1 }}
          onClick={handleWishlistClick}
        ></i>

        {/* Card Content */}
        <Link to={`/product/${id}`} className="text-decoration-none text-dark">
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-body">
            <p className="card-text text-secondary">
              <b className="text-dark">{title}</b><br />{description}
            </p>
            <i className="bi bi-currency-rupee"></i><b>{price}</b>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardComponent;
