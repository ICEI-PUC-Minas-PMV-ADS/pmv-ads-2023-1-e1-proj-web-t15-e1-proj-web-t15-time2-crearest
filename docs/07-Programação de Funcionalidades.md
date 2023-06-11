# Programação de Funcionalidades

Nessa sessão, serão apresentadas as telas que foram desevolvidas conforme as funcionalidades do sistema, priorizadas na Sprint 3. Assim também, serão apresentados os requisitos funcionais atendidos e a estrutura dos dados.


<h1> Tela de Login e Registro </h1>
  <p> A tela de login e registro, apresenta um design confortavel ao usuário e tambem fornece a possibilidade de fazer o Cadastro ultilizando dados do Facebook, Twitter ou Google, como representado a baixo.  <p>
  
 ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t15-e1-proj-web-t15-time2-crearest/assets/128434710/cd440589-09a0-453c-8b06-506fdfdac989)
 ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t15-e1-proj-web-t15-time2-crearest/assets/128434710/653cc206-0174-4a97-95cd-d2a09ccdbf5e)





<h2><strong>Requisitos Atendidos</strong></h2>
<ul>
  <li>RF-002</li>
  <li>RF-003</li>
  <li>RNF-008</li>
  <li>RNF-007</li>
  <li>RNF-003</li>
</ul>
<hr>


 <h2><strong>Artefados da funcionalidade</strong></h2>
 <ul>
  <li>login.html</li>
  <li>register.html</li>
  <li>login.css</li>
  <li>register.css</li>
</ul>
<hr>

<h2><strong>Estrutura de dados</strong></h2>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/styles/user/login.css">
    <link rel="shortcut icon" href="/assets/img/logo.png" type="image/x-icon">
</head>

<body>
    <div class="container">
        <form action="pages/home/home.html">
          <div class="row">
            <h2 style="text-align:center">Faça seu Login</h2>
            <div class="vl">
              <span class="vl-innertext"></span>
            </div>
      
            <div class="col">
              <a href="#" class="fb btn">
                <i class="fa fa-facebook fa-fw"></i> Entrar com o Facebook
              </a>
              <a href="#" class="twitter btn">
                <i class="fa fa-twitter fa-fw"></i> Entrar com o Twitter
              </a>
              <a href="#" class="google btn">
                <i class="fa fa-google fa-fw"></i> Entrar com o Google+
              </a>
            </div>
      
            <div class="col">
              <div class="hide-md-lg">
                <p><i class="fa-sharp fa-light fa-grip-lines-vertical"></i><p>
              </div>
      
              <input type="text" name="username" placeholder="Login" required>
              <input type="password" name="password" placeholder="Senha" required>
              <input type="submit" value="Entrar">
            </div>
      
          </div>
        </form>
      </div>
      
      <div class="bottom-container">
        <div class="row">
          <div class="col">
            <a href="/user/register.html" style="color:rgb(255, 255, 255)" class="btn">Cadastre-se</a>
          </div>
          <div class="col">
            <a href="#" style="color:rgb(255, 255, 255)" class="btn">Esqueceu sua senha?</a>
          </div>
        </div>
      </div>

</body>

</html>

<hr>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="assets/styles/register.css">
  <link rel="shortcut icon" href="/assets/img/logo.png" type="image/x-icon">
</head>
<body>

<form action="/home/home.html" style="border:1px solid #ccc">
  <div class="container">
    <h1>Cadastre-se</h1>
    <p>Preencha o formulário para completar o Cadastro </p>
    <hr>

    <label for="email"><b>E-mail</b></label>
    <input type="text" placeholder="Coloque seu e-mail" name="email" required>

    <label for="psw"><b>Senha</b></label>
    <input type="password" placeholder="Coloque sua Senha" name="psw" required>

    <label for="psw-repeat"><b>Repita a Senha</b></label>
    <input type="password" placeholder="Repita a Senha" name="psw-repeat" required>
    
    <label>
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Salvar Senha
    </label>
    
    <p>Ao criar uma conta, você concorda com nossos <a href="#" style="color:dodgerblue">Termos & Privacidade</a>.</p>

    <div class="clearfix">

      <a href="/users/login.html"></a>
      <button type="button" class="cancelbtn">Cancelar</button>
     </a>
      <button type="submit" class="signupbtn">Entrar</button>
    </div>
  </div>
</form>

</body>
</html>

<hr>

