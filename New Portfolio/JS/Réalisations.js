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

//FORMATION
function afficherProjet(x){

    let box1 = document.querySelector(".box1")
    let box2 = document.querySelector(".box2")
    let box3 = document.querySelector(".box3")

    if(x == 1){
        box1.classList.remove("hidden");
        box2.classList.add("hidden");
        box3.classList.add("hidden");
    } else if (x == 2){
        box1.classList.add("hidden");
        box2.classList.remove("hidden");
        box3.classList.add("hidden");
    } else if (x == 3){
        box1.classList.add("hidden");
        box2.classList.add("hidden");
        box3.classList.remove("hidden");
    } else{
        alert("No condition matches for box toggle")
    }

}

function retour(){
        
    let box1 = document.querySelector(".box1")
    let box2 = document.querySelector(".box2")
    let box3 = document.querySelector(".box3")

    if(!box1.classList.contains("hidden")){
        box1.classList.add("hidden");
    } else if(!box2.classList.contains("hidden")){
        box2.classList.add("hidden");
    } else if(!box3.classList.contains("hidden")){
        box3.classList.add("hidden");
    } else {
        console.log("pas de hidden a retiré")
    }
}

//ENTREPRISE
function afficherProjetEntreprise(x) {

    let box1 = document.querySelector(".box1Entreprise");
    let box2 = document.querySelector(".box2Entreprise");
    let box3 = document.querySelector(".box3Entreprise");
    let box4 = document.querySelector(".box4Entreprise");
    let box5 = document.querySelector(".box5Entreprise");
    let box6 = document.querySelector(".box6Entreprise");

    if (x == 1) {
        box1.classList.remove("hidden");
        box2.classList.add("hidden");
        box3.classList.add("hidden");
        box4.classList.add("hidden");
        box5.classList.add("hidden");
        box6.classList.add("hidden");
    } else if (x == 2) {
        box1.classList.add("hidden");
        box2.classList.remove("hidden");
        box3.classList.add("hidden");
        box4.classList.add("hidden");
        box5.classList.add("hidden");
        box6.classList.add("hidden");
    } else if (x == 3) {
        box1.classList.add("hidden");
        box2.classList.add("hidden");
        box3.classList.remove("hidden");
        box4.classList.add("hidden");
        box5.classList.add("hidden");
        box6.classList.add("hidden");
    } else if (x == 4) {
        box1.classList.add("hidden");
        box2.classList.add("hidden");
        box3.classList.add("hidden");
        box4.classList.remove("hidden");
        box5.classList.add("hidden");
        box6.classList.add("hidden");
    } else if (x == 5) {
        box1.classList.add("hidden");
        box2.classList.add("hidden");
        box3.classList.add("hidden");
        box4.classList.add("hidden");
        box5.classList.remove("hidden");
        box6.classList.add("hidden");
    } else if (x == 6) {
        box1.classList.add("hidden");
        box2.classList.add("hidden");
        box3.classList.add("hidden");
        box4.classList.add("hidden");
        box5.classList.add("hidden");
        box6.classList.remove("hidden");
    } else {
        alert("No condition matches for box toggle");
    }
}

function retourEntreprise() {

    let box1 = document.querySelector(".box1Entreprise");
    let box2 = document.querySelector(".box2Entreprise");
    let box3 = document.querySelector(".box3Entreprise");
    let box4 = document.querySelector(".box4Entreprise");
    let box5 = document.querySelector(".box5Entreprise");
    let box6 = document.querySelector(".box6Entreprise");

    if (!box1.classList.contains("hidden")) {
        box1.classList.add("hidden");
    } else if (!box2.classList.contains("hidden")) {
        box2.classList.add("hidden");
    } else if (!box3.classList.contains("hidden")) {
        box3.classList.add("hidden");
    } else if (!box4.classList.contains("hidden")) {
        box4.classList.add("hidden");
    } else if (!box5.classList.contains("hidden")) {
        box5.classList.add("hidden");
    } else if (!box6.classList.contains("hidden")) {
        box6.classList.add("hidden");
    } else {
        console.log("Pas de hidden à retirer");
    }
}
