import LinkedIcon from '../assets/icons/linkedin.svg';
import TwitterIcon from '../assets/icons/x-social.svg';

export const Footer = () => {
  return (
    <div className='bg-black text-white/70 text-center sm:py-5 '>
      <div className="container ">
        <p>&copy; 2025. All rights reserved</p>
        <div className='flex justify-center gap-4 mt-4'>
          <a href="https://www.linkedin.com/in/riyan-g" target='_blank'  ><LinkedIcon /></a>
          <a href="https://x.com/Riyan50889755" target='_blank' className='h-14 w-3' ><TwitterIcon /></a>
        </div>
      </div>
    </div>
  )
};
