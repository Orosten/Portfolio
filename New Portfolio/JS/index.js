setTimeout(() => { 
    affichage.classList.toggle("active");
}, 1);

function affichageParcours(x) {
    let quelAffichage = x;
    let affichage1 = document.querySelector(".affichageParcours1")
    let affichage2 = document.querySelector(".affichageParcours2")
    let affichage3 = document.querySelector(".affichageParcours3")
    let affichage4 = document.querySelector(".affichageParcours4")
    let element1 = document.querySelector(".elementParcours1")
    let element2 = document.querySelector(".elementParcours2")
    let element3 = document.querySelector(".elementParcours3")
    let element4 = document.querySelector(".elementParcours4")

    if (quelAffichage == 1){
        if (affichage1.classList.contains("hidden")) {
            affichage1.classList.remove("hidden");
            element1.classList.add("elementParcoursToggle");
            affichage2.classList.add("hidden");
            affichage3.classList.add("hidden");
            affichage4.classList.add("hidden");
            element2.classList.remove("elementParcoursToggle");
            element3.classList.remove("elementParcoursToggle");
            element4.classList.remove("elementParcoursToggle");
        } else {
            affichage1.classList.add("hidden");
            element1.classList.remove("elementParcoursToggle");
        }
    } else if (quelAffichage == 2){
        if (affichage2.classList.contains("hidden")) {
            affichage2.classList.remove("hidden");
            element2.classList.add("elementParcoursToggle");
            affichage1.classList.add("hidden");
            affichage3.classList.add("hidden");
            affichage4.classList.add("hidden");
            element1.classList.remove("elementParcoursToggle");
            element3.classList.remove("elementParcoursToggle");
            element4.classList.remove("elementParcoursToggle");
        } else {
            affichage2.classList.add("hidden");
            element2.classList.remove("elementParcoursToggle");
        } 
    } else if (quelAffichage == 3){
        if (affichage3.classList.contains("hidden")) {
            affichage3.classList.remove("hidden");
            element3.classList.add("elementParcoursToggle");
            affichage1.classList.add("hidden");
            affichage2.classList.add("hidden");
            affichage4.classList.add("hidden");
            element1.classList.remove("elementParcoursToggle");
            element2.classList.remove("elementParcoursToggle");
            element4.classList.remove("elementParcoursToggle");
        } else {
            affichage3.classList.add("hidden");
            element3.classList.remove("elementParcoursToggle");
        } 
    } else if (quelAffichage == 4){
        if (affichage4.classList.contains("hidden")) {
            affichage4.classList.remove("hidden");
            element4.classList.add("elementParcoursToggle");
            affichage1.classList.add("hidden");
            affichage2.classList.add("hidden");
            affichage3.classList.add("hidden");
            element1.classList.remove("elementParcoursToggle");
            element2.classList.remove("elementParcoursToggle");
            element3.classList.remove("elementParcoursToggle");
        } else {
            affichage4.classList.add("hidden");
            element4.classList.remove("elementParcoursToggle");
        } 
    } else {
        alert("Aucune condition remplie")
    }
}