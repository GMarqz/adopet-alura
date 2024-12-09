import { catAPI, dogAPI, DogsAndCatssApi, petApi, Pets } from "./api.js";

async function geraImagem(especieDoPet: string) {
    if(especieDoPet === "felina") {
        const gato: DogsAndCatssApi = await catAPI.buscarCatImagens();
        return gato[0].url;
    } else if(especieDoPet === "canina") {
        const cao: DogsAndCatssApi = await dogAPI.buscarDogImagens();
        return cao[0].url;
    }
}

const ui = {
    async renderizaPets() {
        const $petCards = document.getElementById("pet-cards") as HTMLElement;
        try{
            const pets: Pets[] = await petApi.buscarPet();
            for(const pet of pets) {
                const imageUrl = await geraImagem(pet.especie);
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
        } catch(err) {
            throw err;
        }
    }
}

export default ui;