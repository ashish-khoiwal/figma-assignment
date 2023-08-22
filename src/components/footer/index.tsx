import React from 'react';
import AppStoreIcon from '../../assets/icons/app-store';
import DownArrow from '../../assets/icons/down-arrow';
import { PiInstagramLogoBold } from 'react-icons/pi';
import { BsTwitter } from 'react-icons/bs';
import Messenger from '../../assets/icons/messenger';
import GooglePlay from '../../assets/icons/google-play';

const Footer = () => {
    return (
        <div className="fixed md:mb-5 mb-2 bottom-0 w-screen animate-slide-up z-50">
            <div className="flex md:justify-between justify-center md:gap-0 gap-1 xl:px-[70px] lg:px-[50px] md:px-5 px-2 md:flex-nowrap flex-wrap">
                <div className="self-center flex text-xs lg:text-base xl:text-xl gap-3 lg:gap-6">
                    <button className="flex space-x-2 items-center justify-center py-3 border border-neutral-200 bg-black rounded-lg px-3 sm:px-4">
                        <AppStoreIcon />
                        <p className="mt-1 lg:mt-0">APP STORE</p>
                    </button>
                    <button className="flex space-x-2 items-center justify-center py-3 border border-neutral-200 bg-black rounded-lg px-3 sm:px-4">
                        <GooglePlay />
                        <p className=" mt-1 lg:mt-0">GOOGLE PLAY</p>
                    </button>
                </div>
                <div className="flex gap-3">
                    <div className="h-16 overflow-hidden">
                        <p className="md:w-60 lg:w-96 xl:w-[450px] md:flex hidden overflow-hidden text-justify text-neutral-300 mr-5 text-xs">
                            Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
                        </p>
                    </div>
                    <div className="flex gap-8 ml-3 md:ml-0 mt-5">
                        <Messenger className="cursor-pointer hover:scale-125 transition-all duration-200" />
                        <BsTwitter size={26} className="cursor-pointer hover:scale-125 transition-all duration-200" />
                        <PiInstagramLogoBold size={26} className="cursor-pointer hover:scale-125 transition-all duration-200" />
                    </div>
                </div>
            </div>
            <div className="w-11 md:w-12 flex md:fixed justify-center py-2 px-3 rounded-full -translate-x-1/2 mx-auto left-1/2 bottom-0 mb-1 md:mb-6 animate-bounce cursor-pointer bg-black ">
                <DownArrow />
            </div>
        </div>
    );
};

export default Footer;
