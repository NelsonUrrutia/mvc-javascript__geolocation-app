class MobileView{

    #open_content = document.querySelector("#mobile_show_content");
    #content_container = document.querySelector("#form_container")

    addHandlerOpenContent(handle){
        this.#open_content.addEventListener("click",handle);
    }

    show_content(){
        this.#content_container.classList.add("open");
        this.#open_content.classList.add("hidden");
    }
}

export default new MobileView();