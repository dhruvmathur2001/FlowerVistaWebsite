import  { useState, useEffect } from "react";

import p1 from "../assets/Images/Reviews/p1.jpeg";
import p2 from "../assets/Images/Reviews/p2.jpeg";
import p3 from "../assets/Images/Reviews/p3.jpeg";
import p4 from "../assets/Images/Reviews/p4.jpeg";
import p5 from "../assets/Images/Reviews/p5.jpg";
import d1 from "../assets/Images/design1.png"

const reviewsData = [
  {
    name: "Radhika Sharma",
    image: p1,
    rating: 5,
    date: "1 day ago",
    text: "I ordered a bouquet for my sister's birthday, and FlowerVista exceeded my expectations! The flowers were fresh, vibrant, and beautifully arranged. The delivery was timely, and the presentation was stunning, making her day extra special. She couldn't stop admiring them, and I was thrilled to see her so happy. The entire experience, from ordering to delivery, was seamless and enjoyable.",
  },
  {
    name: "Pulkit Verma",
    image: p2,
    rating: 4,
    date: "2 days ago",
    text: "FlowerVista has become my go-to for flowers, whether it's celebrating a birthday, expressing condolences, or simply brightening someone's day. Their wide selection ensures that I can always find the perfect arrangement for any occasion. The flowers are consistently fresh and the customer service is attentive. The only reason for the 4 stars is that I wish they offered more customization options for the bouquets.",
  },
  {
    name: "Ram Kumar",
    image: p3,
    rating: 5,
    date: "2 days ago",
    text: "I rely on FlowerVista for all my floral needs because they consistently deliver excellence. Their flowers last longer than any I've purchased elsewhere, and the customer service is exceptional. The vibrant arrangements always bring a smile to the recipients' faces. I appreciate the detailed descriptions of each product, which help me make informed choices. I highly recommend them to everyone!",
  },
  {
    name: "Ravi Sen",
    image: p4,
    rating: 5,
    date: "2 days ago",
    text: "I surprised my wife with flowers from FlowerVista on our anniversary, and she was thrilled! The arrangement was breathtaking, and the scent was wonderful, filling our home with a delightful fragrance. It really made the occasion memorable for us. She said it was the best bouquet she had ever received, and I couldn’t have been happier. Thank you, FlowerVista, for making our day special!",
  },
  {
    name: "Pranav Prakash",
    image: p5,
    rating: 4,
    date: "3 days ago",
    text: "From their easy-to-navigate website to the exquisite flowers they offer, every experience has been delightful. I appreciate the detailed descriptions of the arrangements, which help me choose exactly what I want. The delivery was prompt, and the flowers were fresh and beautifully arranged. However, I would love to see more seasonal varieties available. Overall, a great service!",
  },
  {
    name: "Rajan Seth",
    image: p3,
    rating: 5,
    date: "2 days ago",
    text: "I rely on FlowerVista for all my floral needs because they consistently deliver excellence. Their bouquets are always fresh and beautifully arranged. The attention to detail in every arrangement is remarkable, and they never fail to impress. The customer support team is friendly and helpful, ensuring a smooth and pleasant experience every time. I can't imagine getting flowers from anywhere else!",
  },
];



function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Check screen size on mount and window resize
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextReviews = () => {
    setCurrentIndex((prevIndex) =>
      isMobile
        ? (prevIndex + 1) % reviewsData.length
        : (prevIndex + 3) % reviewsData.length
    );
  };

  const prevReviews = () => {
    setCurrentIndex((prevIndex) =>
      isMobile
        ? (prevIndex - 1 + reviewsData.length) % reviewsData.length
        : (prevIndex - 3 + reviewsData.length) % reviewsData.length
    );
  };

  return (
    <div className="container-fluid py-5 review-bg" id="REVIEWS">
      <h1>
        They all Loved Our Flowers <br />
        <img src={d1} alt="" className="img-fluid text-center rev-img" />
      </h1>

      <div className="review-container d-flex align-items-center">
        <button className="scroll-button left" onClick={prevReviews}>
          &lt;
        </button>

        <div className="review-box mt-4 d-flex justify-content-between">
          {reviewsData
            .slice(currentIndex, currentIndex + (isMobile ? 1 : 3))
            .map((review, index) => (
              <div
                className="reviews "
                key={index}
                style={{ width: isMobile ? "100%" : "32%", marginRight: "1%" }}
              >
                <div className="review_rating">
                  <div className="rev_img">
                    <img
                      src={review.image}
                      alt=""
                      style={{ width: "100%", borderRadius: "5px" }}
                    />
                  </div>
                  <div className="ratings">
                    <span className="name">{review.name}</span>
                    <br />
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="fa fa-star checked"></span>
                    ))}
                    {[...Array(5 - review.rating)].map((_, i) => (
                      <span key={i} className="fa fa-star"></span>
                    ))}
                    <span>&nbsp; {review.date}</span>
                  </div>
                  <br />
                </div>
                <p className="mt-2">{review.text}</p>
              </div>
            ))}
        </div>

        <button className="scroll-button right" onClick={nextReviews}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Reviews;
