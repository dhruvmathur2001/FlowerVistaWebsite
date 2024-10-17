import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import logo from "../assets/Images/logo.png";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { handleLogin, handleData } = useContext(AuthContext); // Access handleLogin from AuthContext

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post("http://localhost:5000/api/users/login", {
            emailid: email,
            password: password,
        });

        const { data } = response;

        console.log(data)

        if (response.status === 200) {
            handleLogin(data.token); // Update context state with the token
            console.log(data.user);
            handleData(data.user); // Store user details in context
            console.log(data.message);
            navigate("/"); // Redirect after login
        }
    } catch (error) {
        if (error.response) {
            setError(error.response.data.message);
        } else {
            setError("An error occurred during login. Please try again.");
        }
    }
  };

  return (
    <>
      <div className="text-center mt-5">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          <img src={logo} className="img-fluid" alt="..." height="45px" width="45px" />
          <span className="ms-2 brandtext text-dark">FlowerVista</span>
        </a>
      </div>
      <div className="container-fluid my-5 d-flex justify-content-center">
        <div className="formcontainer px-4 py-4 border border-dark rounded">
          <h3 className="text-center my-3">Login</h3>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email ID</label>
              <input
                type="email"
                className="form-control input-specs"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control input-specs"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-4">Login</button>
            <div className="text-center">
              Don't have an account? <a href="/signup">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
