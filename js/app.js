let quantidadeAluguel = 1;

function alterarStatus(id) {
   let game = document.getElementById(`game-${id}`);
   let imagem = game.querySelector(".dashboard__item__img");
   let botao = game.querySelector(".dashboard__item__button");

   mudarStatus("dashboard__item__button--return", "dashboard__item__img--rented", imagem, botao);
}

function mudarStatus(estado1, estado2, imagem, botao) {
    if(botao.classList.contains(estado1) || imagem.classList.contains(estado2)) {
        imagem.classList.remove(estado2);
        botao.classList.remove(estado1);
        botao.textContent = "Alugar";
       } else {
        imagem.classList.add(estado2);
        botao.classList.add(estado1);
        botao.textContent = "Devolver";
        quantidadeAluguel++
        contagemAlugueis();
       }
}

function contagemAlugueis() {
    console.log("Quantidade de Alugueis - " + quantidadeAluguel);
}