import React from 'react';
import styles from './style';
import { Navbar, Hero, Quick, Calendar, Bits, Faq, Footer } from './components';

const App = () => (
  <div className='bg-white w-full overflow-hidden'>
    <div className={`${styles.padding} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-gray-50 ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Quick />
      </div>
    </div>

    <div className={`bg-gray-50 ${styles.paddingX} flex justify-center`}>
      <div className={`${styles.contentWidth}`}>
        <Faq />
      </div>
    </div>

    <div className={`bg-gray-50 ${styles.paddingX} flex justify-center`}>
      <div className={`${styles.boxWidth} max-w-[1440px]`}>
        <Calendar />
      </div>
    </div>

    <div className={`bg-gray-50 ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Bits />
      </div>
    </div>

    <div className={`bg-primary1 ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>

  </div>
);

export default App
