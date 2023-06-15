import React from 'react';
import './Banner.css';
import { useTypewriter } from 'react-simple-typewriter';
import banner from "../../assets/images/Cross-platform software-rafiki.png"

const Banner = () => {
    const handleDownload = () => {
        fetch('Juhi_Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Juhi_Resume.pdf';
                alink.click();
            })
        })
    }
    const [text] = useTypewriter({
        words: ['Johora Juhi', 'a web developer'],
        loop: 0
      })
    
    return (
        // <div className='w-full lg:w-3/4 mx-auto banner-bg flex justify-center lg:justify-start items-center'>
        //     <div>
        //     <p className='text-2xl md:text-7xl tracking-widest font-light '>Welcome!</p>
        //     <h1 className='text-xl md:text-6xl font-bold tracking-wider pt-4 pb-8'> <span className='text-white'> I am</span> {text}|
        //      </h1>
        //     <button onClick={handleDownload} className='btn btn-outline mr-8'>Resume</button>
        //     <button className='button rounded-lg'>Hire Me!</button>
        //     </div>
        // </div>
        <div className='w-full lg:w-3/4 mx-auto flex flex-col md:flex-row justify-center items-center mt-32 roaming-dots'>
            <div className='w-full mx-auto px-4 lg:px-0 lg:mx-0 lg:w-4/6'>
            <p className='text-2xl md:text-7xl tracking-widest font-light '>Welcome!</p>
            <h1 className='text-xl md:text-6xl font-bold tracking-wider pt-4 pb-8'> <span className='text-white'> I am</span> {text}|
             </h1>
            <button onClick={handleDownload} className='btn btn-outline mr-8'>Resume</button>
            <button className='button rounded-lg'>Hire Me!</button>
            </div>
            <div className='w-3/4 mx_auto lg:mx-0 lg:w-2/6'>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;