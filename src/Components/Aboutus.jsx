import React from "react";
import Footer from "./Footer"
const Aboutus = ()=>{
    return <>
    
    <div class="text-gray-600 body-font w-[80%] mx-auto mt-[100px]">
        <div class="px-[16px]">
            <h2 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt-8">
                Driving the force of <span class="text-[#fbc531]">assortment</span>
            </h2>
            <p class="mb-8 leading-relaxed text-[20px]">
            Our mission is to elevate the quality of life 
            for the urban consumer with unparalleled convenience.
             Convenience is what makes us tick. It's what makes us
              get out of bed and say, "Let's do this."
            </p>
        </div>
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h2 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    Who are we?
                </h2>
                <p class="mb-8 leading-relaxed">
                After two years of remote working at Swiggy, 
                we had the first installment of our in-office
                 Jamboree! It was a fun-filled week that covered
                  - interesting knowledge sharing sessions with leaders,
                   teams getting together in-person, and activities ranging
                    from concerts to game sessions. Here's a glimpse into
                    the makings of this delightful week.
                    Want to know what's buzzing at the Swiggy side of 
                    the planet? There here is what you need to follow.
                    We Are Swiggy channels on Social Media will give you
                    an inside-out view of the everyday serious and fun
                    stuff within our world. All you need to do is to
                    click your preferred channel and make sure you
                     follow us.
                </p>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                src="https://careers.swiggy.com/assets/img/card_img5.jpg"
                class="object-cover object-center rounded-md"
                alt="Hero"
                />
            </div>
        </div>
    </div>
   
    </>
}

export default Aboutus;