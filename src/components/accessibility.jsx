import React from 'react'
import { useState } from 'react';
import { mdiHuman, mdiClose, mdiContrastCircle, mdiFormatSize } from '@mdi/js';
import { Icon } from '@mdi/react';

const accessibility = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            {/* ${toggle ? 'flex' : 'hidden'} */}
            <div className={`flex flex-col fixed top-0 left-0 w-full sm:w-1/3 h-full z-40 bg-primary1`}>
                <div className='w-full flex justify-end text-white'>
                    <div 
                        className='w-max h-max hover:bg-white/20 p-2 m-4 rounded-lg'
                        alt='close-accessibility'
                        title='Close'
                        onClick={() => setToggle((prev) => !prev)}
                    >
                        <Icon 
                            path={mdiClose} 
                            size={2} 
                        />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex justify-around text-white'>
                        <div 
                            className='w-[112px] h-[112px] flex flex-col justify-center items-center hover:bg-white/20 cursor-pointer p-2 m-4 rounded-lg'
                            alt='contrast'
                            title='Contrast'
                        >
                            <Icon 
                                path={mdiContrastCircle} 
                                size={3} 
                            />
                            <p>
                                Contrast
                            </p>
                        </div>
                        <div 
                            className='w-[112px] h-[112px] flex flex-col justify-center items-center hover:bg-white/20 cursor-pointer p-2 m-4 rounded-lg'
                            alt='font-size'
                            title='Font Size'
                        >
                            <Icon 
                                path={mdiFormatSize} 
                                size={3} 
                            />
                            <p>
                                Font Size
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-around text-white'>
                        <div 
                            className='w-[112px] h-[112px] flex flex-col justify-center items-center hover:bg-white/20 cursor-pointer p-2 m-4 rounded-lg'
                            alt='contrast'
                            title='Contrast'
                        >
                            <Icon 
                                path={mdiContrastCircle} 
                                size={3} 
                            />
                            <p>
                                Contrast
                            </p>
                        </div>
                        <div 
                            className='w-[112px] h-[112px] flex flex-col justify-center items-center hover:bg-white/20 cursor-pointer p-2 m-4 rounded-lg'
                            alt='font-size'
                            title='Font Size'
                        >
                            <Icon 
                                path={mdiFormatSize} 
                                size={3} 
                            />
                            <p>
                                Font Size
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-around text-white'>
                        <div 
                            className='w-[112px] h-[112px] flex flex-col justify-center items-center hover:bg-white/20 cursor-pointer p-2 m-4 rounded-lg'
                            alt='contrast'
                            title='Contrast'
                        >
                            <Icon 
                                path={mdiContrastCircle} 
                                size={3} 
                            />
                            <p>
                                Contrast
                            </p>
                        </div>
                        <div 
                            className='w-[112px] h-[112px] flex flex-col justify-center items-center hover:bg-white/20 cursor-pointer p-2 m-4 rounded-lg'
                            alt='font-size'
                            title='Font Size'
                        >
                            <Icon 
                                path={mdiFormatSize} 
                                size={3} 
                            />
                            <p>
                                Font Size
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-around text-white'>
                        <div 
                            className='w-[112px] h-[112px] flex flex-col justify-center items-center hover:bg-white/20 cursor-pointer p-2 m-4 rounded-lg'
                            alt='contrast'
                            title='Contrast'
                        >
                            <Icon 
                                path={mdiContrastCircle} 
                                size={3} 
                            />
                            <p>
                                Contrast
                            </p>
                        </div>
                        <div 
                            className='w-[112px] h-[112px] flex flex-col justify-center items-center hover:bg-white/20 cursor-pointer p-2 m-4 rounded-lg'
                            alt='font-size'
                            title='Font Size'
                        >
                            <Icon 
                                path={mdiFormatSize} 
                                size={3} 
                            />
                            <p>
                                Font Size
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
            <button
                title='Accessibility'
                className='fixed left-0 bottom-0 z-30 border-[1px] border-white rounded-full bg-primary1/50 hover:scale-110 text-white p-2 m-2 cursor-pointer'
                alt='accessibility'>
                <Icon 
                    path={mdiHuman} 
                    size={2} 
                    alt='accessibility'
                    onClick={() => setToggle((prev) => !prev)}
                /> 
            </button>
        </div>
    )
}

export default accessibility