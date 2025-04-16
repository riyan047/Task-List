import Image from 'next/image';
import logoImage from '../assets/images/logosaas.png';
import MenuIcon from '../assets/icons/menu.svg'

export const Navbar = () => {
  return (<div className='bg-black'>
  <div className="px-4">
    <div className='  py-4 flex justify-between items-center'>
      <div className="relative ">
        <div className="absolute inset-0 rounded-xl blur-sm z-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] bg-200 animate-slide-bg"></div>
        <div className="relative z-10 flex items-center justify-center h-full w-full bg-black rounded-xl">
          <Image src={logoImage} alt="Saas Logo" className="h-12 w-12" />
        </div>
      </div>
      <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>
        <MenuIcon className='text-white' />
      </div>
      <nav className=' gap-6 items-center hidden sm:flex'>
        <a href="#features" className='text-opacity-60 text-white hover:text-opacity-100 transition'>About</a>
        <a href="#features" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Features</a>
        <a href="" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Updates</a>
        <a href="" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Help</a>
        <a href="" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Customers</a>
        <button className='bg-white py-2 px-4 rounded-lg'>Get for free</button>
      </nav>
    </div>
  </div>
  </div>
  )
};
