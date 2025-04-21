import Hero from "./sections/Hero";

import Navbar from './components/Navbar'
import Quality from "./sections/Quality";
import People from "./sections/People";
import BestSeller from "./sections/BestSeller";
import CustomerFeedback from "./sections/CustomerFeedback";

export default function Container() {
    return (
        <div className="px-8 lg:px-20">
            <Navbar />
            <Hero />
            <Quality />
            <People />
            <BestSeller />
            <CustomerFeedback />
            
        </div>
    )
}