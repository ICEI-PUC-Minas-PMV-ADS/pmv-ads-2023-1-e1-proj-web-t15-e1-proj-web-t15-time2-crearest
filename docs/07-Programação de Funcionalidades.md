# Programação de Funcionalidades

Nessa sessão, serão apresentadas as telas que foram desevolvidas conforme as funcionalidades do sistema, priorizadas na Sprint 3. Assim também, serão apresentados os requisitos funcionais atendidos e a estrutura dos dados.

# Tela - Home 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CreatRest</title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <header>
        <div class="logo">
          <img src="img/Imagem_do_WhatsApp_de_2023-05-02_à_s__20.55.28-removebg-preview.png" alt="Descrição da logo">
          <h1>CreatRest</h1>
        </div>
        <div class="search">
          <input type="text" placeholder="Buscar...">
          <button type="submit">Buscar</button>
        </div>
        <div class="favoritos">
          <button type="favoritos">Favoritos ♥</button>
          <button type="coracao">♥</button>
          <div class="categoria">
          <button type="categoria">Categoria</button>
          </div>
      </header>
        <div class="Diversas">Receitas Diversas </div>
        <footer>
            Informações do site


        </footer>
</body>
</html>



# Tela - Receita - Arroz couve-flor com iscas de frango

## Requisitos Atendidos
<ul>
  <li>RF-001 - Láisa Liane</li>
  <li>RF-002 - Láisa Liane</li>
  <li>RF-003 - Láisa Liane</li>
  <li>RF-004 - Láisa Liane</li>
  <li>RF-005 - Láisa Liane</li>
</ul>

## Estrutura dos dados
Header {


    span a href="index.html"  img
    src="../img/logo.png"
    alt="logo do site" / CreatRest
    input type="text" placeholder="Buscar..." button type="submit" Buscar
    button type="favoritos" Favoritos ♥ 
    button type="categoria" Categoria
    a href="loginPage.html" Login
}

 {
     Favoritos
     
     
            Categoria de Receitas 
   
    section 
    h2 Gastrite Aguda
    h3 Arroz de couve-flor com Iscas de frango
    img src="../img/receita-arrozcomfrango.jpeg"
    alt="prato com arroz de couve flor e isca de frango"
    h4 Ingredientes
    li 1 cabeça de couve-flor crua
    li ½ cebola 
    li 1 dente de alho 
    li 2 colheres de sopa de azeite de oliva extravirgem 
    li ½ colher de chá de sal 
    li Salsinha a gosto 
    li 100 g de frango cortado em tiras
   
    p Modo de Preparo 
    p Coloque a couve-flor lavada e crua em um processador ou liquidificador e bata até que
      fique em pedaços
      pequenos. Em uma panela, coloque 1 colher de azeite extravirgem, adicione cebola, alho e refogue.
      Junte a couve-flor e tempere com sal. Misture muito bem, adicione a água, tampe a panela e deixe
      cozinhar em fogo baixo por 4 minutos. Finalize com salsinha picada e prontinho!
    /section
    footer 
        &copy; CreatRest 2023.
    /footer

}

# Tela - Comentários

## Requisitos Atendidos e responsáveis
<ul>
  <li>RF-005 - Láisa Liane</li>
  <li>RF-006 - Láisa Liane</li>
</ul>

## Estrutura dos Dados

