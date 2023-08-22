import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai"
import { IoCloseSharp } from "react-icons/io5"
import DollarIcon from "../../assets/icons/dollar";
import EyeIcon from "../../assets/icons/eye";

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const tabsInfo: string[] = [
        "SIGN IN",
        "LEGAL",
        "LICENSES",
        "SECURITY",
        "CAREERS",
        "PRESS",
        "SUPPORT",
        "STATUS",
        "CODEBLOG",
    ];

    return (
        <div className="text-white">
            <div className="hidden md:flex justify-between items-center animate-slide-down pt-0 px-2 md:pt-5 md:px-5 lg:px-10 xl:px-16">
                <DollarIcon className="cursor-pointer transition-all duration-200 hover:scale-110" />
                <ul className="flex items-center md:gap-3 lg:gap-x-5">
                    {tabsInfo.map((tabInfo, index) => (
                        <li key={index} className="font-extrabold leading-5 cursor-pointer transition-all md:text-sm lg:text-base hover:scale-110 hover:text-amber-100">
                            {tabInfo}
                        </li>
                    ))}
                </ul>
                <EyeIcon className="cursor-pointer transition-all duration-200 hover:scale-110" />
            </div>

            <div className="flex justify-between items-center pt-5 px-3 md:hidden animate-slide-down text-white">
                <div className="" onClick={() => setShowMobileMenu(true)}>
                    <AiOutlineMenu size={28} />
                </div>
                {showMobileMenu ? (
                    <IoCloseSharp className="font-bold animate-[spin_1s]" size={30} onClick={() => setShowMobileMenu(false)} />
                ) : <EyeIcon className="cursor-pointer transition-all duration-200 animate-pulse" />}
            </div>

            {showMobileMenu && (
                <div className="animate-[slide-left_0.3s] w-3/4 bg-gradient-to-r from-cyan-800 z-[100] backdrop-blur-md backdrop-brightness-100 fixed left-0 top-0 h-screen">
                    <div className=" flex flex-col gap-4 justify-center items-center mt-[40px]">
                        <DollarIcon className="mb-5 animate-slide-down" />
                        <ul className="flex flex-col gap-y-5 items-center">
                            {tabsInfo.map((tabInfo, index) => (
                                <li key={index} className="font-bold text-xl cursor-pointer" onClick={() => setShowMobileMenu(false)}>
                                    {tabInfo}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar