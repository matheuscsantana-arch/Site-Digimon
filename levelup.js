//Pegando as informações dos botões

const botao_1_30 = document.querySelector(".btn_1-30");
const botao_30_47 = document.querySelector(".btn_30-47");
const botao_47_81 = document.querySelector(".btn_47-81");
const botao_81_mais = document.querySelector(".btn_81-mais");

//Pegando as informações das seções
const secao_1_30 = document.querySelector(".nv_1-30");
const secao_30_47 = document.querySelector(".nv_30-47");
const secao_47_81 = document.querySelector(".nv_47-81");
const secao_81_mais = document.querySelector(".nv_81-mais");

//Eventos dos botões
botao_1_30.addEventListener("click", () => {
    secao_30_47.classList.add("hidden");
    secao_47_81.classList.add("hidden");
    secao_81_mais.classList.add("hidden");
    secao_1_30.classList.remove("hidden");
});

botao_30_47.addEventListener("click", () => {
    secao_1_30.classList.add("hidden");
    secao_47_81.classList.add("hidden");
    secao_81_mais.classList.add("hidden");
    secao_30_47.classList.remove("hidden");
});

botao_47_81.addEventListener("click", () => {
    secao_1_30.classList.add("hidden");
    secao_30_47.classList.add("hidden");
    secao_81_mais.classList.add("hidden");
    secao_47_81.classList.remove("hidden");
});

botao_81_mais.addEventListener("click", () => {
    secao_1_30.classList.add("hidden");
    secao_30_47.classList.add("hidden");
    secao_47_81.classList.add("hidden");
    secao_81_mais.classList.remove("hidden");
});
