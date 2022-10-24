import MobileView from "../views/MobileView.js"

const open_content =  () => MobileView.show_content();

export const init_mobile_view = function(){
    MobileView.addHandlerOpenContent(open_content)
}