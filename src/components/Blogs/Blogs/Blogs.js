import React from "react";
import Navbar from "../../Home/Home/Navbar/Navbar";
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
    </div>
  );
};

export default Blogs;
