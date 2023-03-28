import React, { useState } from 'react'
import styles from '../style';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const calendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='px-4 py-8 drop-shadow-2xl'>
      <h1 className={`${styles.heading1}`}>Events</h1>
      <Calendar onChange={onChange} value={value} />
    </div>
  )
}

export default calendar