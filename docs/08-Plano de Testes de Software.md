# Plano de Testes de Software

## Plano de Testes para a Tela das Receitas

<p>Segue abaixo casos de testes conforme resquisitos descritos para as telas das receitas especificados na sessão 3, etapa 4 deste projeto.
 
 | **Caso de Teste** 	| **CT-01- Visualizar Página de uma Receita** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001- Quando o usuário acessar uma receita através da tela de Receitas, o site deve apresentar a página referente a receita escolhida pelo usuário; RF-002- Para cada receita, o site deve apresentar uma imagem correspondente;RF-003- Cada receita deve conter informação de tempo, grau de dificuldades e porção; RF-004- A página de receitas deve conter o nome da restrição alimentar identificada antes da receita; RF-005- A página deve apresentar a lista de ingredientes e o modo de preparo; RF-006- Ao final da página deve ser apresentada receitas relacionadas a restrição escolhida.|
| Objetivo do Teste 	|Verificar se o direcionamento dos links na tela de receitas estão ocorrendo corretamente.|
| Passos 	| 1) Acessar o Navegador 2) Informar o endereço do Site 3) Visualizar a Home 4) Clicar em “Receitas” 5) Escolher a Receitas desejada|
|Critério de Êxito | - As receitas devem carregar completamente, contendo: cabeçalho, conteúdo da receita e rodapé com receitas relacionadas|
|  	|  	|
 
 | **Caso de Teste** 	| **CT-02 - Selecionar Função "Receitas"** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-007- Através da tela da receita, o usuário deve conseguir retornar para a tela de Receitas.|
| Objetivo do Teste 	|Verificar se o redirecionamento da função Receita está ocorrendo corretamente.|
| Passos 	| 1) Na tela da Receita clicar no botão Receitas|
|Critério de Êxito | -O botão receitas devem carregar completamente indicando novas categorias de receitas, conforme filtro|
|  	|  	|
 
  | **Caso de Teste** 	| **CT-03 - Selecionar Função "Cadastro"** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-008- Através da tela da receita, o usuário deve conseguir retornar para a tela de Cadastro.|
| Objetivo do Teste 	|Verificar se o redirecionamento da função Cadastro está ocorrendo corretamente.|
| Passos 	| 1)Na tela da Receita clicar no botão Registrar|
|Critério de Êxito | -O botão Registrar deve carregar completamente permitindo que o usuário cadastre-se informando e-mail e senha.|
|  	|  	|
 
  | **Caso de Teste** 	| **CT-04- Selecionar Função "Login"** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-009- Através da tela da receita, o usuário deve conseguir retornar para a tela de Login.|
| Objetivo do Teste 	|Verificar se o redirecionamento da função Login está ocorrendo corretamente|
| Passos 	| 1) Na tela da Receita clicar no botão Login|
|Critério de Êxito | - O botão Login deve carregar completamente permitindo que o usuário acesse o seu perfil  informando user e senha.|
|  	|  	|
 
  | **Caso de Teste** 	| **CT-05- Selecionar Função "Receitas Relacionadas"** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-010- Através da tela da receita, o usuário deve ter acesso a receitas relacionadas à restrição alimentar apresentada em tela.|
| Objetivo do Teste 	|Verificar se o redirecionamento dos links na tela das receitas estão ocorrendo corretamente.|
| Passos 	| 1) Na tela da Receita clicar no botão indicado no rodapé para receitas relacionadas|
|Critério de Êxito | - O botão da receita relacionada indicada deve carregar completamente para a receita escolhida pelo usuário.|
|  	|  	|

 
 ## Plano de Testes para a Tela das Receitas Preferidas

<p>Segue abaixo os casos de testes a serem realizados no site.
 
 | **Caso de Teste** 	| CT-06- Salvar receitas	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001-Para cada receita, o site deve apresentar uma imagem correspondente; RF-002- O site deve ter informações do método de cozimento.;RF-003- Cada receita deve conter informação de tempo, grau de dificuldades e porção; RF-004- A página de receitas deve conter o nome da restrição alimentar identificada antes da receita; RF-005-A logo, em todas as paginas, devem levar o cliente a página Home.|
| Objetivo do Teste 	|Levar a receita salva pelo usuário até a página receitas preferidas.|
| Passos 	| 1) Acessar o Navegador 2) Informar o endereço do Site 3) Visualizar a Home 4) Clicar em login 5)Realizar login do usuário 6) Clicar em “Receitas” 7) Escolher a Receita desejada e apertar botão salvar receita|
|Critério de Êxito | - Usuário deve,ao selecionar "receitas",ser redirecionado a pagina completa,contendo cabeçalho,conteúdo e rodapé, - Usuário deve,ao selecionar a receita escolhida e selecionar botão salvar receita,receber uma notificação,através da mudanca de cor do botão,de que a receita foi salva.|
|  	|  	|
 
  | **Caso de Teste** 	| CT-07- Visualizar receitas salvas	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001-Para cada receita, o site deve apresentar uma imagem correspondente; RF-002- O site deve ter informações do método de cozimento.;RF-003- Cada receita deve conter informação de tempo, grau de dificuldades e porção; RF-004- A página de receitas deve conter o nome da restrição alimentar identificada antes da receita; RF-005-A logo, em todas as paginas, devem levar o cliente a página Home.|
