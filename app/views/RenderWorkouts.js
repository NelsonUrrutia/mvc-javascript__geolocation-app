import View from "./View.js";

class RenderWorkouts extends View{

    _dom_parent_element = document.querySelector("#workouts_list");
    _dom_empty_msg = document.querySelector("#empty_message");

    addHandlerWorkoutCard(handler){
        this._dom_parent_element.addEventListener('click',handler)
    }

    generateMarkup(data, filtered = false){
        let workout_info = "";

        if(data.workout_type === 'running'){
            workout_info = `
                <ul class="workout_info">
                    <li>🏃🏻‍♂️ ${data.distance} <span>KM</span></li>
                    <li>⏱️ ${data.duration} <span>MIN</span></li>
                    <li>⚡ ${(data.distance / data.duration).toFixed(1)} <span>min/h</span></li>
                    <li>👟 ${data.cadence} <span>cadence</span></li>
                </ul>             
            `;
        }         

        if(data.workout_type === 'cycling'){
            workout_info = `
                <ul class="workout_info">
                    <li>🚲 ${data.distance} <span>KM</span></li>
                    <li>⏱️ ${data.duration} <span>MIN</span></li>
                    <li>⚡ ${(data.distance / (data.duration / 60)).toFixed(1)} <span>km/h</span></li>
                    <li>🗻 ${data.elevGain} <span>M</span></li>
                </ul>            
            `;
        }

        const workout_card = ` 
            <div class="workout_card"
                workout-type="${data.workout_type}" 
                data-workout-id="${data.workout_id}"
                data-latitude="${data.workout_coords.latitude}"
                data-longitude="${data.workout_coords.longitude}" > 
                    <h3>${data.workout_type}</h3>
                    <p>${data.workout_description}</p> 
                    ${workout_info}
                    <div class="workout_card__actions">
                        <button class="edit_workout">
                            <img src="images/edit.svg" alt="Edit Workout">
                        </button>
                        <button class="delete_workout">
                            <img src="images/trash.svg" alt="Delete Workout">
                        </button>
                    </div> 
            </div>
        `;

        if(filtered)  this._dom_parent_element.insertAdjacentHTML('beforeend', workout_card);
        if(!filtered) this._dom_parent_element.insertAdjacentHTML('afterbegin', workout_card);       
    }

    show_empty_message(){        
        this.clear();
        this._dom_empty_msg.classList.remove('hidden');
    }

    hide_empty_message(){
        this._dom_empty_msg.classList.add('hidden')
    }
}

export default new RenderWorkouts();