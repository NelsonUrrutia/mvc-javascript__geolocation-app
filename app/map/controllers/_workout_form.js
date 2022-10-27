import AddWorkout from "../views/AddWorkout.js";
import { edit_workout, save_workout, delete_workout } from "../models/_workout.js";
import { mark_pin_on_map, reset_map_layer, mark_saved_workouts } from "./_map.js";
import { render_workouts_cards } from "./_render_workout.js";
import { State } from "../models/State.js";
import RenderWorkouts from "../views/RenderWorkouts.js";
import { modal_window, toast_window } from "./_modal_windows.js";
import { mobile_content_switch, CustomModalSettings } from "../helpers.js";


const submit_event = function(data){    
    
    //1.Get workout id 
    const [[index, workout_id], ..._] = data; 

    //2.Edit workout    
    if(workout_id !== '') {
        const edited_workout = edit_workout(data);
        mobile_content_switch(false)
        if(edited_workout === 1){
            toast_window(CustomModalSettings.messages.workouts.edited_workout_succes,
                CustomModalSettings.messages.workouts.edited_workout_copy,
                CustomModalSettings.classes.success);
        }
        else{
            toast_window(CustomModalSettings.messages.workouts.error_not_edited,
                `${edit_workout}`,
                CustomModalSettings.classes.delete);
        }
    };
    
    //3. Save new workout
    if(workout_id === "") {
        const results_save_workout = save_workout(data);

        mobile_content_switch(false)

        if(results_save_workout === 1){
            toast_window(CustomModalSettings.messages.workouts.saved_workout_title,
                CustomModalSettings.messages.workouts.saved_workout_copy,
                CustomModalSettings.classes.success);
        }else{
            toast_window(CustomModalSettings.messages.workouts.error_not_saved,
                        `${results_save_workout}`,
                        CustomModalSettings.classes.delete);
        }
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
        const deleted_workout = delete_workout(workout_id);
    
        //2. Reset map 
        reset_map_layer();
    
        //3. Render cards
        render_workouts_cards();
    
        //4.Mark new pins
        mark_saved_workouts();

        //5.Show toast
        if(deleted_workout === 1){
            toast_window(CustomModalSettings.messages.workouts.delete_toast_title,
                CustomModalSettings.messages.workouts.delete_toast_copy,
                CustomModalSettings.classes.success);
        }else{
            toast_window(CustomModalSettings.messages.workouts.error_not_deleted,
                `${deleted_workout}`,
                CustomModalSettings.classes.delete);
        }
}

const cancel_workout = function(){    
    //1. Clear form inputs
    AddWorkout._clear_workout_inputs();
    
    //2. Hide form
    AddWorkout.hide_workout_form();

    //3. Show empty message
    if(State.workouts.length <= 0) RenderWorkouts.show_empty_message();

}

const change_workout_inputs = function(){
    //1. Toggle hidden class on inputs
    AddWorkout.container_input_cadence.classList.toggle("hidden");
    AddWorkout.conatiner_input_elevation.classList.toggle("hidden");

    //2.Reset values
    AddWorkout.input_cadence.value = "";
    AddWorkout.input_elevation.value = "";
}

/**
 * ### Workout Controller Initializer
 * Publisher/Subscriber Pattern
 * Subscriber to AddWorkout 
 */
export const init_workout_form = function(){

    AddWorkout.addHandlerChangeWorkout(change_workout_inputs);
    AddWorkout._addHandlerSubmit(submit_event);
    AddWorkout._addHandlerCancel(cancel_workout)
}