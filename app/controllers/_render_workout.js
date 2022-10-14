import { CustomModalSettings } from "../helpers.js";
import { State } from "../models/State.js";
import { get_saved_workouts, init_state_workouts, get_workout_by_id } from "../models/_workout.js";
import AddWorkout from "../views/AddWorkout.js";
import MapView from "../views/MapView.js";
import RenderWorkouts from "../views/RenderWorkouts.js";
import { modal_window } from "./_modal_windows.js";

import { controller_delete_workout } from "./_workout_form.js";


export const render_workouts_cards = function(workout_arr = [], filtered = false){
    //1. Clear content 
    RenderWorkouts.clear();

    //2. Check if passed param has items
    if(workout_arr.length > 0){
        workout_arr.forEach( el => RenderWorkouts.generateMarkup(el, filtered));
        return;
    }

    //3. Get data from local storage
    const workouts = get_saved_workouts();

    //4. Check if its empty
    if(!workouts || workouts.length <= 0) {
        RenderWorkouts.show_empty_message();
        return
    }

    //5. Rendering workouts    
    workouts.forEach( el => RenderWorkouts.generateMarkup(el));
}

const edit_workout = function(workout_id){

    //1. Find workout on State
    const [workout_obj] = get_workout_by_id(workout_id);
    
    //2. Set data to inputs form
    AddWorkout._fill_form_inputs(workout_obj);

    //3. Show form
    AddWorkout.show_workout_form();
}

export const click_workout_card_dispatcher = async function(event){
    const element_click = event.target;
    
    // 1. Check if the edit button was clicked
    if(element_click.closest('.edit_workout')){
        //1. Get id from workout card
        const workout_id = element_click.closest(".workout_card").dataset.workoutId;
        
        //2. Confirm edit
        const edit_workout_flag = await modal_window(CustomModalSettings.messages.workouts.edited_workout_title,"",CustomModalSettings.classes.edit)

        //3. Passing id to edit function
        if(edit_workout_flag)   edit_workout(workout_id);       
        return
    }
    
    // 2. Check if the delete button was clicked
    if(element_click.closest('.delete_workout')){        
        //1. Get id from workout card
        const workout_id = element_click.closest(".workout_card").dataset.workoutId;
        
        //2.Confirm delete
        const delete_workout = await modal_window(CustomModalSettings.messages.workouts.delete_workout_title,
                                                CustomModalSettings.messages.workouts.delete_workout_copy,
                                                CustomModalSettings.classes.delete)
        
        //3. Passing id to delete function
        if( delete_workout) controller_delete_workout(workout_id);
        
        return;
    }

    if( element_click.closest(".workout_card")){
        const latitude = element_click.closest('.workout_card')?.dataset.latitude;
        const longitude = element_click.closest('.workout_card')?.dataset.longitude;
        MapView.set_view_map(latitude,longitude);
        return;
    }

}

export const get_workouts = function(){
    return get_saved_workouts()
}

export const init_render_workouts = function(){
    render_workouts_cards();
    init_state_workouts()
    RenderWorkouts.addHandlerWorkoutCard(click_workout_card_dispatcher)
}