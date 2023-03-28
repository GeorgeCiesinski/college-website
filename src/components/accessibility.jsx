import React from 'react'
import { useState } from 'react';
import { mdiHuman, mdiClose } from '@mdi/js';
import { Icon } from '@mdi/react';

const accessibility = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <div className={`${toggle ? 'flex' : 'hidden'} fixed top-0 left-0 w-full sm:w-1/3 h-full z-40 bg-primary1`}>
                <div className='flex justify-end text-white'>
                    <Icon 
                        path={mdiClose} 
                        size={2} 
                        alt='accessibility'
                        onClick={() => setToggle((prev) => !prev)}
                    />
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