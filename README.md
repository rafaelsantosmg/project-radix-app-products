
# Projeto RADIX

O objetivo é disponibilizar um front-end onde seja possivel listar e fazer filtragem de produtos.
## Stack utilizada

**Front-end:** Next.JS, MaterialUI, Appolo Client.

**Back-end:** Graphql, NodeJS, Jest.

# BackEnd RADIX

## Descrição do projeto

Backend foi desenvolvido usando Node, GraphQl, Apollo Service e o banco de dados
esta sendo simulado com um arquivo de produtos no formato JSON.

Ele possui um Resolver onde faz as requisições de GET onde a função produts utiliza
o modulo FS do nodeJs para fazer a leitura do arquivo JSON e eviar os dados como
retorno.

Para a parte do CREATE, foi desenvolvido o createProduct onde a mesma faz uma validação
verificando se o ID ou nome do produto ja não exita no banco de dados. Se por
ventura o produto ja exitir ele retona uma menssagem de erro senão ele cria o novo 
produto.

Para os testes utilizei o Jest.

## Desafios e Aprendizados

O desafio foi fazer o setup inicial pois nunca tinha trabalhado con GraphQl.
então optei por fazer um prjeto simples com node puro e appoloserver.
fiz a API com a ajuda de um curso de GraphQl.

# FrontEnd RADIX

FrontEnd desenvolvido com NextJS, Appolo Client e MaterialUI

## Descrição do projeto

O projeto consiste em exibir uma lista de produtos que vem atravéz de uma api
GraphQl e renderizen na tela uma tabela com as seguintes informações:

- Nome
- Descrição
- Categoria
- Preço

O mesmo ainda disponibiliza de um sistema de ordenação por colunas.

A aplicação possui um sistema de filtros onde você pode filtrar pelas seguintes
informações:
*- Nome
*- Categoria
*- Preço

E possui um botão para você selecionar categoria e filtrar pela mesma.

O sistema possui também uma tela para cadastro de produtos com um formulário
onde você faz o cadastramento de novos produtos.

## Desafios e Aprendizados.

O desafio do projeto foi preparar um setup em NextJs onde eu não estava familiazirado
com o Framework e tive dificuldade em fazer toda configuração do setup.

Aprendizado foi evoluir minhas capacidade técnica e ter a oportunidade de por em pratica
a escrita de códigos em TypeScript.
Também pude aprender de uma maneira genérica como conectar meu frontend ao back end
usando as tecnologias do Appolo Cliente e GraphQl.

Na tela de formulário fiz todas as validações sem utilizar libs para demonstrar
um pouco do meu pensamento lógico de como resolver problemas.

Na parte visual dei ênfase a utilizar Material UI e seus componentes para a
construção dos layouts e componentes.

## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:rafaelsantosmg/project-radix-app-products.git
```

Entre no diretório do projeto

```bash
  cd project-radix-app-products
```

Instale as dependências do projeto. esse script instala as dependências do backend e frontend

```bash
  yarn run install:apps
```

Para rodar o FontEnd e O BackEnd siga os próximos passos!

Certifique de estar na pasta raiz do projeto antes de executar os comandos
e abra um terminal para cada seção.

### Rodando FrontEnd

```bash
  cd app/frontend
  yarn dev
```

Após esses comando acesse [http://localhost:3000/](http://localhost:3000/)

### Rodando BackEnd
 
 ```bash
  cd app/backend
  yarn run dev
 ```

 Rodando Teste do backend
```bash
  cd app/backend
  yarn run test
