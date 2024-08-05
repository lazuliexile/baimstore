import React from 'react'
import background from '../assets/background.svg'
import logoBrand from "../assets/logo.svg";
import googleLogo from "../assets/google.png"; // Import the image
import { ReactSVG } from "react-svg";

export const AuthLayout = (props) => {
    const { children, type } = props
    return (
        <div className="grid grid-cols-12 h-screen w-11/12 mx-auto">
            <div id="content-1" className="my-auto justify-self-center col-span-12 md:col-span-6">
                <div id="logo" className="flex mb-10">
                    <ReactSVG src={logoBrand} />
                    <p className="text-3xl font-[#406678] font-light ml-1">
                        Baim Store
                    </p>
                </div>
                {type == "login" && (<>
                    <p className="font-light text-xs mb-2">WELCOME BACK 👋🏻</p>
                    <p className="font-semi-bold text-3xl mb-4">Continue to your Account.</p>
                    <div className="flex w-[360px] h-[56px] bg-[#E3F3FB] justify-center items-center rounded-[48px] mx-2 my-2">
                        <img src={googleLogo} className="w-[24px] h-[24px] mr-1" alt="" />
                        <p className="text-base text-[#424242]">Log In With Google</p>
                    </div>
                </>)}
                {type == "register" && (<>
                    <p className="font-semi-bold text-3xl mb-2">Start your shop today</p>
                    <p className="font-light text-xs mb-6">NO CREDIT CARD REQUIRED</p>
                    <div className="flex w-[360px] h-[56px] bg-[#E3F3FB] justify-center items-center rounded-[48px] mx-2 my-2">
                        <img src={googleLogo} className="w-[24px] h-[24px] mr-1" alt="" />
                        <p className="text-base text-[#424242]">Sign Up With Google</p>
                    </div>
                </>)}

                <div className="flex items-center justify-center my-6">
                    <div className="flex-grow border-t border-[#E0E0E0]"></div>
                    <span className="mx-4 text-gray-600 text-xs">Or use Email</span>
                    <div className="flex-grow border-t border-[#E0E0E0]"></div>
                </div>
                {children}
            </div>
            <div id="content-2" className="col-span-6 hidden md:block">
                <ReactSVG src={background} />
            </div>
        </div>
    )
}
