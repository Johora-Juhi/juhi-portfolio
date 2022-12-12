import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsCard = ({project}) => {
    const { id, name, frontEnd, backEnd, thumbleImage, shortDescription } = project;
    return (
        <div className="card bg-base-100 shadow-xl border border-yellow-600 mx-auto ">
        <figure><img src={thumbleImage} alt="" /></figure>
        <div className="card-body">
            <h2 className="card-title text-white">
               {name}
            </h2>
            <p className='text-white'>{shortDescription}</p>
            {/* <div className="card-actions justify-end">
                <div className="badge badge-outline">React</div>
                <div className="badge badge-outline">MongoDB</div>
                <div className="badge badge-outline">Jwt</div>
            </div> */}
            <div className='card-actions justify-end'>
            <Link state={project} to={`/project/${id}`}><button className="btn btn-outline rounded-none">Explore more</button></Link>
            </div>
        </div>
    </div>
    );
};

export default ProjectsCard;