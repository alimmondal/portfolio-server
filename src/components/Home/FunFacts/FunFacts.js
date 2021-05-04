import React from "react";
import './FunFacts.css'
import fun1 from "../../../images/fun1.png";
import fun2 from "../../../images/fun2.png";
import fun3 from "../../../images/fun3.png";
import fun4 from "../../../images/fun4.png";

const FunFacts = () => {
  return (
    <div className="container my-5">
      <h2>Fun Facts</h2>
      <div className="row">
        <div className="funFlex">
          <div className="col-md-3 fun text-center">
            <img src={fun1} alt="" />
            <h6>Happy Clients</h6>
            <h1>578</h1>
          </div>
          <div className="col-md-3 fun text-center">
            <img src={fun2} alt="" />
            <h6>Working Hours</h6>
            <h1>578</h1>
          </div>
          <div className="col-md-3 fun text-center">
            <img src={fun3} alt="" />
            <h6>Awards Won</h6>
            <h1>15</h1>
          </div>
          <div className="col-md-3 fun text-center">
            <img src={fun4} alt="" />
            <h6>Coffee Consumed</h6>
            <h1>1,286</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
