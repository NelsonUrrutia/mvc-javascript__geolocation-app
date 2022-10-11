import ModalWindow from "../views/ModalWindow.js"

const modal_answer = function(){
    return new Promise((resolve, reject) => {     
        const delete_workout_handle = () => resolve(true);
        const cancel_button_handle = () => resolve(false)
        ModalWindow.modal_delete_workout(delete_workout_handle);
        ModalWindow.modal_cancel_delete(cancel_button_handle);
    })
}

export const modal_window = async function(title, copy, type ){    
    ModalWindow.build_modal(title,copy,type);
    const answer = await modal_answer();   
    ModalWindow.hidde_modal(); 
    return answer;
}