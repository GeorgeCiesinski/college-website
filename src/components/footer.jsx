import React from 'react'
import { footerLinks } from '../data/constants';
import { mdiTwitter, mdiFacebook, mdiYoutube, mdiLinkedin, mdiRss, mdiInstagram } from '@mdi/js';
import { Icon } from '@mdi/react';

const footer = () => {
  return (
    <div className='w-full min-h-[200px] text-white'>

      <ul className='flex flex-wrap justify-between py-6'>
        {footerLinks.map((footer, index) => (
          <li key={footer.id} className='font-poppins font-medium text-[20px] mx-2 my-2'>
            {footer.title}
            <ul className='mt-2'>
              {footer.links.map((link, index) => (
                <li key={link.id} className='text-primary2 font-normal text-[16px] cursor-pointer hover:underline'>{link.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className='flex justify-center py-2'>
        <Icon path={mdiTwitter} size={1} alt='menu' className='w-[28px] h-[28px] mx-2 cursor-pointer hover:scale-125' />
        <Icon path={mdiFacebook} size={1} alt='menu' className='w-[28px] h-[28px] mx-2 cursor-pointer hover:scale-125' />
        <Icon path={mdiYoutube} size={1} alt='menu' className='w-[28px] h-[28px] mx-2 cursor-pointer hover:scale-125' />
        <Icon path={mdiLinkedin} size={1} alt='menu' className='w-[28px] h-[28px] mx-2 cursor-pointer hover:scale-125' />
        <Icon path={mdiRss} size={1} alt='menu' className='w-[28px] h-[28px] mx-2 cursor-pointer hover:scale-125' />
        <Icon path={mdiInstagram} size={1} alt='menu' className='w-[28px] h-[28px] mx-2 cursor-pointer hover:scale-125' />
      </div>

      <div className='text-primary2 flex flex-wrap justify-center py-2 text-[12px]'>
        <div className='cursor-pointer mx-2 hover:underline'>
          Privacy Policy
        </div>
        <div className='cursor-pointer mx-2 hover:underline'>
          Terms of Use
        </div>
        <div className='cursor-pointer mx-2 hover:underline'>
          Code of Student Conduct
        </div>
        <div className='cursor-pointer mx-2 hover:underline'>
          Request Alternate Format
        </div>
      </div>

      <div className='flex justify-center py-2'>
        <p>&copy; 2023 Humber College</p> 
      </div>
      
    </div>
  )
}

export default footer
