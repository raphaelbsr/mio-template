<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://rocketseat.com.br">
    <img width="256" src="https://datac-mio.s3-sa-east-1.amazonaws.com/LogoMio.png" alt="Logo">
  </a>
  <h3 align="center">Template ReactJs MIO</h3>
</p>

<!-- TABELA DE CONTEÚDO -->

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%c3%bado)
- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Instalação](#instala%c3%a7%c3%a3o)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Guia de Uso](#guia-de-uso)

<!-- SOBRE O PROJETO -->

## Sobre o Projeto

Este projeto é um template básico para a facilitar e agilizar a criação de aplicativos da família Data C MIO utiliando React Js.

## Tecnologias

Abaixo segue as tecnologias que são instaladas e configuradas por este template:

- [React](https://github.com/facebook/react) - O React é uma biblioteca JavaScript para construção de interfaces de usuários;

- [Material-UI](https://material-ui.com) - O Material-UI é uma biblioteca de componentes baseadas no [Material Design](https://material.io/) da Google;

- [Axios](https://github.com/axios/axios) - O axios é um cliente HTTP utilizado para fazer chamadas em APIs em um servidor backend;

- [Moment](https://github.com/moment/moment/) - O Moment é uma biblioteca para validação, manipulação e visualização de datas;

- [Brazilian-Values](https://www.npmjs.com/package/brazilian-values) - Biblioteca para validar e formatar valores brasileiros como dinheiro (BRL), CPF, CNPJ, datas etc;

- [Formik](https://github.com/jaredpalmer/formik) - O Formik nos ajuda a construir formulários poderosos com validações e gerenciamento de estado;

- [Jwt Decode](https://github.com/auth0/jwt-decode) - Biblioteca para fazer o decode de Jason Web Tokens;

- [Mio Library Autenticação](https://github.com/raphaelbsr/mio-library-autenticacao) - Componente de interface e gerenciamente de autenticação do usuário.

- [Prop Types](https://github.com/facebook/prop-types) - Verificação de tipo em tempo de execução para propriedades (props) React e objetos semelhantes;

- [Reactotron](https://github.com/infinitered/reactotron) - O Reactotron é um app Desktop para inspecionar projetos em React;

- [React Router DOM](https://reacttraining.com/react-router/web/guides/quick-start) - O React Router DOM permite navegar entre diferentes componentes alterando a url do navegador, o histórico mantendo o estado da aplicação.

- [Redux](https://redux.js.org/) - Redux é um container para gerenciamento de estado da aplicação

  - [React Redux](https://github.com/reduxjs/react-redux) - Biblioteca para utilizar Redux no React
  - [Redux Saga](https://redux-saga.js.org/) - O redux-saga é uma biblioteca que tem como objetivo tornar os efeitos colaterais dos aplicativos mais fáceis de gerenciar, mais eficientes de executar, fáceis de testar e melhores em lidar com falhas;

- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações Javascript;
  - [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);
- [Eslint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
  - [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import) - Um resolver da lib _babel-root-import_ para a lib _eslint-plugin-import_;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;

## Instalação

1. Para instalar e utilizar o template basta executar o comando:

```sh
npx create-react-app mio-app --template mio
```

2. Acesse a pasta mio-app que foi criada pelo template e rode o npm start para inciar o aplicativo.

```sh
cd mio-app
npm start
```

Acesse http://localhost:3000/ para ver o aplicativo funcionando.

![](https://media.giphy.com/media/11ISwbgCxEzMyY/giphy.gif)

## Estrutura de Arquivos

```
mio-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── .Dockerfile
├── .dockerignore
├── .env
├── .eslintrc.json
├── .config-overrides.js
├── .jsonconfig.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.js
    ├── index.js
    ├── routes.js
    ├── serviceWorker.js
    ├── assets
    |   └── images
    |       ├── background.png
    |       ├── background@2x.png
    |       ├── Logo.png
    |       └── Logo@2x.png
    ├── configs
    |   └── ReactotronConfig.png
    ├── pages
    |   |── Home
    |   |   ├── index.js
    |   |   └── styles.js
    |   |── Layout
    |   |   ├── index.js
    |   |   └── LeftMenu.js
    |   └── Login
    |       ├── index.js
    |       └── styles.js
    ├── services
    |   └── api.js
    ├── stores
    |   |── index.js
    |   |── ducks
    |   |   |── app.js
    |   |   └── index.js
    |   └── sagas
    |       └── index.js
    └── styles
```

## Guia de Uso

The mio template provide a starter configurations to begin write your code, let´s know about the reason behind each folder.

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

  - **config** - Diretório para guardar os arquivos de configuração da aplicação, por exemplo, a configuração de uso do Reactotron e configuração de inicialização do Firebase;

    - **ReactotronConfig.js** - Arquivo contendo a configuração do Reactotron para ser usado na aplicação;

- **pages** - Diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

  - **Home** - Diretório de exemplo para páginas que só permitem acesso para usuários autenticados;

    - **index.js** - Arquivo com toda a lógica da página, tal como os componentes visuais a serem renderizados;
    - **styles.js** - Arquivo com as definições de estilo da página Home;

- **Layouts** - Diretório que contém os arquivos de Layout.

  - **index.js** - Arquivo com toda a lógica do layout;
  - **LeftMenu.js** - Componenete responsável por renderizar o menu lateral esquerdo;

- **Login** - Página que contém um formulário de Login para realizar a autenticação no sistema;

  - **index.js** - Arquivo com toda a lógica da página, tal como os componentes visuais a serem renderizados;
  - **styles.js** - Arquivo com as definições de estilo da página de Login;

- **services** - Diretório contendo arquivos para acesso a serviços externos como API, banco de dados, storages, etc.

  - **api.js** - Arquivo de exemplo que define um cliente HTTP axios para consumir uma API;

- **store** - Diretório contendo arquivos de uso do Redux para realizar a manipulação do estado da aplicação

  - **ducks** - Diretório para estruturar os arquivos do Redux utilizando o [duck pattern](https://github.com/erikras/ducks-modular-redux), saiba mais neste blog [Estrutura Redux escalável com Ducks](https://blog.rocketseat.com.br/estrutura-redux-escalavel-com-ducks/);

    - **index.js** - Arquivo responsável por importar cada Duck criado e combiná-los em um só para serem usados no Redux através da função combineReducers();
    - **app.js** - Módulo de exemplo mas que pode ser utilizado com a intenção de gerenciar estados de aspecto global da aplicação

  - **sagas** - Diretório para estruturar os arquivos do Redux utilizando o [duck pattern](https://github.com/erikras/ducks-modular-redux), saiba mais neste blog [Estrutura Redux escalável com Ducks](https://blog.rocketseat.com.br/estrutura-redux-escalavel-com-ducks/);

    - **index.js** - Arquivo responsável por relacionar as Actions disparadas pela aplicação às funções do Saga, que são Funções Generator, nele é definido os Action Types a serem "escutados" e qual função executar quando um Action Creator for executado;

  - **index.js** - Arquivo responsável por executar a configuração para o funcinamento do Redux + Redux Saga, dentre suas funções estão: criar um Middleware para monitorar as Actions disparadas na aplicação, aplicar o middleware criado juntamente com um Enhancer que monitora o fluxo de uma função do Saga, criar o store global da aplicação combinando os reducers existentes e exportar o state criado;

- **styles** - Diretório contendo arquivos de definição de estilos da aplicação

  - **global** - Estilo global da aplicação
  - **theme** - Configuração do tema da aplicação utilizado pelo Material-UI

- **routes.js** - Arquivo com as configurações de navegação da aplicação, e gerenciamento de permissão de cada página;

- **jsconfig.json** - Arquivo de configuração do JavaScript no Editor, ele é o responsável por ativar o Auto Complete de códigos JavaScript na aplicação;

- **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias para a publicação do Template no NPM.

- **config-overrides.js** - Arquivo para sobrescrever configurações padrões do cra padrão

- **eslintrc.json** - Arquivo de configuração do ESLint, é nele que são inseridas as regras e configurações de Linting do projeto, tal como a configuração do Resolver para o Babel Plugin Root Import e configuração da variável global **DEV**;

- **.env** - Arquivo com variáveis de ambiente;
