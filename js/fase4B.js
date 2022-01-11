function botaoResponder() {
  var escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt("Qual é sua escolha? \n 1 - Arrasar. \n 2 - Meus concorrentes são melhores do que eu.");
    if (escolha == 1) {
      window.location.href = "../html/vencedorBaterista.html";
    }

    else if (escolha == 2) {
      window.location.href = "../html/gameOverBaterista.html";
    }

    else {
      alert('Escolha errada');
    }
  }
}