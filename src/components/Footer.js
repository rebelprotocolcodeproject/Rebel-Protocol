import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LuMails } from "react-icons/lu";

export default function Footer() {
    return (
        <>
            <div className='bg-black/50 w-full  py-6  mx-auto flex items-center justify-center md:justify-between flex-wrap py-2 px-3 sm:px-7 lg:px-28 text-sm  font-medium gap-y-5 border-t-2 border-t-[#FFFFFF1A]' >
                <p className='text-center'>@2024 Rebel Protocol Ltd. All rights reserved.</p>
                <div className="flex justify-center md:justify-start">
                    <div className='flex gap-4 flex-col md:flex-row'>
                        <p className='hover:text-[#cc3cd9] text-center pl-2   hover:underline underline-offset-4'>Join With Our Community</p>
                        <div className="flex justify-center items-center space-x-3 md:space-x-5">
                            <a href="https://t.me/rebelprotocol" target="_blank" className="hover:text-[#cc3cd9] text-2xl"><FaTelegram /></a>
                            <a href="https://x.com/rebelprotocol" target="_blank" className="hover:text-[#cc3cd9] text-2xl"><FaSquareXTwitter /></a>
                            <a href="mailto:chat@rebelprotocol.io" target="_blank" className="hover:text-[#cc3cd9] text-2xl">< LuMails /></a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
