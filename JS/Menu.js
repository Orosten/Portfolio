

function OpenMenu(){
    let menu = document.querySelector(".menu")
        menu.classList.toggle('hidden');
        menu.classList.toggle('menuvisible');

    let button = document.querySelector(".menuButton")
        if(button.src.endsWith('menu.png')){       
            button.src=('../Asset/croix.png')
    }   else if (button.src.endsWith('croix.png')){
            button.src=('../Asset/menu.png');    
        }   
}






