import logo from "../assets/Images/logo.png";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    emailid: "",
    password: "",
    reenterpassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.reenterpassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    setErrorMessage(""); 

    try {
      const response = await axios.post(
        'http://localhost:5000/api/users/add',
        user
      ); 
      console.log(response.data); 
      alert("User added Successfully")
      navigate('/login');
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "An error occurred while submitting the form. Please try again."
      );
    }
  };

  return (
    <>
      <div className="text-center mt-5">
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
      <div className="container-fluid my-5 d-flex justify-content-center">
        <div className="container p-5 border border-dark col-md-6">
          <h2 className="text-center">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                required
              />
            </div>

            {/* Mobile Number Field */}
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                Mobile Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                name="mobile"
                placeholder="Enter your mobile number"
                onChange={handleChange}
                required
              />
            </div>

            {/* Email ID Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email ID
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="emailid"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />
            </div>

            {/* Re-enter Password Field */}
            <div className="mb-3">
              <label htmlFor="reenterPassword" className="form-label">
                Re-enter Password
              </label>
              <input
                type="password"
                className="form-control"
                id="reenterPassword"
                name="reenterpassword"
                placeholder="Re-enter your password"
                onChange={handleChange}
                required
              />
            </div>

            {errorMessage && (
              <div className="text-danger mb-3">{errorMessage}</div>
            )}

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
