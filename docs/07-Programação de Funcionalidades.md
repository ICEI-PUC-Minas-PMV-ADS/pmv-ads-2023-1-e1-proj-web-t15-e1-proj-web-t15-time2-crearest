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
    </title>
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
  <title>Registrar</title>
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


