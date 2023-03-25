import React from 'react'
import { footerLinks } from '../data/constants';
import { mdiTwitter, mdiFacebook, mdiYoutube, mdiLinkedin, mdiRss, mdiInstagram } from '@mdi/js';
import { Icon } from '@mdi/react';

const footer = () => {
  return (
    <div className='w-full min-h-[200px] text-white'>

      <ul className='flex flex-wrap justify-between py-6'>
        {footerLinks.map((footer, index) => (
          <li key={footer.id} className='font-poppins font-medium text-[18px] mx-2 my-2'>
            {footer.title}
            <ul>
              {footer.links.map((link, index) => (
                <li key={link.id} className='font-normal text-[16px] cursor-pointer'>{link.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className='flex justify-center py-2'>
        <Icon path={mdiTwitter} size={1} alt='menu' className='w-[28px] h-[28px] mx-2' />
        <Icon path={mdiFacebook} size={1} alt='menu' className='w-[28px] h-[28px] mx-2' />
        <Icon path={mdiYoutube} size={1} alt='menu' className='w-[28px] h-[28px] mx-2' />
        <Icon path={mdiLinkedin} size={1} alt='menu' className='w-[28px] h-[28px] mx-2' />
        <Icon path={mdiRss} size={1} alt='menu' className='w-[28px] h-[28px] mx-2' />
        <Icon path={mdiInstagram} size={1} alt='menu' className='w-[28px] h-[28px] mx-2' />
      </div>

      <div className='flex flex-wrap justify-center py-2 text-[12px]'>
        <div className='cursor-pointer mx-2'>
          Privacy Policy
        </div>
        <div className='cursor-pointer mx-2'>
          Terms of Use
        </div>
        <div className='cursor-pointer mx-2'>
          Code of Student Conduct
        </div>
        <div className='cursor-pointer mx-2'>
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
