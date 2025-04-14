import helixImage from '../assets/images/helix2.png'
import emojiStarImage from '../assets/images/emojistar.png'
import Image from 'next/image';

export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-xl relative">
        <Image src={emojiStarImage} className='absolute -top-[120px] right-[calc(100%+24px)]' alt='' />
        <Image src={helixImage} className='absolute top-6 left-[calc(100%+36px)]' alt='' />
        <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl">Get instant access</h2>
        <p className="text-white/70 mt-5 ">Celebrate the joy of accomplishment with
          an app designed to track your progress
          and motivate your efforts.</p>
        <form className="mt-10 flex flex-col gap-2.5 sm:max-w-sm mx-auto sm:flex-row flex-1">
            <input 
            type="email" 
            placeholder="name@email.com" 
            className="h-12 bg-white/20 rounded-lg px-5 font-medium "/>
            <button className="bg-white text-black h-12 px-5 rounded-lg ">Get access</button>
          </form>
      </div>
    </div>
  )
};
