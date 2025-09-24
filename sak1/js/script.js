const slider = document.getElementById("synSlider");
const overlay = document.getElementById("overlay-img");

// Setter slideren på 0 hver gang siden oppdateres
slider.value = 0;

slider.addEventListener("input", function () {
    const opacityValue = this.value / 100;
    overlay.style.opacity = opacityValue;
});