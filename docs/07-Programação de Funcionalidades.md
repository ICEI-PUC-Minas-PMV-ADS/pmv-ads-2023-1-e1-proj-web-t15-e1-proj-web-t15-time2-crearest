# Programação de Funcionalidades

Nessa sessão, serão apresentadas as telas que foram desevolvidas conforme as funcionalidades do sistema, priorizadas na Sprint 3. Assim também, serão apresentados os requisitos funcionais atendidos e a estrutura dos dados.


<h1> Tela de Login (RF-014 e RF-015) </h1>

  <p> A tela de login , apresenta um design confortavel ao usuário para ter acesso ao seu perfil e receitas salvas <p>

  ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t15-e1-proj-web-t15-time2-crearest/assets/125780065/0316acb7-9f96-4f82-a802-74b3753561e6)
  
 <h2><strong>Requisitos Atendidos</strong></h2>
 
<ul>
  <li>RF-014 -  Através de todas as telas, o usuário deve conseguir retornar para a tela de Login. Láisa Liane</li>
  <li>RF -015- O usuário deve ser capaz de realizar login informando email e senha. Láisa Liane</li>
</ul>
<hr>

 <h2><strong>Artefados da funcionalidade</strong></h2>
 <ul>
  <li>login.html</li>
  <li>login.css</li>
  <li>script-controle-usuario-logado.js</li>
  <li>login.js</li>
</ul>
<hr>

<h2><strong>Estrutura de dados</strong></h2>

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t15-e1-proj-web-t15-time2-crearest/assets/125780065/addcdc55-8b5b-42ed-8655-40c3a2827c67)



<h2><strong>Instruções de acesso</strong></h2>
<p> 1. Abra um navegador de Internet e informe a seguinte URL: https://repl.it/Sf3l@#3ks</p> <br>
<p> 2. A tela de login é a primeira funcionalidade exibida pelo aplicativo</p>

<h1>Tela da HOME</h1>
  <p>A tela principal do nosso sistema apresenta notícias e informações sobre restrições alimentares. Na página contêm HTML, CSS e JavaScript dando todo a estilização e função necessária, para que o site fique interativo para com o usuário.</p>
   
![imagem-home](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t15-e1-proj-web-t15-time2-crearest/blob/main/docs/img/home1.png)
![imagem-home](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t15-e1-proj-web-t15-time2-crearest/blob/main/docs/img/home2.png)

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

# Tela das Receitas (RF-001, RF-002, RF-003, RF-004, RF-005 e RF-006)
<p>A tela das receitas permite ao usuário conferir informações sobre a receita escolhida, incluindo a identificação da restrição, tempo de preparo, rendimento, grau de dificuldades, permite salvar a receita e no footer o usuário tem indicações de receitas para aquela restrição. </p>

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t15-e1-proj-web-t15-time2-crearest/assets/125780065/4a384c66-a3f1-4a3b-aac7-880eed6d3df5)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t15-e1-proj-web-t15-time2-crearest/assets/125780065/484aee34-f783-4f49-a3a9-8548fe34ddb8)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t15-e1-proj-web-t15-time2-crearest/assets/125780065/b4f3e760-acc1-435a-aed5-282759cfbef6)


## Requisitos Atendidos
<ul>
  <li>RF-001- Quando o usuário acessar uma receita através da tela de Receitas, o site deve apresentar a página referente a receita escolhida pelo usuário;
 - Láisa Liane</li>
  <li>RF-002- Para cada receita, o site deve apresentar uma imagem correspondente; - Láisa Liane</li>
  <li>RF-003- Cada receita deve conter informação de tempo, grau de dificuldades e porção;  - Láisa Liane</li>
  <li>RF-004- A página de receitas deve conter o nome da restrição alimentar identificada antes da receita;  - Láisa Liane</li>
  <li>RF-005- A página deve apresentar a lista de ingredientes e o modo de preparo; - Láisa Liane</li>
  <li>RF-006- Ao final da página deve ser apresentada receitas relacionadas a restrição escolhida. - Láisa Liane</li>
</ul>

## Artefatos de Funcionalidade Atendidos

 <ul>
  <li>receitas.html</li>
  <li>receita.css</li>
  <li>receita.js</li>
</ul>
<hr>

## Estrutura dos dados

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t15-e1-proj-web-t15-time2-crearest/assets/125780065/f5b9110d-541c-4db8-819a-ae255108f634)

# Tela - Receitas preferidas

## Requisitos atendidos
<ul>
  <li>RF-001  Láisa Liane</li>
  <li>RF-002  Láisa Liane</li>
  <li>RF-003  Láisa Liane</li>
  <li>RF-004  Láisa Liane</li>
  <li>RF-005  Láisa Liane</li>
</ul>

## Artefatos de funcionalidade
<ul>
  <li>receitasPref.html</li>
  <li>receitasPref.css</li>
</ul>

