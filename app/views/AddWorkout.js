class AddWorkout{

    #form = document.querySelector('#workout_form');

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
            document.querySelector('.form__input--cadence, .form__input--elevation').value = '';      
        })
    }

    addHandlerSubmit(handler){
        this.#form.addEventListener('submit', function(e){
            e.preventDefault();
            const form_data = [...new FormData(this)]
            handler(form_data)
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