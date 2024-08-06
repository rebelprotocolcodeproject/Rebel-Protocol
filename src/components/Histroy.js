'use client'
import { useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import Slider from "react-slick";
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
import '../style/HowToBuy.css'
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { readContract } from "@wagmi/core";
import { contractABI } from "@/utils/abi";
import { config } from "@/utils/config";
import { useAccount } from "wagmi";
export default function Histroy({ histroyPopoverHandler }) {
  const { address, isConnected } = useAccount();
  const [totalBNB, setTotalBNB] = useState();
  const [totalUSDT, setTotalUSDT] = useState();
  const [totalUSDC, setTotalUSDC] = useState();
  const [totalPurchasedToken, setTotalPurchasedToken] = useState();
  const userHistory = async () => {
    const result = await readContract(config, {
      abi: contractABI,
      address: "0xe14551815a3D2987E0aB1FF0a5f938eb58d65baB",
      functionName: "users",
      args: [address],
    });
    const bnbResult = result[0] != 0n ? Number((result[0])) / 1e18 : 0;
    const usdtResult = result[1] != 0n ? Number((result[1])) / 1e18 : 0;
    const usdcResult = result[2] != 0n ? Number((result[2])) / 1e18 : 0;
    const totalpurchasedToken = result[5] != 0n ? Number((result[5])) / 1e18 : 0;
    setTotalBNB(bnbResult);
    setTotalUSDT(usdtResult.toFixed(2));
    setTotalUSDC(usdcResult.toFixed(2));
    setTotalPurchasedToken(totalpurchasedToken.toFixed(2));
  };

  userHistory();
  return (
    <>
      <div className='fixed top-0 bottom-0 left-0 right-0 bg-black/70  h-full z-50 flex justify-center'>
        <div className='relative w-[90%]  md:w-[55%] lg:w-[40%] xl:w-[30%] mt-16 md:mt-20 bg-[#0f0f11] h-fit border border-[#cc3cd9] shadow-2xl p-3'>
          <div className="absolute right-2 top-2 text-base p-2 border border-stone-500" onClick={histroyPopoverHandler}><CgClose /></div>
          <h1 className="text-lg md:text-xl lg:text-2xl font-medium text-white text-center pt-10">Transaction Histroy</h1>
          <div className="flex flex-col text-center gap-2 lg:gap-3 py-4 md:py-5 mt-5 rounded-lg  bg-[#cc3cd9]/5">
            <h1 className=" text-sm md:text-base text-white">Total Purchased Tokens</h1>
            <p className="text-[#cc3cd9] text-2xl lg:text-3xl font-semibold">{totalPurchasedToken} $REB</p>
          </div>



          <div className="flex flex-col text-center gap-3 lg:gap-5 p-4 md:py-5 mt-5 rounded-lg  bg-[#cc3cd9]/5">
            <div className=" flex justify-between">
              <h1 className="text-sm md:text-base  text-white">Total BNB</h1>
              <p className="text-[#cc3cd9] text-base md:text-lg font-semibold">{totalBNB}</p>
            </div>
            <div className="flex justify-between ">
              <h1 className="text-sm md:text-base text-white">Total USDT</h1>
              <p className="text-[#cc3cd9] text-base md:text-lg font-semibold">{totalUSDT}</p>
            </div>
            <div className="flex justify-between ">
              <h1 className="text-sm md:text-base  text-white">Total USDC</h1>
              <p className="text-[#cc3cd9] text-base md:text-lg font-semibold">{totalUSDC}</p>
            </div>
          </div>



        </div>
      </div>
    </>
  )
}
