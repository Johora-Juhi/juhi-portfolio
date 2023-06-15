import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { FaAddressCard,FaThList } from "react-icons/fa";

const Skills = () => {
    return (
        <div className='w-full md:w-3/4 rounded-lg bg-base-200 p-8 my-32 mx-auto'>
            <div className='flex items-center pl-4 lg:pl-0'>
                <h1 className='font-semibold text-3xl mr-4'>My Skills</h1>
                <p className='text-3xl'>•</p>
                <h2 className='text-2xl font-bold -ml-1 text-stone-500 mb-1'> ⸻</h2>
                {/* style={{ width: '65px', height: '4px' }} */}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 py-8'>
                <div>
                    <p className='flex flex-col justify-center items-center gap-4 text-2xl'><FaAddressCard></FaAddressCard> <span className='text-white'>Personal Skills</span></p>
                    <p></p>
                </div>
                <div>
                <p className='flex flex-col justify-center items-center gap-4 text-2xl'><FaThList></FaThList> <span className='text-white'>Professional Skills</span></p>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default Skills;