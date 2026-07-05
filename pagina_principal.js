//Pegando as informações dos botões

const botao_sugestao = document.querySelector(".btn-sugestao");

//Pegando o formulario e a mensagem ao enviar o formulário
const formulario = document.querySelector(".formulario");
const mensagem_submit = document.querySelector(".mensagem-submit");

//Eventos dos botões
botao_sugestao.addEventListener("click", () => {
    formulario.classList.toggle("hidden");

    if (formulario.classList.contains("hidden")) {
        botao_sugestao.textContent = "Envie sua sugestão";
    } else {
        botao_sugestao.textContent = "Cancelar envio";
    }
});

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    mensagem_submit.innerHTML = "<p> Sugestão enviada com sucesso! </p>";

    formulario.reset();

    setTimeout(() => {
        mensagem_submit.innerHTML = "";
    }, 5000);
});