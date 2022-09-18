import AddWorkout from "../views/AddWorkout.js";
import { save_workout } from "../models/_workout.js";
import { mark_pin_on_map } from "./_map.js";
import { render_workouts } from "./_render_workout.js";

const submit_event = (data) =>{
    //1. Passing data to workout model
    save_workout(data);

    //2. Hide and clean workout form
    AddWorkout._clear_workout_inputs();
    AddWorkout.hide_workout_form();

    //3. Passing coord to map controller
    const [[key_l,latitude], [key_ln,longitude], [key_w, workout_type],...rest] = data;
    mark_pin_on_map(latitude,longitude, workout_type);

    //4. Render card with new workout
    render_workouts();
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