import React from 'react'
import styles from '../style';
import { quickActions, servicesOptions } from '../data/constants';
import { Icon } from '@mdi/react';

const QuickButton = ({ title, icon, alt }) => {
  return (
    <button className={`${styles.flexCenter} flex-col w-[140px] h-[140px] hover:bg-black/10 m-1 sm:m-2`}>
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
    <section
      id="services"
      className={`flex flex-col items-center w-full p-4`}
    >
      <h1 className={`${styles.heading1}`}>Services</h1>
      <div className={`${styles.flexCenter} w-full flex-wrap`}>
        {quickActions.map((action, index) => (
          <div key={action.id}>
            <QuickButton title={action.title} icon={action.icon} alt={action.id} />
          </div>
        ))}
      </div>
      <div>
        <div>
          
        </div>
        <div>
          
        </div>
      </div>
    </section>
  )
}

export default quick