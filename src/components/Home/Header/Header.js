import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
// import Navbar from '../Home/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
             <HeaderMain></HeaderMain>
            
        </div>
    );
};

export default Header;