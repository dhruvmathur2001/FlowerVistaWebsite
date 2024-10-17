import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  AiFillDashboard,
  AiOutlineTable,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineStar,
} from "react-icons/ai";
import { FaSignOutAlt } from 'react-icons/fa';

import "../../styles/profile.css"; // Assuming you have your custom CSS here

const UserSidebar = () => {
  const [activeLink, setActiveLink] = useState("/dashboard"); // Set default to '/dashboard'
  const { user, handleLogout } = useContext(AuthContext);

  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-sidebar profile-height sidebar-width">
        <div className="container-fluid p-3  ">
          <a
            href="#"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <AiOutlineUser size={40} className="me-2" /> 
            <span className="fs-4">{user?.name}</span>
          </a>
        </div>
        <hr />
        <div className="container-fluid p-3">
          <ul className="nav nav-pills flex-column mb-auto ">
            <li>
              <Link
                to="/profile/"
                className={`nav-link text-dark ${
                  activeLink === "/dashboard" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/dashboard")}
              >
                <AiFillDashboard size={22} className="me-2" />
                Your Profile
              </Link>
            </li>
            <li>
              <Link
                to="/orders"
                className={`nav-link text-dark ${
                  activeLink === "/orders" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/orders")}
              >
                <AiOutlineShoppingCart size={24} className="me-2" />
                Your Orders
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`nav-link text-dark ${
                  activeLink === "/products" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/products")}
              >
                <AiOutlineTable size={24} className="me-2" />
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/users"
                className={`nav-link text-dark ${
                  activeLink === "/users" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/users")}
              >
                <AiOutlineUser size={23} className="me-2" />
                Users
              </Link>
            </li>
            <li>
              <Link
                to="/reviews"
                className={`nav-link text-dark ${
                  activeLink === "/reviews" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/reviews")}
              >
                <AiOutlineStar size={22} className="me-2" />
                Reviews
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-auto">
          <hr />
        <Link className="text-dark d-flex align-items-center justify-content-center" to="/" onClick={handleLogout}>
        <FaSignOutAlt size={20} /><span className="ps-2"> Logout</span>
        </Link>
        </div>
      </div>
    </>
  );
};

export default UserSidebar;
