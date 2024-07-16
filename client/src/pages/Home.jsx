import React from "react";
//Scroll down from the homepage for user-friendly navigating
import Workouts from "./Workouts";
import Meals from "./Meals";
import Footer from "./Footer";

export default function Home(){
    return(
        <>
        <div className="h-screen bg-black">
            <div className="absolute">
                <img  className="main-img object-cover" src="https://images.pexels.com/photos/4164764/pexels-photo-4164764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
                <div className="flex justify-center">
                    <img src="./assets/logo-main.png" className="absolute object-cover logo top-0 flex justify-center"></img>
                </div>
                <div className="absolute text-cover top-[65%] text-white pl-10">
                    <p>BECOME THE BEST
                    <br></br>
                    <span>VERSION OF YOURSELF</span></p>
                </div>

                <div>
                    <h1 className="title-name flex justify-center pt-2">SHAPE SHINE</h1>
                    <p className="paragraph text-white absolute ml-[40%] lg:ml-[44%]">BUILD the body you love.</p>
                </div>
            </div>

            <div className="triangle bottom-0">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
                </svg>
            </div>
        </div>

        <Workouts/>
        <Meals/>
        <Footer/>
        </>
        
    )
};