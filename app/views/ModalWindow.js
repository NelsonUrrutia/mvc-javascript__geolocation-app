class ModalWindow{

    #modal = document.querySelector("#global__window");
    #toast = document.querySelector("#toast");
    #custom_text = document.querySelector("#global__window");
    #delete_button = document.querySelector("#delete");
    #cancel_button = document.querySelector("#cancel_delete");
    #edit_button = document.querySelector("#edit");
    #close_toast = document.querySelector("#close_toast");

    //MODAL METHODS

    /**
     * Build Modal Window
     * @param {String} title Custom title. Check helpers.js/CustomModalSettings.js for options
     * @param {String} copy Optional, set "" to skip this. Custom copy. Check helpers.js/CustomModalSettings.js for options
     * @param {String} type Custom class. Check helpers.js/CustomModalSettings.js for options
     */

    build_modal(title, copy ="", type){
        //1. Add custom class
        this.#modal.classList.add(type);

        //2. Set custom content
        this.#modal.querySelector("h3").innerHTML = title;
        if( copy !== "") this.#modal.querySelector("p").innerHTML = copy;

        //3. Show modal
        this.show_modal();
    }

    modal_delete_workout(handle){
        this.#delete_button.addEventListener("click", handle)
    }

    modal_edit_workout(handle){
        this.#edit_button.addEventListener("click",handle)
    }

    modal_cancel_delete(handle){
        this.#cancel_button.addEventListener("click", handle)
    }

    show_modal(){
        this.#modal.classList.remove("hidden");
    }

    hidde_modal(type){               
        this.#modal.classList.add("hidden");
        this.#modal.classList.remove(type);
        this.reset_modal();
    }

    reset_modal(){
        this.#modal.querySelector("h3").innerHTML = "";
        this.#modal.querySelector("p").innerHTML = "";
    }

    //TOAST METHODS

    /**
     * Build Toast Window
     * @param {String} title Custom title. Check helpers.js/CustomModalSettings.js for options
     * @param {String} copy Optional, set "" to skip this. Custom copy. Check helpers.js/CustomModalSettings.js for options
     * @param {String} type Custom class. Check helpers.js/CustomModalSettings.js for options
     * @param {Boolean} enable_user_interaction Show x on the top. User needs to click the toast or the button to close the toast
     */

    build_toast(title, copy, type, enable_user_interaction = false ){
        
        //1. Add custom class
        this.#toast.classList.add(type);

        //2. Set custom content
        this.#toast.querySelector("h3").innerHTML = title;
        if(copy !== "") this.#toast.querySelector("p").innerHTML = copy;

        //3. Add class to show toast
        this.#toast.classList.add("show_toast");

        //TODO:
        //4. Check to show close button
        //To close the toast user need to click the button
        if(enable_user_interaction){
            this.#close_toast.classList.remove("hidden");
            return;
        }

        //4. setTimeout to  hide toast & remove content
        setTimeout( () => {
            this.#toast.classList.remove("show_toast")
            setTimeout ( () => this.reset_toast(type), 2001)
            ;            
        }, 2000);
    }

    reset_toast(type){
        //1. Remove custom class
        this.#toast.classList.remove(type);

        //2. Empty content
        this.#toast.querySelector('h3').innerHTML = "";
        this.#toast.querySelector("p").innerHTML = ""
    }

    close_toast(type){
        this.#toast.classList.remove("show_toast");
        this.#close_toast.classList.add("hidden");
        this.reset_toast(type);
    }
}

export default new ModalWindow();

/**
 * Make a toast with an x only will be gone
 * if user clicks the x
 */