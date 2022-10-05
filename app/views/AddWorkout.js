class AddWorkout{
    
    #form = document.querySelector('#workout_form');
    #input_id = this.#form.querySelector("#workout_id");
    #input_lat = this.#form.querySelector("#workout_form__lat");
    #input_lng = this.#form.querySelector("#workout_form__lng");
    #input_type = this.#form.querySelector(".form__input--type");
    #input_distance = this.#form.querySelector(".form__input--distance");
    #input_duration = this.#form.querySelector(".form__input--duration");
    #input_cadence = this.#form.querySelector(".form__input--cadence");
    #input_elevation = this.#form.querySelector(".form__input--elevation");
    #cancel_workout_btn = this.#form.querySelector("#cancel");

    /**
     * 
     * ## PUBLIC API
     *  
    */    

    /**
     * ### Handler for dropdown with workouts types
     * Toggle hidden class between inputs
     */
    
    addHandlerChangeWorkout(){        
        this.#form.querySelector('.form__input--type').addEventListener("change", function(e){
            //1. Select parent element
            const parent_element = this.closest('#workout_form');

            //2. Toggle 'hidden' class on inputs
            parent_element.querySelector("[cadence]").classList.toggle('hidden');
            parent_element.querySelector("[elev-gain]").classList.toggle('hidden');

            //TODO:
            // Make it publisher/subscriber to include the this (pointing the class)
            //3. Reset values            
            document.querySelector('.form__input--cadence').value = '';   
            document.querySelector(".form__input--elevation").value = ""   ;
        })
    }

    /**
     * ### Handler for form submit event
     * @param {Function} handler 
     */

    _addHandlerSubmit(handler){
        this.#form.addEventListener('submit', function(e){
            e.preventDefault();            
            const form_data = [...new FormData(this)]
            handler(form_data)
        })
    }

    _addHandlerCancel(handler){
        this.#cancel_workout_btn.addEventListener('click', function(e){
            e.preventDefault;
            handler();
        })
    }

    show_workout_form(){
        this.#form.classList.remove('hidden');
    }

    hide_workout_form(){
        this.#form.classList.add('hidden');
    }

    /**
     * ## PRIVATE METHODS
     */

    _fill_form_inputs(workout_obj){
        
        let elevGain = null;
        let cadence = null; 
        
        //1. Destructuring obj
        const {distance, duration, workout_id, workout_type, workout_coords: {latitude, longitude}} = workout_obj;
        if(workout_obj.hasOwnProperty('elevGain')) elevGain = workout_obj.elevGain;
        if(workout_obj.hasOwnProperty('cadence')) cadence = workout_obj.cadence;

        //2. Set values 
        this.#input_distance.value = distance;
        this.#input_duration.value = duration;
        this.#input_id.value = workout_id;
        this.#input_type.value = workout_type;
        this.#input_lat.value = latitude;
        this.#input_lng.value = longitude;

        if(elevGain){
            this.#input_elevation.value = elevGain;
            this.#input_elevation.closest(".form__row").classList.remove('hidden');
            this.#input_cadence.closest(".form__row").classList.add('hidden');
        } 

        if(cadence) {
            this.#input_cadence.value = cadence;
            this.#input_cadence.closest(".form__row").classList.remove('hidden');
            this.#input_elevation.closest(".form__row").classList.add('hidden');
        };      
    }


    /**
     * ### Fill lat and lng inputs
     * @param {Number} lat 
     * @param {Number} lng 
     */

    _fill_coords_input(lat, lng){
        this.#form.querySelector('#workout_form__lat').value = lat;
        this.#form.querySelector('#workout_form__lng').value = lng;
    }

    _clear_workout_inputs(){
        this.#form.querySelectorAll('input[type="number"]').forEach( el => el.value = '');
    }
}

export default new AddWorkout();