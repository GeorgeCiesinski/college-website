import React from 'react'
import { mdiHuman } from '@mdi/js';
import { Icon } from '@mdi/react';

const accessibility = () => {
  return (
    <div>
        <div className=''>

        </div>
        <button
            title='Accessibility'
            className='fixed left-0 bottom-0 z-30 border-[1px] border-white rounded-full bg-primary1/50 hover:scale-110 text-white p-2 m-2 cursor-pointer'
            alt='accessibility'>
            <Icon 
                path={mdiHuman} 
                size={2} 
                alt='accessibility'
            /> 
        </button>
    </div>
  )
}

export default accessibility