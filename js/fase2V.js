function botaoResponder() {
  var escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt("Qual é sua escolha? \n 1 - Dedicar mais tempo. \n 2 - Contar com a sorte.");
    if (escolha == 1) {
      window.location.href = "../html/fase3Vocalista1.html";
    }

    else if (escolha == 2) {
      window.location.href = "../html/gameOverVocalista.html";
    }

    else {
      alert('Escolha errada');
    }
  }
}