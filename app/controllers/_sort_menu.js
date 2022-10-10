import SortMenu from "../views/SortMenu.js";
import RenderWorkouts from "../views/RenderWorkouts.js";
import MapView from "../views/MapView.js";
import { clear_all_workouts, clear_filtered_array, filter_workouts_prop, filter_workouts_type } from "../models/_workout.js";
import { render_workouts_cards } from "./_render_workout.js";
import { State } from "../models/State.js";
import { show_all_markers } from "./_map.js";

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

    //3.Reset Prop value
    SortMenu.reset_filter_prop()

    //4. Render State new array
    render_workouts_cards(State.filtered_workouts)
}

const sort_by_props = function(event){
    //1. Get prop handle
    const handle = event.target.value;

    //2. Build array
    filter_workouts_prop(handle);

    //3. Render State filtered workouts
    render_workouts_cards(State.filtered_workouts, true);
}

const reset_filters = function(){
    //1. Clear State filtered array
    clear_filtered_array();

    //2. Render workouts
    render_workouts_cards();

    //3. Clear value of dropdowns
    SortMenu.reset_filter_controls();
}

const show_all_workouts = () => show_all_markers();

export const init_sort_menu = function(){
    SortMenu.addHandlerDeleteAllWorkouts(delete_all_workouts);
    SortMenu.addHandlerFilterByType(sort_by_type);
    SortMenu.addHanderFilterByProps(sort_by_props);
    SortMenu.addHandlerResetFilter(reset_filters);
    SortMenu.addHandlerShowAllWorkouts(show_all_workouts);
}