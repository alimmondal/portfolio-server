import React from "react";
import mobile from "../../../images/mobile.png";
import envelope from "../../../images/envelope.png";
import location from "../../../images/location.png";

const ContactDetail = () => {
  return (
    <div className=" my-5 py-5">
      <h2>Get In Touch</h2>
      <div className="d-flex ">
        <div className="me-3">
          <img src={mobile} alt="" />
        </div>
        <div>
          <h4>+8801860060068</h4>
          <p>
            You can call me at any time, I'm always ready to serve you.
          </p>
        </div>
      </div>
      <div className="d-flex ">
        <div className="me-3">
          <img src={location} alt="" />
        </div>
        <div>
          <h4>Dhaka</h4>
          <p>
            Akkelpur, Joypurhat, Dhaka, Bangladesh.
          </p>
        </div>
      </div>
      <div className="d-flex ">
        <div className="me-3">
          <img src={envelope} alt="" />
        </div>
        <div>
          <h4>malimmondal73@gmail.com</h4>
          <p>
            Please, send me message any time, Client satisfaction is my first goal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
