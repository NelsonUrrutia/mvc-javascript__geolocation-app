import { init_map_controller } from "./controllers/_map.js";
import { init_workout_form } from "./controllers/_workout_form.js";
import {init_render_workouts} from "./controllers/_render_workout.js"
import { init_sort_menu } from "./controllers/_sort_menu.js";
import { init_modal_window } from "./controllers/_modal_windows.js";

init_map_controller();
init_workout_form();
init_render_workouts();
init_sort_menu();
init_modal_window();

/**
TODO:
6. More realistic error messages
15. Reverse Geocode to get the name of the place on the description


8. Ability to draw lines and shapes instead of just points
9. Make a destructuring function, pass name of properties an return values;
10. Rename functions and variables 
12. Mostrar al iniciar la app un mensaje con la informacion de la aplicacion
    -> inclyuendo gifs con explicaciones
    -> Mostrar descripcion de la app
    -> Arquitectura
    -> Como se guarda la info, no es un proyecto comercial
    -> Poner un icono de informacion en la esquina para desplegar la info
    -> Link a github
    -> Hacer mensaje en linkedin
16. Improve documentation
17. Make a mobile verision + responsive
//https://stackoverflow.com/questions/66330228/how-to-destructure-an-array-of-objects-into-multiple-arrays-of-its-keys
 */
