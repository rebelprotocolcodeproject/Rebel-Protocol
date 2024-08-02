import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <>
            <div className='bg-black/50 w-full  py-6  mx-auto flex items-center justify-center md:justify-between flex-wrap py-2 px-3 sm:px-7 lg:px-28 text-sm  font-medium gap-y-5 border-t-2 border-t-[#FFFFFF1A]' >
                <div className="flex justify-center md:justify-start">
                    <p className='hover:text-[#cc3cd9] text-center pr-2 border-r-2 border-r-[#FFFFFF1A]  hover:underline underline-offset-4 '>Privacy Policy</p>
                    <p className='hover:text-[#cc3cd9] text-center px-2  border-r-2 border-r-[#FFFFFF1A]  hover:underline underline-offset-4 '>Terms And Condition</p>
                    <div className='flex gap-4 flex-col md:flex-row'>
                        <p  className='hover:text-[#cc3cd9] text-center pl-2   hover:underline underline-offset-4'>Join With Our Community</p>
                        <div className="flex justify-center items-center space-x-5">
                            <a href="https://t.me/rebelprotocol" target="_blank" className="hover:text-[#cc3cd9] text-2xl"><FaTelegram /></a>
                            <a href="https://x.com/rebelprotocol" target="_blank" className="hover:text-[#cc3cd9] text-2xl"><FaSquareXTwitter /></a>
                        </div>
                    </div>
                </div>
                <p className='text-center text-[#CC3CD9]'>@RebelProtocol</p>
            </div>
        </>
    )
}
