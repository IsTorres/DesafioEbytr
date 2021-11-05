# Desafio Ebytr
## Sistema capaz de auxiliar as pessoas colaboradoras a se organizar e ter mais produtividade.
<!--ts-->
   * [Sobre](#Sobre)
   * [Pré-requisitos](#Pré-requisitos)
   * [Instalação](#Instalacao)
   * [Como usar](#como-usar)
      * [Requisitos técnicos](#requisitos-técnicos)
      * [Funcionalidades](#funcionalidades)
   * [Tests](#testes)
   * [Tecnologias](#tecnologias)
<!--te-->

<hr>

### Sobre:
* Stack [MERN](https://www.mongodb.com/mern-stack)
* Arquitetura MSC
* Front End em [React.js](https://pt-br.reactjs.org/)
* Back End em [Node.js](https://nodejs.org/en/)



### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [MongoDB](https://www.mongodb.com/pt-br). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back e Front End (servidor e client)
### Instalação
```bash
# Clone este repositório
$ git clone <https://github.com/IsTorres/DesafioEbytr.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd  DesafioEbytr

# Instale as dependências
$ npm install

# Inicie o MongoDB caso ainda não esteja ativo
$ sudo systemctl start mongod

# Execute a aplicação em modo de desenvolvimento
$ npm run debug

# O servidor inciará na porta:3001 - acesse <http://localhost:3001>

# Acesse a pasta 'client'
$ cd client

# Execute a aplicação React
$ npm start

# A aplicação iniciará na porta:3000
```

## Status do Projeto

<h4 align="center"> 
	🚧   🚀 Em construção...   🚧
</h4>
<hr>

### Requisitos técnicos:
* Front-End em React;
* Back-End em NodeJS, com MongoDB;
* Arquitetura em camadas;

### Funcionalidades:
* Visualizar a lista de tarefas;
* Esta lista deve ser ordenável por ordem alfabética, data de criação ou por status;
* Inserir uma nova tarefa na lista;
* Remover uma tarefa da lista;
* Atualizar uma tarefa da lista;
* A tarefa deve possuir um status editável: pendente, em andamento ou pronto;

### :test_tube: Testes:
```bash
# Para rodar os testes, vá para a pasta raiz do projeto e execute o comando:
$ npm run test
```

### :globe_with_meridians: Tecnologias:
#### Dependencias:
*   **dotenv**: versão - 10.0.0
*   **express**: versão - 4.17.1
*   **http-tatus-codes:** versão - 2.1.4
*   **mongodb**: versão - 4.1.3

#### Dependencias de desenolvimento:
*    **chai**: versão - 4.3.4
*    **eslint**: versão - 7.32.0
*    **eslint-config-airbnb**: versão - 18.2.1
*    **eslint-plugin-import**: versão - 2.25.2
*    **eslint-plugin-jsx-a11y**: versão - 6.4.1
*    **eslint-plugin-react**: versão - 7.26.1
*    **eslint-plugin-react-hooks**: versão - 4.2.0
*    **mocha**: versão - 9.1.3
*    **mongodb-memory-server**: versão - 6.9.6
*    **nodemon**: versão - 2.0.14
*    **sinon**: versão - 11.1.2
