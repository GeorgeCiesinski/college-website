import React from 'react';
import styles from './style';
import { Navbar } from './components';

const App = () => (
  <div className='bg-white w-full overflow-hidden'>
    <div className={`${styles.padding} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  </div>
);

export default App
