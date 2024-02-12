import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from './ProductCard';

function MySlider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://cute-gray-mussel-garb.cyclic.app/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const productIds = ['SP001', 'SP002', 'SP003']; 
  const filteredProducts = products.filter(product => productIds.includes(product.productId));

  
  const slidesToShow = 3;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
    <Slider {...settings}>
      {filteredProducts.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </Slider>
  );
}

export default MySlider;
