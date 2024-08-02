'use client'
import React from 'react'
import { motion } from "framer-motion";

export default function HowItsWorks() {
  const steps = [
    {
      step: 1,
      title: 'Buy real-world asset token',
      description: 'With the Rebel app , you can easily purchase RWA tokens, using either crypto or fiat currency'
    },
    {
      step: 2,
      title: 'Earn yield and grow treasury',
      description: 'Add your token to the REBEL vaults and earn yield so you can grow your treasury'
    },
    {
      step: 3,
      title: 'Get your token in your wallet',
      description: 'After the transaction is complete, we will mint your token and transfers them directly to your wallet'
    },
    {
      step: 4,
      title: 'Redeem your token',
      description: 'You can redeem your RWA tokens with $REB for either crypto, fiat, or the asset it self'
    }
  ];

  
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <motion.div initial={{
              opacity: 0,
              y: step.step % 12 === 0 ? -50 : 50
            }}
              whileInView={{
                opacity: 1,
                y: 0, 
                transition: {
                  duration: 1
                }
              }}
              key={index}
              className="relative bg-[#0f0f11] shadow-lg text-center py-6  px-3  shadow-md rounded-lg">
              <div className="flex justify-center">
                <h1 className='rounded-full  py-2 px-4 text-lg md:text-xl lg:text-2xl font-semibold bg-[#cc3cd9] text-white'>
                  {step.step}
                </h1>
              </div>
              <div className='mt-6'>
                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-xs md:text-sm lg:text-base  mt-3">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
