function botaoResponder(){
    var escolha = "";
    while (escolha != 1 && escolha != 2) {
      escolha = prompt("Qual é sua escolha? \n 1 - Treinar várias musicas. \n 2 - Não treinar.");
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