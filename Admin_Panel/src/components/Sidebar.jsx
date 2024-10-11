// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  // State to track the active link
  const [activeLink, setActiveLink] = useState('/dashboard'); // Set default to '/dashboard'

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar-height" style={{ width: '280px' }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">Admin-Panel</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <Link
            to="/dashboard"
            className={`nav-link text-white ${activeLink === '/dashboard' ? 'active' : ''}`}
            onClick={() => setActiveLink('/dashboard')} // Update state on click
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2" />
            </svg>
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/orders"
            className={`nav-link text-white ${activeLink === '/orders' ? 'active' : ''}`}
            onClick={() => setActiveLink('/orders')} // Update state on click
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#table" />
            </svg>
            Orders
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className={`nav-link text-white ${activeLink === '/products' ? 'active' : ''}`}
            onClick={() => setActiveLink('/products')} // Update state on click
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#grid" />
            </svg>
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/customers"
            className={`nav-link text-white ${activeLink === '/customers' ? 'active' : ''}`}
            onClick={() => setActiveLink('/customers')} // Update state on click
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#people-circle" />
            </svg>
            Customers
          </Link>
        </li>
        <li>
          <Link
            to="/reviews"
            className={`nav-link text-white ${activeLink === '/reviews' ? 'active' : ''}`}
            onClick={() => setActiveLink('/reviews')} // Update state on click
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#grid" />
            </svg>
            Reviews
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
