import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import FunFacts from '../FunFacts/FunFacts';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Experience from './Experience/Experience';


const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <Services></Services>
            <Experience></Experience>
            <Testimonials></Testimonials>
            <FunFacts></FunFacts>
            <Footer></Footer> 
         </div>
    );
};

export default Home;