| Objetivo do Teste 	|O usuário deve visualizar todas as suas receitas salvas e seleciona-las a qualquer momento.|
| Passos 	| 1) Na tela "home", selecionar "Receitas preferidas" 2) Selecionar uma de suas receitas salvas 3) Ser redirecionado a tela "Receitas" e visualizar a receita selecionada por completo.|
|Critério de Êxito | - O Usuário deve visualizar na tela "Receitas preferidas" todas as suas receitas salvas - Ao clicar em uma de suas receitas salvas, deve ser redirecionado a tela contendo sua receita por completo e todas as propriedades do site, cabeçalho, conteúdo e rodapé.|
|  	|  	|
 
  ## Plano de Testes para a Tela principal(Home page)
 
  | **Caso de Teste** 	| CT - 08 - Home |
|:---:	|:---:	|
 |	Requisito Associado 	|  RF-001-Para cada receita, o site deve apresentar uma imagem correspondente, RF-007- O sistema deve ser esteticamente agradável e entregar informações de forma clara, RF-009	Na página inicial do site, deve conter notícias dinâmicas sobre o objetivo do site e algumas receitas, RF-002	Na página inicial o usuário deve conseguir realizar login| 
 | Objetivo do Teste 	| Levar o usuario a ter acesso a todos as funções do site, como, Login, Registro, Receitas, pagina do usuario, etc. Ter informações sobre restrições, e também, possui imagens clicaveis a leva o usuario a  receita correspondente.|
 | Passos 	| 1) Acessar o Navegador 2) Informar o endereço do Site 3) Visualizar a Home 4) |
 |Critério de Êxito | - Estando na Home o usuário tem a possibilidade de navegar pelo site e acessar todas as funcionalidades que estão disponiveis. O usuario deve selecionar a função desejada e será redirecionado até ela.|
 
 |  	|  	|
 
 
  ## Plano de Testes para a Tela de Categoria de Receitas

<p>Segue abaixo casos de testes conforme resquisitos descritos para as telas das receitas especificados na sessão 3, etapa 4 deste projeto.
 
 | **Caso de Teste** 	| CT-09- Categoria de Receitas	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001-Para cada receita, o site deve apresentar uma imagem correspondente; RF-002- O site deve ter informações do método de cozimento. RF-004- A página de receitas deve conter o nome da restrição alimentar identificada antes da receita; RF-005-A logo, em todas as paginas, devem levar o cliente a página Home.|
| Objetivo do Teste 	|Verificar se o filtro utilizado em categorias está em devido funcionamento.|
| Passos 	| 1) Acessar o Navegador 2) Informar o endereço do Site 3) Visualizar a Home 4) Clicar em Receitas 5) O clique resultará na tela principal de Categorias 6) Escolher a restrição desejada. 
|Critério de Êxito | - Usuário deve, ao selecionar "Receitas", ser direcionado a pagina principal de categorias, contendo cabeçalho, conteúdo e rodapé, - O usuário ao selecionar a categoria escolhida será direcionado para a filtragem, onde haverá apenas receitas sobre a restrição buscada. 
|  	|  	|
 
   ## Plano de Testes para a funcionalidade botão 'Contatos'

<p>Segue abaixo casos de testes conforme resquisitos descritos para as telas das receitas especificados na sessão 3, etapa 4 deste projeto.
 
| **Caso de Teste** 	| Contato	|
|:---:	|:---:	|
|	Requisito Associado 	|RF-006- A página deve conter um link para os contatos dos criadores do site. RF-007- A página de contatos deve ter um formulário de contato. RF-008- O formulário de contato deve ser capaz de enviar mensagens por e-mail.|
| Objetivo do Teste 	|Verificar se a funcionalidade de contatos e o formulário de contato estão funcionando corretamente.|
| Passos 	| 1) Acessar o Navegador 2) Informar o endereço do Site 3) Visualizar a página 4) Navegar até o rodapé da página 5) Clicar no link "Contatos" 6) Verificar se a página de contatos é exibida corretamente 7) Verificar se todos os contatos dos criadores do site estão listados 8) Preencher o formulário de contato com informações válidas 9) Enviar o formulário de contato 10) Verificar se a mensagem foi enviada com sucesso
|Critério de Êxito | - Ao clicar no link "Contatos" no rodapé, a página de contatos deve ser exibida corretamente, - Todos os contatos dos criadores do site devem estar listados na página, - O formulário de contato deve aceitar informações válidas, - Ao enviar o formulário de contato, a mensagem deve ser enviada com sucesso.
