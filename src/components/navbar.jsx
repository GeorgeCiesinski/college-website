import React from 'react';
import { useState } from 'react';
import logo from '../assets/images/logo.png';
import { navLinks } from '../data/constants';

const navbar = () => (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo} alt='Humber' className='w-[124px]' />

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                    <a href={`#${nav.id}`}>
                        {nav.title}
                    </a>
                </li>
            ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
            
        </div>
    </nav>
)


export default navbar
