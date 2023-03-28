import React from 'react';
import styles from './style';
import { Navbar, Hero, Quick, Calendar, Bits, Faq, Accessibility, Footer } from './components';

const App = () => (
  <div className='w-full overflow-y-visible snap-y scroll-pt-10'>
    <div className={`${styles.padding} ${styles.flexCenter} bg-white sticky top-0 z-20`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary2 ${styles.paddingX}`}>
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
      <div className={`${styles.boxWidth}`}>
        <Calendar />
      </div>
    </div>

    <div className='bg-gray-50'>
      <div className={`${styles.boxWidth}`}>
        <Bits />
      </div>
    </div>

    <div>
      <Accessibility /> 
    </div>

    <div className={`bg-primary1 ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>

  </div>
);

export default App
