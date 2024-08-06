'use client'
import React from 'react'
import Image from 'next/image';
import logo from "/public/images/logo192.png"


export default function Tokenomic() {



  return (
    <>
      <div className="flex flex-col md:grid    md:grid-rows-4 lg:grid-rows-3 grid-flow-col gap-4">
        <Card text="Presale" percentage={15} subtext='40% unlock TGE , 60% vesting 3 month with monthly claim' />
        <Card text="Liquidity" percentage={40} />
        <Card text="Community and user incentives" percentage={15} subtext='20% unlock after 7days TGE , 80% vesting 4month with monthly claim' />
        <div className='flex  md:hidden lg:flex row-span-1 md:row-span-2 items-center justify-center'>
          <Image
            src={logo}
            alt="logo"
            className="w-[60%] rounded-full border-8 border-white p-12"
            width={100}
            height={100}
            priority
          />
        </div>
        <div><Card text="Team and advisor" percentage={10} subtext="10% unlock TGE, cliff 12month, 90% vesting 9month with monthly claim" /></div>
        <div><Card text="Ecosystem" percentage={10} /></div>
        <div><Card text="Startegic partnership and ecosystem" percentage={10} subtext="20% unlock TGE , Cliff 1Month , 80%vesting 4month with monthly claim" /></div>
        <div><Card text="Marketing and community growth" percentage={10} /></div>
      </div>


      {/*
      <div>
        <div className='flex justify-center mb-5 '>
          <div className=' px-10 py-3 rounded-lg bg-[#cc3cd9]/10'>
            <h1 className='text-center text-sm text-[#cc3cd9]'>Total Supply</h1>
            <p className='text-3xl font-semibold text-[#cc3cd9]'>1,000,000,000</p>
          </div>
        </div>
        <div className='relative grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-3 lg:gap-4'>
          <div className='absolute w-full h-full hidden md:flex justify-center items-center'>
            <Image
              src={img}
              alt="Background"
              className=" lg:w-60 xl:w-96 z-0"
            />
          </div>
          <div className='col-start-1 lg:col-start-2  col-span-12 md:col-span-6 lg:col-span-3'>
            <Card text="Presale" percentage={15} />
          </div>
          <div className='col-start-1 lg:col-start-9 col-span-12  md:col-span-6  lg:col-span-3'>
            <Card text="Liquidity" percentage={40} />
          </div>
          <div className='col-start-1 lg:col-start-3 col-span-12  md:col-span-6  lg:col-span-3'>
            <Card text="Community and user incentives" percentage={15} />
          </div>
          <div className='col-start-1 lg:col-start-8 col-span-12  md:col-span-6  lg:col-span-3'>
            <Card text="Team and advisor" percentage={10} />
          </div>
          <div className='col-start-1 lg:col-start-2 col-span-12 md:col-span-6 lg:col-span-3'>
            <Card text="Marketing and community growth" percentage={10} />
          </div>
          <div className='col-start-1 lg:col-start-9 col-span-12  md:col-span-6  lg:col-span-3'>
            <Card text="Startegic partnership and ecosystem" percentage={10} />
          </div>
        </div>
      </div>
       */}


    </>
  )
}

const Card = ({ text, percentage, subtext }) => {
  return (
    <div className="relative bg-[#0f0f11]/90 rounded-lg shadow-lg p-4 w-full h-full">
      <div className="text-base md:text-base text-white font-medium">{text}</div>
      <div className="flex items-center mt-2">
        <div className="w-full bg-[#cc3cd9]/15  rounded-full h-2">
          <div
            className="bg-fuchsia-700 h-2 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="ml-4 text-sm md:text-base text-white font-medium">{percentage}%</div>
      </div>
      <div className="text-sm md:text-base font-medium mt-5">{subtext}</div>
    </div>
  );
};