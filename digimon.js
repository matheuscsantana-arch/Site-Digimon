//Pegando as informações dos botões

const botao_va = document.querySelector(".btn-va");
const botao_da = document.querySelector(".btn-da");
const botao_vi = document.querySelector(".btn-vi");
const botao_uk = document.querySelector(".btn-uk");

//Pegando as informações das seções
const secao_va = document.querySelector(".digimon-VA");
const secao_da = document.querySelector(".digimon-DA");
const secao_vi = document.querySelector(".digimon-VI");
const secao_uk = document.querySelector(".digimon-UK");

//Eventos dos botões
botao_va.addEventListener("click", () => {
    secao_da.classList.add("hidden");
    secao_vi.classList.add("hidden");
    secao_uk.classList.add("hidden");
    secao_va.classList.remove("hidden");
});

botao_da.addEventListener("click", () => {
    secao_va.classList.add("hidden");
    secao_vi.classList.add("hidden");
    secao_uk.classList.add("hidden");
    secao_da.classList.remove("hidden");
});

botao_vi.addEventListener("click", () => {
    secao_va.classList.add("hidden");
    secao_da.classList.add("hidden");
    secao_uk.classList.add("hidden");
    secao_vi.classList.remove("hidden");
});

botao_uk.addEventListener("click", () => {
    secao_va.classList.add("hidden");
    secao_da.classList.add("hidden");
    secao_vi.classList.add("hidden");
    secao_uk.classList.remove("hidden");
});