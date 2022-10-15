class SortMenu{

    #delete_btn = document.querySelector("#delete_all_workouts");
    #filter_type = document.querySelector("#workouts_type_filter");
    #filter_prop = document.querySelector("#workouts_prop");
    #reset_filters = document.querySelector("#reset_filters");
    #show_all_workouts = document.querySelector("#map_view_all");
    #active_filters_container = document.querySelector("#active_filters");
    #active_filters_list = document.querySelector("#active_filters_list");

    addHandlerDeleteAllWorkouts(handler){
        this.#delete_btn.addEventListener("click", function(e){
            
            //1. Select button
            const btn = e.target.closest("#delete_all_workouts");
            if(!btn) return;
        
            //2.Confirm to the user
            handler();
        });        
    }

    addHandlerFilterByType(handler){
        this.#filter_type.addEventListener("change", handler);
    }

    addHanderFilterByProps(handler){
        this.#filter_prop.addEventListener("change", handler)
    }

    addHandlerResetFilter(handler){
        this.#reset_filters.addEventListener("click", handler);
    }

    addHandlerShowAllWorkouts(handler){
        this.#show_all_workouts.addEventListener("click", handler);
    }

    reset_filter_controls(){
        this.#filter_prop.value = "";
        this.#filter_type.value = "";
    }

    reset_filter_prop(){
        this.#filter_prop.value = "";
    }

    show_active_filters(filter, type){
        //1. Check if has 'hidden' class & remove it
        if(this.#active_filters_container.classList.contains('hidden'))
            this.#active_filters_container.classList.remove("hidden");

        //2. Create markup
        const markup = `<li filter="${type}">${filter}</li>`;

        //3. Select list element
        const filter_el = this.#active_filters_list.querySelector(`[filter="${type}"]`);
        
        //4. Insert markup if element is new
        if(!filter_el) this.#active_filters_list.insertAdjacentHTML("beforeend", markup);

        //5. Update filter content if element exist
        if(filter_el) filter_el.innerHTML = filter;
    }

    close_active_filters(){
        this.#active_filters_container.classList.add("hidden");
        this.#active_filters_list.innerHTML = "";
    }
}

export default new SortMenu();