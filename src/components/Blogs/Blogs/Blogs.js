import React from 'react';
import Navbar from '../../Home/Home/Navbar/Navbar';
import Blog from '../Blog/Blog';

const Blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <hr/>
                <div className="py-5">
                    <h1>Blogs</h1>
                </div>
                <hr/>
            <div className="container">
                <Blog></Blog>
            </div>
            </div>
        </div>
    );
};

export default Blogs;