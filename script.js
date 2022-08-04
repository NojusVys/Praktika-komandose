const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const stepperWrapper = document.querySelector(".stepper-wrapper");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    stepperWrapper.classList.toggle("active");
})

document.querySelectorAll(".navLink").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    stepperWrapper.classList.remove("active");
}))