import aellaLogo from "../assets/1.png";
import telephone from "../assets/telephone.png";
import illustration from "../assets/image 30.png";
import arrow from "../assets/Group 6.png";

export default function Insurance() {
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

                {/* <div class="grid grid-cols-2 gap-4">
                    <div className="bg-red-100">03</div>
                    <div className="col-span-2 bg-red-100">04</div>
                    <div className="bg-red-100">05</div>
                    <div className="bg-red-100">06</div>
                    <div className="col-span-2 bg-red-100">07</div>
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

            <div className="h-full/90 bg-backgroundColor2">
                bottom
            </div>
                
        
        </div>
    )
}





{/* <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
<img className='w-full h-full object-cover rounded-md col-span-2 md:col-span-3 row-span-2' src={BoraBora} alt="/" />
<img className='w-full h-full object-cover rounded-md'src={BoraBora2} alt="/" />
<img className='w-full h-full object-cover rounded-md' src={Maldives} alt="/" />
<img className='w-full h-full object-cover rounded-md' src={Maldives2} alt="/" />
<img className='w-full h-full object-cover rounded-md' src={KeyWest} alt="/" />
</div> */}


