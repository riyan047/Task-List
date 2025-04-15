"use client";
import { useEffect, useRef } from 'react';
import EcosystemIcon from '../assets/icons/ecosystem.svg';
import { motion, motionValue, useMotionTemplate } from 'framer-motion';

export const Feature = ({ title, description }: { title: string, description: string }) => {

    const border = useRef<HTMLDivElement>(null);
    const offsetX = motionValue(-100);
    const offsetY = motionValue(-100);
    const maskedImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            //FROM THE MOUSE EVENT WE CAN GET X AND Y POSITION OF MOUSE

            if (!border.current) return;
            const borderRect = border.current?.getBoundingClientRect();
            offsetX.set(e.x - borderRect.x);
            offsetY.set(e.y - borderRect.y);
            //e.x/y is mouse position and boredRect.x/y is borderposition.
        }
        window.addEventListener('mousemove', updateMousePosition)
        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
        }
    }, [])
    return (
        <div className="w-[360px] h-[260px] relative border border-white/30 px-5 py-10 text-center rounded-xl">
            <motion.div className=" absolute inset-[-1px] border-2 border-purple-400 rounded-xl"
                style={{
                    WebkitMaskImage: maskedImage,
                    maskImage: maskedImage
                }}
                ref={border}
            ></motion.div>
            <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
                <EcosystemIcon />
            </div>
            <h3 className="mt-6 font-bold">{title}</h3>
            <p className="mt-2 text-white/70">{description}</p>
        </div>
    )
} 