function botaoResponder() {
  var escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt("Qual é sua escolha? \n 1 - Vou vencer. \n 2 - Não acreditar que posso vencer.");
    if (escolha == 1) {
      window.location.href = "../html/vencedorGuitarrista.html";
    }

    else if (escolha == 2) {
      window.location.href = "../html/gameOverGuitarrista.html";
    }

    else {
      alert('Escolha errada');
    }
  }
}