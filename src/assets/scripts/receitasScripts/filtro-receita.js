function filterSelection(category) {
    // Pega todos os cards de receita
    var cards = document.getElementsByClassName("card");
  
    // Pega todos os botões que são os filtros
    var btns = document.getElementsByClassName("btn");
  
    // Remove a classe "active" de todos os botões
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.remove("active");
    }
  
    // Adiciona "active" para o botão de filtro clicado
    document.querySelector('.btn[onclick="filterSelection(\'' + category + '\')"]').classList.add("active");
  
    // Se a categoria for "all", remove a classe "hide" e adiciona a classe "show"
     // Caso contrário, para cada cartão, se não estiver na categoria selecionada, adiciona "hide" e remove "show"
     // Caso contrário, remove "hide" e adiciona "show"
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].classList.contains(category) || category === 'all') {
        cards[i].classList.add("show");
        cards[i].classList.remove("hide");
      } else {
        cards[i].classList.add("hide");
        cards[i].classList.remove("show");
      }
    }
  }
  