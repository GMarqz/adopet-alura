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
    renderizaPets() {
        return __awaiter(this, void 0, void 0, function* () {
            const $petCards = document.getElementById("pet-cards");
            try {
                const pets = yield petApi.buscarPet();
                for (const pet of pets) {
                    const imageUrl = yield geraImagem(pet.especie);
                    $petCards.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="${imageUrl}" class="card-img-top" alt="Foto do ${pet.nome}" style="max-width: 100%; max-height: 10rem;">
                    <div class="card-body bg-primary">
                        <h5 class="card-title bs-success-text-emphasis">${pet.nome}</h5>
                        <p class="card-text">${pet.raca}</p>
                    </div>
                </div>
                 `;
                }
            }
            catch (err) {
                throw err;
            }
        });
    }
};
export default ui;
