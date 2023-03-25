import React from 'react';
import styles from './style';
import { Navbar, Hero, Quick, Key, Visit, Calendar, Bits, Faq, Footer } from './components';

const App = () => (
  <div className='bg-gray-100 w-full overflow-hidden'>
    <div className={`${styles.padding} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-gray-50 ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-gray-50 ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Quick />
      </div>
    </div>

    <div className={`bg-gray-50 ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Key />
      </div>
    </div>

    <div className={`bg-gray-50 ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Visit />
      </div>
    </div>

    <div className={`bg-gray-50 ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Calendar />
      </div>
    </div>

    <div className={`bg-gray-50 ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Bits />
      </div>
    </div>

    <div className={`bg-gray-50 ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Faq />
      </div>
    </div>

    <div className={`bg-gray-100 ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>

  </div>
);

export default App
