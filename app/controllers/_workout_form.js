import AddWorkout from "../views/AddWorkout.js";
import { edit_workout, save_workout, delete_workout } from "../models/_workout.js";
import { mark_pin_on_map, reset_map_layer, mark_saved_workouts } from "./_map.js";
import { render_workouts_cards } from "./_render_workout.js";
import { State } from "../models/State.js";
import RenderWorkouts from "../views/RenderWorkouts.js";
import { modal_window, toast_window } from "./_modal_windows.js";
import { CustomModalSettings } from "../helpers.js";

const submit_event = function(data){    
    
    //1.Get workout id 
    const [[index, workout_id], ..._] = data; 

    //2.Edit workout    
    if(workout_id !== '') {
        edit_workout(data);
        toast_window(CustomModalSettings.messages.workouts.edited_workout_succes,
            CustomModalSettings.messages.workouts.edited_workout_copy,
            CustomModalSettings.classes.success);
    };
    
    //3. Save new workout
    if(workout_id === "") {
        save_workout(data)
        toast_window(CustomModalSettings.messages.workouts.saved_workout_title,
            CustomModalSettings.messages.workouts.saved_workout_copy,
            CustomModalSettings.classes.success);
    } ; 

    //4. Passing New workout coords to map controller
    const [[key_wrk,wrk], [key_l,latitude], [key_ln,longitude], [key_w, workout_type],...rest] = data;
    mark_pin_on_map(latitude,longitude, workout_type);

    //5. Hide and clean workout form
    AddWorkout.hide_workout_form();
    AddWorkout._clear_workout_inputs();

    //6. Render card with workout
    render_workouts_cards();
}

export const controller_delete_workout = async function(workout_id){
        //1. Delete from state
        delete_workout(workout_id);
    
        //2. Reset map 
        reset_map_layer();
    
        //3. Render cards
        render_workouts_cards();
    
        //4.Mark new pins
        mark_saved_workouts();

        //5.Show toast
        toast_window(CustomModalSettings.messages.workouts.delete_toast_title,
            CustomModalSettings.messages.workouts.delete_toast_copy,
            CustomModalSettings.classes.success);
}

const cancel_workout = function(){    
    //1. Clear form inputs
    AddWorkout._clear_workout_inputs();
    
    //2. Hide form
    AddWorkout.hide_workout_form();

    //3. Show empty message
    if(State.workouts.length <= 0) RenderWorkouts.show_empty_message();

}

/**
 * ### Workout Controller Initializer
 * Publisher/Subscriber Pattern
 * Subscriber to AddWorkout 
 */
export const init_workout_form = function(){

    AddWorkout.addHandlerChangeWorkout();
    AddWorkout._addHandlerSubmit(submit_event);
    AddWorkout._addHandlerCancel(cancel_workout)
}