class SortMenu{

    #delete_btn = document.querySelector("#delete_all_workouts");
    #filter_type = document.querySelector("#workouts_type_filter");

    addHandlerDeleteAllWorkouts(handler){
        this.#delete_btn.addEventListener("click", function(e){
            
            //1. Select button
            const btn = e.target.closest("#delete_all_workouts");
            if(!btn) return;
        
            //2.Confirm to the user
            const result = confirm("Are you shure to DELETE ALL workouts?");
            if(result) handler();
        });        
    }

    addHandlerFilterByType(handler){
        this.#filter_type.addEventListener("change", handler);
    }
}

export default new SortMenu();