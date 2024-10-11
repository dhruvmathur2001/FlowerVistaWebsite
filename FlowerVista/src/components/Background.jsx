import flower1 from "../assets/Images/flower1.png"
import flower2 from "../assets/Images/f2.png";
import flower3 from "../assets/Images/f3.png";


function Background(){

   return (
     <>
       <div
         id="carouselExampleCaptions"
         className="carousel slide"
         data-bs-ride="carousel"
         data-bs-interval="3000"
       >
         <div className="carousel-indicators">
           <button
             type="button"
             data-bs-target="#carouselExampleCaptions"
             data-bs-slide-to="0"
             className="active"
             aria-current="true"
             aria-label="Slide 1"
           ></button>
           <button
             type="button"
             data-bs-target="#carouselExampleCaptions"
             data-bs-slide-to="1"
             aria-label="Slide 2"
           ></button>
           <button
             type="button"
             data-bs-target="#carouselExampleCaptions"
             data-bs-slide-to="2"
             aria-label="Slide 3"
           ></button>
         </div>
         <div className="carousel-inner">
           <div className="carousel-item active">
             <img src={flower1} className="d-block w-100" alt="..." />
           </div>
           <div className="carousel-item">
             <img src={flower2} className="d-block w-100" alt="..." />
           </div>
           <div className="carousel-item">
             <img src={flower3} className="d-block w-100" alt="..." />
           </div>
         </div>
         <button
           className="carousel-control-prev"
           type="button"
           data-bs-target="#carouselExampleCaptions"
           data-bs-slide="prev"
         >
           <span
             className="carousel-control-prev-icon"
             aria-hidden="true"
           ></span>
           <span className="visually-hidden">Previous</span>
         </button>
         <button
           className="carousel-control-next"
           type="button"
           data-bs-target="#carouselExampleCaptions"
           data-bs-slide="next"
         >
           <span
             className="carousel-control-next-icon"
             aria-hidden="true"
           ></span>
           <span className="visually-hidden">Next</span>
         </button>
       </div>
     </>
   );

}

export default Background;
