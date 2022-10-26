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

2. Make a mobile verision + responsive

4. Ability to draw lines and shapes instead of just points (make a new branch draw_lines)
    https://leaflet.github.io/Leaflet.draw/docs/leaflet-draw-latest.html

7.About Page informacion de la aplicacion
    -> inclyuendo gifs con explicaciones
    -> Mostrar descripcion de la app
    -> Arquitectura
    -> Como se guarda la info, no es un proyecto comercial
    -> Poner un icono de informacion en la esquina para desplegar la info
    -> Link a github
    -> Hacer mensaje en linkedin
    -> Nombrar el curso de JavaScript y poner link
    ->Popup con info general y como usar al iniciar la app

9. Make darkmode

10. Make README with same Info
 */
