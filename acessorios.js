//Pegando as informações dos botões

const botao_brinco = document.querySelector(".btn-brinco");
const botao_colar = document.querySelector(".btn-colar");
const botao_bracelete = document.querySelector(".btn-bracelete");
const botao_anel = document.querySelector(".btn-anel");

//Pegando as informações das seções
const secao_brinco = document.querySelector(".brinco");
const secao_colar = document.querySelector(".colar");
const secao_bracelete = document.querySelector(".bracelete");
const secao_anel = document.querySelector(".anel");

//Eventos dos botões
botao_brinco.addEventListener("click", () => {
    secao_colar.classList.add("hidden");
    secao_bracelete.classList.add("hidden");
    secao_anel.classList.add("hidden");
    secao_brinco.classList.remove("hidden");
});

botao_colar.addEventListener("click", () => {
    secao_brinco.classList.add("hidden");
    secao_bracelete.classList.add("hidden");
    secao_anel.classList.add("hidden");
    secao_colar.classList.remove("hidden");
});

botao_bracelete.addEventListener("click", () => {
    secao_brinco.classList.add("hidden");
    secao_colar.classList.add("hidden");
    secao_anel.classList.add("hidden");
    secao_bracelete.classList.remove("hidden");
});

botao_anel.addEventListener("click", () => {
    secao_brinco.classList.add("hidden");
    secao_colar.classList.add("hidden");
    secao_bracelete.classList.add("hidden");
    secao_anel.classList.remove("hidden");
});