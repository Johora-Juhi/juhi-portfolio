import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import JotformEmbed from 'react-jotform-embed';


const Contact = () => {
    return (
        <div id='contact' className='my-32 mx-auto'>
            <h1 className='text-3xl font-semibold w-full lg:w-3/4 pl-8 lg:pl-0 mx-auto mb-16'><span className='text-white'>Contact me</span>.</h1>            
            <div className='w-full md:w-3/5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div className="card bg-base-200 shadow-xl">
                    <div className="card-body items-center text-center">
                        <div className='btn btn-circle btn-outline text-2xl'><FaMapMarkerAlt></FaMapMarkerAlt></div>
                        <h2 className="card-title text-white pt-4">Location</h2>
                        <p className='text-white'>Oxygen, Chattogram <br />
                            Bangladesh</p>
                    </div>
                </div>
                <div className="card bg-base-200 shadow-xl">
                    <div className="card-body items-center text-center">
                        <div className='btn btn-circle btn-outline text-2xl'><FaEnvelope></FaEnvelope></div>
                        <h2 className="card-title text-white pt-4">Phone</h2>
                        <p className='text-white'>+880 1978-110498</p>
                    </div>
                </div>
                <div className="card bg-base-200 shadow-xl">
                    <div className="card-body items-center text-center">
                        <div className='btn btn-circle btn-outline text-2xl'><FaPhoneAlt></FaPhoneAlt></div>
                        <h2 className="card-title text-white pt-4">Email</h2>
                        <p className='text-white'>zohrajuhi1012@gmail.com</p>
                    </div>
                </div>

            </div>
            <JotformEmbed src="https://form.jotform.com/223433041097045" />
        </div>
    );
};

export default Contact;