<h2><strong>Instruções de acesso</strong></h2>
<p> 1. Abra um navegador de Internet e informe a seguinte URL: https://repl.it/Sf3l@#3ks</p> <br>
<p>2. A tela de login/registro é a primeira funcionalidade exibida pelo aplicativo</p>

<h1>Tela da HOME</h1>
  <p>A tela principal do nosso sistema apresenta notícias e informações sobre restrições alimentares. Na página contêm HTML, CSS e JavaScript dando todo a estilização e função necessária, para que o site fique interativo para com o usuário.</p>
  
  ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t15-e1-proj-web-t15-time2-crearest/assets/128434710/94b7aef1-bc20-4a53-b9ba-4d3c19131e85)

<h2><strong>Requisitos Atendidos</strong></h2>
<ul>
  <li>RF-001</li> João Vitor
  <li>RF-005</li> João Vitor
  <li>RNF-001</li> João Vitor
  <li>RNF-004</li> Bruno Santos
  <li>RNF-009</li> Bruno Santos
</ul>
<hr>


 <h2><strong>Artefados da funcionalidade</strong></h2>
 <ul>
  <li>home.html</li>
  <li>home.css</li>
</ul>
<hr>

<h2><strong>Estrutura de dados</strong></h2>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/styles/homeStyles/home.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="shortcut icon" href="/assets/img/logo.png" type="image/x-icon">
</head>


