import { init_map_controller } from "./controllers/_map.js";
import { init_workout_form } from "./controllers/_workout_form.js";
import {init_render_workouts} from "./controllers/_render_workout.js"

init_map_controller();
init_workout_form();
init_render_workouts();

/**
TODO: 
2. Ability to delete a workout
3. Ability to delete all workouts
4. Ability to sort workouts by certain field (e.g distance) 
6. More realistic error and confirmation messages
7. Ability to position the map to show all workouts
    → Use fitBounds https://leafletjs.com/reference.html#map-fitbounds
8. Ability to draw lines and shapes instead of just points
Make a destructuring function, pass name of properties an return values;
Rename functions and variables 

Mostrar al iniciar la app un mensaje con la informacion de la aplicacion
inclyuendo gifs con explicaciones
Mostrar descripcion de la app
Arquitectura
Como se guarda la info, no es un proyecto comercial
Poner un icono de informacion en la esquina para desplegar la info
Link a github
Hacer mensaje en linkedin
//https://stackoverflow.com/questions/66330228/how-to-destructure-an-array-of-objects-into-multiple-arrays-of-its-keys
 */
