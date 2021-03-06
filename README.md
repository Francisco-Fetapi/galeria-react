# Galeria - Front-End
<p align="center">
<a href="https://github.com/Francisco-Fetapi/galeria-react/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/Francisco-Fetapi/galeria-react?style=plastic"></a>
<a href="https://github.com/Francisco-Fetapi/galeria-react"><img alt="GitHub license" src="https://img.shields.io/badge/Exercise-For%20trainning-orange"></a>
<a href="https://github.com/Francisco-Fetapi/galeria-react/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/Francisco-Fetapi/galeria-react?style=plastic"></a>
<a href="https://github.com/Francisco-Fetapi/galeria-react/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/Francisco-Fetapi/galeria-react?style=plastic"></a>
<a href="https://github.com/Francisco-Fetapi/galeria-react"><img alt="GitHub license" src="https://img.shields.io/github/license/Francisco-Fetapi/galeria-react?style=plastic"></a>
</p>

Este projeto foi desenvolvido com `React` e `Material-UI` em _2021_. Na época eu criei o máximo de projetos possiveis para consolidar os conhecimentos em `React` e este foi mais um desses projetos. Ele oferta as seguintes funcionalidades:

1. Upload de imagens.
2. CRUD de imagens.
3. Light e Dark mode.

![galeria-2](https://user-images.githubusercontent.com/74926014/181216518-c40cc8ce-dc20-4fe9-b819-180eca97d4fd.gif)



Este projeto consome uma _API_ criada com `PHP`. Siga os passos para rodar o _back-end localmente_ [clicando aqui](https://github.com/Francisco-Fetapi/crud-galeria)

## Como rodar localmente

O Projeto (apenas o front-end) está hospedado em [Galeria](https://galeria-fetapi.vercel.app) - Mesmo na núvem, o projeto consome um back-end local, portanto ele deve ser configurado, siga os passos em [Galeria - Back-end](https://github.com/Francisco-Fetapi/crud-galeria) para o configurar.
<br />
Para acessar localmente em **ambiente de desenvolvimento** basta realizar as instruções que se seguem:

### Pré-Requisitos

Algumas ferramentas são necessárias para rodar o projeto localmente, tais como:

1. NodeJS
2. Chrome (ou qualquer outro navegador)

### Clonar o repositório

Com o terminal aberto, basta digitar/copiar a linha de código abaixo e clicar _ENTER_.

```
git clone https://github.com/Francisco-Fetapi/galeria-react.git
```

### Instalar as dependencias

O projeto necessita de certas dependencias para ser executado, para instalá-las, abra o _terminal_, navegue até a pasta do projeto clonado no passo anterior e digite/copie a linha de código abaixo e clique **ENTER**, em seguida, aguarde o preocesso de instalação das ferramentas ser concluido.

```
npm install
```
### Iniciar o projeto
```
npm start
```
Rode a aplicação no modo de desenvolvimento com o comando `npm start`(executar o comando na raiz do projeto).
Abra [http://localhost:3000](http://localhost:3000) para visualizar o projeto no navegador.

##

`NOTA1:` Este projeto necessita de um back-end configurado localmente para funcionar devidamente, siga os passos para configurar o back-end [clicando aqui](https://github.com/Francisco-Fetapi/crud-galeria)

`NOTA2`: O back-end não está hospedado pelas seguintes razões:

1. O `heroku`, no modo gratuito tem um limite de projetos, eu já atingi o limite.😅
2. As outras plataformas similares têm politicas que me impossibilitam aderir ao  plano gratuito.(falo sobre ter que colocar os dados bancários ao criar a conta mesmo no plano gratuito, o Microsoft Azure é uma delas🙁)
3. Plataformas para _hospedagem de banco de dados_ também são outro problema, o próprio `heroku` e o `Microsoft Azure` são muito bons para hospedagem de _bancos de dados_, mas por causa da politica do ponto anterior, não consigo aderir a seus planos. (por enquanto😄)
