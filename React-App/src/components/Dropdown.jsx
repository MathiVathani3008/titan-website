import React from 'react'
import men from '../assets/Pictures/men1.webp'
import women from '../assets/Pictures/women1.jpg'
import watches from '../assets/Pictures/Watches1.webp'
import smart from '../assets/Pictures/smartwatches1.webp'
import premium from '../assets/Pictures/premiumwatches.webp'
import more from '../assets/Pictures/moreoption.webp'
import interna from '../assets/Pictures/internationalbrand.webp'
import gift from '../assets/Pictures/gifting.webp'
import { Link } from 'react-router-dom';

const dropdownData = [
  {
    label: 'MEN',
    items: ['View All', 'New Arrivals', 'Trending', 'Smart Watches', 'Shop By Looks', 'Shop By color','Shop By Brand', 'Shop By Collection', 'Shop By Function', 'Shop By Movement','Shop By Price', 'Shop By Dial',
    ],
    img:men,
  },
  {
    label: 'WOMEN',
    items: ['View All', 'New Arrivals', 'Smart Watches', 'Shop By Looks', 'Shop By color','Shop By Brand', 'Shop By Collection', 'Shop By Function', 'Shop By Movement','Shop By Price', 'Shop By Dial',
    ],
    img:women,
  },
  {
    label: 'SMART WATCHES',
    items: ['View All', 'Shop By Feature', 'Shop By Brand', 'Shop By Color', 'Shop By Price','Shop By Collection', 'Shop By Gender', 'Shop By Dial',
    ],
    img:smart,
  },
  {
    label: 'PREMIUM WATCHES',
    items: ['View All', 'XYLYS', 'Nebula', 'Edge'],
    img: premium,
  },
  {
    label: 'WATCHES',
    items: ['View All', 'New Arrivals', 'Best Sellers', 'Shop By Function', 'Shop By Collection','Shop by Strap', 'Shop By Price', 'Shop By Dial',
    ],
    img:watches,
  },
  {
    label: 'INTERNATIONAL BRANDS',
    items: ['View All', 'New Arrivals', 'Best Sellers', 'Police', 'Tommy Hilfifer','Kenneth Cole', 'Anne Klein',
    ],
    img:interna,
  },
];

const NavDropdown = ({ label, items, img }) => (
  
  <li className="nav-item dropdown">
    
    <Link className="nav-link px-4" to={`/${label.toLowerCase().split(' ')[0]}`} role="button">{label}</Link>
    <div className="dropdown-menu p-3" style={{ width: '900px' }}>
      <div className="row">
        <div className="col-5 p-4">
          {items.map((item, idx) => (
            <a key={idx} className="dropdown-item" href="#">{item}</a>
          ))}
        </div>
        <div className="col-7 text-center">
          <img src={img} className="img-fluid" alt={label} />
        </div>
      </div>
    </div>
  </li>
);

const Dropdown = () => (
  <nav className="navbar navbar-expand bg-body-white border-top">
    <ul className="navbar-nav mx-auto nav-category">
      
      {dropdownData.map((data, i) => (
        <NavDropdown key={i} {...data} />
      ))}
      <li className="nav-item">
        <Link to="/GIFTS" className="nav-link px-4">GIFTS</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link px-4" href="#">MORE</a>
      </li>
      <li className="nav-item">
        <Link to="/Sale" className="nav-link px-4" href="#">SALE</Link>
      </li>
      <li className="nav-item">
        <Link  to="/Service" className="nav-link px-4" href="#">WATCH SERVICE</Link>
      </li>

    </ul>
  </nav>
);

export default Dropdown;


