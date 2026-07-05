//Pegando as informações dos botões

const botao_yokohama = document.querySelector(".btn-yokohama");
const botao_file_island = document.querySelector(".btn-file-island");
const botao_desert = document.querySelector(".btn-desert");

//Pegando as informações das seções
const secao_yokohama = document.querySelector(".yokohama");
const secao_file_island = document.querySelector(".file-island");
const secao_desert = document.querySelector(".desert");

//Eventos dos botões
botao_yokohama.addEventListener("click", () => {
    secao_file_island.classList.add("hidden");
    secao_desert.classList.add("hidden");
    secao_yokohama.classList.remove("hidden");
});

botao_file_island.addEventListener("click", () => {
    secao_yokohama.classList.add("hidden");
    secao_desert.classList.add("hidden");
    secao_file_island.classList.remove("hidden");
});

botao_desert.addEventListener("click", () => {
    secao_yokohama.classList.add("hidden");
    secao_file_island.classList.add("hidden");
    secao_desert.classList.remove("hidden");
});