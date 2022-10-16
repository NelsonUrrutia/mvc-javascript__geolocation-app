export default class View{

    /**
     * -----------
     * PUBLIC APIS
     * -----------
     */

    /**
     * ### Render Spinner
     */
    
    render_spinner(){
        const markup = `
        <div class="la-ball-clip-rotate-pulse">
            <div></div>
            <div></div>
        </div>
        `;

        this.clear();
        this._dom_parent_element.insertAdjacentHTML('afterBegin', markup);
    };
    
    /**
     * ### Clear
     * Clean the parent HTML Content
    */

    clear(){
        this._dom_parent_element.innerHTML  = "";
    }
}

