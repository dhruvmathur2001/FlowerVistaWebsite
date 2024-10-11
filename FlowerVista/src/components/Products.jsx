// import i1 from "../assets/images/i1.jpg";
// import lily from "../assets/images/lily.jpg";
// import orchid from "../assets/images/orchid.webp";
// import tulip from "../assets/images/tulip.jpg";
// import dahlias from "../assets/images/dahlias.jpg";
// import begonies from "../assets/images/begonies.avif";
// import daisy from "../assets/images/Daisy.jpg";
// import hydrangeas from "../assets/images/hydrangeas.avif";
// import sunflower from "../assets/images/sunflower.jpeg";
// import peony from "../assets/images/peony.png";
// import petunia from "../assets/images/petunia.jpg";
// import marigold from "../assets/images/marigold.jpg";

import d1 from "../assets/Images/design1.png";

import React, { useEffect, useState } from 'react';
import axios from 'axios';



// const products = [
//   {
//     id: 1,
//     title: "ROSE",
//     price: 450,
//     image: i1,
//     description:
//       "Roses symbolize love and beauty, highly popular for celebrations. Available in various colors, they are known for their enchanting fragrance.",
//   },
//   {
//     id: 2,
//     title: "LILY",
//     price: 440,
//     image: lily,
//     description:
//       "Lilies represent purity and refined beauty, often used in elegant floral arrangements. Their large, fragrant blooms come in a variety of colors.",
//   },
//   {
//     id: 3,
//     title: "ORCHIDS",
//     price: 650,
//     image: orchid,
//     description:
//       "Orchids are exotic flowers that symbolize luxury and strength. Known for their intricate petals, they are cherished for their unique beauty.",
//   },
//   {
//     id: 4,
//     title: "TULIP",
//     price: 540,
//     image: tulip,
//     description:
//       "Tulips are vibrant spring flowers symbolizing renewal and hope. Their cup-shaped blooms come in a wide array of bright, bold colors.",
//   },
//   {
//     id: 5,
//     title: "DAHLIAS",
//     price: 540,
//     image: dahlias,
//     description:
//       "Dahlias are known for their layered, petal-packed flowers, symbolizing dignity and elegance. They bloom in vibrant colors during late summer.",
//   },
//   {
//     id: 6,
//     title: "BEGONIES",
//     price: 540,
//     image: begonies,
//     description:
//       "Begonias are admired for their lush foliage and beautiful blooms. They thrive in shaded areas, making them perfect for indoor or garden use.",
//   },
//   {
//     id: 7,
//     title: "DAISY",
//     price: 320,
//     image: daisy,
//     description:
//       "Daisies symbolize innocence and purity with their simple, cheerful appearance. Their white petals and yellow centers are widely recognized.",
//   },
//   {
//     id: 8,
//     title: "HYDRANGEAS",
//     price: 640,
//     image: hydrangeas,
//     description:
//       "Hydrangeas feature large, pom-pom-like clusters of flowers in various shades. They symbolize gratitude and are a favorite in garden landscaping.",
//   },
//   {
//     id: 9,
//     title: "SUNFLOWER",
//     price: 340,
//     image: sunflower,
//     description:
//       "Sunflowers, known for their large, radiant heads, symbolize loyalty and adoration. They follow the sun, representing positivity and warmth.",
//   },
//   {
//     id: 10,
//     title: "PEONY",
//     price: 440,
//     image: peony,
//     description:
//       "Peonies are lush, fragrant flowers symbolizing romance and prosperity. Their large, ruffled petals bloom in late spring and early summer.",
//   },
//   {
//     id: 11,
//     title: "PETUNIA",
//     price: 500,
//     image: petunia,
//     description:
//       "Petunias are bright and colorful, symbolizing calmness and comfort. Their trumpet-shaped blooms add a vibrant touch to gardens and patios.",
//   },
//   {
//     id: 12,
//     title: "MARIGOLD",
//     price: 340,
//     image: marigold,
//     description:
//       "Marigolds are cheerful, hardy flowers known for their vibrant orange and yellow hues. They symbolize passion and creativity in many cultures.",
//   },
// ];

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  

  return (
    <div className="container-fluid px-5 prod-p prod-bg" id="PRODUCTS">
      <div className="products">
        <div className="heading">
          <h1 className="prod-heading fw-bold">
            Our Exquisite Products <br />
            <img src={d1} alt="" className="img-fluid text-center rev-img" />
          </h1>
        </div>

        <div className="line row pt-5 px-md-5">
          {products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card rounded-0 card-hover shadow-lg">
                <img
                  src={`http://localhost:5000/${product.imagePath}`}
                  className="card-img-top img-fluid"
                  alt={product.name}
                />
                <div className="card-body p-3 bt">
                  <h4 className="card-title title-specs">{product.name}</h4>
                  <p className="card-spec">
                    ₹ {product.price}
                    <span className="or_cost ms-2">
                      <del>₹ {product.price + 0.3 * product.price}</del>
                    </span>
                  </p>
                  <p className="card-text card-desc">{product.description}</p>
                  <div className="d-flex gap-2 justify-content-between">
                    <button className="btn btn-secondary px-4">
                      Add to Cart
                    </button>
                    <button className="btn btn-secondary px-5">Buy</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
