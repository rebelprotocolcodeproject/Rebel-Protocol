"use client";
import React, { useState, useEffect } from "react";
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaBitcoin } from "react-icons/fa";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import logo from "/public/images/logo192.png";
import { IoCopySharp } from "react-icons/io5";
import metamask from "/public/images/otherimages/metamask.png";
import BSC from "/public/images/chainlogo/bsc.png";
import PLG from "/public/images/chainlogo/plg.png";
import ARB from "/public/images/chainlogo/arb.png";
import BASE from "/public/images/chainlogo/base.png";
import BLAST from "/public/images/chainlogo/blast.png";
import LINES from "/public/images/chainlogo/linea.png";
import OP from "/public/images/chainlogo/op.png";
import ZK from "/public/images/chainlogo/zk.png";
import USDC from "/public/images/chainlogo/USDC.webp";
import USDT from "/public/images/chainlogo/usdt.webp";
import UK from "/public/images/otherimages/uk_flag.png";
import EURO from "/public/images/otherimages/euro.jpg";
import US from "/public/images/otherimages/us_flag.png";
import Link from "next/link";
import Image from "next/image";
import { CustomConnect } from "./CustomConnect";
import { useAccount, useDisconnect } from "wagmi";
import { config } from "../utils/config";
import { contractABI } from "../utils/abi.js";
import { tokenABI } from "../utils/tokenabi.js";
import {
  readContract,
  simulateContract,
  writeContract,
  getBalance,
} from "@wagmi/core";

import HowToBuy from "./HowToBuy";
import { motion } from "framer-motion";
import {
  parseUnits,
  formatUnits,
  getDefaultProvider,
  Contract,
  SigningKey,
  BrowserProvider,
  BigNumber,
} from "ethers";
import Histroy from "./Histroy";


