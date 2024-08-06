'use client'
import earthbg from '/public/images/otherimages/pngegg.png'
import carcual from '/public/images/otherimages/Rebel.png'
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../style/HeroPage.css'
import Image from 'next/image';
import logo from '/public/images/logo192.png'

export default function Heropage() {

  // const controls = useAnimation();

  // useEffect(() => {
  //   const sequence = async () => {
  //     await controls.start({
  //       x: 0,
  //       rotate: 360,
  //       transition: { duration: 2, ease: "easeInOut" },
  //     });
  //     controls.start({
  //       rotate: 0, // Stop rotation after the entrance animation
  //       transition: { duration: 0 },
  //     });
  //     controls.start({
  //       rotateY: [0, 180, 0], 
  //       y: [0, -20, 0], 
  //       transition: {
  //         duration: 3,
  //         ease: "easeInOut",
  //         repeat: Infinity,
  //       },
  //     });
  //   };
  //   sequence();
  // }, [controls]);

  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        x: 0,
        rotate: 360,
        transition: { duration: 1.5, ease: "easeInOut" },
      });
      controls.start({
        rotate: 0, // Stop rotation after the entrance animation
        transition: { duration: 0 },
      });
      controls.start({
        rotateY: [0, 180, 0], // Flip like a coin
        y: [0, -20, 0], // Bounce up and down
        transition: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        },
      });
    };
    sequence();
  }, [controls]);

  return (
    <>
      <div className='relative px-4 sm:px-7  lg:px-40 grid grid-cols-1 md:grid-cols-2   gap-7 lg:gap-16 pt-20 md:py-10 lg:py-28 overflow-hidden'>

        <div className="flex justify-center items-center">
          <motion.div
            className="relative px-10 xl:px-16 py-12 xl:py-20 w-[70%] md:w-[75%]"
            initial={{ x: '-100vw', rotate: 0 }}
            animate={controls}
          >
            <motion.div
              className="rounded-full border-[0.4rem] md:border-[0.6rem] xl:border-[0.7rem] border-white absolute inset-0"
              style={{ rotate: 0 }}
            />
            <Image src={logo} alt="Logo" width={1000} height={1000} className='h-full w-full' />
            {/* <div className="absolute inset-0 hidden lg:flex justify-center items-end bottom-6">
          <div className="text-center flex flex-col text-white text-base font-serif -gap-1">
            <span>REBEL</span>
            <span>PROTOCOL</span>
            
          </div>
        </div> */}
          </motion.div>
        </div>

        {/* <div className="flex justify-center items-center">
          <motion.div
            className="relative px-10 xl:px-16 py-12 xl:py-20 w-[70%] md:w-[75%]"
            initial={{ x: '-100vw', rotate: 0 }}
            animate={controls}
          >
            <motion.div
              className="rounded-full border-[0.4rem]  md:border-[0.6rem]  xl:border-[0.7rem] border-[#CC3CD9] absolute inset-0"
              style={{ rotate: 0 }}
            />
            <Image src={logo} alt="Logo" width={1000} height={1000} className='h-full w-full' />
           
          </motion.div>
         
        </div> */}

        {/* <div className="flex justify-center items-center">
      <motion.div
        className="relative px-16 py-20 w-[80%]"
        initial={{ x: '-100vw', rotate: 0 }}
        animate={controls}
      >
        <motion.div
          className="rounded-full border-[1rem] border-[#CC3CD9] absolute inset-0"
          animate={{
            rotateY: [0, 180, 0], 
            y: [0, -20, 0], 
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <Image src={logo} alt="Logo" width={1000} height={1000} className='h-full w-full' />
      </motion.div>
    </div> */}


        <div className=''>
          <h1 className=" text-start text-white  text-4xl lg:text-[56px] leading-[2.5rem] md:leading-[2.7rem] lg:leading-[4.2rem] font-bold mb-5 md:mb-4  lg:my-7 px-4 md:px-0 z-40">
            Legacy Meets Liquidity Is At Intersection
            <span className=" block md:inline lg:pl-5 text-[#CC3CD9]">
              Between <span className=" block lg:inline ">TradFi & DeFi</span>
            </span>
          </h1>
          <p className="text-white text-xs md:text-sm lg:text-lg text-start">
            Offering investor grade gold & other RWAs backed 1:1 by real world-assets.
          </p>
        </div>


        {/* <motion.div
      className="cube hidden lg:flex  absolute right-2 md:left-5 top-2 lg:top-12 transform -translate-y-1/2"
      animate={{ rotateX: 360, rotateY: 360 }}
      transition={{
        duration: 10,
        ease: 'linear',
        repeat: Infinity,
      }}
    >
      <div className="absolute w-16 h-16    border-4 border-[#cc3cd9]  cube__face--front"></div>
      <div className="absolute w-16 h-16    border-4 border-[#cc3cd9]   cube__face--back"></div>
      <div className="absolute w-16 h-16    border-4 border-[#cc3cd9]   cube__face--right"></div>
      <div className="absolute w-16 h-16    border-4 border-[#cc3cd9]  cube__face--left"></div>
      <div className="absolute w-16 h-16    border-4 border-[#cc3cd9]  cube__face--top"></div>
      <div className="absolute w-16 h-16    border-4 border-[#cc3cd9]  cube__face--bottom"></div>
    </motion.div>
     */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10,
            ease: 'linear',
            repeat: Infinity
          }}
          className='absolute hidden lg:flex bottom-20 -right-36 brightness-100 z-0'>
          <Image src={earthbg} alt="carousel" className='w-64 md:w-80  lg:w-[70%]' width={700} height={700} priority />
        </motion.div>



        {/* <div className="absolute w-full   ">
{particles.map((_, index) => {
        const size = getRandomSize();
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        return (
          <motion.div
            key={index}
            className="border-2 border-[#cc3cd9] absolute"
            style={{ width: size, height: size }}
            initial={{ opacity: 0, x, y }}
            animate={{ opacity: 1, x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              delay: index * 0.2
            }}
          />
        );
      })}
        </div> */}
      </div>

    </>
  )
}
