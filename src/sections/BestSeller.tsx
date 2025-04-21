import FoodCard from "../components/FoodCard"
import { foodData } from "../foodData"
export default function BestSeller() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
            <h2 className="mb-2 font-semibold text-[25px] lg:text-[38px] text-center">Our Best Seller dishes🔥🔥</h2>
            <p className="w-[100%] lg:w-[50%] text-center text-gray-600">
                Our fresh garden salad is a light and refreshing option. It features a
                mix of crisp lettuce, juicy tomatoe all tossed in your choice of dressing.
            </p>
            </div>

            <div className="mt-10 grid grid-cols-1 justify-items-center lg:justify-items-start md:grid-cols-2 xl:grid-cols-3 gap-6">
                {foodData.map((item) => (
                    <FoodCard 
                        key={item.id}
                        imgSrc={item.imgSrc}
                        name={item.name}
                        price={item.price}
                        buttonText={item.buttonText}
                    />
                ))}
            </div>
        </div>
    )
}