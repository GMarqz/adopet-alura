import ui from "./ui.js"


document.addEventListener("DOMContentLoaded", () => {
    ui.renderizaPets();
});

const $caesBtn = document.getElementById("caes-btn");
const $gatosBtn = document.getElementById("gatos-btn");

$caesBtn.addEventListener(("click"), () => {
    console.log("Cães");
});

$gatosBtn.addEventListener(("click"), () => {
    console.log("Gatos");
})