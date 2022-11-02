class AppInfoWindow{

    #main_navigation_container = document.querySelector("header");
    _navigation = document.querySelector(".navigation");
    #content_body = document.querySelector(".articles_container");


    addHandlerNavigation(handler){
        this._navigation.addEventListener("click", function(e){
            const tab_el = e.target.closest(".navigation_item");
            if(!tab_el) return;            
            handler(tab_el);
        })
    }

    reset_nav_active_state(){
        this._navigation.querySelectorAll("li").forEach(el => el.classList.remove("active"))
    }

    reset_content_active_state(){
        this.#content_body.querySelectorAll("article").forEach(el => el.classList.add('hidden'))
    }

    show_content(handler){
        //1. Hide all elements
        this.reset_content_active_state();

        //2. Show element with same handle
        this.#content_body.querySelector(`article[data-nav-handle="${handler}"]`).classList.remove("hidden");
    }
}

export default new AppInfoWindow();