import ModalWindow from "../views/ModalWindow.js"

const modal_answer = function(){
    return new Promise((resolve, reject) => {        
        ModalWindow.delete_button.addEventListener("click", function(){
            resolve(true)
        });

        ModalWindow.cancel_button.addEventListener("click", function(){
            resolve(false)
        })
    })
}

export const modal_window = async function(title, copy, type ){    
    ModalWindow.build_modal(title,copy,type);
    const answer = await modal_answer();   
    ModalWindow.hidde_modal(); 
    return answer;
}