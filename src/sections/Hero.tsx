import Button from "../components/Button";
import heroImg from "../assets/heroImg.png"
import { IoIosRocket } from "react-icons/io";
import ali from "../assets/ali.png"
import { FaHeart, FaStar } from "react-icons/fa";
import { MapPinned } from "lucide-react";
import heroBg from "../assets/heroBg.png"

export default function Hero() {
    return (
        <div className="my-10 lg:my-30 grid grid-cols-1 md:grid-cols-2 items-center justify-items-center">
            <div className="hero-content flex flex-col items-center md:block pl-0 xl:pl-10">
                <div className="mb-4">
                    <h1 className="text-[30px] lg:text-[50px] text-center md:text-left font-semibold">Desire <span className="floating-element bg-gradient-to-r from-[#FF9E0C] to-[#D17A08] px-6 py-[4px] text-white rounded-[38px] tranform rotate-[-12deg] inline-block">Food</span></h1>
                    <h1 className="text-[30px] lg:text-[50px] text-center md:text-left font-semibold">for Your Taste</h1>
                </div>
                <p className="text-md text-center md:text-left lg:text-lg text-gray-600 w-[100%] md:w-[70%] mb-6">
                    Food is what we eat to stay alive and healthy. It
                    comes in many different forms and flavors, from fruits and vegetables
                    to meats and grains.
                </p>
                <Button>Order Now</Button>
            </div>

                <div className="mt-20 lg:mt-0 relative block md:flex justify-center lg:block">
                    <div className="relative bg-[#FF9E0C] rounded-4xl overflow-visible">
                        <img src={heroBg} alt="orange background" className="w-full" />
                        
                        <img 
                        src={heroImg} 
                        alt="hero woman" 
                        className="absolute bottom-0 left-1/2 -translate-x-1/2"
                        />
                    </div>

                    <div className="absolute top-30 left-[-55px] lg:left-[-100px] rounded-lg bg-white w-fit flex justify-center items-center py-2 lg:py-3 px-[15px] lg:px-8 shadow-lg">
                        <IoIosRocket className="mx-4 text-[#E03328] text-[25px] lg:text-[30px] font-semibold" />
                        <div>
                        <h4 className="font-semibold">Delivery</h4>
                        <p className="text-sm">in 30 mins</p>
                        </div>
                    </div>

                    <div className="absolute bottom-8 right-[-28px] xl:right-[-100px] rounded-lg bg-white w-fit flex gap-3 justify-center items-center py-2 lg:py-3 px-[20px] lg:px-8 shadow-lg">
                        <MapPinned className="text-[#FF9E0C]" />
                        <div>
                        <h4 className="font-semibold">Location</h4>
                        <p className="text-sm">at destination</p>
                        </div>
                    </div>


                    <div className="absolute bottom-[-50px] left-0 lg:left-[-60px] rounded-lg bg-white w-fit flex gap-5 justify-center items-center py-2 lg:py-3 px-5 lg:px-8 shadow-lg">
                        <img src={ali} alt="ali profile" />
                        <div>
                        <h4 className="font-semibold">Ali Ahmad</h4>
                        <p className="text-sm flex items-center gap-3">
                            <span className="flex items-center"><FaStar className="text-[#FF9E0C]" />4.5</span>
                            <span className="flex items-center"><FaHeart className="text-[#E03328]" />1k likes</span>
                        </p>
                        </div>
                    </div>
        </div>

        </div>
    )
}


