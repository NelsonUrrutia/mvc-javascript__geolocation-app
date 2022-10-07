import SortMenu from "../views/SortMenu.js";
import RenderWorkouts from "../views/RenderWorkouts.js";
import MapView from "../views/MapView.js";
import { clear_all_workouts, filter_workouts_prop, filter_workouts_type } from "../models/_workout.js";
import { render_workouts_cards } from "./_render_workout.js";
import { State } from "../models/State.js";

const delete_all_workouts = function(){
    
    //1. Clear workouts from State & LocalStorage
    clear_all_workouts();

    //2. Show empty message
    RenderWorkouts.show_empty_message();

    //3. Clear map
    MapView._delete_layer();

}

const sort_by_type = function(event){    
    //1. Get workout type
    const handle = event.target.value;

    //2. Build filtered array
    filter_workouts_type(handle);

    //3. Render State new array
    render_workouts_cards(State.filtered_workouts)
}

const sort_by_props = function(event){
    //1. Get prop handle
    const handle = event.target.value;

    //2. Build/Edit array
    filter_workouts_prop(handle);

    //3. Render State filtered workouts
    render_workouts_cards(State.filtered_workouts);
}

export const init_sort_menu = function(){
    SortMenu.addHandlerDeleteAllWorkouts(delete_all_workouts);
    SortMenu.addHandlerFilterByType(sort_by_type);
    SortMenu.addHanderFilterByProps(sort_by_props);
}