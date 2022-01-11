function botaoResponder() {
  var escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt("Qual é sua escolha? \n 1 - Buscar confiança. \n 2 - Ninguém acredita em mim.");
    if (escolha == 1) {
      window.location.href = "../html/fase4Guitarrista1.html";
    }

    else if (escolha == 2) {
      window.location.href = "../html/gameOverGuitarrista.html";
    }

    else {
      alert('Escolha errada');
    }
  }
}