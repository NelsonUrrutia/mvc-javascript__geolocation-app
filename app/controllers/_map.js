import MapView from "../views/MapView.js";
import AddWorkout from "../views/AddWorkout.js";

import { State } from "../models/State.js";
import { reverse_geocoding, set_location_state } from "../models/_map.js";

import { get_workouts } from "./_render_workout.js";

const clickEvent = function(event){
    //1. Get latitude & longitude from the event
    const {lat, lng} = event.latlng;

    //2. Show workout form
    AddWorkout.show_workout_form();

    //3. Set coord in workout form
    AddWorkout._fill_coords_input(lat, lng)
}

const mark_saved_workouts = function(){       
    const workouts = get_workouts();
    if(!workouts) return;

    workouts.forEach(el => {
        const { latitude, longitude} = el.workout_coords;
        const workout_type = el.workout_type;
        mark_pin_on_map(latitude, longitude,workout_type)
    })
}

export const mark_pin_on_map = function(lat, lng, workout_type){
    //1. Passing to a reverse geolocation
    // const reverse_geo_data = await reverse_geocoding(lat, lng);

    //2. Passing coords and results of reverse geolocation
    MapView.mark_on_map(lat, lng, workout_type);    
}



const init_map = async function(){

    //1. Call method to set location on State
    await set_location_state();    

    //2. Build map with location
    MapView._render_map(State.user_location.latitude,State.user_location.longitude)

    //3. Bind click event
    MapView.addHandlerClickOnMap(clickEvent)

    //4. Show Pin on saved workouts
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