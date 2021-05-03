import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../../images/logo.png';
import logo from '../../../../images/logo.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-5">
            <div className="container">
            <Link className="logo " to='/'>
                <img src={logo} alt=""  class="d-inline-block align-text-top" />
               <span className="logoText">Md Alim</span> 
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <Link className="nav-link ms-5 text-primary" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5 text-primary" to="/resume">Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5 text-primary" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5 text-primary" to="blogs">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5 text-primary" to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;