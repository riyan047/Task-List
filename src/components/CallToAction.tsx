"use client";
import helixImage from '../assets/images/helix2.png'
import emojiStarImage from '../assets/images/emojistar.png'
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const CallToAction = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const translateYHelix = useTransform(scrollYProgress, [0, 1], [-90, 60]);
  const translateYEmoji = useTransform(scrollYProgress, [0, 1], [-20, 60]);
  return (
    <div ref={containerRef} className="bg-black text-white py-[72px] sm:py-24 text-center overflow-hidden">
      <div className="container max-w-xl relative">
        <motion.div style={{ translateY: translateYHelix }}>
          <Image src={helixImage} className='absolute top-6 left-[calc(100%+36px)]' alt='' />
        </motion.div>
        <motion.div style={{ translateY: translateYEmoji }}>
          <Image src={emojiStarImage} className='absolute -top-[100px] right-[calc(100%+24px)]' alt='' />
        </motion.div>
        <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl">Get instant access</h2>
        <p className="text-white/70 mt-5 ">Celebrate the joy of accomplishment with
          an app designed to track your progress
          and motivate your efforts.</p>
        <form className="mt-10 flex flex-col gap-2.5 sm:max-w-sm mx-auto sm:flex-row flex-1">
          <input
            type="email"
            placeholder="name@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium " />
          <button className="bg-white text-black h-12 px-5 rounded-lg ">Get access</button>
        </form>
      </div>
    </div>
  )
};
