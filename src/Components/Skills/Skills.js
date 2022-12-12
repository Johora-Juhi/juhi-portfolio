import React from 'react';

const Skills = () => {
    return (
        <div>
             <div className='flex items-center pl-4 lg:pl-0'>
                    <h1 className='font-semibold text-3xl mr-4'>My Skills</h1>
                    <p className='text-3xl'>•</p>
                    <h2 className='text-2xl font-bold -ml-1 text-stone-500 mb-1'> ⸻</h2>
                    {/* style={{ width: '65px', height: '4px' }} */}
                </div>
                <div className='w-full md:w-3/5 mx-auto bg-base-200 p-8 grid grid-cols-1 lg:grid-cols-2'>
                </div>
        </div>
    );
};

export default Skills;