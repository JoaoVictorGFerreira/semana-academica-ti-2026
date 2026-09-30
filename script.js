// FAQ

const perguntas = document.querySelectorAll(".faq-question");

perguntas.forEach(function(pergunta) {

    pergunta.addEventListener("click", function() {

        const item = pergunta.parentElement;

        item.classList.toggle("active");

        const simbolo = pergunta.querySelector("span");

        if (item.classList.contains("active")) {
            simbolo.textContent = "-";
        } else {
            simbolo.textContent = "+";
        }

    });

});


// BOTÃO DE INSCRIÇÃO

const botaoInscricao = document.getElementById("btnInscricao");

botaoInscricao.addEventListener("click", function() {

    alert(
        "Inscrições da Semana Acadêmica de TI serão abertas em breve!"
    );

});