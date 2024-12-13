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
    async buscarPet(): Promise<Pets[]> {
        try {
            const response: Response = await fetch("http://localhost:3000/pets");
            return await response.json();
        } catch(err) {
            throw err;
        }
    },

    async adicionaPet(pet: Pets): Promise<Pets[]> {
        try {
            const response: Response = await fetch('http://localhost:3000/pets', {
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
    }
}
