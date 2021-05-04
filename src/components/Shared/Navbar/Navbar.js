import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <section class="container sticky" id="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-aqua py-3">
                <div class="container-fluid">
                        <Link class="logo navbar-brand" to='/'>
                            <img class="" src={logo} alt="" />
                        <span class="logoText">Alim</span> 
                        </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto ">
                        <li class="nav-item active">
                            <Link class="nav-link ms-5 text-primary" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 text-primary" to="/resume">Resume</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 text-primary" to="/projects">Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 text-primary" to="blogs">Blogs</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 text-primary" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
               
            </div>
            </nav>
        </section>
    );
};

export default Navbar;