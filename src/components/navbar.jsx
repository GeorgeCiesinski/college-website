import React from 'react';
import { useState } from 'react';
import { navLinks } from '../data/constants';
import logo from '../assets/images/humber_logo.svg';
import { mdiMenu, mdiClose, mdiMagnify } from '@mdi/js';
import { Icon } from '@mdi/react';

const navbar = () => {
    
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='w-full flex flex-wrap py-6 justify-between items-center navbar'>
            
            <img src={logo} alt='Humber' className='w-[140px] pr-10' />

            <div className='hidden sm:block'>
                <form action='#' className='flex items-center'>
                    <input className='border-x border-y border-primary1 rounded-l-full'></input>
                    <button className='border-t border-r border-b border-primary1 bg-primary1 text-white rounded-r-full'>
                        <Icon 
                            path={mdiMagnify} 
                            size={1} 
                            alt='search'
                            className='w-[28px] h-[28px]'
                        />
                    </button>
                </form>
            </div>

            <ul className='list-none sm:flex hidden justify-end items-center flex-1 py-4'>
                {navLinks.map((nav, index) => (
                    <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center z-10'>
                <Icon 
                    path={toggle ? mdiClose : mdiMenu} 
                    size={1} 
                    alt='menu'
                    className='w-[28px] h-[28px]'
                    onClick={() => setToggle((prev) => !prev)}
                />

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gray-200 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className='list-none flex justify-end items-center flex-1 flex-col'>
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-10'}`}>
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default navbar
