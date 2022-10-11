class ModalWindow{


    #main_container = document.querySelector("#global__window");
    #custom_text = document.querySelector("#global__window");
    #delete_button = document.querySelector("#delete");
    #cancel_button = document.querySelector("#cancel_delete");




}

/**
 * Funcionalidades
 * 1. Recibir texto para mostrar
 * 2. Recibir el tipo de modal 
 *      →Delete: mostrar franja roja
 *      →Edit: mostrar franja naranja
 *      →Success: mostrar "toast" en parte inferior derecha
 *          Hacer animacion para mostrar y esconder utilizando CSS
 *      Mostrar iconos: error, success
 * 3. Devolver una respuesta (true/false) cuando el modal tenga controles
 * 4. Utilizar promesas en el controlador para esperar el click de los botones
 * 5. Utilizar una clase para el markup y los eventos click 
 */