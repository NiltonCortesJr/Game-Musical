function botaoResponder() {
  var escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt("Qual é sua escolha? \n 1 - Buscar ajuda. \n 2 - Tenho vergonha de perguntar.");
    if (escolha == 1) {
      window.location.href = "../html/fase3Guitarrista1.html";
    }

    else if (escolha == 2) {
      window.location.href = "../html/gameOverGuitarrista.html";
    }

    else {
      alert('Escolha errada');
    }
  }
}