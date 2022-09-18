import { State } from "../models/State.js";
import { get_saved_workouts, init_state_workouts } from "../models/_workout.js";

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

export const get_workouts = function(){
    return get_saved_workouts()
}

export const init_render_workouts = function(){
    render_workouts_cards();
    init_state_workouts()
}