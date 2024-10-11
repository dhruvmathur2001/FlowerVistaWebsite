import aboutImage from "../assets/Images/aboutWeb.webp"
function About(){

    return (
      <div className="container-fluid about-bg" id="ABOUT">
        <div className="container about-p ">
          <div className="text-center mb-5 text-light">
            <h1>ABOUT US</h1>
          </div>
          <div className="row px-5">
            <div className="col-md-6 mb-3 ">
              <div className="bestseller">
                <img src={aboutImage} className="img-fluid" alt="..." />
              </div>
            </div>
            <div className="col-md-6 pe-5">
              <h1 className="about-info-heading text-light ">
                Why Choose Us?
              </h1>
              <p className="about-info-body text-light mt-4">
                We offer a unique blend of quality, artistry, and exceptional
                service that sets us apart. Our flowers are sourced from the
                finest growers, ensuring that each bloom is fresh, vibrant, and
                long-lasting. Our skilled florists meticulously craft each
                arrangement, transforming every bouquet into a stunning
                masterpiece that perfectly conveys the desired sentiment for any
                occasion. Moreover, our customer service is unparalleled,
                reflecting our commitment to exceeding expectations and making
                every purchase a delightful and memorable experience. Whether
                celebrating a joyous occasion, extending a heartfelt apology, or
                simply brightening someone\s day, our flowers are the ideal
                choice for expressing your feelings with elegance, beauty, and
                grace.
              </p>
            </div>
          </div>
        </div>
      </div>
    );

}

export default About;
