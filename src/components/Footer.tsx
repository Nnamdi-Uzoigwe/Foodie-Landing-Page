export default function Footer() {
    return (
        <div className="p-14 lg:p-20 bg-white w-full ">

            <div className="first mb-14 flex flex-col lg:flex-row justify-between items-center">
                <div>
                    <h3 className="text-[25px] lg:text-[30px] font-semibold text-center lg:text-left">Join our <span className="text-[#e03328]">Newsletter</span></h3>
                    <p className="text-center lg:text-left">Be the first to know about our latest updates, exclusive offers, and more.</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4 mt-4 lg:mt-0">
                    <input type="text" placeholder="Enter your email address" className="border-[2px] w-[250px] lg:w-[400px] border-gray-300 px-6 py-[11px] rounded-lg" />
                    <button className="bg-[#e03328] text-white px-6 py-3 rounded-lg cursor-pointer transition duration-200 active:bg-red-700 hover:bg-red-700">Subscribe</button>
                </div>
            </div>

            <div className="second border-y-2 border-gray-200 py-20">
                <div className="grid grid-cols-1 justify-items-center xl:justify-items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-0 lg:gap-6 xl:gap-0">
                    <div className="grid1 text-center xl:text-left">
                        <h4 className="mb-4 font-semibold">Product & Service</h4>

                        <h4 className="mb-4">Products</h4>
                        <h4 className="mb-4">Services</h4>
                        <h4 className="mb-4">Appliances</h4>
                        <h4 className="mb-4">Storage <span>New</span> </h4>
                        <h4>Lifestyle <span></span> </h4>
                    </div>
                    <div className="mt-8 md:mt-0 grid2 text-center xl:text-left">
                        <h4 className="mb-4 font-semibold">Shop Now</h4>

                        <h4 className="mb-4">Offers</h4>
                        <h4 className="mb-4">Promos</h4>
                        <h4 className="mb-4">Online Shop FAQ</h4>
                        <h4 className="mb-4">Business Offer <span>New</span> </h4>
                        <h4>Student Offer <span></span> </h4>
                    </div>
                    <div className="mt-8 lg:mt-0 grid3 text-center xl:text-left">
                        <h4 className="mb-4 font-semibold">Support</h4>

                        <h4 className="mb-4">Contact</h4>
                        <h4 className="mb-4">Email Support</h4>
                        <h4 className="mb-4">Live Chat</h4>
                        <h4 className="mb-4">Phone Support <span>New</span> </h4>
                        <h4>Community <span></span> </h4>
                    </div>
                    <div className="mt-8 lg:mt-0 grid4 text-center xl:text-left">
                        <h4 className="mb-4 font-semibold">Account</h4>

                        <h4 className="mb-4">My Products</h4>
                        <h4 className="mb-4">Orders</h4>
                        <h4 className="mb-4">Wishlist</h4>
                        <h4 className="mb-4">Service <span>New</span> </h4>
                        <h4>Rewards <span></span> </h4>
                    </div>
                    <div className="mt-8 lg:mt-0 grid5 text-center xl:text-left">
                        <h4 className="mb-4 font-semibold">About</h4>

                        <h4 className="mb-4">Company Info</h4>
                        <h4 className="mb-4">Brand Guidelines</h4>
                        <h4 className="mb-4">Careers</h4>
                        <h4 className="mb-4">Investors <span>New</span> </h4>
                        <h4>About Us <span></span> </h4>
                    </div>
                </div>


            </div>

            <div className="third mt-10 grid grid-cols-1 justify-items-center xl:justify-items-start lg:grid-cols-3">
                <div></div>
                <div className="flex items-center gap-4">
                    <p>English</p>
                    <p>Privacy</p>
                    <p>Legal</p>
                </div>
                <div className="text-gray-400 text-center lg:text-left mt-4 lg:mt-0">2025 &copy; Nnamdi Uzoigwe coded it. All rights reserved</div>
            </div>    
        </div>
    )
}