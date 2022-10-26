import MobileMenu from "../views/MobileMenu.js";


const close_content = () => MobileMenu.close_workout_window();

const open_content =  () => MobileMenu.show_content();

const control_switch_filters = () => MobileMenu.switch_filter_list();

const control_switch_actions = () => MobileMenu.switch_actions();

export const  init_mobile_menu = function(){
    MobileMenu.addHandlerCloseWorkoutWindow(close_content);
    MobileMenu.addHandlerOpenContent(open_content)
    MobileMenu.addHandlerSwitchFilterList(control_switch_filters);
    MobileMenu.addHandlerSwitchActions(control_switch_actions)

}   
