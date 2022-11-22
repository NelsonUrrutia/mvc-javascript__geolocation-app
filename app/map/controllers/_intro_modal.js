import { modal_window } from "./_modal_windows.js";


export const show_intro_modal = function(){
    const image_url = "../../../images/info-icon.svg"
    modal_window("Welcome to the GEOLOCATION WORKOUT APP!",
                `Go to the App Info, by clicking the <img src="${image_url}"> icon.
                If you are in a mobile device, click the down left icon, and then click "Actions". <br>
                Start by click on the map to save a workout`,
                "info"
    )
}