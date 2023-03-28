import React from 'react';
import { useState} from 'react';
import { heroSlides } from '../data/constants';
import { mdiChevronLeft, mdiChevronRight, mdiCircleMedium } from '@mdi/js';
import { Icon } from '@mdi/react';

const bits = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? heroSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isFirstSlide = currentIndex === heroSlides.length - 1;
    const newIndex = isFirstSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className='h-[300px] sm:h-[450px] w-full relative group'>
      <div
        className='w-full h-full'
      ></div>
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p2 bg-black/20 text-white cursor-pointer'>
        <Icon 
                      path={mdiChevronLeft} 
                      size={2} 
                      alt='slide-left'
                      onClick={prevSlide}
        /> 
      </div>
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p2 bg-black/20 text-white cursor-pointer'>
        <Icon 
                      path={mdiChevronRight} 
                      size={2} 
                      alt='slide-right'
                      onClick={nextSlide}
        /> 
      </div>
      <div className='absolute top-[90%] left-[50%] -translate-x-[50%] flex justify-center rounded-full bg-black/20'>
        {heroSlides.map((slide, slideIndex) => (
          <div key={slideIndex} className={`text-2xl cursor-pointer text-white ${slideIndex === heroSlides.length - 1 ? 'mr-0' : 'mr-5'}`}>
            <Icon 
                      path={mdiCircleMedium}
                      size={1}
                      alt='slide-switch'
                      onClick={() => goToSlide(slideIndex)}
            />
          </div>
        ))}
      </div>
    </div>

  )
}

export default bits