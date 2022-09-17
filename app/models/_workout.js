import { State } from "./State.js";
import { MONTHS } from "../conf.js";

const persist_workouts = function(){
    localStorage.setItem('workouts', JSON.stringify(State.workouts))
}

const set_workout_description = function(workout_type){
    const date = new Date();
    const set_month = MONTHS[date.getMonth()];
    const set_day = date.getDate();
    return `${workout_type}, ${set_month}/${set_day}`;
}

export const save_workout = function(data){
    
    //1. Destructuring Data 
    const [ [key_l, latitude], [key_lng, longitude], [key_w,workout_type],
    [key_d, distance], [key_dr, duration], [key_c, cadence], [key_el, elevGain]] = data;
    
    //2. Creating ID To Workout
    const id = (Date.now() + '').slice(-10);    
        
    //3. Creating Description  
    const workout_description = set_workout_description(workout_type)    
    
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

