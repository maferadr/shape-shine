import React from "react";

//Renders the list of workouts
export default function WorkoutsList({ workouts, title }){
    return(
        <div>
            <h3 className="title-2">{title}</h3>
            {workouts &&
                workouts.map((workout) =>(
                    <div key={workout.duration} className="card mb-3">
                        <p className="card-header text-white">
                            {workout.name} within {workout.duration}
                        </p>
                        <p className="px-2 mt-2">{workout.description}</p>
                    </div>
                ))
            }
        </div>
    )
};