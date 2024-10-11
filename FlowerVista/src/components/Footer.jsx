import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaGooglePlus,
  FaRss,
} from "react-icons/fa";
import Logo from "../assets/Images/logo.png";

function Footer() {
  return (
    <>
      <footer className="section-relative section-top-66 section-bottom-34 page-footer context-dark  pt-5 pb-3 footer-bg">
        <div className="container">
          <div className="row justify-content-md-center text-xl-left">
            <div className="col-md-8 col-lg-12">
              <div className="row justify-content-sm-center row-50">
                <div className="col-sm-10 col-lg-4 text-left order-lg-3 inset-lg-left-50">
                  <h6>NEWSLETTER</h6>
                  <hr className="text-subline" />
                  <p>
                    Enter your email address to receive infomartion about the new variety of flowers to be available.
                  </p>
                  <form
                    className="rd-mailform"
                    data-form-output="form-output-global"
                    data-form-type="subscribe"
                    method="post"
                    action="bat/rd-mailform.php"
                  >
                    <div className="form-wrap">
                      <div className="input-group input-group-sm mb-3">
                        <input
                          type="email"
                          className="form-input  border border-dark rounded-start px-1 ps-2"
                          placeholder="Your e-mail..."
                          data-constraints="@Required @Email"
                          name="email"
                        />
                        <button
                          className="btn btn-sm border border-dark rounded-end btn-warning text-dark"
                          type="submit"
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-sm-10 text-sm-left col-lg-4 order-lg-2 mt-sm-5 mt-md-0">
                  <h6>CONTACT US</h6>
                  <hr className="text-subline" />
                  <div className="text-center text-xl-left">
                    <address className="contact-info d-md-inline-block text-left">
                      <div className="d-flex">
                        <div>
                          <span className="text-light">
                            <FaPhone />
                          </span>
                        </div>
                        <div className="unit-body">
                          <a className="text-gray-light unit-left" href="tel:#">
                            +91-11-43634625, 69109109
                          </a>
                          <span className="text-gray-light">, </span>
                          <a className="text-gray-light" href="tel:#">
                            +91-11-26926370
                          </a>
                        </div>
                      </div>
                      <div className=" d-flex ">
                        <div>
                          <span className="text-light">
                            <FaMapMarkerAlt />
                          </span>
                        </div>
                        <div className="unit-body">
                          <a className="text-gray-light unit-left" href="#">
                            FlowerVista Gallery, ABC Nagar, New
                            Delhi, India
                          </a>
                        </div>
                      </div>
                      <div className=" d-flex">
                        <div>
                          <span className="text-light">
                            <FaEnvelope />
                          </span>
                        </div>
                        <div className="unit-body">
                          <a
                            className="text-gray-light unit-left"
                            href="mailto:#"
                          >
                           mail@flowervista.com
                          </a>
                        </div>
                      </div>
                    </address>
                  </div>
                </div>
                <div className="col-sm-10 col-lg-4 order-lg-1 ">
                  <div>
                    <a href="index.html">
                      <img
                        width="200" // Increased width
                        height="150" // Increased height
                        className="img-responsive"
                        src={Logo}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="row mt-5">
                    <ul className="list-inline">
                      <li className="list-inline-item ps-1 pe-2">
                        <a href="#">
                          <span>
                            <FaFacebook size={36} />
                          </span>
                        </a>
                      </li>
                      <li className="list-inline-item pe-2">
                        <a href="#">
                          <span>
                            <FaTwitter size={36} />
                          </span>
                        </a>
                      </li>
                      <li className="list-inline-item pe-2">
                        <a href="#">
                          <span>
                            <FaGooglePlus size={36} />
                          </span>
                        </a>
                      </li>
                      <li className="list-inline-item pe-2">
                        <a href="#">
                          <span>
                            <FaRss size={36} />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <p className="text-gray text-lg-left text-md-center">
            &copy; <span className="copyright-year text-center"></span> All
            Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
