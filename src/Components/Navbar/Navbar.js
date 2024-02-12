import React from 'react';
import './Navbar.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Navbar() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="navbar">
      <div id="rednav">
        <div>
          <img
            src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
            alt="Reliance Digital Logo"
          />
        </div>
        <div>
          <input
            type="search"
            id="storeSearch"
            placeholder="Find your favourite products"
          />
          <button id="search">
            <i className="fa fa-search fa-lg" aria-hidden="true"></i>
          </button>
        </div>
        <div>
          <a href="#">
            <span><i className="fa fa-map-marker"></i></span>Select your location
          </a>
          <a href="#" className="separator">
            <span><i className="fa fa-shopping-cart"></i></span>Cart
          </a>
          <a href="#">
            <span><i className="fas fa-user-alt"></i></span>Login
          </a>
        </div>
      </div>
      
      <div className='bluenav'>
        <Slider {...settings}>
          <div className='nav-list'>
            <ul>
              <li>Mobile & Tablet</li>
              <div className="dropdown">
                <div className="dropdown-item">Smartphones</div>
                <div className="dropdown-item">Smartwatches</div>
                
              </div>
            </ul>
          </div>
          
          <div className='nav-list'>
            <ul>
              <li>Television</li>
              <div className="dropdown">
                <div className="dropdown-item">Item 1</div>
                <div className="dropdown-item">Item 2</div>
              </div>
            </ul>
          </div>
          
          
          
        </Slider>
      </div>
    </div>
  );
}

export default Navbar;
