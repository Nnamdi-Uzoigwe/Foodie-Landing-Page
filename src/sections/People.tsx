import image1 from "../assets/peopleImg.png";
import img1 from "../assets/deliveryMan.png";
import img2 from "../assets/book.png";
import img3 from "../assets/burger.png";

export default function People() {
  return (
    <div className="my-10 lg:my-20 grid grid-cols-1 xl:grid-cols-2 gap-8 w-full max-w-6xl mx-auto px-4">
      {/* Image Column */}
      <div className="flex items-center justify-center">
        <img src={image1} className="w-full max-w-[500px]" alt="image of food" />
      </div>

      {/* Cards Column */}
      <div className="flex flex-col gap-6 w-full">
        <h2 className="text-3xl text-[25px] lg:text-[38px] text-center xl:text-left font-semibold mb-4">Why People Choose Us?</h2>

        {[
          {
            img: img1,
            title: "Convenient and Reliable",
            text: "Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free."
          },
          {
            img: img2,
            title: "Variety of Options",
            text: "From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving."
          },
          {
            img: img3,
            title: "Eat Burger",
            text: "Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience."
          }
        ].map((card, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-lg shadow-md h-full flex w-full"
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 w-full">
              <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-lg">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-16 h-16 object-contain" 
                />
              </div>

              <div className="flex-1">
                <h3 className="text-center lg:text-left text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed text-center lg:text-left">
                  {card.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
