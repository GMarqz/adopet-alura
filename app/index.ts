import  {petApi, Pets} from "./api.js";
import ui from "./ui.js"


document.addEventListener("DOMContentLoaded", () => {
    ui.renderizaPets();

    const $penIconBtn = document.getElementById("pencil-icon");
    // $penIconBtn.addEventListener("click", )

    const $formControl = document.getElementById("form") as HTMLFormElement;
    $formControl.addEventListener("submit", manipulaFormulario);

    const $cancelaBtn = document.getElementById("cancela-btn") as HTMLButtonElement;
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


async function manipulaFormulario(event: Event) {
    event.preventDefault();
    // const $addPetBtn = document.getElementById("adiciona-pet-btn") as HTMLButtonElement;

    const $petId = (document.getElementById("pet-id") as HTMLInputElement).value;
    const $petName = (document.getElementById("petName") as HTMLInputElement).value;
    const $petRace = (document.getElementById("petRace") as HTMLInputElement).value;
    const $petEspecie = (document.getElementById("form-select") as HTMLSelectElement).value;

    try {
        if($petId) {
            await petApi.editarPet({ id: $petId, nome: $petName, raca: $petRace, especie: $petEspecie });
        }
        else {
            await petApi.adicionaPet({especie: $petEspecie, nome: $petName, raca: $petRace});
        }
    } catch {
        alert("Deu erro")
    }
}