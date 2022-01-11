function botaoResponder() {
  var escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt("Qual é sua escolha? \n 1 - Treinar mais acordes. \n 2 - Desanimei.");
    if (escolha == 1) {
      window.location.href = "../html/fase2Guitarrista1.html";
    }

    else if (escolha == 2) {
      window.location.href = "../html/gameOverGuitarrista.html";
    }

    else {
      alert('Escolha errada');
    }
  }
}