<body>
    <!-- Slideshow container -->
    <div class="slideshow-container">

        <!-- Full-width images with number and caption text -->
        <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <a href="frangoiorgute.html">
            <img src="/assets/img/frango-ao-iogurte.jpg" style="width:100%" height="500px"></a>
            <div class="text">Frango ao Iorgute</div>
        </div>

        <div class="mySlides fade">
            <div class="numbertext">2 / 3</div>
            <a href="saladalegumes.html">
            <img src="/assets/img/salada-colorida-de-legumes-2.jpg" style="width:100%" height="500px"></a>
            <div class="text">Salada Colorida de Legumes</div>
        </div>

        <div class="mySlides fade">
            <div class="numbertext">3 / 3</div>
            <img src="/assets/img/salada-tropical-com-rucula.jpg" style="width:100%" height="500px">
            <div class="text">Salada Tropital com Rucula</div>
        </div>

        <!-- Next and previous buttons -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br>

    <!-- The dots/circles -->
    <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
    </div>
    <!-- Informações da Home -->
    <main>
        <div class="p1">
            <h1 class="grande"> Restrições Alimentares</h1>
            <br><br>
            <p>A ingestão de determinados alimentos pode provocar uma série de
                sintomas indesejados ou até mesmo complicações mais graves em organismos que apresentam
                condições pré-existentes. Para evitar isso, muitas vezes adota-se restrições alimentares específicas.
            </p>
            <br><br>
            <h3> Entre os tipos de restrições alimentares mais comuns:</h3>
            <br><br>
            <button type="button" class="collapsible"><strong>Lactose</strong></button>
            <div class="content">
                <p>A intolerância a esse carboidrato do leite ocorre por insuficiência ou ausência da enzima lactase no
                    organismo,
                    sendo que, após ingestão, o açúcar permanece no intestino na forma não absorvível e é fermentado
                    pelas suas bactérias. Enquanto isso, a caseína, principal proteína dos laticínios, pode desencadear
                    resposta imune
                    num indivíduo com APLV (Alergia à Proteína do Leite de Vaca). Nesse sentido, os sintomas de ambas as
                    condições
                    abrangem azia, diarreia, dores e inchaço abdominal.</p>
            </div>
            <button type="button" class="collapsible"><strong>Glúten</strong> </button>
            <div class="content">
                <p>O glúten é uma combinação de proteínas, gliadina e glutenina, presente no trigo,
                    cevada, malte, centeio e derivados. A restrição a ele pode ser causada por intolerância,
                    sendo que o consumo provoca danos às paredes intestinais e prejudica a absorção de nutrientes, ou,
                    ainda, por uma
                    doença celíaca de origem genética.</p>
            </div>
            <button type="button" class="collapsible"><strong>Diabetes</strong></button>
            <div class="content">
                <p>O que é? Diabetes Mellitus (DM) é uma síndrome metabólica de origem múltipla,
                    decorrente da falta de insulina e/ou da incapacidade e/ou falta de insulina exercer adequadamente
                    seus efeitos,
                    caracterizando altas taxa de açúcar no sangue (hiperglicemia) de forma permanente.</p>
            </div>
            <button type="button" class="collapsible"><strong>Crustáceos</strong></button>
            <div class="content">
                <p>A alergia a frutos do mar (moluscos e crustáceos) pode provocar choques anafiláticos,
                    o que causa reações graves e coloca a vida do acometido em risco. Os moluscos são compostos
                    por mexilhões, polvos, lulas, ostras e lesmas do mar.
                    Já a classe dos crustáceos é composta por camarões, caranguejos, lagostas e lagostins.</p>
            </div>
            <button type="button" class="collapsible"><strong>Vegetarianismo</strong></button>
            <div class="content">
                <p>O vegetarianismo é uma prática alimentar que exclui o consumo de derivados animais como a carne
                    vermelha
                    e tem como principal fonte de alimentos os vegetais e os fungos.
                    O vegetarianismo emergiu como um movimento alimentar significativo nas culturas ocidentais. <br><br>
                    <h4>Qual é a diferença entre vegetarianismo e veganismo?</h4><br><br>
                    A principal diferença entre veganos e vegetarianos é que os veganos não consomem nada que tenha
                    origem animal, seja em sua alimentação ou outros produtos, como artigos para higiene, limpeza,
                    vestuário ou remédios.
                    Já o vegetariano não come carne, peixe e aves, mas consome outros produtos de origem animal.</p>
            </div>
            <button type="button" class="collapsible"><strong>Veganismo</strong></button>
            <div class="content">
                <p>Veganismo é a prática de abster-se do uso de produtos animais particularmente, mas não somente,
                    na alimentação — e também uma filosofia que condena a exploração animal.
                    Um adepto deste modo de viver e dessa filosofia é conhecido como vegano
                    ou vegana</p>
            </div>
            <br><br>
            <h3>Origem do termo e Doença</h3>
            <br><br>
            <p>As restrições alimentares caracterizam-se pela redução ou exclusão de determinados alimentos de uma
                dieta. Dessa maneira, praticam-se essas restrições quando a ingestão deles afeta o equilíbrio
                corporal, devido a condições pré-existentes.</p><br>
            <p>Os sintomas que levam às restrições são diversos em tipo e intensidade. Assim, suas causas
                incapacidade parcial ou total do sistema digestório em processar um composto, devido à falta de
                enzimas digestivas específicas para ele. Geralmente, os sintomas associados às intolerâncias são
                mais restritos ao trato gastrointestinal, enquanto aqueles das alergias se manifestam mais
                dispersamente no corpo.</p>
        </div>
        <script>
            function myFunction() {
                var x = document.getElementById("myTopnav");
                if (x.className === "topnav") {
                    x.className += " responsive";
                } else {
                    x.className = "topnav";
                }
            }


            let slideIndex = 1;
            showSlides(slideIndex);

            // Next/previous controls
            function plusSlides(n) {
                showSlides(slideIndex += n);
            }

            // Thumbnail image controls
            function currentSlide(n) {
                showSlides(slideIndex = n);
            }

            function showSlides(n) {
                let i;
                let slides = document.getElementsByClassName("mySlides");
                let dots = document.getElementsByClassName("dot");
                if (n > slides.length) { slideIndex = 1 }
                if (n < 1) { slideIndex = slides.length }
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[slideIndex - 1].style.display = "block";
                dots[slideIndex - 1].className += " active";
            }
            var coll = document.getElementsByClassName("collapsible");
            var i;

            for (i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    var content = this.nextElementSibling;
                    if (content.style.display === "block") {
                        content.style.display = "none";
                    } else {
                        content.style.display = "block";
                    }
                });
            }
            var modal = document.getElementById('id01');

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        </script>
</body>

</html>

<hr>

<h2><strong>Instruções de acesso</strong></h2>
<p> 1. Abra um navegador de Internet e informe a seguinte URL: https://repl.it/Sf3l@#3ks</p> <br>
<p>2. A tela da Home é a segunda funcionalidade exibida pelo aplicativo</p>

# Tela - Receita - Arroz couve-flor com iscas de frango
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t15-e1-proj-web-t15-time2-crearest/assets/125780065/e55bd519-c9bd-4d9f-8274-1ba2e0d74e87)

## Requisitos Atendidos
<ul>
  <li>RF-001 - Láisa Liane</li>
  <li>RF-002 - Láisa Liane</li>
  <li>RF-003 - Láisa Liane</li>
  <li>RF-004 - Láisa Liane</li>
  <li>RF-005 - Láisa Liane</li>
