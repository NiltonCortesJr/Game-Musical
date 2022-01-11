function botaoResponder() {
  var escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt("Qual é sua escolha? \n 1 - Buscar mais conhecimento. \n 2 - Não estou confiante.");
    if (escolha == 1) {
      window.location.href = "../html/fase4Baterista1.html";
    }

    else if (escolha == 2) {
      window.location.href = "../html/gameOverBaterista.html";
    }

    else {
      alert('Escolha errada');
    }
  }
}