import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
// import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
// import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="headerContainer">
            <Navbar></Navbar>
             <HeaderMain></HeaderMain>
            {/* <BusinessInfo></BusinessInfo>  */}
            
        </div>
    );
};

export default Header;