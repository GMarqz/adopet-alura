export interface DogsAndCatssApi {
    id: string,
    url: string,
}

export interface Pets {
    id?: string,
    especie: string,
    nome: string,
    raca: string
}

const URL_BASE = "http://localhost:3000";

export const catAPI = {
    async buscarCatImagens(): Promise<DogsAndCatssApi> {
        try {
            const response: Response = await fetch("https://api.thecatapi.com/v1/images/search")
            return await response.json();
        } catch(err) {
            throw err;
        }
    }
}

export const dogAPI = {
    async buscarDogImagens(): Promise<DogsAndCatssApi> {
        try {
            const response: Response = await fetch("https://api.thedogapi.com/v1/images/search");
            return await response.json();
        } catch(err) {
            throw err;
        }
    }
}

export const petApi = {
    async buscarPets(): Promise<Pets[]> {
        try {
            const response: Response = await fetch(`${URL_BASE}/pets`);
            return await response.json();
        } catch(err) {
            throw err;
        }
    },

    async adicionaPet(pet: Pets): Promise<Pets[]> {
        try {
            const response: Response = await fetch(`${URL_BASE}/pets`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pet)
            });
            return await response.json();
        }
        catch(err) {
            console.log("Erro com POST");
            throw err;
        }
    },
    async buscarPetPorId(id: string): Promise<Pets> {
        try {
            const response: Response = await fetch(`${URL_BASE}/pets/${id}`);
            return await response.json();
        } catch(err) {
            throw err;
        }
    },
    async editarPet(pet: Pets): Promise<Pets> {
        try {
            const response: Response = await fetch(`${URL_BASE}/pets/${pet.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pet)
            });
            return await response.json();
        }
        catch(err) {
            console.log("Erro com PUT");
            throw err;
        }
    },
    async deletarPet(id: string){
        try {
            const response: Response = await fetch(`${URL_BASE}/pets/${id}`, {
                method: "Delete"
            });
        }
        catch(err) {
            console.log("Erro ao deletar pet.");
            throw err;
        }
    }
}