</ul>

## Artefatos de Funcionalidade Atendidos

<ul>
  <li> Home</li>
  <li> Categorias de Receitas</li>
  <li> Login</li>
  <li> Barra de pesquisa</li>
  <li> Sair</li>
  <li> Categoria: gastriste aguda</li>
  <li> receitas relacionadas</li>
 </ul>
 
## Estrutura dos dados


<title>Receita de Arroz com Frango</title>
</head>

<body>

    <header class="cabecalho">

        <a href="/pages/home/home.html">
            <img class="logo" src="../../../assets/img/Logo.png " alt="logo creatrest">
        </a>

        <nav class="menu-nav">
            <a href="/pages/home/home.html" class="menu-nav-child">Home</a>
            <a href="../receitas.html" class="menu-nav-child">Categorias de Receitas</a>
        </nav>
        <div class="pesquisar">
            <input id="txtBusca" placeholder="O que você procura?">
            <a href="../../users/login.html" class="menu-nav-child">Pesquisar</a>
        </div>

        <nav class="menu-nav">
            <a href="../../users/login.html" class="menu-nav-child">Login</a>
            <a href="/pages/home/home.html" class="menu-nav-child">Sair</a>
        </nav>
    </header>
    <div class="barra-categoria"> Categoria: <a href="#">Grastrite Aguda</a></div>
    <main class="main">

        <h3 class="nome-receita">Arroz de Couve-flor com Iscas de Frango</h3>
        <img class="img-receita" src="../../../assets/img/imgReceitas/receita-arrozcomfrango.jpeg"
            alt="prato de refeicao">
        <div class="informacoes-preparo">
            <div class="dados-receita">
                <div>
                    <img src="../../../assets/img/imgReceitas/cronometro.png"
                        alt="cronômetro representando o tempo de duração">
                </div>
                <div class="dados-receita__info">
                    Tempo de preparo:
                    <span>25 min</span>
                </div>
            </div>
            <div class="dados-receita">
                <div>
                    <img src="../../../assets/img/imgReceitas/portion.png"
                        alt="ícone representando quantidade de porções">
                </div>
                <div class="dados-receita__info">
                    Rendimento:
                    <span>25min</span>
                </div>
            </div>
            <div class="dados-receita">
                <div>
                    <img src="../../../assets/img/imgReceitas/difiuldade.png"
                        alt="ícone representando o nível de dificuldade">
                </div>
                <div class="dados-receita__info">
                    Dificuldade:
                    <span>25min</span>
                </div>
            </div>
        </div>
        <section>
            <h4 class="titulo-secao">Ingredientes</h4>

            <ul class="lista-ingredientes">
                <li class="list-group-item">
                    1 cabeça de Couve-flor crua
                </li>
                <li class="list-group-item">
                    ½ cebola
                </li>
                <li class="list-group-item">
                    1 dente de alho
                </li>
                <li class="list-group-item">
                    ½ colher de chá de sal
                </li>
                <li class="list-group-item">
                    2 colheres de sopa de azeite de oliva extravirgem
                </li>
                <li class="list-group-item">
                    Salsinha a gosto
                </li>
                <li class="list-group-item">
                    100 g de frango cortado em tiras
                </li>
            </ul>
        </section>
        <section>
            <h4 class="titulo-secao">Modo de Preparo</h4>
            <ol class="preparo__text">
                <li class="list-group-item">Coloque a couve-flor lavada e crua em um processador ou liquidificador e
                    bata até que
                    fique em pedaços.</li>
                <li class="list-group-item">Em uma panela, coloque 1 colher de azeite extravirgem, adicione cebola, alho
                    e refogue.</li>
                </li>
                <li class="list-group-item">Junte a couve-flor e tempere com sal. Misture muito bem, adicione a água,
                    tampe a panela e deixe cozinhar em fogo baixo por 4 minutos. </li>
                </li>
                <li class="list-group-item">Finalize com salsinha picada e prontinho!</li>
                </li>
            </ol>
        </section>
    </main>
    <aside class="receitas-relacionadas-container">
        <h4 class="">Receitas Relacionadas</h4>
        <div class="receitas-relacionadas">
            <div class="receitas-relacionadas__receita">
                <a href="">
                    <img src="../../../assets/img/frango-ao-iogurte.jpg"
                        alt="Imagem de receita relacionada: Frango ao Iogurt">
                    <span>Frango ao Iogurte</span>
                </a>
            </div>
            <div class="receitas-relacionadas__receita">
                <a href="">
                    <img src="../../../assets/img/frango-ao-iogurte.jpg"
                        alt="Imagem de receita relacionada: Frango ao Iogurt">
                    <span>Frango ao Iogurte</span>
                </a>
            </div>
            <div class="receitas-relacionadas__receita">
                <a href="">
                    <img src="../../../assets/img/frango-ao-iogurte.jpg"
                        alt="Imagem de receita relacionada: Frango ao Iogurt">
                    <span>Frango ao Iogurte</span>
                </a>
            </div>
            <div class="receitas-relacionadas__receita">
                <a href="">
                    <img src="../../../assets/img/frango-ao-iogurte.jpg"
                        alt="Imagem de receita relacionada: Frango ao Iogurt">
                    <span>Frango ao Iogurte</span>
                </a>
            </div>
        </div>
    </aside>
    <footer class="footer">
        Todos os direitos reservados à CrestRest.
    </footer>
