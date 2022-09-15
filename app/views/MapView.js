
import  View from './View.js';
export default  class MapView extends View{
    #map;    
    #map_zoom_level = 13;
    _parent_element = "map_container";
    _dom_parent_element = document.querySelector("#map_container")

    constructor([lat,lon], click_event){
        super();
        this._render_map([lat,lon], click_event)
    }

    _render_map([lat,lon], click_event){

        //1. Clear container
        this.clear();

        // 2. Build map object
        this.#map = L.map(this._parent_element).setView([lat, lon], this.#map_zoom_level);
                
        // 3. Create map tiles
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',{
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);     
                
                
        //4. Add Events on Map
        this.#map.on('click', click_event)
    }

}