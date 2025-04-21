
interface QualityCardProps {
    imgSrc: string;
    name: string;
    desc: string;
    button: string;
    id?: number; // optional if you need it
  }

export default function QualityCard({ imgSrc, name, desc, button }: QualityCardProps) {
    return (
        <div className="bg-white flex flex-col p-4 justify-center items-center rounded-xl h-[300px] shadow-lg w-[300px]">
            <img src={imgSrc} alt="" className="w-[40%]" />
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-center">{name}</h3>
                <p className="mt-2 text-center text-gray-600">
                    {desc}
                </p>
                <button className=" hover:text-[#e03328] font-medium mt-2 flex justify-self-center">{button}</button>
            </div>
        </div>
    )
}