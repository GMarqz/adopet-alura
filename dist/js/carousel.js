var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default function carousel(dados) {
    return __awaiter(this, void 0, void 0, function* () {
        const $divCarousel = document.getElementById("carouselExample");
        dados.forEach(pet => {
            $divCarousel.innerHTML += `
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="${pet.url}" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="${pet.url}" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="${pet.url}" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        `;
        });
    });
}
