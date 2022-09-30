import AddWorkout from "../views/AddWorkout.js";
import { edit_workout, save_workout, delete_workout } from "../models/_workout.js";
import { mark_pin_on_map } from "./_map.js";
import { render_workouts_cards } from "./_render_workout.js";

const submit_event = function(data){    
    
    //1.Get workout id 
    const [[index, workout_id], ..._] = data; 

    //2.Edit workout    
    if(workout_id !== '') edit_workout(data);
    
    //3. Save new workout
    if(workout_id === ""){
        save_workout(data);
    } 

    //4. Passing New workout coords to map controller
    const [[key_wrk,wrk], [key_l,latitude], [key_ln,longitude], [key_w, workout_type],...rest] = data;
    mark_pin_on_map(latitude,longitude, workout_type);

    //5. Hide and clean workout form
    AddWorkout.hide_workout_form();
    AddWorkout._clear_workout_inputs();

    //6. Render card with workout
    render_workouts_cards();
}

export const controller_delete_workout = function(workout_id){
    debugger;
    //1. Delete from state
    delete_workout(workout_id);

    //3. Render cards
    render_workouts_cards();

    //4. Clear map point
    //Reset map and re render based on saved on State
    
}

/**
 * ### Workout Controller Initializer
 * Publisher/Subscriber Pattern
 * Subscriber to AddWorkout 
 */
export const init_workout_form = function(){

    AddWorkout.addHandlerChangeWorkout()
    AddWorkout._addHandlerSubmit(submit_event)
}