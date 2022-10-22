import { State } from "./State.js";
import { MONTHS } from "../conf.js";

/**
 * # Persist in localStorage
 * 
 * ### Function to save every change on the State Object in to localStorage
 */

const persist_workouts = () => localStorage.setItem('workouts', JSON.stringify(State.workouts));

/**
 * # Create workout descrioption
 * @returns String Month/Day
 */

const set_workout_description = function(){
    const date = new Date();
    const set_month = MONTHS[date.getMonth()];
    const set_day = date.getDate();
    return `${set_month} ${set_day}`;
}

/**
 * # Save workout
*  @param {Array} data Array with workout data
 */

export const save_workout = function(data){   
    
    try { 
        //1. Destructuring Data 
        const [[_,__], [key_l, latitude], [key_lng, longitude], [key_w,workout_type],
        [key_d, distance], [key_dr, duration], [key_c, cadence], [key_el, elevGain]] = data;
        
        //2. Creating ID To Workout
        const id = (Date.now() + '').slice(-10);    
            
        //3. Creating Description  
        const workout_description = set_workout_description()    
        
        //4. Creating workout obj    
        const workout = {
            workout_id: id,
            workout_description: workout_description,
            workout_coords:{
                latitude: latitude,
                longitude:longitude            
            },
            workout_type:workout_type,
            distance:distance,
            duration:duration,
            ...(cadence && { cadence: cadence}),
            ...(elevGain && {elevGain:elevGain})
        }
    
        //5. Push workout object to state
        State.workouts.push(workout);
    
        //6. Persist the new workouts
        persist_workouts();

        return 1;

    } catch (error) {
        return error
    }
}

/**
 * # Edit workout
 * @param {Array} data Array with workout data
 */

export const edit_workout = function(data){

    try {
        //1. Destructuring data
        const [[key_workout, workout_id], [key_l, lat], [key_lng, lng], [key_w,workout_type],
        [key_d, distance], [key_dr, duration], [key_c, cadence], [key_el, elevGain]] = data;
        
        //2. Find workout and re-asign new values
        State.workouts.forEach(el => {        
            if(el.workout_id === workout_id){
                el.distance = distance;
                el.duration = duration;
                el.workout_type = workout_type;
                if(workout_type === 'running'){
                    el.cadence = cadence;
                    delete el.elevGain;
                } 
                if(workout_type === 'cycling') {
                    el.elevGain = elevGain;
                    delete el.cadence;
                }
                return;
            }
        });
    
        //3. Persist edited workout
        persist_workouts();   

        return 1;
        
    } catch (error) {
        return error;
    }
}

/**
 * # Delete workout
 * @param {*} id Workout ID to be delete
 */

export const delete_workout = function(id){

    try {
        //1. Delete workout from State
        const new_workouts = State.workouts.filter( workout => workout.workout_id !== id);
        
        //2. Empty workouts array
        State.workouts = [];
    
        //3. Fill workouts array with filtered workouts
        State.workouts = new_workouts;
        
        //4. Persist into localstorage
        persist_workouts();

        return 1;
        
    } catch (error) {
        return error
    }
}

/**
 * # Clear all workouts
 * Delete workouts from State and localStorage
 */

export const clear_all_workouts = function(){

    //1. Delete workouts from State
    State.workouts  = [];

    //2. Persist into localstorage
    persist_workouts();
}


/**
 * # Search workout by ID
 * @param {*} id Workout ID to search
 */

export const get_workout_by_id = function(id){
    const workout = State.workouts.filter(work => work.workout_id === id);
    if( workout.length === 0) return [0];
    if( workout.length > 0) return workout;
}


/**
 * # Get saved workouts from localStorage
 * @returns Array of workouts saved at localStorage
 */

export const get_saved_workouts = function(){
    const workouts = JSON.parse(localStorage.getItem("workouts"));
    if(!workouts) return;
    return workouts;    
}


/**
 * # Filter workouts by type
 * @param {*} type Workouts type
 */

export const filter_workouts_type = function(type){    
    //1. Create copy array
    let copy_arr = State.workouts;

    //2. Filter array
    State.filtered_workouts = copy_arr.filter(el => el.workout_type === type);
};


/**
 * # Filter workouts by property
 * 
 * @param {*} prop Workouts property
 */

export const filter_workouts_prop = function(prop){        
    
    //1. Get property & sort param
    const [type, sort] = prop.split("_");
    
    //2. Create copy of array
    let copy_workouts = [];
    
    //Check if exist filtered workouts
    State.filtered_workouts.length > 0 ? copy_workouts = State.filtered_workouts : copy_workouts = State.workouts;

    //3. Sort  copy array
    if( sort === "ascending") copy_workouts.sort((a,b) => a[type] - b[type]);
    if( sort === "descending") copy_workouts.sort((a,b) => b[type] - a[type]);

    //4. Set sorted array to State filtered
    State.filtered_workouts = copy_workouts;
}

/**
 * # Clear Array of filtered workouts
 */

export const clear_filtered_array = () => { State.filtered_workouts = []};

/**
 * # Init workouts in State
 * Set saved workouts at localStorage in State.workouts
 */

export const init_state_workouts = function(){
    
    //1. Get workouts saved on local Storage
    const workouts = get_saved_workouts();

    //2. Check if its empty
    if(!workouts) return;

    //3. Save on State 
    workouts.forEach( el => {
        State.workouts.push(el);
    })
}

