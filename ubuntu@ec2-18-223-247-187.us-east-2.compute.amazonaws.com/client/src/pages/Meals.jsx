import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login";

export default function Meals(){

    const meals = [
        {
            id: 1,
            name: 'Breakfast',
            description: 'Start your day with the right foot - 5am to 9am.',
            imgSrc: 'https://images.pexels.com/photos/26903466/pexels-photo-26903466/free-photo-of-tacu-tacu-y-lomo-saltado.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 2,
            name: 'Lunch',
            description: 'Keep on getting more energy, your effort deserves that. - 11am to 2pm.',
            imgSrc: 'https://images.pexels.com/photos/22856230/pexels-photo-22856230/free-photo-of-plato-almuerzo-comida-desayuno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 2,
            name: 'Dinner',
            description: 'You are almost there, nothing alike finishing your day like this - 6pm to 8pm.',
            imgSrc: 'https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
    ]


    return(
        <div className="h-full w-screen bg-black pt-10 pb-10">
            <h1 className="flex justify-center text-white title-1" data-aos='zoom-in' data-aos-onDurationChange='1000' data-aos-delay='100'>Empower your lifestyle</h1>
            <h2 className="flex justify-center text-white title-2">And nourish yourself.</h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8" data-aos='fade-left' data-aos-delay='300'>
                {meals.map((meal) =>(
                    <div className="grid meal-container" key={meal.id}>
                        <div className="gradient-black"></div>
                        <img className="meal-img object-cover" src={meal.imgSrc}></img>

                        <div className="absolute mt-[45%] lg:mt-[25%] ml-5">
                            <p className="text-white workout-title">{meal.name}</p>
                            <p className="text-white workout-description">{meal.description}</p>
                            <div>
                            <button className="btn-login text-white bg-black p-3 rounded">
                                <Link to='/login'>Get Plan</Link>
                            </button>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        
        </div>
    )
};

