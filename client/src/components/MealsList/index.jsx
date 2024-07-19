import React from "react";

//Renders the list of Meals
export default function MealsList ({ meals, title }){
    return(
        <div>
            <h3 className="title-2">{title}</h3>
            {meals &&
                meals.map((meal) =>(
                    <div key={meal.time} className="card mb-3">
                        <p className="card-header text-white">
                            {meal.name} during {meal.time}
                        </p>
                        <p className="px-2 mt-2">{meal.description}</p>
                    </div>
                ))
            }
        </div>
    )
};