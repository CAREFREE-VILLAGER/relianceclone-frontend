import React from 'react'; 
import './Navbar.css'; 
import { FaSearch, FaMapMarkerAlt, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 

const Navbar = () => {
  const navigate = useNavigate();

  const loggedInEmail = localStorage.getItem('loggedInEmail');

  const handleLogout = () => {
    localStorage.removeItem('loggedInEmail'); 
    navigate('/login'); 
  };

  
  const goToHome = () => {
    navigate('/'); 
  };

  return (
    <nav>
      {/* Red box */}
      <div id="rednav">
        <div>
          <img
            src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
            alt="Reliance Digital Logo"
            onClick={goToHome} 
            style={{ cursor: 'pointer' }} 
          />
        </div>
        <div>
          <input
            type="search"
            id="storeSearch"
            placeholder="Find your favourite products"
          />
          <button id="search">
            <FaSearch aria-hidden="true" />
          </button>
        </div>
        <div>
          <a href="#">
            <span><FaMapMarkerAlt /></span> Select your location
          </a>
          
          <a href="#" className="saperator">
            <span><FaShoppingCart /></span> Cart
          </a>

          
          {loggedInEmail ? (
            <>
              <span className="saperator"></span>
              <span>Welcome, {loggedInEmail}</span>
              <button onClick={handleLogout} className="logout-button">Logout</button>
            </>
          ) : (
            
            <>
              <a href="/login">
                <span><FaUserAlt /></span> Login
              </a>
              <span className="saperator"></span> 
              <a href="/register">Register</a>
            </>
          )}
        </div>
      </div>


      {/* Blue box */}
      <div id="bluenav">
        <button id="mobile" className="dropdown">
          Mobile & Tablets <span className="arrow">˅</span>
        </button>

        
        <div className="drop-menu mobile">
          <div>
            <ul>
              Smartphones
              <li>OnePlus Nord 2T 5G</li>
            </ul>
            <ul>
              Wearable Technology
              <li>Smart Watch Accessories</li>
            </ul>
            <ul>
              Accessories
              <li>Tablet Accessories</li>
              <li>Mobile Accessories</li>
              <li>Mobile Grips & Stands</li>
              <li>Car Mobile Holders</li>
            </ul>
          </div>
          <div>
            <ul>
              Headphones & Headsets
            </ul>
            <ul>
              Tablets & eReaders
              <li>Every Day use Tablets below 15000</li>
              <li>Premium Tablets, Above 15001</li>
            </ul>
            <ul>Power Banks</ul>
            <ul>eSlates</ul>
          </div>
          <div>
            <ul>AI Learning Robots</ul>
          </div>
        </div>

        <button id="television" className="dropdown">
          Televisions <span className="arrow">˅</span>
        </button>

        
        <div className="drop-menu">
          <div>
            <ul>
              Televisions
              <li>Smart TVs</li>
              <li>32 Inch TVs</li>
              <li>43 Inch TVs</li>
              <li>55 Inch TVs</li>
              <li>Android TVs</li>
            </ul>
          </div>
          <div>
            <ul>
              Gaming
              <li>Gaming Consoles</li>
              <li>Gaming Accessories</li>
              <li>Gaming Titles</li>
            </ul>
            <ul>Projectors</ul>
            <ul>Streaming Devices</ul>
          </div>
          <div>
            <ul>Reconnect Disney | Marvel Audio Collection</ul>
            <ul>
              TV & Audio Accessories
              <li>Virtual Reality Headsets</li>
              <li>Stabilizers & Surge Protectors</li>
              <li>Power Strips & Extension Cords</li>
            </ul>
            <ul>
              Electronic Musical Instruments
              <li>Musical Mini Keyboards</li>
              <li>Musical Standard Keyboards</li>
            </ul>
          </div>
        </div>

        <button className="dropdown">
          Headphones and & Speakers <span className="arrow">˅</span>
        </button>

        
        <div className="drop-menu">
          <div>
            <ul>
              Headphones & Headsets
              <li>True Wireless</li>
              <li>Bluetooth Neckbands</li>
              <li>Wired Earphones</li>
              <li>On Ear Headphones</li>
              <li>Noise Cancelling Headphones</li>
            </ul>
          </div>
          <div>
            <ul>
              Bluetooth & WiFi Speakers
              <li>Bluetooth Speakers</li>
              <li>Smart Speakers</li>
            </ul>
          </div>
          <div>
            <ul>
              TV Speakers & Soundbars
              <li>Soundbars</li>
              <li>Home Theatre Systems</li>
              <li>Party speakers</li>
              <li>Multimedia</li>
              <li>Audio, Speaker Stands</li>
            </ul>
            <ul>Musical Instruments</ul>
          </div>
        </div>

        <button className="dropdown">
          Home Appliances <span className="arrow">˅</span>
        </button>

        
        <div className="drop-menu">
          <div>
            <ul>
              Air Conditioners
              <li>Split Air Conditioners</li>
              <li>Window Air Conditioners</li>
              <li>Smart Air Conditioners</li>
              <li>Energy Efficient Air Conditioners</li>
              <li>1 ton Air Conditioners</li>
              <li>1.5 ton Air Conditioners</li>
              <li>5 star Air Conditioners</li>
            </ul>
            <ul>Air Coolers</ul>
            <ul>Air Purifiers</ul>
          </div>
          <div>
            <ul>
              Washing Machines
              <li>Fully Automatic Front Load</li>
              <li>Fully Automatic Top Load</li>
              <li>Semi-Automatic Top Load</li>
              <li>Washing Machine Detergents & Liquids</li>
            </ul>
            <ul>
              Refrigerators
              <li>Single Door</li>
              <li>Double Door</li>
              <li>Side by Side Refrigerators</li>
              <li>Convertible</li>
            </ul>
          </div>
          <div>
            <ul>
              Vacuum Cleaners
              <li>Robotic Vacuum Cleaners</li>
            </ul>
            <ul>Dishwashers</ul>
            <ul>Fans</ul>
            <ul>Cloth Dryers</ul>
            <ul>Geysers</ul>
            <ul>Room Heaters</ul>
          </div>
        </div>

        <button id="computer" className="dropdown">
          Computers <span className="arrow">˅</span>
        </button>

        
        <div className="drop-menu computer">
          <div>
            <ul>
              Laptops
              <li>Basic use laptops</li>
              <li>Student Laptops</li>
              <li>Thin and light Laptops</li>
              <li>Multi-Tasking Laptops</li>
              <li>Gaming Laptops</li>
              <li>Content creator Laptops</li>
            </ul>
            <ul>Desktops & All-In-Ones</ul>
            <ul>Computer Monitors</ul>
          </div>
          <div>
            <ul>Bluetooth & WiFi Speakers</ul>
            <ul>
              Internet Connectivity Devices
              <li>Wireless Hotspot</li>
              <li>Routers</li>
              <li>WiFi Range Extenders</li>
            </ul>
            <ul>Printers</ul>
            <ul>Toners & Ink Cartridges</ul>
            <ul>
              Data Storage Devices
              <li>Pen Drives & OTG Drives</li>
              <li>Hard Drives & SSD</li>
            </ul>
          </div>
          <div>
            <ul>
              Computer Accessories
              <li>Upto 72% Off, Only on Reliancedigital.in</li>
              <li>Computer Networking Cables</li>
              <li>Laptop Chargers & Adaptor</li>
              <li>Hubs & Docks</li>
              <li>Laptop Bags & Sleeves</li>
              <li>Laptop Cooling Pad</li>
              <li>Laptop Screen Protectors</li>
              <li>Laptop Tables & Stands</li>
            </ul>
            <ul>
              Input Devices
              <li>Keyboards</li>
              <li>Computer Mouse</li>
              <li>Mousepads</li>
              <li>Stylus Pens</li>
            </ul>
          </div>
        </div>

        <button className="dropdown">Cameras <span className="arrow">˅</span></button>
      </div>
    </nav>
  );
};

export default Navbar;
