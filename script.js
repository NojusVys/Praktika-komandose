const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const stepperWrapper1 = document.querySelector(".stepper-wrapper1");
const stepperWrapper2 = document.querySelector(".stepper-wrapper2");
const stepperWrapper3 = document.querySelector(".stepper-wrapper3");
let x = 1;

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    if(x == 1)
    stepperWrapper1.classList.toggle("active");
    if(x == 2)
    stepperWrapper2.classList.toggle("active");
    if(x == 3)
    stepperWrapper3.classList.toggle("active");
})

document.querySelectorAll(".navLink").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    if(x == 1)
    stepperWrapper1.classList.remove("active");
    if(x == 2)
    stepperWrapper2.classList.remove("active");
    if(x == 3)
    stepperWrapper3.classList.remove("active");
}))

document.getElementById("next").onclick = function(x) {myfunction(x)};

function myfunction(x) {
        if(x == 1){
            x = 2;
            stepperWrapper2.classList.remove("active");
            stepperWrapper1.classList.toggle("active");
        }
        if(x == 2){
            x = 3;
            stepperWrapper2.classList.toggle("active");
            stepperWrapper3.classList.remove("active");
        }
        console.log(x);
}