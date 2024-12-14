var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { catAPI, dogAPI, petApi } from "./api.js";
function geraImagem(especieDoPet) {
    return __awaiter(this, void 0, void 0, function* () {
        if (especieDoPet === "felina") {
            const gato = yield catAPI.buscarCatImagens();
            return gato[0].url;
        }
        else if (especieDoPet === "canina") {
            const cao = yield dogAPI.buscarDogImagens();
            return cao[0].url;
        }
    });
}
const ui = {
    preencherFormulario(petId) {
        return __awaiter(this, void 0, void 0, function* () {
            const pet = yield petApi.buscarPetPorId(petId);
            document.getElementById("pet-id").value = pet.id;
            document.getElementById("petName").value = pet.nome;
            document.getElementById("petRace").value = pet.raca;
            document.getElementById("petEspecie").value = pet.especie;
        });
    },
    renderizaPets() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pets = yield petApi.buscarPets();
                for (const pet of pets) {
                    const imageUrl = yield geraImagem(pet.especie);
                    ui.criaComponente(pet, imageUrl);
                }
            }
            catch (err) {
                throw err;
            }
        });
    },
    criaComponente(pet, image) {
        const $petCards = document.getElementById("pet-cards");
        const $cardDiv = document.createElement("div");
        $cardDiv.className = "card";
        $cardDiv.setAttribute("style", "width: 18rem;");
        const $cardTopImg = document.createElement("img");
        $cardTopImg.src = image;
        $cardTopImg.alt = `Foto do ${pet.nome}`;
        $cardTopImg.className = "card-img-top";
        $cardTopImg.setAttribute("style", "max-width: 100%");
        $cardTopImg.setAttribute("style", "max-height: 10rem;");
        const $cardBody = document.createElement("div");
        $cardBody.className = "card-body bg-primary";
        const $cardTitle = document.createElement("h5");
        $cardTitle.className = "card-title bs-success-text-emphasis";
        $cardTitle.textContent = pet.nome;
        const $cardText = document.createElement("p");
        $cardText.className = "card-text";
        $cardText.textContent = pet.raca;
        const $penIcon = document.createElement("img");
        $penIcon.src = "../assets/images/pencil.svg";
        $penIcon.alt = "Edit";
        $penIcon.className = "pencil-icon";
        $penIcon.id = "pencil-icon";
        $penIcon.setAttribute("style", "cursor: pointer;");
        $penIcon.onclick = () => ui.preencherFormulario(pet.id);
        $cardBody.appendChild($cardTitle);
        $cardBody.appendChild($cardText);
        $cardBody.appendChild($penIcon);
        $cardDiv.appendChild($cardTopImg);
        $cardDiv.appendChild($cardBody);
        $petCards.appendChild($cardDiv);
        return $petCards;
    }
};
export default ui;
