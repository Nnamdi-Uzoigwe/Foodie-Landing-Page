import { IoCloseOutline } from 'react-icons/io5';
import logo from  "../assets/logo.png"

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
  }


export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
    return (
    <div 
      className={`fixed top-0 right-0 h-full w-[100%] bg-[#FFF4E5] text-black transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out z-40`}
    >
    
      <div className="flex justify-between items-center border-b-[0.5px] border-gray-400 mt-0 h-[85px] sm:h-[114px] px-4 sm:px-8">
            <div className="logo flex gap-3 items-center">
                <img src={logo} className="w-[30px] lg:w-[40px]" />
                <p className="text-[20px] lg:text-[40px] font-semibold">
                    <span className="text-[#F03328]">Foo</span>
                    <span className="text-[#FF9E0C]">die</span>
                </p>
            </div>
        <button className="text-3xl " onClick={toggleSidebar}><IoCloseOutline className='text-4xl text-orange-400 font-bold hover:rotate-[270deg]' /></button>
      </div>
      

      <div className="mt-20 px-6">
        <div className='border-b-[1px] border-gray-400 p-4'>
            <p onClick={toggleSidebar} className="not-italic font-semibold text-orange-400">Home</p>
        </div>

        <div className='border-b-[1px] border-gray-400 p-4'>
            <p onClick={toggleSidebar} className="not-italic font-semibold text-orange-400">Our Menu</p>
        </div>

        <div className='border-b-[1px] border-gray-400 p-4'>
            <p onClick={toggleSidebar} className='not-italic font-semibold text-orange-400'>Foods</p>
        </div>

        <div className='border-b-[1px] border-gray-400 p-4'>
            <p onClick={toggleSidebar} className='not-italic font-semibold text-orange-400'>About us</p>
        </div>

        <div className='border-b-[1px] border-gray-400 p-4'>
            <p onClick={toggleSidebar} className='not-italic font-semibold text-orange-400'>Contact</p>
        </div>

        <div className='p-4'>
            <p onClick={toggleSidebar} className='not-italic font-semibold text-orange-400'>Login</p>
        </div>
        
      </div>
    </div>
    )
}