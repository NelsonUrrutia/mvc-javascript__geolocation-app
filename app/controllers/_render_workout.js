import { State } from "../models/State.js";
import { get_saved_workouts, init_state_workouts } from "../models/_workout.js";
import MapView from "../views/MapView.js";

import RenderWorkouts from "../views/RenderWorkouts.js";


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

export const click_workout_card_dispatcher = function(event){
    const element_click = event.target;
    // debugger
    
    // 1. Check if the edit button was clicked
    if(element_click.closest('.edit_workout')){
        console.log("edit workout");
        return
    }
    
    // 2. Check if the delete button was clicked
    if(element_click.closest('.delete_workout')){
        console.log("delete workout");
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