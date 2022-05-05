import aellaLogo from "../assets/1.png";
import telephone from "../assets/telephone.png";
import illustration from "../assets/image 30.png";
import arrow from "../assets/Group 6.png";
import edit from "../assets/Vector.svg";

import OtpInput from "react-otp-input";
import { useState } from "react";

export default function EnterPhone() {

    const [otp, setOtp] = useState("");

    const handleChange = (otp) => setOtp(otp);

    return (
        <div className="h-screen">
            <div className="flex h-full/10">
                <img className="object-contain w-[72px] mx-auto xl:ml-[168px]" src={aellaLogo} alt="aella-logo" />
            </div>
            <div className=" flex flex-col justify-center items-center h-full/90">
                <div className="flex flex-col lg:flex-row xl:w-[1240px] lg:w-[1000px] xl:justify-evenly justify-center items-center">

                    <div className="flex flex-col  lg:w-[400px]" >
                        <div>
                            <h1 className="text-2xl md:text-3xl mb-4">Get Started in 2 steps</h1>
                            <p className="text-sm max-w-xs text-neutral-400 mb-4">Please provide your phone number to get started</p>
                        </div>

                        <div className="max-w-xs px-4 py-6 bg-white flex flex-col align items-center border-t-4 border-buttonColor">
                            <div className="flex flex-col w-full  px-4">
                                <div className=" flex justify-between text-base w-full mb-3">
                                    <p className="text-center text-sm font-medium">BVN Verification</p>
                                    <p className="text-buttonColor">+2348*****67</p>
                                </div>

                                <p className="text-sm max-w-xs mb-4">Enter  the 6 digit code sent to</p>
                            </div>

                            
                            <OtpInput 
                                value={otp}
                                onChange={handleChange}
                                numInputs={6}
                                separator={<span style={{ width: "1px" }}></span>}
                                isInputNum={true}
                                shouldAutoFocus={true}
                                inputStyle={{
                                    width: "2rem",
                                    height: "2rem",
                                    margin: "0 0.4rem",
                                    fontSize: "1rem",
                                    borderRadius: 4,
                                    border: "1px solid rgba(0,0,0,0.3)",
                                    
                                    
                                }}
                                className=""
                                focusStyle={{
                                border: "1px solid #CFD3DB",
                                outline: "none"
                                }}
                            />
                            



                            <div className='flex justify-between items-center w-64 border p-1
                            rounded-full px-2 text-black mt-4 '>
                                <div className="text-xs">
                                    Entered a wrong phone number? Edit.
                                </div>
                                <div>
                                    <img className="icon" src={edit} alt="" />
                                </div>
                            </div>
                            
                            <button className="flex items-center justify-center mt-3">Continue <img className="pl-2" src={arrow} alt="" /></button>
                        </div>
                    </div>

                    <img className='hidden lg:block w-2/4 max-w-2xl h-full object-contain' src={illustration} alt="" />
                </div>
            </div>
    </div>
    )
}
