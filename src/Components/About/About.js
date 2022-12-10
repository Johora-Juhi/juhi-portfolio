import React from 'react';
import about from '../../assets/images/About.jpeg'

const About = () => {
    return (
        <div className=' w-full lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-3 my-32'>
            <div >
                <div className='flex items-center'>
                <h1 className='font-semibold text-3xl mr-4'>About Me</h1>
                <p className='text-3xl'>•</p>
                <h2 style={{width:'65px',height:'4px'}} className=' bg-gray-600'></h2>
                </div>
            </div>
            <div><img src={about} alt="" /></div>
            <div></div>
            
        </div>
    );
};

export default About;