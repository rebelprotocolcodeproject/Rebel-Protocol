'useClient'
import React, { useEffect, useState } from 'react'
import { IoArrowUpOutline } from "react-icons/io5";


export default function UpScrolbutton() {

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 70) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='fixed bottom-3 right-3 cursor-pointer  lg:bottom-6 lg:right-5 '>
      <span className={`duration-200 shadow-2xl text-2xl  border-2 border-[#cc3cd9] hover:bg-[#cc3cd9] hover:text-black font-semibold text-[#cc3cd9] p-2 lg:p-2 rounded-full  ${isVisible === true ? "flex" : "hidden"}`} onClick={goToTop}>
        <IoArrowUpOutline />
      </span>
    </div>
  )
}

