import MapView from "../views/MapView.js";
import AddWorkout from "../views/AddWorkout.js";

import { State } from "../models/State.js";
import { reverse_geocoding, set_location_state } from "../models/_map.js";

let Map = {};

const clickEvent = function(event){
    //1. Get latitude & longitude from the event
    const {lat, lng} = event.latlng;

    //2. Show workout form
    AddWorkout.show_workout_form();

    //3. Set coord in workout form
    AddWorkout._fill_coords_input(lat, lng)
}

export const mark_pin_on_map = async function(lat, lng, workout_type){
    //1. Passing to a reverse geolocation
    // const reverse_geo_data = await reverse_geocoding(lat, lng);

    //2. Passing coords and results of reverse geolocation
    Map._mark_on_map(lat, lng, workout_type);    
}


const render_map = async function(){

    //1. Call method to set location on State
    await set_location_state();

    //2. Init MapView Object
    //Passing the location (saved in State) & callback to click event
    Map = new MapView([State.user_location.latitude,State.user_location.longitude], clickEvent);
}

/**
 * ### Map Controller Initializer
 * Publisher/Subscriber Pattern
 * Subscriber to MapView 
 */

export const init_map_controller = function(){
    render_map();
}
