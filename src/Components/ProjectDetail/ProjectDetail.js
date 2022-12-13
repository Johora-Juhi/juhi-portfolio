import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaSquare } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ProjectDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const location = useLocation();
    const project = location.state;
    const { name, frontEnd, backEnd, thirdPartyTools, keyFeatures, liveLink, clientGithub, serverGithub, thumbleImage, features, desktopView, mobileView } = project;
    return (

        <div className='w-full lg:w-3/4 mx-auto'>
            <h1 className='py-16 text-center text-7xl font-bold'>{name}</h1>
            {/* <img className='w-full lg:w-1/2 mx-auto' src={thumbleImage} alt="" /> */}
            <Swiper className='w-2/3 lg:w-1/2'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {
            desktopView.map(img=>      <SwiperSlide key={img.id}><img src={img.imgDesk} alt="" /></SwiperSlide>
            )
        }
    </Swiper>
            <div className='my-32 mx-4 lg:mx-0 p-4 lg:p-8 border rounded-tl-3xl rounded-br-3xl border-yellow-600' >
                <p className='text-xl pt-4'> Key Feature: <span className='text-stone-500 text-base'>{keyFeatures}</span></p>
                <p className='text-xl py-4'> Technology:</p>
                <div className='pl-24'>
                <p className='text-xl '> Front-End: <span className='text-stone-500 text-base'>{frontEnd}</span></p>
                <p className='text-xl py-4'> Back-End: <span className='text-stone-500 text-base'>{backEnd}</span></p>
                <p className='text-xl'> Third Party Tools: <span className='text-stone-500 text-base'>{thirdPartyTools}</span></p>
                </div>
                <div className="text-end pt-4 lg:pt-0">
                <a href={liveLink}  className="badge badge-outline mr-4">Live Link</a>
                <a href={clientGithub} className="badge badge-outline mr-4">Client Github</a>
                <a href={serverGithub} className="badge badge-outline">Server Github</a>
            </div>
            </div>
            <div className='pl-4 lg:pl-0'>
            <h2 className='mt-10 text-4xl'>Description</h2>
                <div style={{ width: '290px', height: '1.5px', backgroundColor: 'gray' }} className="mt-2 mb-2"></div>
                {
                    features.map(description =>
                        <>
                            <p className='py-2'>
                                <div className='flex gap-3'>
                                    <div>
                                        <FaSquare className='mt-1'></FaSquare>
                                    </div>
                                    <div className='text-stone-500'>
                                        {description?.l1}
                                    </div>
                                </div>
                            </p>
                            <p className='py-2 '>
                                <div className='flex gap-3'>
                                    <div>
                                        <FaSquare className='mt-1 '></FaSquare>
                                    </div>
                                    <div className='text-stone-500'>
                                        {description?.l2}
                                    </div>
                                </div>
                            </p>
                            <p className='py-2'>
                                <div className='flex gap-3'>
                                    <div>
                                        <FaSquare className='mt-1'></FaSquare>
                                    </div>
                                    <div className='text-stone-500'>
                                        {description?.l3}
                                    </div>
                                </div>
                            </p>
                            <p className='py-2 '>
                                <div className='flex gap-3'>
                                    <div>
                                        <FaSquare className='mt-1'></FaSquare>
                                    </div>
                                    <div className='text-stone-500'>
                                        {description?.l4}
                                    </div>
                                </div>
                            </p>
                            <p className='py-2 '>
                                <div className='flex gap-3'>
                                    <div>
                                        <FaSquare className='mt-1'></FaSquare>
                                    </div>
                                    <div className='text-stone-500'>
                                        {description?.l5}
                                    </div>
                                </div>
                            </p>
                            {description?.l6 &&
                                <p className='py-2 '>
                                    <div className='flex gap-3'>
                                        <div>
                                            <FaSquare className='mt-1'></FaSquare>
                                        </div>
                                        <div className='text-stone-500'>
                                            {description.l6}
                                        </div>
                                    </div>
                                </p>
                            }
                            {description?.l7 &&
                                <p className='py-2 '>
                                    <div className='flex gap-3'>
                                        <div>
                                            <FaSquare className='mt-1'></FaSquare>
                                        </div>
                                        <div className='text-stone-500'>
                                            {description.l7}
                                        </div>
                                    </div>
                                </p>
                            }
                        </>)
                }
            </div>

        </div>
    );
};

export default ProjectDetail;