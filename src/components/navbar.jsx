import React from 'react';
import { useState } from 'react';
import styles from '../style';
import { navLinks } from '../data/constants';
import logo from '../assets/images/humber_logo.svg';
import { mdiMenu, mdiClose, mdiMagnify, mdiAccountCircle } from '@mdi/js';
import { Icon } from '@mdi/react';

const navbar = () => {
    
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='w-full flex flex-wrap py-2 justify-between items-center navbar'>
            
            <img src={logo} alt='Humber' className='w-[140px] pr-8 my-2' />

            <div className='hidden sm:block mx-4 my-2'>
                <form action='#' className='flex items-center'>
                    <input className='border-x border-y border-primary1 rounded-l-full'></input>
                    <button className='border-t border-r border-b border-primary1 bg-primary1 hover:bg-primary2 hover:border-primary2  text-white rounded-r-full'>
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
                    <li key={nav.id} className={`${styles.flexCenter} font-poppins font-normal cursor-pointer text-[16px] mr-10 transition duration-150 border-b-[6px] border-transparent hover:border-primary2`}>
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
                <li className={`${styles.flexCenter} w-[105px] font-poppins font-normal cursor-pointer text-[16px] transition duration-150 border-b-[6px] border-transparent hover:border-primary2`}>
                    <a href='#login' className='flex'>
                        <p className='pr-2'>
                            Login
                        </p>
                        <Icon 
                            path={mdiAccountCircle} 
                            size={1} 
                            alt='login'
                            className='w-[28px] h-[28px]'
                        />
                    </a>
                </li>
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
                        <li className='font-poppins font-normal cursor-pointer text-[16px] mb-10'>
                            <a href='#login' className='flex'>
                                <p className='pr-2'>
                                    Login
                                </p>
                                <Icon 
                                    path={mdiAccountCircle} 
                                    size={1} 
                                    alt='login'
                                    className='w-[28px] h-[28px]'
                                />
                            </a>
                        </li>
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-10'}`}>
                                <a href={`#${nav.id}`} onClick={() => setToggle((prev) => !prev)}>
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