export default function Presale() {
  const [tab, setTab] = useState("crypto");
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const displayAddress = address
    ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
    : "No address";

  const [time, setTime] = useState({
    days: 0,
    hours: 15,
    minutes: 0,
    seconds: 0,
  });
  const [BNBPrice, setBNBPrice] = useState(0);
  const [fortyDollarsInBNB, setFortyDollarsInBNB] = useState(0);
  const [usdRaised, setUsdRaised] = useState(0);
  const [percentRaised, setPercentRaised] = useState(0);

  useEffect(() => {
    const fetchBNBPrice = () => {
      fetch("https://api.coincap.io/v2/assets/binance-coin")
        .then((response) => response.json())
        .then((data) => {
          const currentPrice = data.data.priceUsd;
          setBNBPrice(currentPrice);
          const amountInBNB = 40 / currentPrice;
          setFortyDollarsInBNB(amountInBNB);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchBNBPrice();
    const interval = setInterval(fetchBNBPrice, 300000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Calculate end time based on the fixed duration (15 days)
    const endTime = localStorage.getItem("endTime");
    if (!endTime) {
      const now = new Date().getTime();
      const fixedDuration = 15 * 24 * 60 * 60 * 1000; // 15 days in milliseconds
      const calculatedEndTime = now + fixedDuration;
      localStorage.setItem("endTime", calculatedEndTime);
    }
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      const endTime = localStorage.getItem("endTime");
      if (!endTime) return;

      const now = new Date().getTime();
      const totalSeconds = Math.max((endTime - now) / 1000, 0);
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = Math.floor(totalSeconds % 60);

      setTime({ days, hours, minutes, seconds });

      if (totalSeconds <= 0) {
        clearInterval(countdown);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const formatTime = (value) => value.toString().padStart(2, "0");

  const chain = [
    { value: "BSC", imgSrc: BSC },
    // { value: "PLG", imgSrc: PLG },
    // { value: "ARB", imgSrc: ARB },
    // { value: "BASE", imgSrc: BASE },
    // { value: "BLAST", imgSrc: BLAST },
    // { value: "LINES", imgSrc: LINES },
    // { value: "OP", imgSrc: OP },
    // { value: "ZK", imgSrc: ZK },
  ];
  const [selectedChain, setSelectedChain] = useState(chain[0]);
  const [chainOpen, setChainOpen] = useState(false);

  const Currency = [
    { value: "BNB", imgSrc: BSC },
    { value: "USDC", imgSrc: USDC },
    { value: "USDT", imgSrc: USDT },
  ];
  const [CurrencyOpen, setCurrencyOpen] = useState(false);
  const [selectedCurrency, SetSelectedCurrency] = useState(Currency[0]);
  const [numberOfChain, setNumberOfChain] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Selected Currency value: ${selectedCurrency.value}`);
    console.log(`Number of Chains: ${numberOfChain}`);
    console.log(`Selected Chain value: ${selectedChain.value}`);
  };

  const country = [
    { value: "UK", imgSrc: UK },
    { value: "EURO", imgSrc: EURO },
    { value: "US", imgSrc: US },
  ];
  const [selectedCountry, SetSelectedCountry] = useState(country[0]);
  const [countryOpen, setCountryOpen] = useState(false);
  const [currencyAmount, setCurrencyAmount] = useState(0);
  const [userRebelCount, setUserRebelCount] = useState();

  const currencySCFn = {
    BNB: "nativeToToken",
    USDT: "usdtToToken",
    USDC: "usdtToToken",
  };

  const buySCFn = {
    BNB: "buyToken",
    USDT: "buyTokenUSDT",
    USDC: "buyTokenUSDC",
  };

  const getRebelCount = async () => {
    const result = await readContract(config, {
      abi: contractABI,
      address: "0xe14551815a3D2987E0aB1FF0a5f938eb58d65baB",
      functionName: "users",
      args: [address],
    });
    console.log(result);
    const finalResult = result[5] != 0n ? Number(result[5]) / 1e18 : 0;
    console.log(finalResult);
    setUserRebelCount(finalResult);
  };

  const Approve = async (tokenAddress) => {
    let tokenAmount = parseUnits(numberOfChain.toString(), 18)
    try {
      // Simulate the contract transaction to ensure it's likely to succeed
      const { request } = await simulateContract(config, {
        address: tokenAddress,
        abi: tokenABI,
        functionName: "approve",
        account: address,
        args: ["0xe14551815a3D2987E0aB1FF0a5f938eb58d65baB", tokenAmount],
      });

      // Execute the transaction
      const approvalTransaction = await writeContract(config, request);
      return approvalTransaction;
    } catch (error) {
      console.error("Failed to execute approve transaction:", error.message);
      throw error;
    }
  };

  const BuyNow = async () => {
    let args = [];
    let value = "0";

    // Convert the amount to the appropriate unit based on the selected currency
    if (selectedCurrency.value === "BNB") {
      // Convert the amount to wei for BNB transactions
      const weiEquivalent = parseUnits(numberOfChain.toString(), "ether");
      args = [weiEquivalent];
      value = weiEquivalent; // Set the value to send with the transaction, as BNB transactions are payable
    } else {
      if (parseFloat(numberOfChain) <= 40) {
        alert("Purchase amount must be greater than $40.");
        return;
      }
      args = [parseUnits(numberOfChain.toString(), 18)];
    }

    // Ensure address and selectedCurrency are defined
    if (!address || !selectedCurrency.value) {
      throw new Error("Address or selected currency is not defined");
    }

    // Log the current state
    console.log("Address:", address);
    console.log("Selected Currency:", selectedCurrency.value);
    console.log("Args:", args);
    console.log("Value:", value);

    try {
      // Check if the selected currency is USDT or USDC
      if (
        selectedCurrency.value === "USDT" ||
        selectedCurrency.value === "USDC"
      ) {
        let tokenAddress;
        if (selectedCurrency.value === "USDT") {
          tokenAddress = "0x55d398326f99059fF775485246999027B3197955"; // USDT Address Here
        } else {
          tokenAddress = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d "; // USDC Address Here
        }
        await Approve(tokenAddress);
      }
      // Simulate the contract transaction to ensure it's likely to succeed
      const { request } = await simulateContract(config, {
        address: "0xe14551815a3D2987E0aB1FF0a5f938eb58d65baB",
        abi: contractABI,
        functionName: buySCFn[selectedCurrency.value],
        account: address,
        args: args,
        value,
      });
      // Execute the buy transaction
      await writeContract(config, request);

      console.log("BuyNow transaction confirmed");
    } catch (error) {
      console.error("Failed to execute BuyNow transaction:", error.message);
      // Handle errors appropriately in your UI here
      if (error.name === "AbiFunctionNotFoundError") {
        console.error("Function not found in ABI");
      }
    }
  };

  // const BuyNow = async () => {
  //   let args = [];
  //   let value = "0";

  //   // Convert the amount to the appropriate unit based on the selected currency
  //   if (selectedCurrency.value === "BNB") {
  //     // Convert the amount to wei for BNB transactions
  //     const weiEquivalent = parseUnits(numberOfChain.toString(), 'ether');
  //     args = [weiEquivalent];
  //     value = weiEquivalent; // Set the value to send with the transaction, as BNB transactions are payable
  //   } else {
  //     args = numberOfChain.toString();
  //   }

  //   try {

  //     // update     // Ensure address and selectedCurrency are defined
  //     if (!address || !selectedCurrency.value) {
  //       throw new Error('Address or selected currency is not defined');
  //     }

  //     // Log the current state
  //     console.log("Address:", address);
  //     console.log("Selected Currency:", selectedCurrency.value);
  //     console.log("Args:", args);
  //     console.log("Value:", value);
  //     // Simulate the contract transaction to ensure it's likely to succeed
  //     const { request } = await simulateContract(config, {
  //       address: "0x4Da52cB50C7D89A67431C43ec843AabdE97EcbA2",
  //       abi: contractABI,
  //       functionName: buySCFn[selectedCurrency.value],
  //       account: address,
  //       args,
  //       value,
  //     });

  //     // Execute the transaction
  //     await writeContract(config, request);
  //   } catch (error) {
  //     console.error("Failed to execute BuyNow transaction:", error);
  //     // Handle errors appropriately in your UI here
  //   }
  // };

  const currencyAmountSC = async () => {

    if (!numberOfChain || isNaN(numberOfChain) || Number(numberOfChain) <= 0) {
      setCurrencyAmount(0);
      return;
    }

    const currentstage = await readContract(config, {
      abi: contractABI,
      address: "0xe14551815a3D2987E0aB1FF0a5f938eb58d65baB",
      functionName: "currentStage",
    });

    let args = [parseUnits(numberOfChain, 18), currentstage];
    const result = await readContract(config, {
      abi: contractABI,
      address: "0xe14551815a3D2987E0aB1FF0a5f938eb58d65baB",
      functionName: currencySCFn[selectedCurrency.value],
      args: args,
    });
    if (selectedCurrency.value === "BNB") {
      setCurrencyAmount(formatUnits(result, 18));
    } else {
      setCurrencyAmount(formatUnits(result, 18));
    }
  };

  useEffect(() => {
    if (isConnected) {
      console.log("Address:", address);
      console.log("Selected Currency:", selectedCurrency.value);
      currencyAmountSC();
      console.log("Currency Amount:", currencyAmount);
    }
  }, [selectedCurrency, numberOfChain, isConnected, address]);

  const [popover, setPopover] = useState(false);
  const togglehandler = () => {
    setPopover(!popover);
  };

  const [histroyPopover, setHistroyPopover] = useState(false);
  const histroyPopoverHandler = () => {
    setHistroyPopover(!histroyPopover);
  };

  const [width, setWidth] = useState(0);
  const value = percentRaised;
  useEffect(() => {
    setWidth(value);
  }, [value]);

  const userHistory = async () => {
    const result = await readContract(config, {
      abi: contractABI,
      address: "0xe14551815a3D2987E0aB1FF0a5f938eb58d65baB",
      functionName: "users",
      args: [address],
    });
    const bnbResult = result[0] != 0n ? Number(result[0]) / 1e18 : 0;
    const usdtResult = result[1] != 0n ? Number(result[1]) / 1e18 : 0;
    const usdcResult = result[2] != 0n ? Number(result[2]) / 1e18 : 0;
    const totalpurchasedToken = result[5] != 0n ? Number(result[5]) / 1e18 : 0;
    setTotalBNB(bnbResult);
    setTotalUSDT(usdtResult);
    setTotalUSDC(usdcResult);
    setTotalPurchasedToken(totalpurchasedToken);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address).then(
      () => {
        alert("Address copied to clipboard!");
      },
      (err) => {
        console.error("Failed to copy: ", err);
      }
    );
  };

  const getUsdRaised = async () => {
    const result = await readContract(config, {
      abi: contractABI,
      address: "0xe14551815a3D2987E0aB1FF0a5f938eb58d65baB",
      functionName: "totalRaised",
    });
    const finalResult = result != 0n ? Number(result) / 1e6 : 0;
    const sellPercent = (100 * finalResult) / 2086196;
    setUsdRaised(finalResult);
    setPercentRaised(sellPercent.toFixed(2));
  };

  useEffect(() => {
    getUsdRaised();
  }, []);

  return (
    <>
      <div className="relative grid grid-cols-12 gap-y-8 lg:gap-8 mt-12">
        <div className="col-span-12 xl:col-span-6 w-full ">
          <h1 className="text-3xl md:text-5xl  xl:text-6xl text-center xl:text-start  text-white font-semibold mb-12 lg:mb-16 lg:mt-7">
            Real-World Asset Tokenized Ecosystem
          </h1>
          <div className="flex justify-center w-full  mb-5 md:mb-7 lg:mb-10">
            <div className="flex flex-col px-3 md:px-6 py-4 border-2 rounded-lg border-[#FFFFFF1A] relative">
              <h1 className="text-center mb-4 text-lg text-white">
                Before Price Increase
              </h1>
              <div className="flex items-center">
                <TimeBlock label="Days" value={formatTime(time.days)} />
                <h3 className="font-semibold text-2xl px-2 lg:px-3">:</h3>
                <TimeBlock label="Hours" value={formatTime(time.hours)} />
                <h3 className="font-semibold text-2xl px-2 md:px-3">:</h3>
                <TimeBlock label="Minutes" value={formatTime(time.minutes)} />
                <h3 className="font-semibold text-2xl px-2 md:px-3">:</h3>
                <TimeBlock label="Seconds" value={formatTime(time.seconds)} />
              </div>

              <div className="absolute text-center -top-7 -right-2 md:-top-7 md:-right-7 bg-[#0f0f11] px-3 py-1 rounded-lg">
                <p className="text-xs md:text-sm">Next Price </p>
                <h1 className="text-[#cc3cd9] text-base md:text-lg font-semibold">
                  $0.012
                </h1>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center xl:justify-start space-x-3 md:space-x-5 ">
            <Link
              href="https://t.me/rebelprotocol"
              className="hover:text-[#cc3cd9] text-2xl md:text-3xl"
              target="_blank"
            >
              <FaTelegram />
            </Link>
            <Link
              href="https://x.com/rebelprotocol"
              className="hover:text-[#cc3cd9] text-2xl md:text-3xl"
              target="_blank"
            >
              <FaSquareXTwitter />
            </Link>
          </div>
        </div>

        <div className="col-span-12 relative xl:col-span-6  shadow-lg w-full px-0 sm:px-20 md:px-32 lg:px-20 xl:px-20 ">
          <div className="z-40 bg-[#0f0f11] rounded-lg  py-4 px-4 md:px-5">
            <h1 className="text-center text-xl md:text-2xl font-normal ">
              <div className="flex justify-center items-center">
                Buy <span className="font-bold text-[#cc3cd9] mx-2">$REB</span>{" "}
                Now!
                {/* <button onClick={disconnect} className="ml-4 py-1 px-3 ">
                  Disconnect
                </button> */}
              </div>
              {/* <span>{displayAddress}</span> */}
            </h1>

            {/* {displayAddress} */}
            <div className="mt-4 flex relative  bg-[#cc3cd9]/5  rounded-lg   ">
              <div className="flex items-center flex-row gap-2 p-4 md:p-5 ">
                <Image
                  src={metamask}
                  alt="metamask"
                  className="w-7 h-7 mr-2"
                  width={100}
                  height={100}
                  priority
                />
                <h1 className="text-[#cc3cd9]  text-base md:text-lg font-semibold break-all">
                  {address ? address.slice(0, 10) : "No address"}...
                </h1>
              </div>
              <div
                className="text-lg absolute p-3 right-0 bg-[#cc3cd9]/15 flex items-center h-full rounded-r-lg   cursor-pointer"
                onClick={copyToClipboard}
              >
                <IoCopySharp />
              </div>
            </div>

            <p className="mt-4 text-center text-sm md:text-base font-medium">
              USD Raise:{" "}
              <span className="font-extrabold">
                {" "}
                ${usdRaised.toFixed(2)} / $2,086,196{" "}
              </span>
            </p>

            <div className=" my-1 flex flex-col items-center justify-center">
              <div className="relative w-full bg-[#cc3cd9]/15 h-4 rounded overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-[#cc3cd9]"
                  initial={{ width: 0 }}
                  animate={{ width: `${width}%` }}
                  transition={{ duration: 2 }}
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <span className="text-white text-xs font-semibold">{`${width}%`}</span>
                </div>
              </div>
            </div>

            {/* <div className=" h-1 w-full bg-[#cc3cd9] rounded-full" /> */}
            <h1 className="text-center text-sm md:text-base font-medium">
              1 $REB = <span className="font-bold"> $0.008 </span>{" "}
            </h1>

            <div className="flex justify-end mt-4">
              <div className="text-base  font-medium flex items-center gap-x-2 cursor-pointer">
                <span
                  className="hover:underline underline-offset-2 hover:text-[#cc3cd9] "
                  onClick={togglehandler}
                >
                  How To Buy{" "}
                </span>{" "}
                <span className="bg-[#cc3cd9] p-1 text-sm rounded text-white">
                  <FaQuestion />
                </span>
              </div>
            </div>
            {popover && <HowToBuy togglehandler={togglehandler} />}

            <div
              className={`text-base md:text-lg lg:text-xl font-medium mt-4 flex justify-center w-full items-center gap-2 justify-center py-2 text-[#cc3cd9] border-[#cc3cd9] border-b-2`}
            >
              <span className="text-2xl">
                <FaBitcoin />{" "}
              </span>{" "}
              Crypto
            </div>

            <div className="mt-6">
              <form onSubmit={handleSubmit}>
                <div className="relative inline-block w-full">
                  <div
                    className={`block w-full p-3 md:p-4 text-base flex items-center justify-between border-2 rounded-lg bg-black border-[#cc3cd9]`}
                  >
                    <div className="flex items-center">
                      {selectedChain.imgSrc && (
                        <Image
                          src={selectedChain.imgSrc}
                          alt={selectedChain.value}
                          className="w-8 h-8 mr-2 rounded-full"
                          width={100}
                          height={100}
                          priority
                        />
                      )}
                      {selectedChain.value && (
                        <span>{selectedChain.value}</span>
                      )}
                    </div>
                    {/* <span
                      className={`tezt-2xl ${chainOpen === false ? "rotate-0" : "rotate-180"
                        }`}
                    >
                      <FaAngleDown />
                    </span> */}
                  </div>
                  <ul
                    className={`absolute z-10 w-full bg-black border-2 border-[#FFFFFF1A] rounded-lg mt-1  overflow-y-scroll ${chainOpen === false ? "hidden" : "block"
                      }`}
                  >
                    {chain.map((item) => (
                      <li
                        key={item.value}
                        className="flex items-center py-2 px-3 border-b-2 border-b-[#FFFFFF1A]  hover:bg-gray-900 cursor-pointer "
                        onClick={() => {
                          setSelectedChain({
                            value: item.value,
                            imgSrc: item.imgSrc,
                          });
                          setChainOpen(false);
                        }}
                      >
                        <Image
                          src={item.imgSrc}
                          alt={item.value}
                          className="w-8 h-8 mr-4 rounded-full"
                          width={100}
                          height={100}
                          priority
                        />
                        {item.value}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative inline-block w-full mt-3 md:mt-4">
                  <div className="flex item-center text-base bg-black rounded-lg border-2 border-[#FFFFFF1A] ">
                    <div
                      className={`w-fit p-3 md:p-4 flex items-center justify-between`}
                      onClick={() => setCurrencyOpen(!CurrencyOpen)}
                    >
                      {selectedCurrency.imgSrc && (
                        <Image
                          src={selectedCurrency.imgSrc}
                          alt={selectedCurrency.value}
                          className="w-8 h-8 mr-2 rounded-full"
                          width={100}
                          height={100}
                          priority
                        />
                      )}
                      <span
                        className={`text-base ${CurrencyOpen === false ? "rotate-0" : "rotate-180"
                          }`}
                      >
                        <FaAngleDown />
                      </span>
                    </div>
                    <input
                      type="number"
                      name="numberOfChain"
                      className="p-3 md:p-4 w-full bg-black border-0 focus:outline-none focus:border-0"
                      value={numberOfChain}
                      onChange={(e) => setNumberOfChain(e.target.value)}
                    />
                  </div>
                  <ul
                    className={`absolute z-10 w-full bg-black border-2 border-[#FFFFFF1A] rounded-lg mt-1 overflow-y-scroll ${CurrencyOpen === false ? "hidden" : "block"
                      }`}
                  >
                    {Currency.map((country) => (
                      <li
                        key={country.value}
                        className="flex items-center py-2 px-3 border-b-2 border-b-[#FFFFFF1A] hover:bg-gray-900 cursor-pointer"
                        onClick={() => {
                          SetSelectedCurrency({
                            value: country.value,
                            imgSrc: country.imgSrc,
                          });
                          setCurrencyOpen(false);
                        }}
                      >
                        <Image
                          src={country.imgSrc}
                          alt={country.value}
                          className="w-8 h-8 mr-4 rounded-full"
                          width={100}
                          height={100}
                          priority
                        />
                        {country.value}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center text-base mt-3 md:mt-4 p-3 md:p-4 bg-black rounded-lg border-2 border-[#FFFFFF1A]">
                  <Image
                    src={logo}
                    alt="logo"
                    className="w-8 h-8 rounded-full"
                    width={100}
                    height={100}
                    priority
                  />
                  <input
                    value={currencyAmount}
                    type="number"
                    name="pirce"
                    className=" bg-black  w-full ml-5  focus:outline-none focus:border-0"
                  />
                </div>
                <CustomConnect />

                {isConnected && address && (
                  <button
                    onClick={BuyNow}
                    type="button"
                    className="mt-6 text-center w-full rounded-full bg-[#cc3cd9] py-3 text-white text-base md:text-lg  font-medium"
                    disabled={
                      selectedCurrency.value === "BNB"
                        ? parseFloat(numberOfChain) < fortyDollarsInBNB
                        : parseFloat(numberOfChain) < 40 || numberOfChain === ""
                    }
                  >
                    {(selectedCurrency.value === "BNB"
                      ? parseFloat(numberOfChain) < fortyDollarsInBNB
                      : parseFloat(numberOfChain) < 40) || numberOfChain === ""
                      ? "Minimum purchase is $40"
                      : "Buy Now"}
                  </button>
                )}
              </form>
            </div>
          </div>

          <div
            className="bg-[#0f0f11] rounded-lg px-4 md:px-4 mt-3 text-center  flex justify-center cursor-pointer py-5 text-sm md:text-base  font-normal"
            onClick={histroyPopoverHandler}
          >
            History Of Your Transactions
          </div>
          {histroyPopover && (
            <Histroy histroyPopoverHandler={histroyPopoverHandler} />
          )}

          <div className=" bg-[#0f0f11] rounded-lg px-4 md:px-4 mt-3">
            <button
              onClick={getRebelCount}
              className="cursor-pointer py-4 font-normal flex items-center w-full  text-sm md:text-base gap-2 justify-center"
            >
              <Image
                src={logo}
                alt="logo"
                className="w-7 h-7 rounded-full"
                width={100}
                height={100}
                priority
              />{" "}
              Your $REB Count
            </button>
            <div className="text-center border-t-2 border-t-[#FFFFFF1A] text-[#cc3cd9]  flex text-sm md:text-lg font-semibold  justify-center  py-4">
              {userRebelCount > 0 ? userRebelCount.toFixed(2) : "0"} $REB
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const TimeBlock = ({ label, value }) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center space-x-0.5 md:space-x-1">
        {value.split("").map((digit, index) => (
          <div key={index} className="p-2 lg:p-3 bg-[#cc3cd9] rounded-md">
            <div className="inset-0 flex items-center justify-center text-2xl md:text-3xl lg:text-5xl font-bold text-white">
              {digit}
            </div>
          </div>
        ))}
      </div>
      <span className="block mt-2 text-xs lg:text-sm font-medium">{label}</span>
    </div>
  );
};
