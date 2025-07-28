import React from 'react'
import app1 from '../assets/Pictures/app1.webp' 
import app2 from '../assets/Pictures/app2.webp'

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-2">
      <div className="container text-start ms-4">
        <div className="row">
          {/* COLLECTIONS */}
          <div className="col">
            <h6>COLLECTIONS</h6>
            <div className="text-start test-light my-4">
              {[
                "Titan Automatics", "Police Batsman", "Stellar", "Raga Power Pearls",
                "Nebula Pearls", "Grandmaster", "Maritime"
              ].map((item, index) => (
                <a href='#' key={index} className="nav-link1"><p>{item}</p></a>
              ))}
            </div>
          </div>

          {/* CUSTOMER SERVICE */}
          <div className="col">
            <h6>CUSTOMER SERVICE</h6>
            <div className="text-start text-light my-4">
              {[
                "Payment Options", "Track Order", "Encircle Program", "Find Titan World Stores"
              ].map((item, index) => (
                <a href="#" key={index} className="nav-link1"><p>{item}</p></a>
              ))}
            </div>
          </div>

          {/* CONTACT US */}
          <div className="col">
            <h6>CONTACT US</h6>
            <div className="text-start text-light my-4">
              {[
                "1800-266-0123", "customercare@titan.co.in", "Help & Contact", "FAQs"
              ].map((item, index) => (
                <a href="#" key={index} className="nav-link1"><p>{item}</p></a>
              ))}
            </div>
          </div>

          {/* ABOUT TITAN */}
          <div className="col">
            <h6>ABOUT TITAN</h6>
            <div className="text-start my-4">
              {[
                "Brand Protection", "Corporate", "Careers", "Blog"
              ].map((item, index) => (
                <a href="#" key={index} className="nav-link1"><p>{item}</p></a>
              ))}
            </div>
          </div>

          {/* APP & SOCIAL */}
          <div className="col">
            <h6>DOWNLOAD TITAN WORLD APP</h6>
            <div className="container">
              <div className="row">
                <div className="col-auto">
                  <a href="#" className="nav-link1">
                    <img src={app1} alt="app store" className="img-fluid my-2" style={{ maxWidth: '150px' }} />
                  </a>
                </div>
                <div className="col-auto">
                  <a href="#" className="nav-link1">
                    <img src={app2} alt="play store" className="img-fluid" style={{ maxWidth: '150px' }} />
                  </a>
                </div>
              </div>
              <div className="text-start m-3">
                <h5>Follow Us With</h5>
              </div>
              <div className="row text-center">
                {["facebook", "instagram", "twitter-x", "youtube"].map((icon, i) => (
                  <div className="col-md-2" key={i}>
                    <a href="#" className="nav-link1"><i className={`bi bi-${icon}`}></i></a>
                  </div>
                ))}
              </div>
              <p>
                Want Help? <a href="#" className="nav-link1 d-inline"><u>Click Here</u></a>
                <a href="#" className="nav-link d-inline ms-2">Chat with us on <i className="bi bi-whatsapp"></i></a>
              </p>
              <p>Operating Hours: 10:00AM To 10:00PM</p>
              <p>Monday TO Sunday</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col text-center">
              <p>© 2025 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
