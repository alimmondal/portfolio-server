import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Blog from "../Blog/Blog";

const Blogs = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <hr />
        <div className="py-5 text-center">
          <h5 className="text-primary text-uppercase">our blog</h5>
          <h1>From Our Blog News</h1>
        </div>
        <hr />
        <div className="container">
          <Blog></Blog>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
