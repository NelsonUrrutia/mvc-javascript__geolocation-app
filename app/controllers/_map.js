import { EL_SALVADOR_COORD } from "../conf.js";
import mapView from "../views/MapView.js"

/**
 * ### Get User Position
 * Call on app start
 * Get the location of the user, ussing Geolocation Web API
 * If could not get use location, default coords will be use
 */

const get_user_position = function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            get_coords,            
            backup_map          
        )
    }
}

/**
 * ### Get Coords
 * Recieves Geolocation Object with the navigator geolocation position
 * @param { Geolocation } position 
 */
function get_coords(position){      
    //1. Render Spinner
    mapView.render_spinner();
        
    //2. Get latitude & longitude
    const {latitude, longitude} = position.coords; 

    //3. Passing parameters to Map View
    mapView._render_map(latitude, longitude);    
}

/**
 * ### Backup Function
 * If user denied location, by default will use El Salvador coords
 */

function backup_map(){
    //1. Render Spinner
    mapView.render_spinner();
    
    //2. Get latitude & longitude
    const {latitude, longitude} = EL_SALVADOR_COORD; 

    //3. Passing parameters to Map View
    mapView._render_map(latitude, longitude); 
}

/**
 * ### Subscriber Click Event 
 */
const click_on_map = function(){
    console.log('Hello there');

    //1. Show Form

    //2. Mark on map the location
}



/**
 * ### Map Controller Initializer
 * Publisher/Subscriber Pattern
 * Subscriber to MapView 
 */

export const init_map_controller = function(){
    get_user_position();
    mapView.addHandler_click_map(click_on_map)
}

