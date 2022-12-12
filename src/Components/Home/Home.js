import React from 'react';
import { useLoaderData } from 'react-router-dom';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            {/* <Skills></Skills> */}
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;