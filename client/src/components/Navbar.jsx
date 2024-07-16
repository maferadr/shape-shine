import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { 
    AiOutlineMenu,
    AiOutlineHome
} from 'react-icons/ai';
import { CgGym } from "react-icons/cg";
import { GiHotMeal, GiMeal } from "react-icons/gi";

export default function Navbar(){

    const [nav, setNav ] = useState(false);
    const handleNav = () =>{
        setNav(!nav);
    };


    return(
        <>
        <div className="flex lg:flex-1">
                <AiOutlineMenu onClick={handleNav} className="fixed top-4 right-4 z-[99] md:hidden text-white"/>
                {/* Apply some conditionals => If our nav statement is true, display some html */}
                    {
                        nav ? (
                            <>
                             <div className="fixed w-full h-screen bg-gradient-to-r from-neutral-500/50 to-white/80 flex flex-col justify-center items-center z-20">
                                <Link to='/' className="navbar w-[75%] flex justify-center items-center rounded-full shadow-lg bg-brown-100 shadow-stone-500 m-2 p-4 hover:scale-110 ease-in duration-200">
                                    <AiOutlineHome size={20}/>
                                    <span className="pl-2">Home</span>
                                </Link>
                                <Link to='/workouts' className="navbar w-[75%] flex justify-center items-center rounded-full shadow-lg bg-brown-100 shadow-stone-500 m-2 p-4 hover:scale-110 ease-in duration-200">
                                    <CgGym size={20}/>
                                    <span className="pl-2">Workouts</span>
                                </Link>
                                <Link to='/meals' className="navbar w-[75%] flex justify-center items-center rounded-full shadow-lg bg-brown-100 shadow-stone-500 m-2 p-4 hover:scale-110 ease-in duration-200">
                                    <GiHotMeal size={20}/>
                                    <span className="pl-2">Meals</span>
                                </Link>
                            </div>
                            </>
                           
                        ) : (
                           ''
                        )}

                <div className="md:block hidden fixed top-[2%] z-10 right-4">
                    <div className="flex flex-row">
                            <Link id="navbar" to='/' className="justify-between m-3 text-white">HOME</Link>
                            <Link id="navbar" to='/workouts' className="justify-between m-3 text-white">WORKOUTS</Link>
                            <Link id="navbar" to='/meals' className="justify-between m-3 text-white">MEALS</Link>

                    </div>
                </div>  
            </div>
        </>
    )
};

//img url 

//Abs workout
// https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2

//Jumping
// https://images.pexels.com/photos/4839736/pexels-photo-4839736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2

//workout classes
// https://images.pexels.com/photos/4057066/pexels-photo-4057066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2