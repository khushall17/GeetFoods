import React, { useEffect, useState } from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {

    const dataimg = [{
        "image": "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    }, {
        "image": "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    }, {
        "image": "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    }]

    const [slider, setslider] = useState(0);

    const handleplus = () => {
        setslider(slider === dataimg.length - 1 ? 0 : slider + 1)
    }
    const handleminus = () => {
        setslider(slider === 0 ? dataimg.length - 1 : slider - 1)
    }

    const slidercl = useEffect(() => {
       const interval = setInterval(() => {
            handleplus();
        }, 2000)
        return () => clearInterval(interval)
    }, [slider])

    return <>
        <div className="mt-[100px]">
            <div className="w-[90%] mx-auto h-[80vh] my-5 relative" >
                {
                    dataimg.map((item, i) => (
                        <div key={i} className={`${slider === i ? "block" : "hidden"}`} >
                            <img src={item.image} alt=""
                                className="w-full h-[80vh] rounded-2xl object-cover" />
                        </div>
                    ))
                }

                {/* <img src={dataimg[slider].image} alt="" /> */}

                <div className="w-full mx-auto h-[80vh] bg-black opacity-50 absolute top-0 left-0 rounded-2xl"></div>
                <div className="absolute w-full sm:text:[15px] md:text-[25px] top-[50%] text-center font-semibold text-white flex justify-center">
                    <p>Welcome to the world of Testy and Fresh Food</p>
                </div>
                <div className="flex justify-between text-center md:bottom-7 w-full px-5 absolute top-[50%] text-white hiden">
                    <FaChevronLeft size={30} className="cursor-pointer"
                        onClick={handleminus}
                    />
                    <FaChevronRight
                        size={30} className="cursor-pointer"
                        onClick={handleplus}
                    />
                </div>
            </div>
        </div>
    </>
}
export default Hero;