</body>

</html>

# Tela - Receitas preferidas

## Requisitos atendidos
<ul>
  <li>RF-001</li>
  <li>RF-002</li>
  <li>RF-003</li>
  <li>RF-004</li>
  <li>RF-005</li>
</ul>

## Artefatos de funcionalidade
<ul>
  <li>receitas.html</li>
  <li>receitas.css</li>
</ul>

## Estrutura de dados

      <!DOCTYPE html>
       <html lang="pt-br">

      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="receitas.css">
          <link rel="shortcut icon" href="/estudo/logo.png" type="image/x-icon">
     <body>
    <header>
        <div class="topnav">
            <a class="" href="home.html">Menu</a>
            <a href=>Novidades</a>
            <a class="active" href="receitas.html">Receitas</a>
            <a class="register" href="userRegister.html">Registrar</a>
            <a class="log" href="login.html">Login</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i></a>
        </div>
    </header>
    <div class="buscar">
        <input type="text" onkeyup="Filtrar()" id="myInput" placeholder="O que você procura?">
    </div>
    </header>
    <main>
        <!-- Slideshow container -->
        <div class="slideshow-container">

            <!-- Full-width images with number and caption text -->
            <div class="mySlides fade">
                <div class="numbertext">1 / 3</div> <a href="doceDeMamao.html">
                <img src="/assets/img/doce-de-mamao-verde-receita.webp" style="width:100%">
                <div class="text">Doce de mamão verde</div></a>
            </div>

            <div class="mySlides fade">
                <div class="numbertext">2 / 3</div> <a href="boloDeAmeixa.html">
                <img src="/assets/img/bolo-de-ameixa.webp" style="width:100%">
                <div class="text">Bolo de ameixa</div></a>
            </div>

            <div class="mySlides fade">
                <div class="numbertext">3 / 3</div> <a href="lasanhaVeg.html">
                <img src="/assets/img/lasanha-vegetariana-2-.webp" style="width:100%">
                <div class="text">Lasanha vegetariana</div></a>
            </div>

            <!-- Next and previous buttons -->
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <br>

        <!-- The dots/circles -->
        <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
        </div>
    </main>
    <script>
        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }
        let slideIndex = 1;
        showSlides(slideIndex);

        // Next/previous controls
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        // Thumbnail image controls
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }

    </script>
    </body>
    </html>


# Categoria de Receitas

## Estrutura de dados, requisitos atendidos:
<ul>
  <li>RF-001 - Lorenzo </li>
  <li>RF-002 - Maria Júlia</li>
  <li>RF-004 - Maria Júlia </li>
  <li>RF-005 - Lorenzo </li>
</ul>

<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="../../assets/styles/receitas/receitas.css">
    <link rel="shortcut icon" href="favicon-16x16.png" type="image/x-icon">
    <title>CreatRest</title>
</head>

