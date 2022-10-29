import { init_map_controller } from "./controllers/_map.js";
import { init_workout_form } from "./controllers/_workout_form.js";
import {init_render_workouts} from "./controllers/_render_workout.js"
import { init_sort_menu } from "./controllers/_sort_menu.js";
import { init_modal_window } from "./controllers/_modal_windows.js";
import { init_mobile_menu } from "./controllers/_mobile_sort_menu.js";

init_map_controller();
init_workout_form();
init_render_workouts();
init_sort_menu();
init_modal_window();
init_mobile_menu();

/**
TODO:
1. Unit testing (Learn and implement)

4. Ability to draw lines and shapes instead of just points (make a new branch draw_lines)
    https://leaflet.github.io/Leaflet.draw/docs/leaflet-draw-latest.html

9. Make darkmode

11. Make popup with how to use app when load

10. Make README with same Info
 */
