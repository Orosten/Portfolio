function button(){
    let button1 = document.querySelector(".button1")
        button1.classList.toggle('buttonactif');

    let button2 = document.querySelector(".button2")
        button2.classList.toggle('buttonactif');

    let formation = document.querySelector(".formation")
        formation.classList.toggle('hidden')

    let entreprise = document.querySelector(".entreprise")
        entreprise.classList.toggle('hidden')
}

