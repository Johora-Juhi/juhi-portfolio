import React from 'react';
import cardImg1 from '../../assets/images/wesell.png'
import cardImg2 from '../../assets/images/cakeboutique.png'
import cardImg3 from '../../assets/images/geekspoint.png'

const Portfolio = () => {
    return (
            <div id='portfolio' className="w-full lg:w-3/4 mx-auto py-24 px-3">
            <div className='flex items-center'>
                    <h1 className='font-semibold text-3xl mr-4'>Portfolio</h1>
                    <p className='text-3xl'>•</p>
                    <h2 className='text-2xl font-bold -ml-1 text-stone-500 mb-1'> ⸻</h2>
                    {/* style={{ width: '65px', height: '4px' }} */}
                </div>            
                <h2 className='text-xl text-center font-semibold  py-4 mb-8'>Projects</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center">
                    <div className="card bg-base-100 shadow-xl border border-gray-800 mx-auto">
                        <figure><img src={cardImg1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                               We Sell
                            </h2>
                            <p>A Phone resell site</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">React</div>
                                <div className="badge badge-outline">MongoDB</div>
                                <div className="badge badge-outline">Jwt</div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl border border-gray-800 mx-auto">
                        <figure><img src={cardImg2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Cake Boutique
                            </h2>
                            <p>A  cake service website</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">React</div>
                                <div className="badge badge-outline">MongoDB</div>
                                <div className="badge badge-outline">Firebase</div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl border border-gray-800 mx-auto">
                        <figure><img src={cardImg3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                geeksPoint
                            </h2>
                            <p>A skill test related site</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">React</div>
                                <div className="badge badge-outline">MongoDB</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Portfolio;