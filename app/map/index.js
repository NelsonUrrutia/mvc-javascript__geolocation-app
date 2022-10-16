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
1. More realistic error messages (Based on unit testing)
    -> Use trycath
    -> Use Modal Window/toast
    -> Improve toast

2. Make a mobile verision + responsive (make a new branch mobile_responsive)

3. Reverse Geocode to get the name of the place on the description


4. Ability to draw lines and shapes instead of just points (make a new branch draw_lines)
    https://leaflet.github.io/Leaflet.draw/docs/leaflet-draw-latest.html

5. Make a destructuring function, pass name of properties an return values;
//https://stackoverflow.com/questions/66330228/how-to-destructure-an-array-of-objects-into-multiple-arrays-of-its-keys

6. Rename functions and variables 

7. Mostrar al iniciar la app un mensaje con la informacion de la aplicacion
    -> inclyuendo gifs con explicaciones
    -> Mostrar descripcion de la app
    -> Arquitectura
    -> Como se guarda la info, no es un proyecto comercial
    -> Poner un icono de informacion en la esquina para desplegar la info
    -> Link a github
    -> Hacer mensaje en linkedin
    -> Nombrar el curso de JavaScript y poner link

8. Improve documentation

9. Make darkmode

10. Make README with same Info

11. Restructure project files & folder

 */
