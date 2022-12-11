import React from 'react';
import { FaGithub, FaLinkedinIn, FaGooglePlusG, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className='my-0'>
                <p className="text-4xl"><span className='text-white'>Juhi</span><span className='text-yellow-600 text-5xl mt-1'>.</span></p>
            </div>
            <div className='my-2'>
                <div className="grid grid-flow-col gap-4">
                    <p className='btn btn-circle btn-outline text-xl'><FaGithub></FaGithub></p>
                    <p className='btn btn-circle btn-outline text-xl'><FaLinkedinIn></FaLinkedinIn></p>
                    <p className='btn btn-circle btn-outline text-xl'><FaGooglePlusG></FaGooglePlusG></p>
                    <p className='btn btn-circle btn-outline text-xl'><FaWhatsapp></FaWhatsapp></p>
                    <p className='btn btn-circle btn-outline text-xl'><FaWhatsapp></FaWhatsapp></p>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;