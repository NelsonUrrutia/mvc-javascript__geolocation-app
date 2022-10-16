/**
 * Sticky nav
 * when is sitcky extend all width the nav
 * Make strecth and then expand
 * 
 * Add lazy loading, on scroll
 */

class AppInfoWindow{

    #main_container = document.querySelector("#app_info");
    #close_btn = document.querySelector("#close_app_info");
    _navigation = document.querySelector(".navigation");
    #content_body = document.querySelector(".app_info_body");
    _header_el = document.querySelector(".app_info__header");

    addHandlerCloseInfo(handler){
        this.#close_btn.addEventListener("click", function(e){
            e.preventDefault();

            //1. Get button
            const btn = e.target.closest("#close_app_info");
            if(!btn) return;

            //2.Call handler
            handler();        
        })
    }

    // Tabs methods 

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
        this.#content_body.querySelectorAll(".info_content").forEach(el => el.classList.add('hidden'))
    }

    show_content(handler){

        //1. Hide all elements
        this.reset_content_active_state();

        //2. Show element with same handle
        this.#content_body.querySelector(`.info_content[data-nav-handle="${handler}"]`).classList.remove("hidden");
    }

    //Sticky navigation methods
    make_sticky_header(){

        const navHeight = this._header_el.getBoundingClientRect().height;
        const header = this._header_el;

        const stickyNav = function (entries) {
            const [entry] = entries;
            if (!entry.isIntersecting)
            header.classList.add('sticky')
            else
            header.classList.remove('sticky')
        }
        const headerObserver = new IntersectionObserver(stickyNav, {
            root: null,
            threshold: 0,
            rootMargin: `-${navHeight}px`
        });
        headerObserver.observe(this._header_el)
    }

}

export default new AppInfoWindow();