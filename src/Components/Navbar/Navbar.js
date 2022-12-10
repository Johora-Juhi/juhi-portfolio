import React from 'react';
import './Navbar.css';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {

    const menuItems=<React.Fragment>
        <li><HashLink href="">Home</HashLink></li>
        <li><HashLink href="">About</HashLink></li>
        <li><HashLink to='#portfolio'>Portfolio</HashLink></li>
        <li><HashLink href="">Blog</HashLink></li>
        <li><HashLink to='#contact'>Contact</HashLink></li>
    </React.Fragment>
    
    return (
      <div className="navbar bg-transparent my-4 text-white border-b border-yellow-600">
      <div className=' w-full lg:w-3/4 mx-auto'>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-sm">
            {menuItems}
          </ul>
        </div>
        <a className="text-4xl">Juhi<span className='text-yellow-600 text-5xl mt-1'>.</span></a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-sm">
          {menuItems}
        </ul>
      </div>
      </div>
    </div>
    );
};

export default Navbar;