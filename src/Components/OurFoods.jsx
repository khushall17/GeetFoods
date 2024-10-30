import React from "react";
import { mealData } from "../Data/data";


const OurFoods = () => {
    return <>
        <div className="mt-[100px]">
            <div className="text-center text-[#fbc531] text-3xl font-bold py-5"><h2>Our Food</h2></div>

            <div className=" grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 py-6 gap-2">
                {
                    mealData.map((meal) => (
                        <div className="flex justify-center flex-col items-center">
                            <div>
                                <img src={meal.image}
                                    alt=""
                                    className="w-[200px] h-[200px] rounded-lg object-cover " 
                                />
                            </div>
                            <div className="flex justify-center py-2 px-4 flex-col items-center">
                                <p className="text-[13px]  font-semibold uppercase">{meal.name}</p>
                                <p className="text-[16px]  font-semibold uppercase">{meal.price}</p>
                                <button className="bg-black w-[120px] text-white rounded-md my-4 py-[12px] text-[15px] hover:text-[#fbc531] font-semibold">Add to Cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    </>
}

export default OurFoods;