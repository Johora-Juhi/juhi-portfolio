import React from 'react';
import './About.css'
import about from '../../assets/images/about2.jpeg';
import { FaGithub, FaLinkedinIn, FaGooglePlusG, FaWhatsapp, FaInstagram } from "react-icons/fa";

const About = () => {
    return (
        <div id='about' className=' w-full lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-3 py-32 pl-4 lg:pl-0'>
            <div >
                <div className='flex items-center'>
                    <h1 className='font-semibold text-3xl mr-4'>About Me</h1>
                    <p className='text-3xl'>•</p>
                    <h2 className='text-2xl font-bold -ml-1 text-stone-500 mb-1'> ⸻</h2>
                    {/* style={{ width: '65px', height: '4px' }} */}
                </div>
                <h1 className='text-xl pt-16'>Name: <span className='text-stone-500 text-base'>Johora Juhi</span></h1>
                <h1 className='text-xl py-4'>Age: <span className='text-stone-500 text-base'>25</span></h1>
                <h1 className='text-xl'>Phone: <span className='text-stone-500 text-base'>+880 1978-110498</span></h1>
                <h1 className='text-xl py-4'>Email: <span className='text-stone-500 text-base'>zohrajuhi1012@gmail.com</span></h1>
                <h1 className='text-xl'>Address: <span className='text-stone-500 text-base'>Chattogram, Bangladesh</span></h1>
                <h1 className='text-xl py-4'>Education: <span className='text-stone-500 text-base'>BSc. in CSE</span></h1>
                <p className='flex gap-4 items-center pt-4 text-sm pb-24'> Follow me:<FaGithub className='text-white'></FaGithub> <FaLinkedinIn className='text-white'></FaLinkedinIn> <FaGooglePlusG className='text-white'></FaGooglePlusG> <FaWhatsapp className='text-white'></FaWhatsapp> <FaInstagram className='text-white'></FaInstagram></p>
            </div>
            <div className='border-x border-yellow-700'><img src={about} alt="" /></div>
            <div className='pt-24 pl-4'>
                <p className='uppercase text-white font-thin text-xs space pb-4'>Who am i</p>
                <h1 className='uppercase text-white bg-yellow-600 text-2xl lg:text-3xl  font-semibold px-4 py-2 mr-28'>johora juhi</h1>
                <h2 className='text-lg pt-8 text-white'> Professional Web Developer</h2>
                <p className='text-stone-500 pt-4 text-justify pr-4 text-sm'>A MERN Stack developer with a great passion for responsive web design. I find it quite fascinating how it brings one vision to life. <br /><br /> I've been working with reactJS, express, mongodb and other language and tools to make dynamic website. I have some full stack projects well which are there in my portfolio section. <br />
                </p>
            </div>

        </div>
    );
};

export default About;