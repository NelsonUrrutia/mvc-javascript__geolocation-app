import { State } from "./State.js";
import { MONTHS } from "../conf.js";

const persist_workouts = function(){    
    localStorage.setItem('workouts', JSON.stringify(State.workouts))
}

const set_workout_description = function(){
    const date = new Date();
    const set_month = MONTHS[date.getMonth()];
    const set_day = date.getDate();
    return `${set_month} ${set_day}`;
}

export const save_workout = function(data){       
    
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
}

export const edit_workout = function(data){

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
}

export const get_workout_by_id = id => State.workouts.filter(work => work.workout_id === id);

export const get_saved_workouts = function(){
    const workouts = JSON.parse(localStorage.getItem("workouts"));
    if(!workouts) return;
    return workouts;    
}

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

