function carte(x) {
    let carteContent1 = document.querySelector(".carteContent1");
    let carteContent2 = document.querySelector(".carteContent2");
    let carteContent3 = document.querySelector(".carteContent3");

    carteContent1.classList.add("hidden");
    carteContent2.classList.add("hidden");
    carteContent3.classList.add("hidden");

    if (x === 1) {
        carteContent1.classList.remove("hidden");
    } else if (x === 2) {
        carteContent2.classList.remove("hidden");
    } else if (x === 3) {
        carteContent3.classList.remove("hidden");
    }
}