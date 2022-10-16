import AppInfoWindow from "../views/AppInfoWindow.js"



const navigation_controller = function(item){
    //1. Reset nav elements active state
    AppInfoWindow.reset_nav_active_state();

    //2. Set active state 
    item.classList.add("active");

    //4. Get nav handle
    const handle = item.dataset.navHandle;

    AppInfoWindow.show_content(handle);
}

export const init_app_info_window = function(){
    AppInfoWindow.addHandlerNavigation(navigation_controller)
    AppInfoWindow.make_sticky_header();
} 

