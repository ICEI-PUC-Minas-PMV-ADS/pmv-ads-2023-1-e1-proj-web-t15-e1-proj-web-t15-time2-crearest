# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos integrantes do grupo, alguns deles possuem certas restrições, mas em sua maioria foi criado personagens para trazer embasamento ao trabalho. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.  
 
## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

# Louise Costa 

## Idade: 
20 anos; 
## Ocupação: 
Estudante 
## Restrição: 
Endometriose 
## Motivações: 
Maior conhecimento do que pode ingerir; 
Tratar melhor da condição; 
## Frustrações: 
Não existe contribuição cientifica suficiente; 
Pouca diversidade em alimentos 

 

# Lúcio Santana 

## Idade: 
27 anos; 
## Ocupação: 
Desenvolvedor Fullstack 
## Restrição: 
Gastrite Aguda 
## Motivações: 
Buscar alimentos seguros a sua condição 
## Frustrações: 
Variedade alimentar; 

 

# Luana Oliveira 

## Idade: 
30 anos; 
## Ocupação: 
Analista de Negócios 
## Restrição Alimentar: 
Vegana 
## Motivações: 
Saúde e bem-estar 
Preocupação com a vida dos animais e com o meio ambiente 
## Frustrações: 
A dificuldade de buscar substitutos criativos para as receitas diárias.  

 

# Gustavo Silva 

## Idade: 
27 anos; 
## Ocupação:
Gestor Comercial de Seguros 
## Restrição Alimentar: 
Diabetes tipo 1 
## Motivações: 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Louise Costa | Maior conhecimento do que pode ingerir | Evitar alimentos que possam causar dor |
|Louise Costa | Tratar melhor da condição | Melhorar a qualidade de vida, aliviar sintomas da endometriose |
|Lucio Santana | Variedade Alimentar | Melhorar sua dieta, evitar alimentos que possam causar desconforto |
|Luana Oliveira | Buscar substitutos criativos para as receitas diárias | Continuar a seguir uma dieta vegana saudável e equilibrada |
|Gustavo Silva | Aprender a controlar a ansiedade e vícios em relação à alimentação | Manter níveis saudáveis de açúcar no sangue e prevenir complicações da diabetes tipo 1 |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

 |ID    | Descrição do Requisito  | Prioridade |
 |------|-----------------------------------------|----|
 |RF-001| Na página inicial do site, deve conter notícias dinâmicas sobre o objetivo do site e algumas receitas| ALTA |
 |RF-002| Na página inicial o usuário deve conseguir realizar login| ALTA |
 |RF-003| O site deve permitir o usuário realizar cadastro  | ALTA |
 |RF-004| A partir do cadastro, o site deve apresentar para o usuário receitas conforme sua restrição alimentar | ALTA |
 |RF-005| Para cada receita, o site deve apresentar uma imagem correspondente | MÉDIA |
 |RF-006| O usuário também deve conseguir ter acesso a receitas de outras restrições | MÉDIA |
 |RF-007| O site deve permitir salvar receitas |BAIXA |
 |RF-008| O site deve permitir o compartilhamento das receitas | BAIXA |
 |RF-009| O site deve permitir o envio de receitas próprias dos usuários | MÉDIA |
 |RF-010| O site deve ter informações de categorias de alimentos e método de cozimento.| ALTA |
 |RF-011| Cada receita deve conter informação de tempo de preparo e porção| ALTA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser multiplataforma – Windows, Linux e macOS.  | MÉDIA | 
|RNF-002| O sistema deve ser desenvolvido na linguagem Angular | MÉDIA |
|RNF-003| O sistema deve atender a LGPD  | ALTA | 
|RNF-004| O sistema deve ser compatível com todos os navegadores  |  BAIXA |
|RNF-005| O sistema deve atender pessoas com deficiência visual | MÉDIA | 
|RNF-006| O sistema deve ter modo noturno  |  BAIXA |
|RNF-007| O sistema deve ser esteticamente agradável e entregar informações de forma clara  |  ALTA |
|RNF-008| O sistema deve ser interativo   | MÉDIA |
|RNF-009| O sistema deve ser responsivo    | ALTA |



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID     | Restrições  | Caso de uso |
|-------|-------------------------|----|
|RDIS-1| O sistema deve funcionar 24 horas  | RNF-008 | 
|RUS-1 | O sistema deve estar em conformidade com as normas da Lei de proteção de dados  | RF-002  | 
|RUS-2 | O sistema deve habilitar funções por perfil de usuário | RNF-004 | 
|RUS-3| O sistema deve ser entregue em até 4 meses  | Prazo de projeto  |
|RSEG-1 | O sistema deve realizar a verificação automática de comprovação via e-mail  | RF-003  |



Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
