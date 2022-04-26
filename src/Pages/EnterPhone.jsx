import aellaLogo from "../assets/1.png";
import telephone from "../assets/telephone.png";
import illustration from "../assets/image 30.png";
import arrow from "../assets/Group 6.png";

export default function EnterPhone() {
    // return (
    //     <div className="h-screen flex flex-col justify-center">
    //             <img className=" absolute mt-[-300px] xl:-ml-[1025px] object-contain w-[72px]" src={aellaLogo} alt="aella-logo" />
    //         <div className="flex flex-col justify-center items-center bg-yellow-200">
    //             <div className="flex flex-col lg:flex-row xl:w-[1240px] lg:w-[1000px] xl:justify-evenly justify-center items-center bg-red-400">
    //                 <div className="flex flex-col  lg:w-[400px] " >
    //                     <div>
    //                         <h1 className="text-2xl md:text-3xl mb-4">Get Started in 2 steps</h1>
    //                         <p className="text-sm max-w-xs text-neutral-400 mb-4">Please provide your phone number to get started</p>
    //                     </div>

    //                     <div className="max-w-xs px-4 py-6 bg-white rounded-md flex flex-col align items-center ">
    //                         <p className="text-center mb-3">Please Enter Phone Number</p>
    //                         <form className='flex justify-between items-center w-64 border p-1
    //                         rounded-md text-black'>
    //                             <div>
    //                                 <img className="icon" src={telephone} alt="" />
    //                             </div>
    //                             <div>
    //                                 <input className='bg-transparent w-[200px] font-[Poppins] focus:outline-none' type="text" placeholder='Phone Number'/>
    //                             </div>
    //                         </form>
    //                         <button className="flex items-center justify-center mt-3">Continue <img className="pl-2" src={arrow} alt="" /></button>
    //                     </div>
    //                 </div>

    //                 <img className='hidden lg:block w-2/4 max-w-2xl h-full object-contain' src={illustration} alt="" />
    //             </div>
    //         </div>
    // </div>
    // )
    return (
        <div className="h-screen">
            <div className="flex h-full/10">
                <img className="object-contain w-[72px] mx-auto xl:ml-[168px]" src={aellaLogo} alt="aella-logo" />
            </div>
            <div className=" flex flex-col justify-center items-center h-full/90">
                <div className="flex flex-col lg:flex-row xl:w-[1240px] lg:w-[1000px] xl:justify-evenly justify-center items-center ">
                    <div className="flex flex-col  lg:w-[400px] " >
                        <div>
                            <h1 className="text-2xl md:text-3xl mb-4">Get Started in 2 steps</h1>
                            <p className="text-sm max-w-xs text-neutral-400 mb-4">Please provide your phone number to get started</p>
                        </div>

                        <div className="max-w-xs px-4 py-6 bg-white rounded-md flex flex-col align items-center ">
                            <p className="text-center mb-3">Please Enter Phone Number</p>
                            <form className='flex justify-between items-center w-64 border p-1
                            rounded-md text-black'>
                                <div>
                                    <img className="icon" src={telephone} alt="" />
                                </div>
                                <div>
                                    <input className='bg-transparent w-[200px] font-[Poppins] focus:outline-none' type="text" placeholder='Phone Number'/>
                                </div>
                            </form>
                            <button className="flex items-center justify-center mt-3">Continue <img className="pl-2" src={arrow} alt="" /></button>
                        </div>
                    </div>

                    <img className='hidden lg:block w-2/4 max-w-2xl h-full object-contain' src={illustration} alt="" />
                </div>
            </div>
    </div>
    )
}
