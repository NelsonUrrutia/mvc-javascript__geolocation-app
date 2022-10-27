import { State } from "../models/State.js";
import { filter_workouts_type, filter_workouts_prop } from "../models/_workout.js";
import MobileMenu from "../views/MobileMenu.js";
import SortMenu from "../views/SortMenu.js";
import { render_workouts_cards } from "./_render_workout.js";
import { delete_all_workouts, reset_filters, show_all_workouts } from "./_sort_menu.js";


export const mob_close_content = () => MobileMenu.close_workout_window();

export const mob_open_content =  () => MobileMenu.show_content();

const control_switch_filters = () => MobileMenu.switch_filter_list();

const control_switch_actions = () => MobileMenu.switch_actions();

const mob_filter_by_type = function(el){

    //1. Get element
    const filter_el = el.target.closest("li");
    if(!filter_el) return;

    //2. Get type
    const get_type = filter_el.dataset.type;

    //3. Reset filters state
    MobileMenu.reset_type_filters();

    //4. Added active state
    filter_el.classList.add("selected");

    //5. Passing type to filter
    filter_workouts_type(get_type);

    //6. Render Filtered workouts
    render_workouts_cards(State.filtered_workouts);

    //7. Show active filters
    SortMenu.show_active_filters(get_type, "type");

    //8. Hide container
    setTimeout(()=> MobileMenu.switch_filter_list(),100)
}

const mob_filter_by_prop = function(e){

    //1. Get element
    const filter_el = e.target.closest("li");
    if(!filter_el) return;
    
    //2. Get prop & title
    const get_prop = filter_el.dataset.type;
    const get_title = filter_el.dataset.title;
    
    //3. Reset active state
    MobileMenu.reset_prop_filters();
    
    //4. Set active state
    filter_el.classList.add("selected")

    //5. Build array of props
    filter_workouts_prop(get_prop);

    //6. Render workouts
    render_workouts_cards(State.filtered_workouts, true);

    //7. Show active filter
    SortMenu.show_active_filters(get_title, "props");

    //8. Hide container
    setTimeout(()=> MobileMenu.switch_filter_list(),800)
}

const mob_action_dispatcher = function(e){

    //1. Get the element clicked
    const btn = e.target.closest("li");
    if(!btn) return;

    //2. Get action
    const action = btn.dataset.action;

    //3. Check actions
    if(action === "reset-filter"){
        reset_filters();
        setTimeout(()=> MobileMenu.switch_actions(),100)
        return;
    }

    if(action === "map-view-all"){
        MobileMenu.close_workout_window();
        show_all_workouts();
        setTimeout(()=> MobileMenu.switch_actions(),100)
    }

    if(action === "delete-all-workouts"){
        MobileMenu.close_workout_window();
        delete_all_workouts();
    }

}

export const  init_mobile_menu = function(){
    MobileMenu.addHandlerCloseWorkoutWindow(mob_close_content);
    MobileMenu.addHandlerOpenContent(mob_open_content);
    MobileMenu.addHandlerSwitchFilterList(control_switch_filters);
    MobileMenu.addHandlerSwitchActions(control_switch_actions);
    MobileMenu.addHandlerFilterList(mob_filter_by_type);
    MobileMenu.addHandlerPropFilter(mob_filter_by_prop);
    MobileMenu.addHandlerActions(mob_action_dispatcher)
}   
