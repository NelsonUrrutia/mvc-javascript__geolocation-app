import { init_map_controller } from "./controllers/_map.js";
import { init_workout_form } from "./controllers/_workout_form.js";
import {init_render_workouts} from "./controllers/_render_workout.js"
import { init_sort_menu } from "./controllers/_sort_menu.js";
import { init_modal_window } from "./controllers/_modal_windows.js";
import { init_mobile_menu } from "./controllers/_mobile_sort_menu.js";
import { show_intro_modal } from "./controllers/_intro_modal.js";

init_map_controller();
init_workout_form();
init_render_workouts();
init_sort_menu();
init_modal_window();
init_mobile_menu();
show_intro_modal();