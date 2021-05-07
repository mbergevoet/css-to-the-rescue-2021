console.log("Gekoppelt");
const wcagToggle = document.querySelector("#wcagToggle");
const stylesToggle = document.querySelector("#stylesToggle");

const kodakText = document.querySelector("main > div:nth-child(2) > section:nth-child(1) h2:nth-child(1)")
const polaroidGradient = document.querySelector("main > div:nth-child(2) > section:nth-child(2) div:nth-child(4)")
const jvcText = document.querySelector("main > div:nth-child(2) > section:nth-child(3) h2:nth-child(1)");
const jvcRed = document.querySelector("main > div:nth-child(2) > section:nth-child(3) div:nth-child(4)");
const phillipsGradient = document.querySelector("main > div:nth-child(2) > section:nth-child(4) section:nth-child(3)");
const phillipsTextOne = document.querySelector("main > div:nth-child(2) > section:nth-child(4) section > p:nth-child(3)");
const phillipsTextTwo = document.querySelector("main > div:nth-child(2) > section:nth-child(4) section > p:nth-child(4)");
const basfBackground = document.querySelector("main > div:nth-child(2) > section:nth-child(5)");
const fujiGradient = document.querySelector("main > div:nth-child(2) > section:nth-child(6) div:nth-child(3)");

const allElements = document.querySelector("html");

wcagToggle.addEventListener("click", function () {
    kodakText.classList.toggle("wcagApproved");
    polaroidGradient.classList.toggle("wcagApproved");
    jvcText.classList.toggle("wcagApproved");
    jvcRed.classList.toggle("wcagApproved");
    phillipsGradient.classList.toggle("wcagApproved");
    phillipsTextOne.classList.toggle("wcagApproved");
    phillipsTextTwo.classList.toggle("wcagApproved");
    basfBackground.classList.toggle("wcagApproved");
    fujiGradient.classList.toggle("wcagApproved");
})

// source: https://flaviocopes.com/how-to-remove-all-css/
stylesToggle.addEventListener("click", function () {
    document.querySelectorAll('style,link[rel="stylesheet"]').forEach(item => item.remove())
})

