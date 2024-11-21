function button(x){
    let formation = document.querySelector(".formation")
    let entreprise = document.querySelector(".entreprise")
    let button1 = document.querySelector(".button1")
    let button2 = document.querySelector(".button2")

    if (x == 1){
        if (formation.classList.contains("hidden")){
            formation.classList.remove("hidden");
            entreprise.classList.add("hidden");
            button1.classList.add("active")
            button2.classList.remove("active")
        } else {
            formation.classList.add("hidden");
            button1.classList.remove("active")
        }
    } else if (x == 2){
        if (entreprise.classList.contains("hidden")){
            entreprise.classList.remove("hidden");
            formation.classList.add("hidden");
            button2.classList.add("active")
            button1.classList.remove("active")
        } else {
            entreprise.classList.add("hidden");
            button2.classList.remove("active")
        }
    } else {
        alert("no conditions matches")
    }
}

