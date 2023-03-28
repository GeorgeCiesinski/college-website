import React from 'react';
import { useState} from 'react';
import styles from '../style';
import { bytesImages } from '../data/constants';
import { mdiChevronLeft, mdiChevronRight, mdiCircleMedium } from '@mdi/js';
import { Icon } from '@mdi/react';

const Tile = ({ title, description, image, alt }) => {
  return (
    <>
      <img src={image} alt={alt} className='h-auto rounded-t-lg' />
      <div className='p-2'>
        <p className='font-bold text-[18px] text-center'>
          {title}
        </p>
        <p className='text-center'>
          {description}
        </p>
      </div>
    </>
  )
}

const bits = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const width = screen.width;
  const margin = 14;
  const translateAmount = width > 767 ? 235 + margin : 200 + margin;

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? bytesImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * translateAmount}px)`;
  }

  const nextSlide = () => {
    const isFirstSlide = currentIndex === bytesImages.length - 1;
    const newIndex = isFirstSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * translateAmount}px)`;
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className='w-full relative group py-8'>
      <div className={`${styles.flexCenter} relative w-full h-max`}>
        <div className='w-3/5 sm:w-4/5 overflow-hidden'>
          <div className='flex w-max slider'>
            {bytesImages.map((byte, index) => (
              <div key={byte.id} className='w-[200px] sm:w-[235px] my-20 mx-4 bg-primary2 rounded-lg drop-shadow-lg hover:scale-110 cursor-pointer'>
                <Tile title={byte.title} description={byte.description} image={byte.image} alt={byte.id} />
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.paddingX} absolute top-[10%] translate-y-[-90%]`}>
          <h1 className={`${styles.heading1} ${styles.flexCenter} px-4`}>Bits & Bytes</h1>
        </div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p2 bg-black/20 hover:bg-black/40 text-white cursor-pointer'>
          <Icon 
            path={mdiChevronLeft} 
            size={2} 
            alt='slide-left'
            onClick={prevSlide}
          /> 
        </div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p2 bg-black/20 hover:bg-black/40 text-white cursor-pointer'>
          <Icon 
            path={mdiChevronRight} 
            size={2} 
            alt='slide-right'
            onClick={nextSlide}
          /> 
        </div>
        <div className='absolute top-[90%] left-[50%] -translate-x-[50%] flex justify-center rounded-full bg-black/20 hover:bg-black/40'>
          {bytesImages.map((slide, slideIndex) => (
            <div key={slideIndex} className={`text-2xl cursor-pointer text-white ${slideIndex === bytesImages.length - 1 ? 'mr-0' : 'mr-5'}`}>
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
    </div>

  )
}

export default bits