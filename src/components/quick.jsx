import React from 'react'
import styles from '../style';
import { quickActions } from '../data/constants';
import { Icon } from '@mdi/react';

const QuickButton = ({ title, icon, alt }) => {
  return (
    <button className={`${styles.flexCenter} flex-col w-[140px] h-[140px] hover:bg-black/10 m-2`}>
      <Icon 
        path={icon} 
        size={2} 
        alt='expand'
        className='w-[28px] h-[28px]'
      />
      <p className='font-medium m-2 max-w-[100px]'>
        {title}
      </p>
    </button>
  )
}

const quick = () => {
  return (
    <div
      className={`${styles.flexCenter} w-full p-4 flex-wrap`}
    >
      {quickActions.map((action, index) => (
          <div key={action.id}>
            <QuickButton title={action.title} icon={action.icon} alt={action.id} />
          </div>
        ))}
    </div>
  )
}

export default quick