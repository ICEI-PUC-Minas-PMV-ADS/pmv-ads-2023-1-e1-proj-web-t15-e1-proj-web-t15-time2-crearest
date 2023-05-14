# Programação de Funcionalidades

Nessa sessão, serão apresentadas as telas que foram desevolvidas conforme as funcionalidades do sistema, priorizadas na Sprint 3. Assim também, serão apresentados os requisitos funcionais atendidos e a estrutura dos dados.

# Tela - Receita - Arroz couve-flor com iscas de frango

## Requisitos Atendidos
<ul>
  <li>RF-001</li>
  <li>RF-002</li>
  <li>RF-003</li>
  <li>RF-004</li>
  <li>RF-005</li>
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

## Requisitos Atendidos
<ul>
  <li>RF-005</li>
  <li>RF-006</li>
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
  
 

   
   
   
   
    
    
 