Comentários
 
    label   Faça um Comentário:
 
    textarea id="story" name="story" rows="5" cols="33">
    Conte-nos sua experiência
    button type="submit">Enviar
    button type="reset">Limpar
   }
   
   # Tela Receitas Favoritas
   
   ## Estrutura dos Dados
   
   Cabeçalho
   
    <header class=" cabecalho">
        <div class="logo"> 
          <span>
            <a href="index1.html">
             <img src = "./assets/logo.png" alt="CreatRest" >
             </a>
          </span>
             <h1 class="nome__logo">CreatRest</h1>
        </div>
        <div class=" busca">
            <input type = "text" placeholder="Buscar...">
            <button type="submit">Buscar</button>
        </div>
    </header>
    
  Conteudo Receitas Favoritas
  
    <main class ="conteudo">
        <div id="carouselExampleCaptions" class="carousel slide mb-3" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="./assets/salada-colorida-de-legumes-2.jpg" class="d-block w-100" height="600px" alt="Salada colorida de legumes">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Saladas</h5>
                  <p>Salada Colorida de legumes</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="./assets/salada-tropical-com-rucula.jpg" class="d-block w-100" height ="600px" alt="Salada tropical com rúcula">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Saladas</h5>
                  <p>Salada tropical com rúcula</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="./assets/frango-ao-iogurte.jpg" class="d-block w-100" height="600px" alt="Frango ao iogurte">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Carnes</h5>
                  <p>Frango ao iogurte</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </button>
        </div>
        <section class="conteudo__receita"> <h1 class="titulo__favoritos"> Favoritos</h1>
            <p class="nome__receita"><strong>1-Frango ao iogurte</strong></p>
            <img class = "imagem__receita" src=".//assets/frango-ao-iogurte.jpg" alt=" Imagem frango ao iogurte">
            <p class ="lista__ingredientes">Ingredientes</p>
            <ul class="lista__ingredientes">
                <li>500 g de peito de frango, sem pele e sem osso, cortado em iscas</li>
                <li>1 sachê de Caldo de galinha</li>
                <li>meia colher (sopa) de suco de limão</li>
                <li>2 colheres (sopa) de margarina sem sal</li>
                <li>1 cebola pequena picada</li>
                <li>3 tomates grandes, sem sementes, picados</li>
                <li>meia xícara (chá) de salsa picada</li>
                <li>1 copo de iogurte natural (170 g)</li>
                <li>meio copo de requeijão cremoso</li>
                <li>meia xícara (chá) de queijo parmesão ralado</li>
            </ul>
        </section> 
    </main>
   
   
   # Tela Salvar receitas preferidas
   
   ## Requisitos Atendidos
   <ul>
  <li>RF-007</li>
  </ul>
  
  ## Estrutura dos Dados
  
  Corpo da página
     
     <body>
     <main class="Conteudo__pagina__salvar">
      <img  class="imagem__salvar" src="./assets/coracao favoritos.png" alt="like preferidas">
      <h1 class="titulo__salvar__receitas">Salvar receitas preferidas</h1>
       <div class="botoes__salvar__receitas">
        <a class="configuracao__botao__salvar" href="">Cancelar</a>
        <a class="configuracao__botao__salvar1" href="">OK</a>
       </div>
     </main>
    
    </body>
   }
    
 
 
 ## Resultados de Pesquisas
   
    <body>
     <header>
    <div class="logo">
      <img src="img/logo.png" alt="Descrição da logo">
      <h1>CreatRest</h1>
    </div>
    <div class="search">
      <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Buscar Receitas">
    </div>
    <div class="favoritos">
      <button type="favoritos">Favoritos ♥</button>
      <div class="categoria">
        <button type="categoria">Categoria</button>
      </div>
    </header>
    <hr>
    <main>
    <ul id="myUL">
      <li><a href="#" onclick="myfuncao()">Lasanha de Brocolis</li>
        <iframe src="lasanha.html" name="ppp" title="Informações" width="100%" height="300px" id="myDIV"></iframe>
      <li><a href="#">Frango Xadres</a></li>
      <li><a href="#">Bolo de Chocolate Vegano</a></li>
      <li><a href="#">Tilapia Empanada</a></li>
      <li><a href="#">Salada Royal</a></li>
      <li><a href="#">Brigadeiro 0 Lactose</a></li>
      <li><a href="#">Cookie Vegano</a></li>
      <li><a href="#">Pão integral Caseiro</a></li>
      <li><a href="#">Pão de queijo Vegano</a></li>
      <li><a href="#">Batata Frita Sequinha</a></li>
      <li><a href="#">Suco de Couve</a></li>
      <li><a href="#">Nuggets de Milho</a></li>
      <li><a href="#">Lasanha à Bolonhesa</a></li>
    </ul>
    </main>
    <script>
    function myFunction() {
      // Declaração de Variaveis
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById('myInput');
      filter = input.value.toUpperCase();
      ul = document.getElementById("myUL");
      li = ul.getElementsByTagName('li');

      
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }
    function myfuncao() {
     var x = document.getElementById("myDIV");
     if (x.style.display === "none") {
    x.style.display = "block";
     } else {
    x.style.display = "none";
    }
    }
    </script>
     <footer>
    Informações do site


    </footer>



    </body>

    </html>
 

   # Tela de Categorias de Receita 
      
      
     <div class="col-sm-8 checkbox-box">
            <label> <input type="checkbox" value="massas" id="massas" />Massas</label>
            <br />
            <label> <input type="checkbox" value="bolos-tortas" id="bolos-tortas" />Bolos e Tortas</label>
            <br />
            <label> <input type="checkbox" value="sopas" id="sopas" />Sopas</label>
            <br />
            <label> <input type="checkbox" value="doces-sobremesas" id="doces-sobremesas" />Doces e Sobremesas</label>
            <br />
            <label> <input type="checkbox" value="lanches" id="lanches" />Lanches</label>
            <br />
            <label> <input type="checkbox" value="carnes" id="carnes" />Carnes</label>
            <br />
            <label> <input type="checkbox" value="veganos" id="veganos" />Veganos</label>
            <br />
            <label> <input type="checkbox" value="celiacos" id="celiacos" />Celíacos</label>
            <br />
            <label> <input type="checkbox" value="intolerancia" id="intolerancia" />Intolerância à lactose</label>              
          </div>
        </form>
      </div>

      <div class="animals">
        <div class="receitas" data-id="aloe" data-category="massas">Macarrão</div>
        <div class="receitas" data-category="veganos">Bolo de Chocolate Vegano</div>
        <div class="receitas" data-category="sopas">Sopa de Feijão</div>
        <div class="receitas" data-category="celiacos">Bolinho de Arroz</div>
        <div class="receitas" data-category="intolerancia">Mousse de Maracujá</div>
        <div class="receitas" data-category="carnes">Carne de Jaca</div>
        <div class="receitas" data-category="lanches">Empadinha</div>
        <div class="receitas" data-category="massas">Lasanha</div>
        <div class="receitas" data-category="massas">Pão de Queijo</div>
        <div class="receitas" data-category="doces-sobremesas">Bombom na Travessa</div>
        <div class="receitas" data-category="bolos-tortas">Escondinho</div>
        <div class="receitas" data-category="carnes">Carne Assada</div>
        <div class="receitas" data-category="doces-sobremesas">Pudim</div>
        <div class="receitas" data-category="doces-sobremesas">Pavê de Morango</div>
        <div class="receitas" data-category="intolerancia">Brigadeiro</div>
        <div class="receitas" data-category="massas">Pães</div>
        <div class="receitas" data-category="massas">Pizzas</div>
      </div>
   
   
   
    
    
 

