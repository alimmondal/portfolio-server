import React from "react";
import "./Testimonials.css";
import "../../../App.css";
import wilson from "../../../images/crown.jpg";
import ema from "../../../images/jarin.jpg";
import aliza from "../../../images/jesica.jpg";
import Testimonial from "./Testimonial";

const testimonialData = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Wilson Harry",
    from: "California",
    imageURL: wilson,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Ema Gomez",
    from: "California",
    imageURL: ema,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Aliza Farari",
    from: "California",
    imageURL: aliza,
  },
];

const Testimonials = () => {
  return (
    <section className="my-5 py-5">
      <div className="container">
        <div className="section-header">
          <h1 className="text-primary text-center">Testimonials </h1>
        </div>
        <div className="card-group mt-5">
          {testimonialData.map((testimonial) => (
            <Testimonial testimonial={testimonial} key={testimonial.name} />
          ))}
        </div>
        <div className="mt-3 d-grid justify-content-center">
          <h3>Client's satisfaction is our goal</h3>
          <button className="App mt-3 btn-primary rounded text-center">
            Add your review here
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
