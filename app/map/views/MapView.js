import  View from './View.js';

class MapView extends View{
    #map;    
    #map_layer;
    #map_zoom_level = 14;
    _parent_element = "map_container";
    _dom_parent_element = document.querySelector("#map_container")


    addHandlerClickOnMap(handler){        
        this.#map.on('click', handler)
    }

    set_view_map(latitude,longitude){
        this.#map.setView({lat: latitude, lon: longitude}, this.#map_zoom_level, {
            animate:true,
            pan:{
                duration:0.5
            }
        })
    }

    mark_on_map(lat, lng, workout_type){ 
        const marker = L.marker([lat,lng])
        .addTo(this.#map)
        .bindPopup(
            L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: `${workout_type}-popup`,
            })
        )
        .setPopupContent(`${workout_type}`)
        .openPopup();
        this.#map_layer.addLayer(marker)
    }

    _show_all_markers(){
        let markers = [];
        Object.entries(this.#map._layers).forEach(layer =>  {
            if(layer[1]._latlng !== "undefined") markers.push(layer[1]._latlng);
            return
        });
        const bounds  = L.latLngBounds(markers);
        this.#map.fitBounds(bounds)
    }

    _delete_layer(){
        this.#map_layer.clearLayers();
    }

    _render_map(lat, lon){        
        //1. Clear container
        this.clear();

        // 2. Build map object
        this.#map = L.map(this._parent_element).setView([lat, lon], this.#map_zoom_level);
                
        // 3. Create map tiles
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',{
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);   
        
        //4. Create map layer
        this.#map_layer = L.layerGroup().addTo(this.#map);
    }
}

export default new MapView();