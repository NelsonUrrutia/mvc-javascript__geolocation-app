
import  View from './View.js'

class MapView extends View{

    #map;    
    #map_zoom_level = 13;
    _parent_element = "map_container";
    _dom_parent_element = document.querySelector("#map_container")

    /**
     * -----------
     * Public API
     * -----------
     */

    /**
     * ### Publisher Click on Map
     * @param {Function} handler  Call Function to execute on click 
     */
    addHandler_click_map(handler){
        this._dom_parent_element.addEventListener('click', handler);
    }



    /**
     * ------------------
     * Private Methods
     * ------------------
     */

    
    /**
     * ### Render Map     
     * Render map on container
     * 
     * Params from 'get_coords' method at controllers/_map.js    
     * @param {Number} latitude 
     * @param {Number} longitude 
    */

    _render_map(latitude, longitude){        
        //1. Clear container
        this.clear();

        // 2. Build map object
        this.#map = L.map(this._parent_element).setView([latitude, longitude], this.#map_zoom_level);
        
        // 3. Create map tiles
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',{
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
    }
    



}

export default new MapView();