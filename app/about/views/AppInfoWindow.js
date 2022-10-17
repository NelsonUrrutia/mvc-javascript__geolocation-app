/**
 * Sticky nav
 * when is sitcky extend all width the nav
 * Make strecth and then expand
 * 
 * Add lazy loading, on scroll
 */

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

    //Sticky navigation methods
//     make_sticky_header(){
// debugger
//         const navHeight = this.#main_navigation_container.getBoundingClientRect().height;
//         const header = this.#main_navigation_container;

//         const stickyNav = function (entries) {
//             const [entry] = entries;
//             if (!entry.isIntersecting)
//             header.classList.add('sticky')
//             else
//             header.classList.remove('sticky')
//         }
//         const headerObserver = new IntersectionObserver(stickyNav, {
//             root: null,
//             threshold: 0,
//             rootMargin: `-${navHeight}px`
//         });
//         headerObserver.observe(this.#main_navigation_container)
//     }

}

export default new AppInfoWindow();