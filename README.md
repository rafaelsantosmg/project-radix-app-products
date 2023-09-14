
# Projeto RADIX

 - A lista de produtos deve ser exibida em uma tabela com as seguintes informações: nome, preço e categoria.
 - Deve ser possível filtrar os produtos por categoria utilizando um seletor de categorias.
 - A aplicação deve utilizar Apollo Client para se comunicar com a API GraphQL.
 - A aplicação deve ser escrita em TypeScript.

O objetivo é disponibilizar um front-end onde seja possivel listar e fazer filtragem de produtos.

## Stack utilizada

**Front-end:** Next.JS, MaterialUI.

**Back-end:** Graphql.

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

Para roda o FontEnd e O BackEnd siga os próximos passos!

Certifique de estar na pasta raiz do projeto antes de executar os comandos
e abra um terminal para cada seção.

 - frontend
```bash
  cd app/frontend
  yarn dev
```

 - backend
 ```bash
  cd app/backend
  yarn run dev
 ```

Após esses comando acesse [localhost](http://localhost:3000/)