function botaoResponder() {
  var escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt("Qual é sua escolha? \n 1 - Dar o meu melhor. \n 2 - Não acreditar que posso vencer.");
    if (escolha == 1) {
      window.location.href = "../html/vencedorVocalista.html";
    }

    else if (escolha == 2) {
      window.location.href = "../html/gameOverVocalista.html";
    }

    else {
      alert('Escolha errada');
    }
  }
}