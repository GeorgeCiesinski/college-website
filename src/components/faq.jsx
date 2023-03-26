import React from 'react';
import { useState } from 'react';
import { faqQuestions, visitInfo } from '../data/constants';
import { mdiPlus, mdiMinus } from '@mdi/js';
import { Icon } from '@mdi/react';

const QuestionAnswer = ({ title, answer }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button 
        className='flex justify-between items-center bg-primary1 text-white font-medium h-16 text-left w-full p-2'
        onClick={() => setToggle((prev) => !prev)}
      >
        {title}
        <Icon 
                    path={toggle ? mdiMinus : mdiPlus} 
                    size={1} 
                    alt='expand'
                    className='w-[28px] h-[28px]'
        />
      </button>
      <div className={`${toggle ? 'flex' : 'hidden'} whitespace-pre-line bg-primary2 text-white p-2`}>
        {answer}
      </div>
    </>
  )
};

const faq = () => {
  return (
    <div className='flex flex-wrap'>
      <div className='w-full sm:w-1/2 p-4'>
        <h1 className='text-primary1 text-[25px] font-bold p-2 text-center sm:text-left'>Frequently Asked Questions</h1>
        {faqQuestions.map((question, index) => (
          <div key={question.id}>
            <QuestionAnswer title={question.title} answer={question.answer} />
          </div>
        ))}
      </div>
      <div className='flex justify-center w-full sm:w-1/2 p-4'>
        <div className='w-max'>
          <h1 className='text-primary1 text-[25px] font-bold p-2 text-center sm:text-left'>Drop-In Support</h1>
          <h2 className='text-primary1 text-[16px] font-bold p-2 text-center sm:text-left'>Hours</h2>
          <p className='p-2'>
            {visitInfo.hours}
          </p>
          <h2 className='text-primary1 text-[16px] font-bold p-2 text-center sm:text-left'>Location</h2>
          <p className='p-2 whitespace-pre-line'>
            {visitInfo.location}
          </p>
        </div>
      </div>
    </div>
  )
}

export default faq
