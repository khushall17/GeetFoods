import React from 'react';

const Footer = ()=>{
    return<>
    <div className="w-[100%] bg-black text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 py-10 pl-6">
            <div className="cursor-pointer">
                <p className="font-bold mb-3 text-[20px] md:text-[25px]">Geet<span className = "text-[#fbc531]">Foods</span> </p>
                <p className="text-[15px] md:text-[20px] mb-3 text-[gray]">Khushal Technologies Pvt. Ltd</p>
            </div>

            <div className="cursor-pointer">
                <p className="text-[20px] font-bold mb-3 md:text-[25px]">Company</p>
                <p className="text-[15px] md:text-[20px] mb-3 text-[gray]">About</p>
                <p className="text-[15px] md:text-[20px] mb-3 text-[gray]">Careers</p>
                <p className="text-[15px] md:text-[20px] mb-3 text-[gray]">Teams</p>
                <p className="text-[15px] md:text-[20px] mb-3 text-[gray]">Swiggy one</p>
            </div>

            <div className="cursor-pointer">
                <p className="text-[20px] font-bold mb-3 md:text-[25px]">Help & Support</p>
                <p className="text-[15px] md:text-[20px] mb-3 text-[gray]">Company</p>
                <p className="text-[15px] md:text-[20px] mb-3 text-[gray]">Partner with us</p>
                <p className="text-[15px] md:text-[20px] mb-3 text-[gray]">Ride with us</p>
            </div>

            <div className="cursor-pointer">
                <p className="text-[20px] font-bold mb-3 md:text-[25px]">We deliver to:</p>
                <p className="text-[15px] md:text-[20px] mb-3 text-[gray]">Bangalore</p>
                <p className="text-[15px] md:text-[20px] mb-3 text-[gray]">Nagpur</p>
                <p className="text-[15px] md:text-[20px] mb-3 text-[gray]">Gurgaon</p>
                <p className="text-[15px] md:text-[20px] mb-3 text-[gray]">Dehli</p>
                <p className="text-[15px] md:text-[20px] mb-3 text-[gray]">Mumbai</p>
                <p className="text-[15px] md:text-[20px] mb-3 text-[gray]">Bhopal</p>
            </div>
        </div>
    </div>
    </>
}

export default Footer;