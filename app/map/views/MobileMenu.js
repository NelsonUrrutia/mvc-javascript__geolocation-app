class MobileMenu {

    #close_workouts_window = document.querySelector("#mobile_close_workouts");
    #form_container = document.querySelector("#form_container");
    #mobile_show_content = document.querySelector("#mobile_show_content");
    #content_container = document.querySelector("#form_container")
    
    #show_actions = document.querySelector("#show_mobile_actions")
    #show_filter_list_btn = document.querySelector("#show_mobile_filters");
    #filter_list = document.querySelector(".mobile_filter_list");
    #action_list = document.querySelector(".mobile_actions_list")    

    #filters_type_container = document.querySelector("#mob_filters_type");
    #filters_prop_container = document.querySelector("#mob_prop_type");

    addHandlerOpenContent(handle){
        this.#mobile_show_content.addEventListener("click",handle);
    }

    addHandlerSwitchFilterList(handle){
        this.#show_filter_list_btn.addEventListener("click", handle)
    }

    addHandlerCloseWorkoutWindow(handle){
        this.#close_workouts_window.addEventListener("click", function(e){
            const btn = e.target.closest("#mobile_close_workouts");
            if(!btn) return;
            handle();
        })
    }

    addHandlerSwitchActions(handle){
        this.#show_actions.addEventListener("click", function(e){
            const btn = e.target.closest("#show_mobile_actions");
            if(!btn) return;
            handle();
        })
    }

    addHandlerFilterList(handle){
        this.#filters_type_container.addEventListener("click", handle)
    }

    addHandlerPropFilter(handle){
        this.#filters_prop_container.addEventListener("click", handle)
    }

    addHandlerActions(handle){
        this.#action_list.addEventListener("click", handle)
    }

    show_content(){
        this.#content_container.classList.add("open");
        this.#mobile_show_content.classList.add("hidden");
    }

    close_workout_window(){
        this.#form_container.classList.remove("open");
        this.#mobile_show_content.classList.remove("hidden");
    }

    switch_filter_list(){
        this.#filter_list.classList.toggle("hidden");
    }

    switch_actions(){
        this.#action_list.classList.toggle('hidden');
    }

    reset_type_filters(){
        this.#filters_type_container.querySelectorAll('li').forEach(el => el.classList.remove('selected'))
    }

    reset_prop_filters(){
        this.#filters_prop_container.querySelectorAll('li').forEach(el => el.classList.remove('selected'))
    }
}

export default new MobileMenu();
