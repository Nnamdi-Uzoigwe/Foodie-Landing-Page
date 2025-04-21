import { FaStar } from "react-icons/fa";
import Button from "./Button";

interface FoodCardProps {
    imgSrc: string;
    name: string;
    price: string;
    buttonText: string; 
  }

export default function FoodCard({ name, imgSrc, price, buttonText }: FoodCardProps) {
    return (
        <div className="shadow-lg overflow-hidden bg-white h-[350px] lg:h-[450px] w-[300px] lg:w-[400px] rounded-xl transition-transform cursor-pointer duration-400 hover:-translate-y-3">
            <img src={imgSrc} alt="food image" />

            <div className="p-4 mt-4 flex items-center justify-between">
                <h3 className="text-[20px] font-medium">{name}</h3>
                <Button>{buttonText}</Button>
            </div>

            <div className="px-4 mt-[4px] flex items-center justify-between">
                <span className="flex gap-2">
                    <FaStar className="text-md text-[#FF9E0C]" />
                    <FaStar className="text-md text-[#FF9E0C]" />
                    <FaStar className="text-md text-[#FF9E0C]" />
                    <FaStar className="text-md text-[#FF9E0C]" />
                    <FaStar className="text-md text-[#FF9E0C]" />
                </span>
                <h3 className="text-[20px] lg:text-[24px] font-medium">{price}</h3>
            </div>
        </div>
    )
}