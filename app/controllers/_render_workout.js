import { State } from "../models/State.js";
import { get_saved_workouts, init_state_workouts, get_workout_by_id } from "../models/_workout.js";
import AddWorkout from "../views/AddWorkout.js";
import MapView from "../views/MapView.js";
import RenderWorkouts from "../views/RenderWorkouts.js";

import { controller_delete_workout } from "./_workout_form.js";



export const render_workouts_cards = function(){
        
    //1. Render Spinner
    RenderWorkouts.render_spinner();

    //2. Get data from local storage
    const workouts = get_saved_workouts();

    //3. Check if its empty
    if(!workouts) {
        RenderWorkouts.show_empty_message();
        return
    }

    //4. Rendering workouts
    RenderWorkouts.clear();
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

export const click_workout_card_dispatcher = function(event){
    const element_click = event.target;
    
    // 1. Check if the edit button was clicked
    if(element_click.closest('.edit_workout')){
        //1. Get id from workout card
        const workout_id = element_click.closest(".workout_card").dataset.workoutId;
        
        //2. Passing id to edit function
        edit_workout(workout_id);        
        return
    }
    
    // 2. Check if the delete button was clicked
    if(element_click.closest('.delete_workout')){        
        //1. Get id from workout card
        const workout_id = element_click.closest(".workout_card").dataset.workoutId;

        //2. Passing id to delete function
        controller_delete_workout(workout_id);
        return
    }
    
    //3.The workout card was clicked
    const latitude = element_click.closest('.workout_card').dataset.latitude;
    const longitude = element_click.closest('.workout_card').dataset.longitude;

    MapView.set_view_map(latitude,longitude);
}

export const get_workouts = function(){
    return get_saved_workouts()
}

export const init_render_workouts = function(){
    render_workouts_cards();
    init_state_workouts()
    RenderWorkouts.addHandlerWorkoutCard(click_workout_card_dispatcher)
}