'use client'
import React from 'react'
import digitalmoney from '/public/images/logo192.png'
import { motion } from "framer-motion";
import Image from 'next/image';


export default function Why() {

    return (
        <>
            <section>
                <div className='grid gap-y-3 md:gap-y-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5'>
                        <div className='flex justify-end'>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 0 ? -50 : 50
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1
                                    }
                                }}
                                className="p-4 bg-[#0f0f11] shadow-lg w-full md:w-96 py-6  px-4 rounded-lg">
                                <figure className="flex justify-center">
                                    <Image src="https://cdn.prod.website-files.com/6543866195b24e14b526bfc0/66578d8bc69e6662935168f9_why__1.svg" alt="Inflation Protection" className="w-10 md:w-12" width={100} height={100} priority />
                                </figure>
                                <div className="content text-center mt-5">
                                    <h5 className="text-base md:text-lg lg:text-xl font-semibold text-white mb-3">
                                        Inflation Protection
                                    </h5>
                                    <span className="text-xs md:text-sm lg:text-base leading-snug">
                                        Protect your wealth from inflation by investing in tokenised real-world assets that retain value.
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 0 ? -50 : 50
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1
                                }
                            }}
                            className='flex justify-start'>
                            <div className="w-full md:w-96  p-4 bg-[#0f0f11]  shadow-lg py-6  px-4 rounded-lg">
                                <figure className="flex justify-center">
                                    <Image src="https://cdn.prod.website-files.com/6543866195b24e14b526bfc0/66578d8c006e8cc4952969d0_why__2.svg" alt="Mix It Up" className="w-10 md:w-12" width={100} height={100} priority />
                                </figure>
                                <div className="content text-center mt-5">
                                    <h5 className="text-base md:text-lg lg:text-xl font-semibold text-white mb-3">
                                        Mix It Up
                                    </h5>
                                    <span className="text-xs md:text-sm lg:text-base leading-snug">
                                        Diversify your portfolio and explore new markets with REBEL platform and range of tokenised real-world assets.
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-0'>
                        <div className='flex justify-end'>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 0 ? -50 : 50
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1
                                    }
                                }}
                                className="w-full md:w-96 p-4 bg-[#0f0f11] shadow-lg py-6  px-4 rounded-lg">
                                <figure className="flex justify-center">
                                    <Image src="https://cdn.prod.website-files.com/6543866195b24e14b526bfc0/66579af3d27f722a3fb5f46f_why__8.svg" alt="A Golden Foundation" className="w-10 md:w-12" width={100} height={100} priority />
                                </figure>
                                <div className="content text-center mt-5">
                                    <h5 className="text-base md:text-lg lg:text-xl font-semibold text-white mb-3">
                                        A Golden Foundation
                                    </h5>
                                    <span className="text-xs md:text-sm lg:text-base leading-snug">
                                        REBEL inaugural RWA token is backed 1:1 by investor grade LBMA-certified gold, vaulted securely in the channel islands.
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 0 ? -50 : 50
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1
                                }
                            }}
                            className='hidden lg:flex justify-center items-center'>
                            <Image src={digitalmoney} alt="Gold Bar Icon" className="w-48 h-48" width={100} height={100} priority />
                        </motion.div>

                        <div className='flex justify-start'>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 0 ? -50 : 50
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1
                                    }
                                }}
                                className="w-full md:w-96 p-4 bg-[#0f0f11] shadow-lg rounded-lg py-6  px-4">
                                <figure className="flex justify-center">
                                    <Image src="https://cdn.prod.website-files.com/6543866195b24e14b526bfc0/66579af1063103d8ab631f1e_why__7.svg" alt="Grow Your Gold" className="w-10 md:w-12" width={100} height={100} priority />
                                </figure>
                                <div className="content text-center mt-5">
                                    <h5 className="text-base md:text-lg lg:text-xl font-semibold text-white mb-3">
                                        Grow Your Gold
                                    </h5>
                                    <span className="text-xs md:text-sm lg:text-base leading-snug">
                                        Let your $REB token grow in the REBEL digital vaults, where the underlying gold is monetised and earns you yield.
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2  gap-3 md:gap-5'>
                        <div className='flex justify-end'>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 0 ? -50 : 50
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1
                                    }
                                }}
                                className="w-full md:w-96 bg-[#0f0f11] shadow-lg rounded-lg py-6  px-4 ">
                                <figure className="flex justify-center">
                                    <Image src="https://cdn.prod.website-files.com/6543866195b24e14b526bfc0/66578d8be5453e085ee0abb4_why__5.svg" alt="Compliant & Transparent" className="w-10 md:w-12" width={100} height={100} priority />
                                </figure>
                                <div className="content text-center mt-5">
                                    <h5 className="text-base md:text-lg lg:text-xl font-semibold text-white mb-3">
                                        Compliant & Transparent
                                    </h5>
                                    <span className="text-xs md:text-sm lg:text-base leading-snug">
                                        Invest with peace of mind, knowing that REBEL is compliant and its physical vaults are audited.
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                        <div className='flex justify-start'>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 0 ? -50 : 50
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1
                                    }
                                }}
                                className="w-full md:w-96 p-4 bg-[#0f0f11] shadow-lg rounded-lg py-6  px-4">
                                <figure className="flex justify-center">
                                    <Image src="https://cdn.prod.website-files.com/6543866195b24e14b526bfc0/66578d8b8dda338a19ccbbbf_why__6.svg" alt="Safe & Secure" className="w-10 md:w-12" width={100} height={100} priority />
                                </figure>
                                <div className="content text-center mt-5">
                                    <h5 className="text-base md:text-lg lg:text-xl font-semibold text-white mb-3">
                                        Safe & Secure
                                    </h5>
                                    <span className="text-xs md:text-sm lg:text-base leading-snug">
                                        REBELs omni-chain platform is developed using military grade security for maximum protection.
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
