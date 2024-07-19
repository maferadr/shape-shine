import React, {useState, useEffect } from "react";
//Testing to display the Workout List on the screen depending on the user input at handling click
import WorkoutsList from "./WorkoutsList";
import SignUpForm from "./forms/signUpForm";


export default function Login(){
    const [isLoaded, setIsLoaded] = useState(false);
    const [workouts, setWorkouts] = useState([]);

    //Request all workouts to render on the component mount event
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const res = await fetch('/api/workouts');
                const jsonData = await res.json();
                //Sort the data grabbed from the scan method
                const _data = jsonData.sort((a, b) =>
                    a.duration < b.duration ? 1 : -1,
                );
                setWorkouts([..._data]);
                setIsLoaded(true);
            }catch(error){
                console.log(error)
            }
        };
        fetchData();
    }, []);

    return(
        <div className="bg-black h-100 lg:h-screen">
            <div className="gradient-black login-gradient"></div>
            <img className="login-img object-cover" src="https://images.pexels.com/photos/4753996/pexels-photo-4753996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
        
            <div className="login-container pt-20">
                <h1 className="text-white title-1 flex justify-center">Join us</h1>
                <SignUpForm/>
                <WorkoutsList workouts={workouts} setWorkouts={setWorkouts} title='Enjoy'/>
                
            </div>
        </div>
    )
}