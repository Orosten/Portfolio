function OpenMenu(){
    let menu = document.querySelector(".menu")

    if (menu.classList.contains("hidden")){
        menu.classList.remove("hidden")
    } else if (!menu.classList.contains("hidden")){
        menu.classList.add("hidden")
    }
}





