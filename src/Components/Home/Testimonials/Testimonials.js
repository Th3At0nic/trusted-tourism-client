import React, { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";
import "./Testimonials.css";
// import wilson from "../../../images/rvwm.jpeg";
// import ema from "../../../images/rvwf2.jpeg";
// import aliza from "../../../images/rvwf1.jpeg";

// const testimonialData = [
//   {
//     quote:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
//     name: "Wilson Harry",
//     from: "London",
//     img: wilson,
//   },
//   {
//     quote:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
//     name: "Ema Gomez",
//     from: "Bristol",
//     img: ema,
//   },
//   {
//     quote:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
//     name: "Aliza Farari",
//     from: "Birmingham",
//     img: aliza,
//   },
// ];

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5003/addReview")
      .then((res) => res.json())
      .then((data) => setTestimonialData(data));
  }, []);
  return (
    <section id="reviews" className="testimonials my-5 py-5">
      <div className="container">
        <div className="section-header">
          <h2 className="text-primary text-uppercase text-center">
            Testimonial
          </h2>
          <h1>
            What Our Guests <br /> Says{" "}
          </h1>
        </div>
        <div className="card-deck mt-5">
          {testimonialData.map((testimonial) => (
            <Testimonial testimonial={testimonial} key={testimonial._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
//// sorry to say first i started my project as a beauty parlour website,
//but then for some major issue at the last day i changed it to tourism website, so some name might be odd.
//so please consider my problem
