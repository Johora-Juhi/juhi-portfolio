import React from 'react';
import cardImg1 from '../../assets/images/wesell.png'
import cardImg2 from '../../assets/images/cakeboutique.png'
import cardImg3 from '../../assets/images/geekspoint.png'
import { useLoaderData } from 'react-router-dom';
import ProjectsCard from './ProjectsCard/ProjectsCard';

const Portfolio = () => {
    const projects=useLoaderData();

    return (
            <div id='portfolio' className="w-full lg:w-3/4 mx-auto py-24 px-3">
            <div className='flex items-center'>
                    <h1 className='font-semibold text-3xl mr-4'>Portfolio</h1>
                    <p className='text-3xl'>•</p>
                    <h2 className='text-2xl font-bold -ml-1 text-stone-500 mb-1'> ⸻</h2>
                    {/* style={{ width: '65px', height: '4px' }} */}
                </div>            
                <h2 className='text-xl text-center font-semibold text-white py-4 mb-8'>Projects</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center">
                    {
                        projects.map(project=><ProjectsCard
                            key={project.id}
                            project={project}></ProjectsCard>)
                    }
                </div>
            </div>
    );
};

export default Portfolio;