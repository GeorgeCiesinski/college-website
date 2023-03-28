import React from 'react'
import { mdiHuman } from '@mdi/js';
import { Icon } from '@mdi/react';

const accessibility = () => {
  return (
    <div>
        <button
          className='rounded-full bg-primary1 text-white p-2 m-2'
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