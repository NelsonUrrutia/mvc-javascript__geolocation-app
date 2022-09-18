import { State } from "../models/State.js";
import { get_saved_workouts } from "../models/_workout.js";

import RenderWorkouts from "../views/RenderWorkouts.js";
import { mark_pin_on_map } from "./_map.js";


export const render_workouts = function(){
    
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

    //5. Mark pin on map
    // workouts.forEach( el => {
    //     debugger
    //     const { latitude, longitude} = el.workout_coords;
    //     const workout_type = el.workout_type        
    //     mark_pin_on_map(latitude, longitude, workout_type);
    // });
}

export const init_render_workouts = function(){
    render_workouts();
}