import React from "react";

const Testimonial = (props) => {
  const { quote, name, from, imageURL } = props.testimonial;
  return (
    <div className="card ms-3">
        <div className="d-flex align-items-center">
            <div className="imgDiv ">
            {/* <img className="testimonialImg" src={imageURL} alt="" /> */}
            </div>
            <div className="card-body">
                <p className="card-text">{quote}</p>
            </div>
      </div>
      <div className="d-flex align-items-center">
          <img className="testimonialImg" src={imageURL} alt="" />
        <div className="card-footer">
            <h5 className="card-title text-primary">{name}</h5>
            <p>{from}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;