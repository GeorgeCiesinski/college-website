import React from 'react'
import { mdiHuman } from '@mdi/js';
import { Icon } from '@mdi/react';

const accessibility = () => {
  return (
    <div>
        <div class=''>

        </div>
        <button
            title='Accessibility'
            className='fixed bottom-0 z-30 border-[1px] border-white rounded-full bg-primary1 text-white p-2 m-2 cursor-pointer'
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