<body>
    <header>
        <div class="topnav">
            <a class="" href="#">Menu</a>
            <a href=>Novidades</a>
            <a href="receitas.html">Receitas</a>
            <a class="register" href="/users/register.html">Registrar</a>
            <a class="log" href="/users/login.html">Login</a>
        </div>
    </header>
    <div class="myBtnContainer">
        <h2>Categoria de Receitas</h2>
        <div class="btnspace">
            <button class="btn active" onclick="filterSelection('all')"> Todas</button>
            <button class="btn" onclick="filterSelection('celiacos')"> Celíacos</button>
            <button class="btn" onclick="filterSelection('lactose')"> Lactose</button>
            <button class="btn" onclick="filterSelection('vegano')"> Vegano</button>
            <button class="btn" onclick="filterSelection('doenca')"> Doença Renal</button>
            <button class="btn" onclick="filterSelection('diabetes')"> Diabetes</button>
            <button class="btn" onclick="filterSelection('dislipidemia')"> Dislipidemia</button>
            <button class="btn" onclick="filterSelection('gastrite')"> Gastrite Aguda</button>
        </div>
    </div>
    <div class="row">
        <div class="column celiacos">
            <div class="content">
                <a href="celiacos/bolo-mesclado-sem-gluten.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Bolo mesclado sem gluten.jpg" alt="Celíacos" style="width:100%">
                    <h4>Bolo Mesclado</h4>
                </a>
            </div>
        </div>
        <div class="column celiacos">
            <div class="content">
                <a href="celiacos/canelone-sem-gluten.html">
                    <img class="imgReceitas" class="imgReceitas" src="../../assets/img/imgReceitas/Canelone sem glúten.jpg" alt="Celíacos" style="width:100%">
                    <h4>Canelone</h4>
                </a>
            </div>
        </div>
        <div class="column celiacos">
            <div class="content">
                <a href="celiacos/nhoque-de-espinafre-sem-gluten.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Nhoque de espinafre sem glúten.jpg" alt="Celíacos" style="width:100%">
                    <h4>Nhoque de Espinafre</h4>
                </a>
            </div>
        </div>
        <div class="column celiacos">
            <div class="content">
                <a href="celiacos/pao-frances-sem-gluten.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/paofrances-sem gluten.png" alt="Celíacos" style="width:100%">
                    <h4>Pão Frances</h4>
                </a>
            </div>
        </div>
        <div class="column celiacos">
            <div class="content">
                <a href="celiacos/pave-de-ninho-com-morango-sem-gluten.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Pavê de ninho com morango sem glúten.jpg" alt="Celíacos" style="width:100%">
                    <h4>Pave de Ninho com Morango</h4>
                </a>
            </div>
        </div>
        <div class="column lactose">
            <div class="content">
                <a href="../receitas/lactose/bolo-de-banana-com-amendoim.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Bolo de banana com amendoim.jpg" alt="Lactose" style="width:100%">
                    <h4>Bolo de Banana com Amendoim</h4>
                </a>
            </div>
        </div>
        <div class="column lactose">
            <div class="content">
                <a href="../receitas/lactose/bolo-de-chocolate.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Bolo de chocolate.jpg" alt="Lactose" style="width:100%">
                    <h4>Bolo de Chocolate</h4>
                </a>
            </div>
        </div>
        <div class="column lactose">
            <div class="content">
                <a href="../receitas/lactose/crepioca-de-banana-com-melado.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Crepioca de banana com melado.jpg" alt="Lactose" style="width:100%">
                    <h4>Crepioca de Banana com Melado</h4>
                </a>
            </div>
        </div>
        <div class="column lactose">
            <div class="content">
                <a href="../receitas/lactose/pao-com-peito-de-peru.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Pão com peito de peru.jpg" alt="Lactose" style="width:100%">
                    <h4>Pão de Queijo com Peito de Peru</h4>
                </a>
            </div>
        </div>
        <div class="column lactose">
            <div class="content">
                <a href="../receitas/lactose/smoothie-de-banana-e-frutas-vermelhas.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Smoothie de banana e frutas vermelhas.jpg" alt="Lactose" style="width:100%">
                    <h4>Smoothie de Banana e Frutas Vermelhas</h4>
                </a>
            </div>
        </div>
        <div class="column vegano">
            <div class="content">
                <a href="../receitas/vegano/lasanha-de-abobrinha.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Lasanha de abobrinha vegana.jpg" alt="Vegano" style="width:100%">
                    <h4>Lasanha de Abobrinha</h4>
                </a>
            </div>
        </div>
        <div class="column vegano">
            <div class="content">
                <a href="../receitas/vegano/moqueca-de-palmito-pupunha.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Moqueca de palmito pupunha.jpg" alt="Vegano" style="width:100%">
                    <h4>Moqueca de Palmito Pupunha</h4>
                </a>
            </div>
        </div>
        <div class="column vegano">
            <div class="content">
                <a href="../receitas/vegano/rabanada-vegana.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Rabanada vegana.jpg" alt="Vegano" style="width:100%">
                    <h4>Rabanada</h4>
                </a>
            </div>
        </div>
        <div class="column vegano">
            <div class="content">
                <a href="../receitas/vegano/salpicao-vegano.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Salpicão vegano.jpg" alt="Vegano" style="width:100%">
                    <h4>Salpicão</h4>
                </a>
            </div>
        </div>
        <div class="column vegano">
            <div class="content">
                <a href="../receitas/vegano/strogonoff-de-palmito.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Strogonoff de palmito.jpg" alt="Vegano" style="width:100%">
                    <h4>Strogonoff de Palmito</h4>
                </a>
            </div>
        </div>
        <div class="column doenca">
            <div class="content">
                <a href="../receitas/doenca-renal/arroz-ervilhas-castanha.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Arroz Cateto com Açafrão-da-terra, Ervilhas Frescas & Castanhas de Caju.jpg" alt="Doença Renal" style="width:100%">
                    <h4>Arroz com Ervilhas e Castanha</h4>
            </div>
        </div>
        <div class="column doenca">
            <div class="content">
                <a href="../receitas/doenca-renal/bebida-vegetal-de-macadamia.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Bebida Vegetal de Macadâmia.jpg" alt="Doença Renal" style="width:100%">
                    <h4>Bebida Vegetal de Macadâmia</h4>
            </div>
        </div>
        <div class="column doenca">
            <div class="content">
                <a href="../receitas/doenca-renal/estrogonofe-de-cogumelos-paris-com-creme-de-arroz.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Estrogonofe de Cogumelos Paris com Creme de Arroz.jpg" alt="Doença Renal" style="width:100%">
                    <h4>Strogonoff de Cogumelos</h4>
            </div>
        </div>
        <div class="column doenca">
            <div class="content">
                <a href="../../pages/receitas/doenca-renal/omelete-de-liquidificador.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Omelete de liquidificador.jpg" alt="Doença Renal" style="width:100%">
                    <h4>Omelete de Liquidificador</h4>
            </div>
        </div>
        <div class="column doenca">
            <div class="content">
                <a href="../../pages/receitas/doenca-renal/ricota-vegetal.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Ricota Vegetal.jpg" alt="Doença Renal" style="width:100%">
                    <h4>Ricota Vegetal</h4>
            </div>
        </div>
        <div class="column diabetes">
            <div class="content">
                <a href="../receitas/diabetes/bolo-diet-de-limao.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Bolo diet de limão.jpg" alt="Diabetes" style="width:100%">
                    <h4>Bolo Diet de Limão</h4>
            </div>
        </div>
        <div class="column diabetes">
            <div class="content">
                <a href="../receitas/diabetes/caponata-de-berinjela.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Caponata de berinjela.jpg" alt="Diabetes" style="width:100%">
                    <h4>Caponata da Berinjela</h4>
            </div>
        </div>
        <div class="column diabetes">
            <div class="content">
                <a href="../receitas/diabetes/salada-de-cevadinha.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Salada de Cevadinha.jpg" alt="Diabetes" style="width:100%">
                    <h4>Salada de Cevadinha</h4>
            </div>
        </div>
        <div class="column diabetes">
            <div class="content">
                <a href="../receitas/diabetes/salmao-crocante-com-legumes.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Salmão crocante com legumes.jpg" alt="Diabetes" style="width:100%">
                    <h4>Salmão Crocante com Legumes</h4>
            </div>
        </div>
        <div class="column diabetes">
            <div class="content">
                <a href="../receitas/diabetes/sanduiche-de-atum-e-abacate.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Sanduíche de atum e abacate.jpg" alt="Diabetes" style="width:100%">
                    <h4>Sansuiche de Atum e Abacate</h4>
            </div>
        </div>
        <div class="column dislipidemia">
            <div class="content">
                <a href="../receitas/dislipidemia/arroz-integral-com-cenoura.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/ARROZ INTEGRAL COM CENOURA.jpg" alt="Dislipidemia" style="width:100%">
                    <h4>Arroz Integral com Cenoura</h4>
            </div>
        </div>
        <div class="column dislipidemia">
            <div class="content">
                <a href="../receitas/dislipidemia/cookies-de-aveia.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Cookies de aveia.jpg" alt="Dislipidemia" style="width:100%">
                    <h4>Cookies de Aveia</h4>
            </div>
        </div>
        <div class="column dislipidemia">
            <div class="content">
                <a href="../receitas/dislipidemia/creme-de-abacate.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Creme de Abacate.jpg" alt="Dislipidemia" style="width:100%">
                    <h4>Creme de Abacate</h4>
            </div>
        </div>
        <div class="column dislipidemia">
            <div class="content">
                <a href="../receitas/dislipidemia/panqueca-de-berinjela.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Panqueca de berinjela.jpg" alt="Dislipidemia" style="width:100%">
                    <h4>Panqueca de Berinjela</h4>
            </div>
        </div>
        <div class="column dislipidemia">
            <div class="content">
                <a href="../receitas/dislipidemia/salada-de-alface-com-cenoura-e-limao.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Salada de Alface com Cenoura e Limão.jpg" alt="Dislipidemia" style="width:100%">
                    <h4>Salada de Alface com Cenoura</h4>
            </div>
        </div>
        <div class="column gastrite">
            <div class="content">
                <a href="../receitas/gastrite-aguda/almondegas-de-berinjela.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Almôndegas de berinjela.jpg" alt="Gastrite Aguda" style="width:100%">
                    <h4>Almondegas de Berinjela</h4>
            </div>
        </div>
        <div class="column gastrite">
            <div class="content">
                <a href="../receitas/gastrite-aguda/arroz-iscas-frango.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/receita-arrozcomfrango.jpeg" alt="Gastrite Aguda" style="width:100%">
                    <h4>Arroz com Iscas de Frango</h4>
            </div>
        </div>
        <div class="column gastrite">
            <div class="content">
                <a href="../receitas/gastrite-aguda/canneloni-de-espinafre.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Canneloni de espinafre.jpg" alt="Gastrite Aguda" style="width:100%">
                    <h4>Canneloni de Espinafre</h4>
            </div>
        </div>
        <div class="column gastrite">
            <div class="content">
                <a href="../receitas/gastrite-aguda/hamburguer-de-aveia.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Hambúrguer de aveia.jpg" alt="Gastrite Aguda" style="width:100%">
                    <h4>Hamburguer de Aveia</h4>
            </div>
        </div>
        <div class="column gastrite">
            <div class="content">
                <a href="../receitas/gastrite-aguda/taco-de-alface-com-frango-e-legumes.html">
                    <img class="imgReceitas" src="../../assets/img/imgReceitas/Taco de alface com frango e legumes.jpg" alt="Gastrite Aguda" style="width:100%">
                    <h4>Taco de Alface com Frango e Legumes</h4>
            </div>
        </div>
    </div>
    <script src="../../assets/scripts/receitasScripts/receitas.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
    <script>
        var filterCheckboxes = $('input[type="checkbox"]');
        var filterFunc = function () {
            var selectedFilters = [];
            filterCheckboxes.filter(":checked").each(function () {
                var v = this.value;
                if (selectedFilters.indexOf(v) === -1) selectedFilters.push(v);
            });

            $(".receitas")
                .hide()
                .filter(function (_, a) {
                    var itemCat = $(a).data("category").split(" ");
                    return selectedFilters.every(function (c) {
                        return itemCat.indexOf(c) > -1;
                    });
                })
                .show();
        };
        filterCheckboxes.on("change", filterFunc);
        filterSelection("all"); 
        function filterSelection(c) {
            var x, i;
            x = document.getElementsByClassName("column");
            if (c == "all") c = "";            
            for (i = 0; i < x.length; i++) {
                w3RemoveClass(x[i], "show");
                if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
            }
        }

        // Show filtered elements
        function w3AddClass(element, name) {
            var i, arr1, arr2;
            arr1 = element.className.split(" ");
            arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                if (arr1.indexOf(arr2[i]) == -1) {
                    element.className += " " + arr2[i];
                }
            }
        }

        // Hide elements that are not selected
        function w3RemoveClass(element, name) {
            var i, arr1, arr2;
            arr1 = element.className.split(" ");
            arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                while (arr1.indexOf(arr2[i]) > -1) {
                    arr1.splice(arr1.indexOf(arr2[i]), 1);
                }
            }
            element.className = arr1.join(" ");
        }

        // Add active class to the current button (highlight it) and remove the oldest active class
        var btnContainer = document.getElementById("myBtnContainer");
        var btns = btnContainer.getElementsByClassName("btn");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    </script>
</body>

</html>
