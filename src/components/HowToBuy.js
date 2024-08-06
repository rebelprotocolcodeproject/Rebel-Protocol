'use client'
import { useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import Slider from "react-slick";
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
import '../style/HowToBuy.css'
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import logo from '/public/images/logo192.png'

export default function HowToBuy({ togglehandler }) {


  const StepsData = [

    {
      number: 'STEP1',
      title: 'CONNECT',
      content: "After completing your purchase, your $REB token balance will be displayed on the buy widget. You can claim these tokens once the $REB presale has concluded."
    },
    {
      number: 'STEP2',
      title: 'SWAP',
      content: "Next, you'll need some cryptocurrency to make your purchase. You can use BNB, USDT, or USDC. Ensure you have enough funds in your wallet to cover both the purchase and any transaction fees. You can deposit funds or buy cryptocurrency directly within Best Wallet or any compatible wallet."
    },
    {
      number: 'STEP3',
      title: 'CLAIM',
      content: "After completing your purchase, your $REB token balance will be displayed on the buy widget. You can claim these tokens once the $REB presale has concluded."
    },
    {
      title: 'ADDITIONAL INFORMATION',
      content: "Our platform supports transactions across multiple payment options including BNB chain , USDT, USDC. This wide support ensures flexibility and convenience for users, allowing you to choose the payment options that best suits your needs."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (index) => setCurrentIndex(index),
  };

  let sliderRef;


  return (
    <>
      <div className='fixed top-0 bottom-0 left-0 right-0 bg-black/70  h-full z-50 flex justify-center'>
        <div className='font-extrabold relative w-[90%]  md:w-[55%] lg:w-[40%] xl:w-[30%] mt-16 md:mt-20 bg-[#0f0f11] h-fit border-2 border-[#cc3cd9]  p-3'>
          <div className="absolute right-2 top-2 text-base p-2 border border-stone-500" onClick={togglehandler}><CgClose /></div>

          <h1 className='text-3xl py-2  text-white'>How To Buy ?</h1>
          <div className="flex justify-center mt-10">
            <Image src={logo} alt="Corporate Logo" className="w-20" width={100} height={100} priority />
          </div>

          <div className="">
            <Slider ref={c => (sliderRef = c)} {...settings} className="lg:p-2">
              {StepsData.map((step, index) => (
                <div key={index} className="p-2 lg:p-4 border-2 border-stone-600 h-72 md:h-52 mt-3">
                  <div className="flex text-xl  gap-2">
                    {
                      step.number && <span className="text-stone-500">{step.number} - </span>
                    }
                    <span className=" text-white "> {step.title}</span>
                  </div>
                  <p className="text-sm text-gray-300 font-medium my-2">{step.content}</p>
                </div>
              ))}
            </Slider>
            <div className="flex text-white items-center justify-center mt-8 gap-5">
              <div className={`text-2xl py-2 px-3 cursor-pointer ${currentIndex === 0 ? 'border border-stone-500' : 'bg-[#cc3cd9]'}`} onClick={() => sliderRef.slickPrev()}>
                <TiArrowLeftOutline />
              </div>
              <div className="flex items-center gap-1">
                {StepsData.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full  ${i === currentIndex ? 'bg-[#cc3cd9]' : 'bg-stone-500'}`}
                    onClick={() => sliderRef.slickGoTo(i)}
                  />
                ))}
              </div>
              <div className={`text-2xl text-white py-2 px-3 cursor-pointer ${currentIndex === StepsData.length - 1 ? 'border border-stone-500' : 'bg-[#cc3cd9]'}`} onClick={() => sliderRef.slickNext()}>
                <TiArrowRightOutline />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

const NextArrow = ({ onClick }) => (
  <div className="hidden" onClick={onClick}>

  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="hidden " onClick={onClick}>

  </div>
);
