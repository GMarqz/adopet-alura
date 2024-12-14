var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const URL_BASE = "http://localhost:3000";
export const catAPI = {
    buscarCatImagens() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch("https://api.thecatapi.com/v1/images/search");
                return yield response.json();
            }
            catch (err) {
                throw err;
            }
        });
    }
};
export const dogAPI = {
    buscarDogImagens() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch("https://api.thedogapi.com/v1/images/search");
                return yield response.json();
            }
            catch (err) {
                throw err;
            }
        });
    }
};
export const petApi = {
    buscarPets() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${URL_BASE}/pets`);
                return yield response.json();
            }
            catch (err) {
                throw err;
            }
        });
    },
    adicionaPet(pet) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${URL_BASE}/pets`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(pet)
                });
                return yield response.json();
            }
            catch (err) {
                console.log("Erro com POST");
                throw err;
            }
        });
    },
    buscarPetPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${URL_BASE}/pets/${id}`);
                return yield response.json();
            }
            catch (err) {
                throw err;
            }
        });
    },
    editarPet(pet) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${URL_BASE}/pets/${pet.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(pet)
                });
                return yield response.json();
            }
            catch (err) {
                console.log("Erro com PUT");
                throw err;
            }
        });
    },
    deletarPet(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${URL_BASE}/pets/${id}`, {
                    method: "Delete"
                });
            }
            catch (err) {
                console.log("Erro ao deletar pet.");
                throw err;
            }
        });
    }
};
