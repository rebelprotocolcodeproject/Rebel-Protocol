"use client"
import React, { useState } from 'react';
import { CgMenuRight } from "react-icons/cg";
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link, Link as ScrollLink } from 'react-scroll';
import logo from '/public/images/logo.png'
import Image from 'next/image';
import { useAccount, useDisconnect } from "wagmi";
import { IoCopySharp } from "react-icons/io5";
import metamask from '/public/images/otherimages/metamask.png'
import { IoExitOutline } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();


  const copyToClipboard = () => {
    navigator.clipboard.writeText(address).then(
      () => {
        alert('Address copied to clipboard!');
      },
      (err) => {
        console.error('Failed to copy: ', err);
      }
    );
  };

  const [buttonshow, setButtonShow] = useState(false)
  const handler = () => {
    setButtonShow(!buttonshow)
  }

  return (
    <>
      <nav className='bg-black fixed w-full top-0 z-50 mx-auto flex items-center justify-between py-2 px-3 sm:px-7 lg:px-16  xl:px-28 text-[17px] ' style={{ borderBottom: '1px solid hsla(0, 0%, 100%, 0.1)' }}>
        <ScrollLink to="/" smooth={true} duration={500}>
          <Image className="w-36  lg:w-46" src={logo} alt="Corporate Logo" width={100} height={100} priority />
        </ScrollLink>
        <div className='elative  hidden xl:flex space-x-6 font-medium items-center'>
          <ScrollLink to="section1" smooth={true} duration={500} className="hover:text-[#cc3cd9 cursor-pointer">About Us</ScrollLink>
          <ScrollLink to="section2" smooth={true} duration={500} className="hover:text-[#cc3cd9] cursor-pointer">Presale</ScrollLink>
          <ScrollLink to="section3" smooth={true} duration={500} className="hover:text-[#cc3cd9] cursor-pointer">How It’s Work</ScrollLink>
          <ScrollLink to="section4" smooth={true} duration={500} className="hover:text-[#cc3cd9] cursor-pointer">Why</ScrollLink>
          <ScrollLink to="section5" smooth={true} duration={500} className="hover:text-[#cc3cd9] cursor-pointer">Tokenomic</ScrollLink>
          <ScrollLink to="section6" smooth={true} duration={500} className="hover:text-[#cc3cd9] cursor-pointer">Roadmap</ScrollLink>

          <a href="https://rebel-protocol.gitbook.io/rebel-protocol-whitepaper/" target="_blanks" className="hover:text-[#cc3cd9]">WhitePaper</a>
          <div className="flex items-center space-x-5">
            <a href="https://t.me/rebelprotocol" target="_blank" className="hover:text-[#cc3cd9] text-2xl"><FaTelegram /></a>
            <a href="https://x.com/rebelprotocol" target="_blank" className="hover:text-[#cc3cd9] text-2xl"><FaSquareXTwitter /></a>
          </div>
          {/* {isConnected && */}

          {isConnected && (
            <div className='flex items-center gap-3'>
              <div className=" flex relative  bg-[#cc3cd9]/10  rounded px-3">
                <div className="flex items-center flex-row gap-1   p-2 md:p-2  ">
                  <Image src={metamask}
                    alt="metamask"
                    className="w-5 h-5"
                    width={100}
                    height={100}
                    priority />
                  <h1 className="font-semibold break-all">
                    {/* {address.slice(0, 10)}... */}
                    {address ? address.slice(0, 10) : "No address"}
                  </h1>
                </div>

                <div className="text-lg absolute p-2 right-0 bg-[#cc3cd9]/15 flex items-center h-full rounded-r  cursor-pointer" onClick={copyToClipboard}>
                  <IoCopySharp />
                </div>
              </div>

              <div className='relative'>
                <div className='bg-[#cc3cd9]/40 p-3 rounded cursor-pointer' onClick={handler}>
                  <IoExitOutline />
                </div>

                <div className={`absolute right-0 top-16 p-5 bg-[#0f0f11] ${buttonshow === true ? 'block' : 'hidden'}`}>
                  <button className="w-fit rounded-lg bg-[#cc3cd9]/50 py-2 px-5 cursor-pointer relative" onClick={disconnect}>
                    Disconnect
                  </button>
                  <span className='absolute -top-1 -right-1 text-2xl cursor-pointer' onClick={handler}><IoMdCloseCircleOutline /> </span>
                </div>
              </div>
            </div>
          )}
        </div>


        <button onClick={toggleMobileMenu} className=" xl:hidden focus:outline-none bg-[#0f0f11] p-3 rounded-full text-lg cursor-pointer">
          <CgMenuRight />
        </button>


        <div className="fixed top-0  left-0 h-full w-[85%] sm:w-[40%] md: bg-[#0f0f11] shadow-lg transition-transform transform duration-500 ease-in-out text-base" style={{ transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
          <div className="flex justify-between items-center px-2 py-3" style={{ borderBottom: '1px solid hsla(0, 0%, 100%, 0.1)' }}>
            <ScrollLink to="/" smooth={true} duration={500} href="/">
              <Image className="w-32" src={logo} alt="Corporate Logo" width={100} height={100} priority />
            </ScrollLink>
            <button onClick={toggleMobileMenu} className="focus:outline-none bg-black p-2 rounded-full text-lg mr-1 cursor-pointer">
              <IoMdClose />
            </button>
          </div>
          <div className='flex flex-col mt-8 px-4 font-medium'>
            <ScrollLink to="section1" smooth={true} duration={500} className="hover:text-[#cc3cd9] py-2 cursor-pointer" style={{ borderBottom: '1px solid hsla(0, 0%, 100%, 0.1)' }} onClick={toggleMobileMenu}>About Us</ScrollLink>
            <ScrollLink to="section2" smooth={true} duration={500} href="presale" className="hover:text-[#cc3cd9] py-2 cursor-pointer" style={{ borderBottom: '1px solid hsla(0, 0%, 100%, 0.1)' }} onClick={toggleMobileMenu}>Presale</ScrollLink>
            <ScrollLink to="section3" smooth={true} duration={500} href="how" className="hover:text-[#cc3cd9] py-2 cursor-pointer" style={{ borderBottom: '1px solid hsla(0, 0%, 100%, 0.1)' }} onClick={toggleMobileMenu}>How It’s Work</ScrollLink>
            <ScrollLink to="section4" smooth={true} duration={500} className="hover:text-[#cc3cd9] py-2 cursor-pointer" style={{ borderBottom: '1px solid hsla(0, 0%, 100%, 0.1)' }} onClick={toggleMobileMenu}>Why</ScrollLink>

            <ScrollLink to="section5" smooth={true} duration={500} href="tokenomic1" className="hover:text-[#cc3cd9] py-2 cursor-pointer" style={{ borderBottom: '1px solid hsla(0, 0%, 100%, 0.1)' }} onClick={toggleMobileMenu}>Tokenomic</ScrollLink>
            <ScrollLink to="section6" smooth={true} duration={500} href="roadmap" className="hover:text-[#cc3cd9] py-2 cursor-pointer" style={{ borderBottom: '1px solid hsla(0, 0%, 100%, 0.1)' }} onClick={toggleMobileMenu}>Roadmap</ScrollLink>

            <a href="https://rebel-protocol.gitbook.io/rebel-protocol-whitepaper/" target="_blanks" className="hover:text-[#cc3cd9] py-2 cursor-pointer" style={{ borderBottom: '1px solid hsla(0, 0%, 100%, 0.1)' }} onClick={toggleMobileMenu}>WhitePaper</a>
            <div className="flex items-center space-x-3 py-4 justify-center">
              <a href="https://t.me/rebelprotocol" target="_blank" className="hover:text-[#cc3cd9] text-3xl cursor-pointer"><FaTelegram /></a>
              <a href="https://x.com/rebelprotocol" target="_blank" className="hover:text-[#cc3cd9] cursor-pointer text-3xl"><FaSquareXTwitter /></a>
            </div>

            {isConnected && (
              <div >
                <div className=" flex relative  bg-[#cc3cd9]/10  rounded px-3">
                  <div className="flex items-center flex-row gap-1   p-2 md:p-2  ">
                    <Image src={metamask}
                      alt="metamask"
                      className="w-5 h-5"
                      width={100}
                      height={100}
                      priority />
                    <h1 className="font-semibold break-all">
                      {address ? address.slice(0, 10) : "No address"}...
                    </h1>
                  </div>

                  <div className="text-lg absolute p-2 right-0 bg-[#cc3cd9]/15 flex items-center h-full rounded-r  cursor-pointer" onClick={copyToClipboard}>
                    <IoCopySharp />
                  </div>
                </div>

                <div className='flex justify-center mt-3 cursor-pointer'>
                  <div className='bg-[#cc3cd9]/15 p-3 rounded w-fit' onClick={handler}>
                    <IoExitOutline />
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className={` mt-3 relative  ${buttonshow === true ? 'block' : 'hidden'}`}>
                    <button className="w-fit rounded-lg bg-[#cc3cd9]/10 py-2 px-5 cursor-pointer relative" onClick={disconnect}>
                      Disconnect
                    </button>
                    <span className='absolute -top-1 -right-1 text-xl cursor-pointer' onClick={handler}><IoMdCloseCircleOutline /> </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

{/*  */ }