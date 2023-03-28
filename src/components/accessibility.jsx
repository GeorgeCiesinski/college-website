import React from 'react'
import { useState } from 'react';
import { 
    mdiHuman, mdiClose, mdiContrastCircle, mdiFormatSize, mdiLink, mdiCursorDefaultOutline, 
    mdiInvertColors, mdiAlphabeticalVariant, mdiFormatLetterSpacing, mdiFormatLineSpacing 
} from '@mdi/js';
import { Icon } from '@mdi/react';

const accessibility = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <div className={`${toggle ? 'flex' : 'hidden'} flex flex-col fixed top-0 left-0 w-full sm:w-1/3 h-full z-40 bg-primary1`}>
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
                            <p className='text-center'>
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
                            <p className='text-center'>
                                Font Size
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-around text-white'>
                        <div 
                            className='w-[112px] h-[112px] flex flex-col justify-center items-center hover:bg-white/20 cursor-pointer p-2 m-4 rounded-lg'
                            alt='highlight-links'
                            title='Highlight Links'
                        >
                            <Icon 
                                path={mdiLink} 
                                size={3} 
                            />
                            <p className='text-center'>
                                Highlight Links
                            </p>
                        </div>
                        <div 
                            className='w-[112px] h-[112px] flex flex-col justify-center items-center hover:bg-white/20 cursor-pointer p-2 m-4 rounded-lg'
                            alt='cursor'
                            title='Cursor'
                        >
                            <Icon 
                                path={mdiCursorDefaultOutline} 
                                size={3} 
                            />
                            <p className='text-center'>
                                Cursor
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-around text-white'>
                        <div 
                            className='w-[112px] h-[112px] flex flex-col justify-center items-center hover:bg-white/20 cursor-pointer p-2 m-4 rounded-lg'
                            alt='color-saturation'
                            title='Color Saturation'
                        >
                            <Icon 
                                path={mdiInvertColors} 
                                size={3} 
                            />
                            <p className='text-center'>
                                Color Saturation
                            </p>
                        </div>
                        <div 
                            className='w-[112px] h-[112px] flex flex-col justify-center items-center hover:bg-white/20 cursor-pointer p-2 m-4 rounded-lg'
                            alt='dyslexia-friendly'
                            title='Dyslexia Friendly'
                        >
                            <Icon 
                                path={mdiAlphabeticalVariant} 
                                size={3} 
                            />
                            <p className='text-center'>
                                Dyslexia Friendly
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-around text-white'>
                        <div 
                            className='w-[112px] h-[112px] flex flex-col justify-center items-center hover:bg-white/20 cursor-pointer p-2 m-4 rounded-lg'
                            alt='text-spacing'
                            title='Text Spacing'
                        >
                            <Icon 
                                path={mdiFormatLetterSpacing} 
                                size={3} 
                            />
                            <p className='text-center'>
                                Text Spacing
                            </p>
                        </div>
                        <div 
                            className='w-[112px] h-[112px] flex flex-col justify-center items-center hover:bg-white/20 cursor-pointer p-2 m-4 rounded-lg'
                            alt='line-spacing'
                            title='Line Spacing'
                        >
                            <Icon 
                                path={mdiFormatLineSpacing} 
                                size={3} 
                            />
                            <p className='text-center'>
                                Line Spacing
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