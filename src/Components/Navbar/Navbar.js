import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; 

function Navbar() {
  const [electronicsDropdownOpen, setElectronicsDropdownOpen] = useState(true); 
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(true); 
  const [tvDropdownOpen, setTvDropdownOpen] = useState(true); 
  const [washingMachineDropdownOpen, setWashingMachineDropdownOpen] = useState(true); 

  const toggleElectronicsDropdown = () => setElectronicsDropdownOpen(!electronicsDropdownOpen);
  const toggleMobileDropdown = () => setMobileDropdownOpen(!mobileDropdownOpen);
  const toggleTvDropdown = () => setTvDropdownOpen(!tvDropdownOpen);
  const toggleWashingMachineDropdown = () => setWashingMachineDropdownOpen(!washingMachineDropdownOpen);

  return (
    <>
      {/* Red navbar */}
      <nav className="red-navbar">
        <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="RD Logo" className="rd-logo" />
        <div className="search-box">
          <input type="text" placeholder="Search" />
          
        </div>
        <div className="signup-login-buttons">
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </nav>



    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={toggleElectronicsDropdown}>
            MOBILE & ELECTRONICS
          </a>
          {electronicsDropdownOpen && (
            <ul className="dropdown">
              <li className="dropdown-item">Smartphones</li>
              <li className="dropdown-item">Smartwatches</li>
              <li className="dropdown-item">Apple</li>
              <li className="dropdown-item">Samsung</li>
              <li className="dropdown-item">Firboult</li>
              <li className="dropdown-item">Noise</li>
              <li className="dropdown-item">Boat</li>
              <li className="dropdown-item">Accessories</li>
              <li className="dropdown-item">Tablet Accessories</li>
              <li className="dropdown-item">Mobile Accessories</li>
              <li className="dropdown-item">Mobile Stand</li>
              <li className="dropdown-item">Memory Card</li>
              <li className="dropdown-item">Cable</li>
              <li className="dropdown-item">Chargers</li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={toggleMobileDropdown}>
            TELEVISION
          </a>
          {mobileDropdownOpen && (
            <ul className="dropdown">
              <li className="dropdown-item">Televisions</li>
              <li className="dropdown-item">Smart Tv</li>
              <li className="dropdown-item">32 Inch TV</li>
              <li className="dropdown-item">43 Inch Tv</li>
              <li className="dropdown-item">55 Inch Tv</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={toggleTvDropdown}>
            AUDIO
          </a>
          {tvDropdownOpen && (
            <ul className="dropdown">
              <li className="dropdown-item">LED TV</li>
              <li className="dropdown-item">Smart TV</li>
              <li className="dropdown-item">Plasma TV</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={toggleWashingMachineDropdown}>
            HOME APPLIANCES
          </a>
          {washingMachineDropdownOpen && (
            <ul className="dropdown">
              <li className="dropdown-item">Top Load</li>
              <li className="dropdown-item">Front Load</li>
              <li className="dropdown-item">Semi-Automatic</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link" onClick={toggleWashingMachineDropdown}>
            COMPUTER
          </a>
          {washingMachineDropdownOpen && (
            <ul className="dropdown">
              <li className="dropdown-item">Top Load</li>
              <li className="dropdown-item">Front Load</li>
              <li className="dropdown-item">Semi-Automatic</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link" onClick={toggleWashingMachineDropdown}>
            CAMERAS
          </a>
          {washingMachineDropdownOpen && (
            <ul className="dropdown">
              <li className="dropdown-item">Top Load</li>
              <li className="dropdown-item">Front Load</li>
              <li className="dropdown-item">Semi-Automatic</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link" onClick={toggleWashingMachineDropdown}>
            KITCHEN APPLIANCES
          </a>
          {washingMachineDropdownOpen && (
            <ul className="dropdown">
              <li className="dropdown-item">Top Load</li>
              <li className="dropdown-item">Front Load</li>
              <li className="dropdown-item">Semi-Automatic</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link" onClick={toggleWashingMachineDropdown}>
            PERSONAL CARE
          </a>
          {washingMachineDropdownOpen && (
            <ul className="dropdown">
              <li className="dropdown-item">Top Load</li>
              <li className="dropdown-item">Front Load</li>
              <li className="dropdown-item">Semi-Automatic</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link" onClick={toggleWashingMachineDropdown}>
            ACCESSORIES
          </a>
          {washingMachineDropdownOpen && (
            <ul className="dropdown">
              <li className="dropdown-item">Top Load</li>
              <li className="dropdown-item">Front Load</li>
              <li className="dropdown-item">Semi-Automatic</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
              <li className="dropdown-item">Example Data</li>
            </ul>
          )}
        </li>


      </ul>
    </nav>
    </>
  );
}

export default Navbar;
