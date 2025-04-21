import logo from  "../assets/logo.png"
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Sidebar from "./Sidebar";

export default function Navbar() {
     const [isOpen, setIsOpen] = useState(false);
    
      const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };

    return (
        <div className="flex items-center justify-between h-[90px]">
            <div className="logo flex gap-3 items-center">
                <img src={logo} className="w-[30px] lg:w-[40px]" />
                <p className="text-[20px] lg:text-[40px] font-semibold">
                    <span className="text-[#F03328]">Foo</span>
                    <span className="text-[#FF9E0C]">die</span>
                </p>
            </div>

            <div className="hidden xl:flex items-center gap-0 lg:gap-20 text-lg">
                <p className="hover:text-[#f03328] hover:underline underline-offset-8 cursor-pointer">Home</p>
                <p className="hover:text-[#f03328] hover:underline underline-offset-8 cursor-pointer">Our Menu</p>
                <p className="hover:text-[#f03328] hover:underline underline-offset-8 cursor-pointer">Foods</p>
                <p className="hover:text-[#f03328] hover:underline underline-offset-8 cursor-pointer">About us</p>
                <p className="hover:text-[#f03328] hover:underline underline-offset-8 cursor-pointer">Contact us</p>
                <button className="cursor-pointer bg-transparent border-[2px] text-[#f03328] border-[#f03328] rounded-[38px] px-6 py-2 font-semibold">Login</button>
            </div>


            <HiMenuAlt3 className="block xl:hidden text-[#e03328] text-3xl sm:text-4xl cursor-pointer" onClick={toggleSidebar} />
            
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
    )
}