import React from 'react'
import { footerLinks } from '../data/constants';

const footer = () => {
  return (
    <div className='w-full min-h-[200px] py-6'>
      <ul className='flex justify-between'>
        {footerLinks.map((footer, index) => (
          <li key={footer.id} className='font-poppins font-normal text-[16px]'>
            {footer.title}
            <ul>
              {footer.links.map((link, index) => (
                <li key={link.id}>{link.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className='flex items-center'>
        Socials
      </div>

      <div>
        Legal
      </div>
    </div>
  )
}

export default footer
