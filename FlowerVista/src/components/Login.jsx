import logo from "../assets/Images/logo.png";
import { Link } from "react-router-dom";

function Login() {
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
        <div className="formcontainer px-4 py-4 border border-dark rounded">
          <h3 className="text-center my-3">Login</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email ID
              </label>
              <input
                type="email"
                className="form-control input-specs"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control input-specs"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-4">
              Login
            </button>
            <div className="text-center">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
