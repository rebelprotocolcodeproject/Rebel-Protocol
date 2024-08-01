"use client";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Heropage from "@/components/Heropage";
import HowItsWorks from "@/components/HowItsWorks";
import NavBar from "@/components/NavBar";
import Presale from "@/components/Presale";
import RoadMap from "@/components/RoadMap";
import Tokenomic from "@/components/Tokenomic";
import UpScrolbutton from "@/components/UpScrolbutton";
import Why from "@/components/Why";
import { FaUpRightFromSquare } from "react-icons/fa6";




export default function Home() {

  return (
    <>

      {/* <Provider/> */}
      <div className='relative w-full '>
        <NavBar />

        <div className="fixed  z-50  rainbow-gradient-circle "></div>
        <div className="fixed z-50  theme-pink"></div>

        <div id='/' className='my-10 md:mt-20 lg:mt-8'  >
          <Heropage />
        </div>

        <div className='relative flex flex-col px-3 sm:px-7 lg:px-16  xl:px-28 overflow-hidden gap-y-16 md:gap-y-20 xl:gap-y-24'>
          <div id='section2'>
            <Presale />
          </div>
          <div id='section1' >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8 md:mb-12">
              About Us
            </h1>
            <AboutUs />
          </div>
          <div id='section4' >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8 md:mb-12">
              Why
            </h1>
            <Why />
          </div>
          <div id='section3'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8 md:mb-16">
              {`How It's Works`}
            </h1>
            <HowItsWorks />
          </div>
          <div id='section5'  >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-6 md:mb-10">
              Tokenomic
            </h1>
            <Tokenomic />
          </div>
          <div id='section6'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8 md:mb-10 lg:pb-20">
              RoadMap
            </h1>
            <RoadMap />
          </div>
        </div>


        <Footer />
        <UpScrolbutton/>
      </div>
    </>
  );
}
