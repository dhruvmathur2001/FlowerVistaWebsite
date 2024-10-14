import logo from "../assets/Images/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext , useEffect, useState} from "react";
import { AuthContext } from "../context/AuthContext"; // Import the AuthContext
import "../App.css";
import axios from 'axios';

function Navbar() {
  const { isLoggedIn, handleLogout, Mail } = useContext(AuthContext);

  // Assuming you're fetching the current user's details
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users'); // Change endpoint if necessary
        setUser(response.data); // Assuming response contains a user object
        console.log(response.data)
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (isLoggedIn) {
      fetchUser();
    }
  }, [isLoggedIn]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-4 px-5 bg-light ">
        <div className="col-md-2 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img
              src={logo}
              className="img-fluid"
              alt="..."
              height="45px"
              width="45px"
            />
            <span className="ms-2 brandtext text-dark">FlowerVista</span>
          </a>
        </div>

        <div className="col-md-2">
          <a href="tel:+91-11-43634625" className="text-dark">
            <FaPhoneAlt className="icon-large" /> <span>+91-11-43634625</span>
          </a>
        </div>

        <form className="searchbar d-flex border rounded-3" role="search">
          <input
            type="search"
            className="form-control border-0"
            placeholder="Search"
            aria-label="Search"
            style={{ borderTopRightRadius: "0", borderBottomRightRadius: "0" }}
          />
          <button
            type="submit"
            className="btn btn-warning"
            style={{
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "0",
            }}
          >
            <FaSearch />
          </button>
        </form>

        <div className="col-md-1 text-end">
          <FaCartShopping className="icon-large" />
        </div>

        <div className="col-md-2 text-center">
          {isLoggedIn ? (
            // Profile photo and dropdown if logged in
            <div className="dropdown">
              <button
                className="btn btn-warning dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaUser size={24} />
                {/* Display user's name if available */}
                <span className="ms-2">{user[0].name || "User"}</span>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Your Orders
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Reviews
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            // Login button if not logged in
            <Link to="/login" className="btn btn-warning me-4 pe-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-person me-2"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
              Login
            </Link>
          )}
        </div>
      </header>
      <div className="container-fluid py-2 nav-bg navbt">
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a
              href="/"
              className="nav-link nav-size px-2 mx-md-2 text-light link-hover"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#ABOUT"
              className="nav-link nav-size px-2 mx-md-2 text-light link-hover"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#PRODUCTS"
              className="nav-link nav-size px-2 mx-md-2 text-light link-hover"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#REVIEWS"
              className="nav-link nav-size px-2 mx-md-2 text-light link-hover"
            >
              Reviews
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
