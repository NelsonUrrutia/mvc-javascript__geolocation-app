import MapView from "../views/MapView.js";
import AddWorkout from "../views/AddWorkout.js";

import { State } from "../models/State.js";
import { set_location_state } from "../models/_map.js";


const clickEvent = function(event){
    //1. Get latitude & longitude from the event
    const {lat, lng} = event.latlng;

    //2. Show workout form
    AddWorkout.show_add_workout_form();

    //3. Set coord in workout form
    AddWorkout._fill_coords_input(lat, lng)
}


const render_map = async function(){

    //1. Call method to set location on State
    await set_location_state();

    //2. Init MapView Object
    //Passing the location (saved in State) & callback to click event
    const map = new MapView([State.user_location.latitude,State.user_location.longitude], clickEvent);
}




/**
 * ### Map Controller Initializer
 * Publisher/Subscriber Pattern
 * Subscriber to MapView 
 */

export const init_map_controller = function(){
    render_map();
}
