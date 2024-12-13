var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { petApi } from "./api.js";
import ui from "./ui.js";
document.addEventListener("DOMContentLoaded", () => {
    ui.renderizaPets();
    const $formControl = document.getElementById("form");
    $formControl.addEventListener("submit", manipulaFormulario);
    const $cancelaBtn = document.getElementById("cancela-btn");
    $cancelaBtn.addEventListener("click", () => {
        $formControl.reset();
    });
});
const $caesBtn = document.getElementById("caes-btn");
const $gatosBtn = document.getElementById("gatos-btn");
$caesBtn.addEventListener(("click"), () => {
    console.log("Cães");
});
$gatosBtn.addEventListener(("click"), () => {
    console.log("Gatos");
});
function manipulaFormulario(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        // const $addPetBtn = document.getElementById("adiciona-pet-btn") as HTMLButtonElement;
        const $petName = document.getElementById("petName").value;
        const $petRace = document.getElementById("petRace").value;
        const $petEspecie = document.getElementById("petEspecie").value;
        try {
            yield petApi.adicionaPet({ especie: $petEspecie, nome: $petName, raca: $petRace });
        }
        catch (_a) {
            alert("Deu erro");
        }
    });
}
