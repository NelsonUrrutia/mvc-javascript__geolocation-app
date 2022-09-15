import { State } from "./State.js";
import { EL_SALVADOR_COORD } from "../conf.js"

/**
 * ### Get User Location
 * Turn the Navigator Geolocation API to a Promise
 * @returns Promise Navigator Geolocation API
 */
const get_user_location = function(){
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}

/**
 * ### Set user location in State
 * Receive the promise and sets 
 */
export const set_location_state = async function(){
    try {
        const position = await get_user_location();
        const {latitude, longitude} = position.coords;
        State.user_location.latitude = latitude;
        State.user_location.longitude = longitude;        
    } catch (error) {
        State.user_location.latitude = EL_SALVADOR_COORD.latitude;
        State.user_location.longitude = EL_SALVADOR_COORD.longitude;
        console.error(error.message);
    }
}