import React from 'react'
import styles from '../style';
import { quickActions, servicesOptions } from '../data/constants';
import { Icon } from '@mdi/react';

const QuickButton = ({ title, icon, alt }) => {
  return (
    <button className={`${styles.flexCenter} flex-col w-[140px] h-[140px] text-primary1 hover:bg-black/10 m-1 sm:m-2`}>
      <Icon 
        path={icon} 
        size={2} 
        alt={alt}
        className='w-[28px] h-[28px]'
      />
      <p className='font-medium m-2 max-w-[100px]'>
        {title}
      </p>
    </button>
  )
}

const ServiceSection = ({ title, services }) => {
  return (
    <div className='flex flex-col items-center my-4 hover:bg-black/5'>
      <h2 className={`${styles.altHeading2}`}>{title}</h2>
      <div className='flex flex-wrap justify-center'>
        {services.map((service, index) => (
          <div key={service.id}>
            <QuickButton title={service.title} icon={service.icon} alt={service.id} />
          </div>
        ))}
      </div>
    </div>
  )
}

const quick = () => {
  return (
    <section
      id="services"
      className={`flex flex-col items-center w-full p-4`}
    >
      <h1 className={`${styles.altHeading1}`}>Services</h1>
      <div className={`${styles.flexCenter} w-full flex-wrap hover:bg-black/5`}>
        {quickActions.map((action, index) => (
          <div key={action.id}>
            <QuickButton title={action.title} icon={action.icon} alt={action.id} />
          </div>
        ))}
      </div>
      <div className='flex flex-wrap justify-around w-full'>
        {servicesOptions.map((option, index) => (
          <div key={option.id}>
            <ServiceSection title={option.title} services={option.services} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default quick