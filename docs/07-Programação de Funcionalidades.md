# Programação de Funcionalidades

Nessa sessão, serão apresentadas as telas que foram desevolvidas conforme as funcionalidades do sistema, priorizadas na Sprint 3. Assim também, serão apresentados os requisitos funcionais atendidos e a estrutura dos dados.


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
    <title>Login CreaRest
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


<h2><strong>Requisitos Atendidos</strong></h2>
<ul>
  <li>RF-001</li>
  <li>RF-005</li>
  <li>RNF-001</li>
  <li>RNF-004</li>
  <li>RNF-009</li>
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
    <header>
        <div class="topnav">
            <a class="active" href="#">Menu</a>
            <a href=>Novidades</a>
            <a href="/receitas/receitas.html">Receitas</a>
            <a class="register" href="/users/register.html">Registrar</a>
            <a class="log" href="/users/login.html">Login</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i></a>
        </div>
    </header>
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

