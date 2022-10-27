import { mob_close_content, mob_open_content } from "./controllers/_mobile_sort_menu.js";

export const CustomModalSettings = {
    classes:{
        delete: "delete",
        success: "success",
        edit:"edit",
        warning: "warning"
    },
    messages:{
        workouts:{
            saved_workout_title: "Workout Saved!",
            saved_workout_copy: "Workout successfuly saved",

            edited_workout_title:"Are you sure to edit this workout?",
            edited_workout_succes: "Workout Edited!",
            edited_workout_copy: "Workout edited successfuly",            

            delete_workout_title: "Are you sure to delete this workout?",
            delete_workout_copy: "This action is irreversible",
            delete_workouts_title: "Are you sure to delete ALL workouts?",
            delete_toast_title: "Workout Deleted!",
            delete_toast_copy: "Workout deleted succesfully",
            delete_all_toast_title: "Workouts Deleted",

            error_not_saved: "Workout not saved. Please try again",
            error_not_edited: "Workout not edited. Please try again",
            error_not_deleted: "Workout not deleted. Please try again",
            error_not_found: "Workout not found.",
            error_not_found_copy: "Please reload the page and try again"
        } ,
        map:{
            warning_message: "Your browser denied the location. The app can still be used."
        }       
    }
}

const check_if_mobile = function(){
    const width = window.innerWidth;
    if(width <= 1024) return true; 
}

/**
 * Switch to show/hide mobile container
 * @param {*} open Flag. true => open // false => close
 * @returns If is not mobile view 
 */
export  const mobile_content_switch = function(open = false){
    const is_mobile = check_if_mobile();
    if(!is_mobile) return;
    if(open) 
        mob_open_content();
    else
        mob_close_content();
}