function Afficher(x){
    let icon = x;
    let infoContent1 = document.querySelector(".infoSpeContent1")
    let infoContent2 = document.querySelector(".infoSpeContent2")
    let iconinfo1 = document.querySelector(".infoSpecifiques1")
    let iconinfo2 = document.querySelector(".infoSpecifiques2")

    if(icon == 1){
        infoContent1.classList.toggle('hidden');
        infoContent2.classList.add('hidden');
        iconinfo1.classList.toggle('infoSpeToggle')
        iconinfo2.classList.remove('infoSpeToggle')
    } else if (icon == 2){
        infoContent2.classList.toggle('hidden');
        infoContent1.classList.add('hidden');
        iconinfo2.classList.toggle('infoSpeToggle')
        iconinfo1.classList.remove('infoSpeToggle')
    }
}



