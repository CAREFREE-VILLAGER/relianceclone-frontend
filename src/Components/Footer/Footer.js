import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>PRODUCT CATEGORIES</h3>
          <ul>
            <li><a href="#">Smartphones</a></li>
            <li><a href="#">Laptops</a></li>
            <li><a href="#">DSLR Cameras</a></li>
            <li><a href="#">Televisions</a></li>
            <li><a href="#">Air conditioners</a></li>
            <li><a href="#">Refrigerators</a></li>
            <li><a href="#">Kitchen Applinces</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Personal Care and Grooming</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>SITE INFO</h3>
          <ul>
            <li><a href="#">About Reliance Digital</a></li>
            <li><a href="#">resQ Services</a></li>
            <li><a href="#">Site Map</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Corporate Enquires</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>RESOURCE CENTRE</h3>
          <ul>
            <li><a href="#">Product Reviews</a></li>
            <li><a href="#">Buying Guides</a></li>
            <li><a href="#">How Tos</a></li>
            <li><a href="#">Featured Stories</a></li>
            <li><a href="#">Events and Happenings</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>POLICIES</h3>
          <ul>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Cancellation and return policy</a></li>
            <li><a href="#">Pricing and payment policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">E-waste policy</a></li>
            <li><a href="#">EMI and additional cashback T&C</a></li>
            <li><a href="#">RelianceOne Loyalty Program T&C</a></li>
          </ul>
        </div>
      </div>
      <div className="social-media-container">
        <div>
          <h3>FOLLOW US</h3>
          <a href="http://www.facebook.com/pages/Reliance-Digital/123437217685421"><i className="fab fa-facebook-square"></i></a>
          <a href="http://www.twitter.com/reliancedigital"><i className="fab fa-twitter"></i></a>
          <a href="https://www.youtube.com/reliancedigital"><i className="fab fa-youtube"></i></a>
        </div>
        <div>
          <h3>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</h3>
          <a href="https://play.google.com/store/apps/details?id=in.digital.reliance"><img src="https://www.reliancedigital.in/build/client/images/google_play_store.png" alt="Google Play Store" /></a>
          <a href="https://apps.apple.com/in/app/reliance-digital-shopping-app/id1513379107"><img src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png" alt="iOS App Store" /></a>
        </div>
      </div>
      <div className="disclaimer-section">
        <p>Disclaimer</p>
        <p>Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.</p>
        <p>&copy; 2022 Reliance Digital. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
