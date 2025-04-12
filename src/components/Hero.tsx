import Image from 'next/image';
import ArrowWIcon from '../assets/icons/arrow-w.svg';
import cursorImage from '../assets/images/cursor.png';
import messageImage from '../assets/images/message.png';

export const Hero = () => {
  return (<div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
    {/* <div className='absolute bg-black h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] rounded-[100%] lg:h-[1200px] lg:w-[3000px] left-1/2 -translate-x-1/2 border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]'></div> */}
    <div className="container relative">
      <div className="flex items-center justify-center">
        <a href="" className="border py-1 px-2 rounded-lg border-white/30 inline-flex gap-2">
          <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">Version 2.0 is here</span>
          <span className='inline-flex items-center gap-1'>
            <span >Read More </span>
            <ArrowWIcon />
          </span>
        </a>
      </div>
      <div className='flex justify-center mt-8'>
        <div className='inline-flex relative'>
          <h1 className='text-7xl sm:text-9xl font-bold tracking-tighter text-center  inline-flex'>
            One Task
            <br />at a Time
          </h1>
          <Image src={cursorImage} alt='' height='200' width='200' className='absolute right-[490px] top-[108px] hidden sm:inline' />
          <Image src={messageImage} alt='' height='200' width='200' className='absolute top-[56px] left-[510px] hidden sm:inline' />
        </div>
      </div>
      <div className='flex justify-center'>
        <p className='text-center text-xl mt-8 max-w-md'>
          Celebrate the joy of accomplishment with an app designed to track your progress,
          motivate your efforts, and celebrate your successes.
        </p>
      </div>
      <div className='flex justify-center mt-8'>
        <button className='bg-white text-black py-3 px-5 rounded-lg font-medium hover:scale-105 transition-all ease-in-out'>
          Get for free
        </button>
      </div>


    </div>
  </div>);
};
