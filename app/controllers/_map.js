import MapView from "../views/MapView.js";
import AddWorkout from "../views/AddWorkout.js";

import { State } from "../models/State.js";
import { set_location_state } from "../models/_map.js";

import { get_workouts } from "./_render_workout.js";
import RenderWorkouts from "../views/RenderWorkouts.js";
import { toast_window } from "./_modal_windows.js";
import { CustomModalSettings } from "../helpers.js";

const clickEvent = function(event){
    //1. Get latitude & longitude from the event
    const {lat, lng} = event.latlng;

    //2. Show workout form
    AddWorkout.show_workout_form();

    //3. Set coord in workout form
    AddWorkout._fill_coords_input(lat, lng);

    //4. Hide empty message
    RenderWorkouts.hide_empty_message();
}

export const mark_saved_workouts = function(){       
    const workouts = get_workouts();
    if(!workouts) return;

    workouts.forEach(el => {
        const { latitude, longitude} = el.workout_coords;
        const workout_type = el.workout_type;
        mark_pin_on_map(latitude, longitude,workout_type)
    })
}

export const mark_pin_on_map = function(lat, lng, workout_type){
    //TODO:
    //1. Passing to a reverse geolocation
    // const reverse_geo_data = await reverse_geocoding(lat, lng);

    //2. Passing coords and results of reverse geolocation
    MapView.mark_on_map(lat, lng, workout_type);    
}

export const reset_map_layer = () =>  MapView._delete_layer();


export const show_all_markers = () => MapView._show_all_markers();


const init_map = async function(){
    //1. Call method to set location on State
    const denied_location = await set_location_state(); 

    //2. Show warning toast if user denied location
    if(denied_location){
        const {code, message} = denied_location;
        if(code === 1){
            toast_window(message, 
                        CustomModalSettings.messages.map.warning_message, 
                        CustomModalSettings.classes.warning,
                        true);
        }
    }


    //3. Build map with location
    MapView._render_map(State.user_location.latitude,State.user_location.longitude)

    //4. Bind click event
    MapView.addHandlerClickOnMap(clickEvent)

    //5. Show Pin on saved workouts
    mark_saved_workouts();
}

/**
 * ### Map Controller Initializer
 * Publisher/Subscriber Pattern
 * Subscriber to MapView 
 */

export const init_map_controller = function(){    
    init_map();
}
