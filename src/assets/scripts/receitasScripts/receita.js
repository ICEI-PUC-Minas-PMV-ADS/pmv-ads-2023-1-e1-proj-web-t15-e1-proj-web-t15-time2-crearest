function salvarReceitaLocalStorage() {
  var url = window.location.href;
  var nome = document.getElementById("nomeReceita").innerHTML;
  var imagem = document.getElementById("imgReceita").src;

  var receita = {
    url: url,
    nome: nome,
    imagem: imagem,
  };
  var receitas = JSON.parse(localStorage.getItem("receitas"));
  if (receitas == null) {
    receitas = [];
  }
  receitas.push(receita);
  localStorage.setItem("receitas", JSON.stringify(receitas));
}

function obterReceitasLocalStorage() {
  var receitas = JSON.parse(localStorage.getItem("receitas"));
  if (receitas == null) {
    receitas = [];
  }
  return receitas;
}

function getItemLocalStorage() {
  let array = obterReceitasLocalStorage();

  const divReceitas = document.getElementById("receitaDisplay");
  array.forEach((item) => {
    const itemHtml = `
    <a href="${item.url}">
        <div class="d-flex justify-content-between card" style="width: 15rem; margin-bottom: 15px;">      
          <div>
            <img src="${item.imagem}">
          </div> 
          <div>
            <h4>${item.nome}</h4> 
          </div>
        </div>
    </a>`;
    divReceitas.innerHTML += itemHtml;
  });
}
