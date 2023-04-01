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

## Frustrações: 
Ansiedade;
Vícios

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

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
<tr>
 <td>|ID    | Descrição do Requisito  | Prioridade |</td>
 |------|-----------------------------------------|----|
 <td>|RF-001| Na página inicial do site, deve conter notícias dinâmicas sobre o objetivo do site e algumas receitas| ALTA | </td>
 <td>|RF-002| Na página inicial o usuário deve conseguir realizar login| ALTA |</td>
 <td>|RF-003| O site deve permitir o usuário realizar cadastro  | ALTA |</td>
 <td>|RF-004| A partir do cadastro, o site deve apresentar para o usuário receitas conforme sua restrição alimentar | ALTA |</td>
 <td>|RF-005| Para cada receita, o site deve apresentar uma imagem correspondente | MÉDIA |</td>
 <td>|RF-006| O usuário também deve conseguir ter acesso a receitas de outras restrições | MÉDIA |</td>
 <td>|RF-007| O site deve permitir salvar receitas |BAIXA |</td>
 <td>|RF-008| O site deve permitir o compartilhamento das receitas | BAIXA |</td>
 <td>|RF-009| O site deve permitir o envio de receitas próprias dos usuários | MÉDIA |</td>
 <td>|RF-010| O site deve ter informações de categorias de alimentos e método de cozimento.| ALTA |</td>
 <td>|RF-011| Cada receita deve conter informação de tempo de preparo e porção| ALTA |</td>
</tr>


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
