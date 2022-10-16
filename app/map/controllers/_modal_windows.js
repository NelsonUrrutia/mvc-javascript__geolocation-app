import ModalWindow from "../views/ModalWindow.js"

const modal_answer = function(){
    return new Promise((resolve, reject) => {     
        const delete_workout_handle = () => resolve(true);
        const cancel_button_handle = () => resolve(false);
        const edit_button_handle = () => resolve(true);

        ModalWindow.modal_delete_workout(delete_workout_handle);
        ModalWindow.modal_edit_workout(edit_button_handle)
        ModalWindow.modal_cancel_delete(cancel_button_handle);
    })
}

/**
 * Modal Window
 * @param {String} title Custom title. Check helpers.js/CustomModalSettings.js for options
 * @param {String} copy Optional, set "" to skip this. Custom copy. Check helpers.js/CustomModalSettings.js for options
 * @param {String} type Custom class. Check helpers.js/CustomModalSettings.js for options
 */

export const modal_window = async function(title, copy, type ){    
    //1. Create Markup
    ModalWindow.build_modal(title,copy,type);

    //2. Wait for answer (click of the user)
    const answer = await modal_answer();   

    //3. Hide modal
    ModalWindow.hidde_modal(type); 

    //4. Return user answer
    return answer;
}

/**
 * Toast Window
 * @param {String} title Custom title. Check helpers.js/CustomModalSettings.js for options
 * @param {String} copy Optional, set "" to skip this. Custom copy. Check helpers.js/CustomModalSettings.js for options
 * @param {String} type Custom class. Check helpers.js/CustomModalSettings.js for options
 * @param {Boolean} enable_user_interaction Show x on the top. User needs to click the toast or the button to close the toast
 */

export const toast_window = function(title, copy, type, enable_user_interaction){
    //1. Build toast Markup
    ModalWindow.build_toast(title, copy,type, enable_user_interaction);
}

const close_toast_window = () => ModalWindow.close_toast();

export const init_modal_window = function(){
    ModalWindow.addHandlerCloseToast(close_toast_window)
}