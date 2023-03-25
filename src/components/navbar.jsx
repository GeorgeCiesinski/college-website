import React from 'react';
import { useState } from 'react';
import { navLinks } from '../data/constants';
import logo from '../assets/images/humber_logo.svg';
import { mdiMenu, mdiClose } from '@mdi/js';
import { Icon } from '@mdi/react';

const navbar = () => {
    
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <img src={logo} alt='Humber' className='w-[140px]' />

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
