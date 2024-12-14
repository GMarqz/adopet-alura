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

    async preencherFormulario(petId: string) {
        const pet = await petApi.buscarPetPorId(petId);
        (document.getElementById("pet-id") as HTMLInputElement).value = pet.id;
        (document.getElementById("petName") as HTMLInputElement).value = pet.nome;
        (document.getElementById("petRace") as HTMLInputElement).value = pet.raca;
        (document.getElementById("petEspecie") as HTMLInputElement).value = pet.especie;
    },

    async renderizaPets() {
        try{
            const pets: Pets[] = await petApi.buscarPets();
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

        const $penIcon = document.createElement("img") as HTMLImageElement;
        $penIcon.src = "../assets/images/pencil.svg";
        $penIcon.alt = "Edit";
        $penIcon.className = "pencil-icon";
        $penIcon.id = "pencil-icon";
        $penIcon.setAttribute("style", "cursor: pointer;");
        $penIcon.onclick = () => ui.preencherFormulario(pet.id);

        const $trashIcon = document.createElement("img") as HTMLImageElement;
        $trashIcon.src = "../assets/images/trash.svg";
        $trashIcon.alt = "Delete";
        $trashIcon.className = "trash-icon";
        $trashIcon.id = "trash-icon";
        $trashIcon.setAttribute("style", "cursor: pointer;");
        $trashIcon.onclick = async () => {
            try {
                await petApi.deletarPet(pet.id);
                ui.renderizaPets();
            } catch {
                alert("Erro ao excluir pensamento");
            }
        }

        $cardBody.appendChild($cardTitle);
        $cardBody.appendChild($cardText);
        $cardBody.appendChild($penIcon);
        $cardBody.appendChild($trashIcon);
        $cardDiv.appendChild($cardTopImg);
        $cardDiv.appendChild($cardBody);
        $petCards.appendChild($cardDiv);

        return $petCards;
    }
}

export default ui;