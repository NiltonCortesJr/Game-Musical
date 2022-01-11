function botaoResponder(){
  var escolha = "";
  while (escolha != 1 && escolha != 2) {
    escolha = prompt("Qual é sua escolha? \n 1 - Dedicar ainda mais. \n 2 - Deixar a vida me levar.");
    if (escolha == 1) {
      window.location.href = "../html/fase4Vocalista1.html";
    }
      
    else if (escolha == 2) {
      window.location.href = "../html/gameOverVocalista.html";
    }

    else {
      alert('Escolha errada');
    } 
  }
}