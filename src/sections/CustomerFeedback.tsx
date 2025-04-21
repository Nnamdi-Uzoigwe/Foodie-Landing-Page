import imgBg from "../assets/maleChefBg.png";
import chefImg from "../assets/maleChefImg.png";
import { useState } from "react";
import tayyabImg from "../assets/tayyabIMg.png";
import aliImg from "../assets/ali.png";

export default function CustomerFeedback() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Tayyab Sohail",
      title: "UI/UX Designer",
      imgSrc: tayyabImg,
      message:
        "I recently dined at your restaurant and wanted to share my experience. The food was absolutely delicious, and I was impressed by the freshness of the ingredients. Each dish was bursting with flavor, and the portion sizes were perfect. The service was quick and efficient, and the staff was incredibly friendly and welcoming.",
    },
    {
      name: "Ali Ahmad",
      title: "Fashion Model",
      imgSrc: aliImg,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officiis fuga quas dignissimos, molestiae culpa minima consectetur deleniti. Mollitia quae consectetur soluta corporis laboriosam odio inventore error ex harum dolorem! At eaque aliquam molestiae veniam",
    },
    {
      name: "Nnamdi Uzoigwe",
      title: "FullStack Developer",
      imgSrc: tayyabImg,
      message:
        "I recently dined at your restaurant and wanted to share my experience. The food was absolutely delicious, and I was impressed by the freshness of the ingredients. Each dish was bursting with flavor, and the portion sizes were perfect. The service was quick and efficient, and the staff was incredibly friendly and welcoming.",
    },
  ];

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="my-20 md:my-40 grid grid-cols-1 lg:grid-cols-2 items-center gap-20 lg:gap-40">
      <div className="content">
        <h2 className="text-center xl:text-left text-[38px] font-semibold mb-4">
          Customer <span className="text-[#e03328]">Feedback</span>
        </h2>

        <div className="flex flex-col">
          <p className="text-center xl:text-left text-md text-gray-600">
            {testimonials[currentIndex].message}
          </p>

          <div className="flex items-center justify-between">
            <div className="mt-4 font-semibold">
              <img
                src={testimonials[currentIndex].imgSrc}
                alt="testimonial image"
                className="w-[50px] lg:w-[70px]"
              />
              <p className="text-[#e03328]">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-sm">{testimonials[currentIndex].title}</p>
            </div>

            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`cursor-pointer w-4 h-4 rounded-full transition-colors duration-300 ${
                    currentIndex === index
                      ? "bg-[#e03328]"
                      : "bg-transparent border-2 border-[#e03328]"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative block md:flex justify-center lg:block">
        <img src={imgBg} alt="" />
        <img src={chefImg} alt="" className="absolute top-[-68px] md:top-[-184px] lg:top-[-68px] xl:top-[-94px]" />
      </div> */}
      <div className="relative block md:flex justify-center lg:block">
        <img src={imgBg} alt="background" className="w-full" />
        <img
          src={chefImg}
          alt="chef"
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </div>
    </div>
  );
}
