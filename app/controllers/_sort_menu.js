import SortMenu from "../views/SortMenu.js";
import RenderWorkouts from "../views/RenderWorkouts.js";
import MapView from "../views/MapView.js";
import { clear_all_workouts } from "../models/_workout.js";

const delete_all_workouts = function(){
    
    //1. Clear workouts from State & LocalStorage
    clear_all_workouts();

    //2. Show empty message
    RenderWorkouts.show_empty_message();

    //3. Clear map
    MapView._delete_layer();

}

export const init_sort_menu = function(){
    SortMenu.addHandlerDeleteAllWorkouts(delete_all_workouts)
}