## Estrutura de dados

             <!DOCTYPE html>
     <html lang="en">

    <head>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
      <link rel="stylesheet" href="../../assets/styles/receitas/receitasPref.css" />
      <script src="../../assets/scripts/receitasScripts/receita.js"></script>
      <link rel="shortcut icon" href="favicon-16x16.png" type="image/x-icon" />
    <title>CreatRest</title>
    </head>

    <body>
    <header>
    <div class="headerCreat">
      <div class="pages">
        <a class="logo" href="../home/home.html"><img src="../../assets/img/Logo.png" alt="" style="width: 70px" /></a>
        <a href="../receitas/receitasPref.html">Receitas Preferidas</a>
        <a href="receitas.html">Receitas</a>
      </div>
      <div class="login" id="userSection">
    </div>
        </header>
       <div class="cardReceita">
        <div id="receitaDisplay">
      <div class="receitaCard">
        <a href="">
          <div>
          </div>
        </a>
        </div>
        </div>
        </div>
          <div class="footer-clean">
                <footer>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-sm-4 col-md-3 item">
            <h3>Serviços</h3>
            <ul>
              <li><a href="../receitas/celiacos/bolo-mesclado-sem-gluten.html">Consultoria</a></li>
              <li><a href="../receitas/celiacos/bolo-mesclado-sem-gluten.html">Nutrição</a></li>
              <li><a href="../receitas/celiacos/bolo-mesclado-sem-gluten.html">Indicações Médicas</a></li>
            </ul>
          </div>
          <div class="col-sm-4 col-md-3 item">
            <h3>Sobre nós</h3>
            <ul>
              <li><a href="../users/contato.html">Contatos</a></li>
              <li><a href="../users/quem-somos.html">Quem Somos</a></li>
            </ul>
          </div>
          <div class="col-lg-3 item social">
            <a href="#"><i class="icon ion-social-facebook"></i></a>
            <a href="#"><i class="icon ion-social-twitter"></i></a>
            <a href="#"><i class="icon ion-social-instagram"></i></a>
            <p class="copyright">CreatRest © 2023</p>
          </div>
        </div>
      </div>
    </footer>

    <script src="../../assets/scripts/autenticacao/script-controle-usuario-logado.js"></script>

       </body>
            <script>getItemLocalStorage();</script>
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
    <link rel="stylesheet" href="teste.css">
    <link rel="shortcut icon" href="favicon-16x16.png" type="image/x-icon">
    <script src="teste.js"></script>
    <title>CreatRest</title>
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
    <div id="myBtnContainer">
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

    <!-- Portfolio Gallery Grid -->
    <div class="row">
        <div class="column celiacos">
            <div class="content">
                <img src="/w3images/mountains.jpg" alt="Celíacos" style="width:100%">
                <h4>nome da receita</h4>
                <p>Lorem ipsum dolor..</p>
            </div>
        </div>
        <div class="column lactose">
            <div class="content">
                <img src="/w3images/lights.jpg" alt="Lactose" style="width:100%">
                <h4>nome da receita</h4>
                <p>Lorem ipsum dolor..</p>
            </div>
        </div>
        <div class="column vegano">
            <div class="content">
                <img src="/w3images/nature.jpg" alt="Vegano" style="width:100%">
                <h4>nome da receita</h4>
                <p>Lorem ipsum dolor..</p>
            </div>
        </div>

        <div class="column doenca">
            <div class="content">
                <img src="/w3images/cars1.jpg" alt="Doença Renal" style="width:100%">
                <h4>nome da receita</h4>
                <p>Lorem ipsum dolor..</p>
            </div>
        </div>
        <div class="column diabetes">
            <div class="content">
                <img src="/w3images/cars2.jpg" alt="Diabetes" style="width:100%">
                <h4>nome da receita</h4>
                <p>Lorem ipsum dolor..</p>
            </div>
        </div>
        <div class="column dislipidemia">
            <div class="content">
                <img src="/w3images/cars3.jpg" alt="Dislipidemia" style="width:100%">
                <h4>nome da receita</h4>
                <p>Lorem ipsum dolor..</p>
            </div>
        </div>

        <div class="column gastrite">
            <div class="content">
                <img src="/w3images/people1.jpg" alt="Gastrite Aguda" style="width:100%">
                <h4>nome da receita</h4>
                <p>Lorem ipsum dolor..</p>
            </div>
        </div>
    </div>
    </div>
    <!-- END GRID -->
    </div>

</body>

</html>

# Tela - Contato 
RF-006 - Bruno
RF-007 - Bruno
RF-008 - Bruno

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t15-e1-proj-web-t15-time2-crearest/blob/main/docs/img/parte1.png)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t15-e1-proj-web-t15-time2-crearest/blob/main/docs/img/parte2.png)

<body>
      <div class="contato">
        <h1>Contatos</h1>
        <p>
          Nome: Bruno César <br />
          E-mail: Brunwsmi@email.com<br />
          Telefone: +341 931 231 680
        </p>
        <p>
          Nome: Maria Julia <br />
          E-mail: Majewsmi@email.com<br />
          Telefone: +341 932 231 680
        </p>
        <p>
          Nome: Lorenzo <br />
          E-mail: Lorewsmi@email.com<br />
          Telefone: +341 933 231 680
        </p>
        <p>
          Nome: Laisa <br />
          E-mail: Laisewsmi@email.com<br />
          Telefone: +341 934 231 680
        </p>
        <p>
          Nome: João Vitor <br />
          E-mail: Jveswmi@email.com<br />
          Telefone: +341 935 231 680
        </p>
        <p>
          Nome: Vinicius <br />
          E-mail: Viniciewsmi@email.com<br />
          Telefone: +341 936 231 680
        </p>
        <div class="container">
          <form id="contact" action="" method="post">
            <h3>Formulario para contato</h3>
            <fieldset>
              <input
                placeholder="Seu nome"
                type="text"
                tabindex="1"
                required
                autofocus
              />
            </fieldset>
            <input
              placeholder="Seu email"
              type="email"
              tabindex="2"
              required
              autofocus
            />

            <fieldset></fieldset>
            <input
              placeholder="Seu Telefone (opcional)"
              type="tel"
              tabindex="3"
              required
              autofocus
            />

            <fieldset>
              <input
                placeholder="Digite sua mensagem aqui"
                type="text"
                tabindex="4"
                required
                autofocus
              />
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Contactar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </body>
  </body>


