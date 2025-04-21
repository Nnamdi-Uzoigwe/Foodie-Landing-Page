import QualityCard from "../components/QualityCard"
import data from "../data"

export default function Quality() {
    return (
        <div className="bg-white/10 backdrop-blur-md my-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-0 justify-items-center">
            {data.map((item) => (
                <QualityCard 
                    key={item.id}   
                    imgSrc={item.imgSrc}
                    name={item.name}
                    desc={item.desc}
                    button={item.button}
                />
            ))}
        </div>
    )
}