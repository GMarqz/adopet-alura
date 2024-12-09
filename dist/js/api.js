var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    buscarPet() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch("http://localhost:3000/pets");
                return yield response.json();
            }
            catch (err) {
                throw err;
            }
        });
    }
};
