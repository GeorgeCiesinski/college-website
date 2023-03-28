import React, { useState } from 'react'
import styles from '../style';
import Calendar from 'react-calendar';
import { visitInfo } from '../data/constants';
import 'react-calendar/dist/Calendar.css';

const calendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <section 
      id='events'
      className='flex flex-wrap justify-center sm:justify-between py-4 drop-shadow-2xl'
    >
      <div className='w-4/5 sm:w-1/2 p-4'>
        <h1 className={`${styles.heading1}`}>Events</h1>
        <p className='px-2 py-4 whitespace-pre-line font-poppins'>
          Stay up to date on service updates, workshops, events, and lunch 'n learns. 
        </p>
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className='flex justify-center w-full sm:w-1/2 p-4'>
        <div>
          <h1 className={`${styles.heading1}`}>Visit</h1>
          <h2 className={`${styles.heading2}`}>Humber North Campus</h2>
          <p className='p-2 whitespace-pre-line font-poppins'>{visitInfo.north}</p>
          <h2 className={`${styles.heading2}`}>Humber Lakeshore Campus</h2>
          <p className='p-2 whitespace-pre-line font-poppins'>{visitInfo.lake}</p>
          <div className={`${styles.flexCenter} my-6`}>
            <button className='p-4 bg-primary2 font-bold rounded-lg drop-shadow-xl hover:scale-110'>Book a Tour</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default calendar