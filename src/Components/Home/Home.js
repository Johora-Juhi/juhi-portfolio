import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Portfolio from '../Portfolio/Portfolio';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Portfolio></Portfolio>
            {/* <About></About> */}
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;