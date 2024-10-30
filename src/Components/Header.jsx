import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
const Header = ({count}) => {
    const [sideNav, setSideNav] = useState(false)

    return <>
        <div className="fixed z-50 top-0 left-0 w-full bg-white"> 
            <div className="flex justify-between py-[20px] px-[25px] text-[18px] font-semibold border-b">
                <div>
                    <p className="font-bold mb-3 text-[18px] md:text-[25px]">Geet<span className="text-[#fbc531]">Foods</span>
                        {/* <span className="font-bold">Geet</span><span className="text-[#fbc531] font-bold">Foods</span> */}
                    </p>
                </div>
                <div>
                    <ul className="sm:flex gap-4 hidden font-semibold">

                        <Link to="/"> <li className="hover:text-[#fbc531] cursor-pointer">Home</li>
                        </Link>

                        <Link to="/aboutus"> <li className="hover:text-[#fbc531] cursor-pointer">About Us</li>
                        </Link>

                        <Link to="/ourfood"> <li className="hover:text-[#fbc531] cursor-pointer">Our Food</li>
                        </Link>

                        <Link to="/signin"><li className="hover:text-[#fbc531] cursor-pointer">Sign IN</li>
                        </Link>
                    </ul>
                </div>

                {
                    sideNav ? (<div className="bg-[#f5f6fa] w-[300px] absolute top-0 right-0 text-center h-[100vh] flex items-center justify-center z-10">
                        <RxCross2 size={25}
                            className="absolute top-3 right-3 cursor-pointer"
                            onClick={() => setSideNav(!sideNav)} />

                        <ul className="flex gap-12 flex-col">

                            <Link to="/"> <li className="hover:text-[#fbc531] cursor-pointer" onClick={() => setSideNav(!sideNav)}>Home</li>
                            </Link>

                            <Link to="/aboutus"> <li className="hover:text-[#fbc531] cursor-pointer" onClick={() => setSideNav(!sideNav)}>About Us</li>
                            </Link>

                            <Link to="/ourfood"> <li className="hover:text-[#fbc531] cursor-pointer" onClick={() => setSideNav(!sideNav)}>Our Food</li>
                            </Link>

                            <Link to="/signin"><li className="hover:text-[#fbc531] cursor-pointer" onClick={() => setSideNav(!sideNav)}>Sign IN</li>
                            </Link>


                        </ul>
                    </div>) : ("")
                }

                <div className="flex gap-5">
                    <p><GiHamburgerMenu size={30} className="cursor-pointer block sm:hidden"
                        onClick={() => setSideNav(!sideNav)}
                    /></p>
                    <p>
                        {/* {count} */}
                        <FaShoppingCart size={30} /></p>
                </div>
            </div>
        </div>
    </>
}

export default Header;