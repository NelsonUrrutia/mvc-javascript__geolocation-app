class ModalWindow{

    delete_class = "delete";
    error_class = "error";
    edit_clas = "edit";
    succes_class = "success";


    #modal = document.querySelector("#global__window");
    #toast = document.querySelector("#toast");
    #custom_text = document.querySelector("#global__window");
    delete_button = document.querySelector("#delete");
    cancel_button = document.querySelector("#cancel_delete");


    build_modal(title, copy ="", type){
        this.#modal.classList.add(type);
        this.#modal.querySelector("h3").innerHTML = title;
        if( copy !== "") this.#modal.querySelector("p").innerHTML = copy;
        this.show_modal();
    }

    modal_delete_workout(handle){
        this.delete_button.addEventListener("click", handle)
    }

    modal_cancel_delete(handle){
        this.cancel_button.addEventListener("click", handle)
    }

    show_modal(){
        this.#modal.classList.remove("hidden")
    }

    hidde_modal(){
        this.#modal.classList.add("hidden")
    }

}

export default new ModalWindow();

/**
 * Funcionalidades
 * 1
 * 2. Recibir el tipo de modal 
 *      
 *      →Edit: mostrar franja naranja
 *      →Success: mostrar "toast" en parte inferior derecha *      
 *      Mostrar iconos: error, success
 * 
 * 4. Utilizar promesas en el controlador para esperar el click de los botones
 * 5. Utilizar una clase para el markup y los eventos click 
 * 
 * const answer = modal(attr, attr, attr)
 */