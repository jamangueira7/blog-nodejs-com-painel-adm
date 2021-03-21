<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;
</p>

<br>

# Guiapress - Blog de artigos

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Yarn](https://yarnpkg.com/) - 1.22.4
- [Npm](https://www.npmjs.com/) - 6.14.5
- [NodeJS](https://nodejs.org/en/) - v14.4.0
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Bootstrap 4](https://getbootstrap.com/)
- [Postgres](https://www.postgresql.org/)
- [Docker](https://www.docker.com/) - 19.03.8

## 💻 Projeto

Projeto de um blog para postar artigos.

Projeto do curso [Formação Node.js](https://www.udemy.com/course/formacao-nodejs/learn/lecture/16529728#overview).

Pagina inicial sem logar. Mostra os 4 ultimos artigos publicados.
<p align="center">
  <img alt="animation" src=".github/imagem1.PNG" width="100%">
</p>

Uma filtragem simples por categorias e paginação.
<p align="center">
  <img alt="animation" src=".github/imagem2.PNG" width="100%">
</p>

Tela de login
<p align="center">
  <img alt="animation" src=".github/imagem3.PNG" width="100%">
</p>

Apos o login a area administrativa para ver todos os artigos e editar ou deletar.
<p align="center">
  <img alt="animation" src=".github/imagem4.PNG" width="100%">
</p>

Criação de novos artigos usando a ferramenta tinemce.
<p align="center">
  <img alt="animation" src=".github/imagem5.PNG" width="100%">
</p>

Area administrativa para ver todos as categorais e editar ou deletar.
<p align="center">
  <img alt="animation" src=".github/imagem6.PNG" width="100%">
</p>

Criação de novas categorias.
<p align="center">
  <img alt="animation" src=".github/imagem7.PNG" width="100%">
</p>

Na pagina principal aparece os links para o administrativo quando usuario esta logado.
<p align="center">
  <img alt="animation" src=".github/imagem8.PNG" width="100%">
</p>

## 🚀 Como Rodar

- Clone o projeto.
- npm install.
- Rodar o Postgres com docker: 
```
docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```
- Criar um banco com o nome guiaperguntas.
- 'nodemon index.js' para iniciar o projeto.
- acesse http://localhost:3000/

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

