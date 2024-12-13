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
        try{
            const pets: Pets[] = await petApi.buscarPet();
            for(const pet of pets) {
                const imageUrl = await geraImagem(pet.especie);
                ui.criaComponente(pet, imageUrl);
            }
        } catch(err) {
            throw err;
        }
    },

    criaComponente(pet: Pets, image: any): HTMLElement {
        const $petCards = document.getElementById("pet-cards");

        const $cardDiv = document.createElement("div") as HTMLDivElement;
        $cardDiv.className = "card";
        $cardDiv.setAttribute("style", "width: 18rem;");

        const $cardTopImg = document.createElement("img") as HTMLImageElement;
        $cardTopImg.src = image;
        $cardTopImg.alt = `Foto do ${pet.nome}`;
        $cardTopImg.className = "card-img-top";
        $cardTopImg.setAttribute("style", "max-width: 100%");
        $cardTopImg.setAttribute("style", "max-height: 10rem;")

        const $cardBody = document.createElement("div") as HTMLDivElement;
        $cardBody.className = "card-body bg-primary";

        const $cardTitle = document.createElement("h5") as HTMLHeadingElement;
        $cardTitle.className = "card-title bs-success-text-emphasis";
        $cardTitle.textContent = pet.nome;

        const $cardText = document.createElement("p") as HTMLParagraphElement;
        $cardText.className = "card-text";
        $cardText.textContent = pet.raca;

        $cardBody.appendChild($cardTitle);
        $cardBody.appendChild($cardText);
        $cardDiv.appendChild($cardTopImg);
        $cardDiv.appendChild($cardBody);
        $petCards.appendChild($cardDiv);

        return $petCards;
    }
}

export default ui;