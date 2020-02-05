# create-react-app mio template

> Create React App Template for MIO Applications

## Plug and Play

```sh
npx create-react-app my-app --template mio
cd my-app
npm start
```

Then open http://localhost:3000/ to see your app.
When you’re ready to deploy to production, create a minified bundle with npm run build.

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
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

At this point everything should be ready to start to code your application

![](https://media.giphy.com/media/11ISwbgCxEzMyY/giphy.gif)

## User Guide

The mio template provide a starter configurations to begin write your code, let´s know about the reason behind each folder.

#### src

The src is the folder where the project source files are located.

#### assets

The assets folder must contains all files which are static resources like images, css

#### configs

The configs folder contains configurations files, in this case mio template has the ReactotronConfig.js
Reactotron is an app that allow you inspecting your React Js apps.
If you know more about Reactotron go to https://github.com/infinitered/reactotron11ISwbgCxEzMyY/giphy.gif

#### pages

Each sub folder of the pages folder is an application page which is accessed through by a route except Layout folder.
Layout folder as the name mean, it is where are the layout files that will be aplied on each render

#### services

The services folder contains files to connect an external api using axios

#### store

The store folder contains all structure to write the redux logic

#### styles

The styles folder contains application global and theme styles.