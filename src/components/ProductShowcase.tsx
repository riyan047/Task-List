import Image from "next/image";
import appScreen from '../assets/images/app-screen.png'
export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#46217E_34%] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl tracking-tighter font-bold">Intuitive interface</h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts,
            and celebrate your successes, one task at a time.</p>
        </div>
        <div className="flex justify-center  items-center">
        <Image src={appScreen} alt="The product dashboard" className="mt-14" />
        </div>
          
      </div>
    </div>
  )
};
