import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
// import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer-area py-3">
            <div className="dGrid pb-3">
                <div className="pb-3">
                    <Link className="logo" to='/'>
                    {/* <img class="" src={logo} alt="" /> */}
                        Web Designer
                    </Link>
                </div>
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container ms-5 ">
                
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav pb-3">
                    <li className="nav-item active">
                        <Link className="nav-link ms-5 text-muted" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5 text-muted" to="/resume">Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5 text-muted" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5 text-muted" to="/blog">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5 text-muted" to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
            <div>
                 <input type="email" name="email" defaultValue="Your email" id=""/>
                 <input type="submit" value="submit"/>
            </div>
            <hr/>
        </div>
        <div className="social-footer">
            <div>
                <ul className="social-media list-inline">
                    <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                    <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                    <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                </ul>
            </div>

            <div className="copyRight pb-3">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved by Md Alim</p>
            </div>
        </div>
            
        </div>

    );
};

export default Footer;