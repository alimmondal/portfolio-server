import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
// import Navbar from "../../Home/Home/Navbar/Navbar";
import ContactDetail from "../ContactDetail/ContactDetail";
import ContactUs from "../ContactUs/ContactUs";

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
        
      <div className="container">
        <hr />
        <div className="py-5">
          <h1>Contact</h1>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-5">
            <ContactDetail></ContactDetail>
          </div>
          <div className="col-md-7">
            <ContactUs></ContactUs>
          </div>
        </div>
      </div>
      <div className="container">
         <Footer></Footer>
      </div>
      
    </div>
  );
};

export default Contact;
