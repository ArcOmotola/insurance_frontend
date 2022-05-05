import aellaLogo from "../assets/1.png";

import doubleTick from "../assets/Double-check.png";
// import telephone from "../assets/telephone.png";
// import illustration from "../assets/image 30.png";
// import arrow from "../assets/Group 6.png";
import { insurance } from "../data";

export default function Insurance() {

    console.log("image>>", insurance[0])
    return (
        <div className="h-screen w-full bg-white">
            <div className="flex h-full/10">
                <img className="object-contain w-[72px] mx-[5vw] xl:ml-[168px]" src={aellaLogo} alt="aella-logo" />
            </div>
            <div className="px-4">
                <div>
                    <h1 className="text-2xl md:text-3xl mb-4">Secure your health</h1>
                    <p className="text-sm max-w-xs text-neutral-400 mb-4">Get your self and your loved ones covered by some of Aella's insurance program partners</p>
                </div>
            </div>

            <div className="text-base px-4">
                <h1>Insurance Plans</h1>

                {/* <div>
                    <p>Cost</p>
                    
                    <div className="border border-b-0 rounded overflow-hidden mb-4">
                        <label className="px-2 py-2 block text-grey-dark uppercase text-sm tracking-wide">
                            label
                        </label>
                        <input
                            className="px-2 pb-4 w-full border-gray border-solid border-b border-grey-dark:focus rounded"
                            type="text"
                            value="value"
                        />
                    </div>
                </div> */}

                <div class="grid grid-cols-12 gap-4 bg-black">
                    <div class="col-start-1 col-span-3 ... bg-red-100">Cost</div>
                    <div class="col-start-4 col-span-4 ... bg-red-100">02</div>
                    <div class=" ... bg-red-100">-</div>
                    <div class="col-start-9 col-span-4 ... bg-red-100">04</div>
                    <div class="col-start-1 col-span-3 ... bg-red-100">Type</div>
                    <div class="col-start-4 col-span-9 ... bg-red-100">Cost</div>
                </div>
                
            </div>

            <div className="h-full/90 w-screen mt-5  bg-backgroundColor2">
                <div className="grid md:grid-cols-4 md:gap-4">

                    <div className="m-4 bg-red-100  rounded-lg p-2 flex">
                        <img src={insurance[0].logo} alt="" className="rounded-full bg-gray-500/10 h-[54px]"/>

                        <div className="flex flex-col ml-2 bg-white w-full"> 
                            <div className=" bg-neutral-800 flex w-full justify-between  align-middle px-[4px] py-[11px]">
                                <p className="bg-red-300 text-sm max-w-xs text-neutral-400 w-[full/90]">{insurance[0].title}</p>
                                <p className="bg-buttonColor text-sm text-white mr-[0] px-[10px] py-[1px] rounded-full w-[full/10]" >Get Plan</p>
                            </div>
                            <hr />
                            <div className="flex flex-col ">
                                <div><span className="text-1px">₦</span><span className="text-2xl font-medium px-1">2,000</span>for Starter</div>
                                
                                <ul className="text-sm flex flex-wrap">
                                    <li className="flex"><img src={doubleTick} alt="" className="object-cover mr-2"/>Eye Health</li>
                                    <li className="flex"><img src={doubleTick} alt="" className="object-cover mr-2"/>Accidents and Emergencies</li>
                                    <li className="flex"><img src={doubleTick} alt="" className="object-cover mr-2"/>Surgeries</li>
                                    <li className="flex"><img src={doubleTick} alt="" className="object-cover mr-2"/>Outpatient and specialist consultations</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>

                    <div className="m-4 bg-red-100  rounded-lg p-2 flex">
                        <img src={insurance[1].logo} alt="" className="rounded-full bg-gray-500/10 h-[54px]"/>

                        <div className="flex flex-col ml-2 bg-white w-full"> 
                            <div className="flex w-full justify-between  align-middle px-[4px] py-[11px]">
                                <p className="text-sm max-w-xs text-neutral-400 w-[full/90]">{insurance[0].title}</p>
                                <p className="bg-buttonColor text-white mr-[0] px-[10px] py-[1px] rounded-full w-[full/10]" >Get Plan</p>
                            </div>
                            <hr />
                            <div className="flex flex-col ">
                                <div><span className="text-1px">₦</span><span className="text-2xl font-medium px-1">2,000</span>for Starter</div>
                                
                                <ul className="text-sm flex flex-wrap">
                                    <li className="flex"><img src={doubleTick} alt="" className="object-cover mr-2"/>Eye Health</li>
                                    <li className="flex"><img src={doubleTick} alt="" className="object-cover mr-2"/>Accidents and Emergencies</li>
                                    <li className="flex"><img src={doubleTick} alt="" className="object-cover mr-2"/>Surgeries</li>
                                    <li className="flex"><img src={doubleTick} alt="" className="object-cover mr-2"/>Outpatient and specialist consultations</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="m-4 bg-red-100  rounded-lg p-2 flex">
                        <img src={insurance[2].logo} alt="" className="rounded-full bg-gray-500/10 h-[54px]"/>

                        <div className="flex flex-col ml-2 bg-white w-full"> 
                            <div className="flex w-full justify-between  align-middle px-[4px] py-[11px]">
                                <p className="text-sm max-w-xs text-neutral-400 w-[full/90]">{insurance[0].title}</p>
                                <p className="bg-buttonColor text-white mr-[0] px-[13px] py-[1px] rounded-full w-[full/10]" >Get Plan</p>
                            </div>
                            <hr />
                            <div className="flex flex-col ">
                                <div><span className="text-1px">₦</span><span className="text-2xl font-medium px-1">2,000</span>for Starter</div>
                                
                                <ul className="text-sm flex flex-wrap">
                                    <li className="flex"><img src={doubleTick} alt="" className="object-cover mr-2"/>Eye Health</li>
                                    <li className="flex"><img src={doubleTick} alt="" className="object-cover mr-2"/>Accidents and Emergencies</li>
                                    <li className="flex"><img src={doubleTick} alt="" className="object-cover mr-2"/>Surgeries</li>
                                    <li className="flex"><img src={doubleTick} alt="" className="object-cover mr-2"/>Outpatient and specialist consultations</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    <div className="m-4 bg-red-100  rounded-lg p-2 flex">
                        <img src={insurance[0].logo} alt="" className="rounded-full bg-gray-500/10 h-[54px]"/>

                        <div className="flex flex-col ml-2 bg-white w-full"> 
                            <div className="flex w-full justify-between  align-middle px-[4px] py-[11px]">
                                <p className="text-sm max-w-xs text-neutral-400 w-[full/90]">{insurance[0].title}</p>
                                <p className="bg-buttonColor text-white mr-[0] px-[13px] py-[1px] rounded-full w-[full/10]" >Get Plan</p>
                            </div>
                            <hr />
                            <div className="flex flex-col ">
                                <div><span className="text-1px">₦</span><span className="text-2xl font-medium px-1">2,000</span>for Starter</div>
                                
                                <ul className="text-sm flex flex-wrap">
                                    <li className="flex"><img src={doubleTick} alt="" className="object-cover mr-2"/>Eye Health</li>
                                    <li className="flex"><img src={doubleTick} alt="" className="object-cover mr-2"/>Accidents and Emergencies</li>
                                    <li className="flex"><img src={doubleTick} alt="" className="object-cover mr-2"/>Surgeries</li>
                                    <li className="flex"><img src={doubleTick} alt="" className="object-cover mr-2"/>Outpatient and specialist consultations</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
                
        
        </div>
    )
}








