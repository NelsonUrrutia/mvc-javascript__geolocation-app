import AddWorkout from "../views/AddWorkout.js";


const submit_event = (data) =>{
    console.log(data);
}

/**
 * ### Workout Controller Initializer
 * Publisher/Subscriber Pattern
 * Subscriber to AddWorkout 
 */
export const init_workout_form = function(){

    AddWorkout.addHandlerChangeWorkout()
    AddWorkout.addHandlerSubmit(submit_event)
}