import { modal_window } from "./_modal_windows.js";

export const show_intro_modal = function(){
    
    modal_window("Welcome to the GEOLOCATION WORKOUT APP",
                `Go to the App Info, by clicking the 'i' icon. <br>
                If you are in a mobile device, click the down left icon, and then click "Actions". <br>
                Start by click on the map to save a workout`,
                "info"
    )
}