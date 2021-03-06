# ReactJS - Counter App

## What's this project for?

I've written this little Counter App, only for practice React JS, and be a base for future bigger project.
This app was written with a big inspiration in a Course that i have made. Called by 'React Js Ninja',  ministred by Fernando Daciuk.

## What does this app do?

A ToDo list. Where we can add new tasks, and can filter by: "A fazer" (ToDo), "Completo"(Done) and "Todos" (All).

## What's inside it?

* Webpack 2
* Babel
* React hot loader
* HTML and CSS generated automatically by webpack
* Jest for tests and Chai for assertions
* Storybook to create isolatelly components' stories
* Async/await
* Dynamic `import()` function
* Webpack tree shaking!
* [Preact](https://preactjs.com/) for production build (optional)

## Dependencies:

- Node.js `>=` v6;

## Up and running

- Clone this repository:;
- Remove `.git` directory;
- Install dependencies: `yarn` (or `npm i`);
- Run `yarn dev` (or `npm start`) to develop on `http://localhost:3000`
- Run `yarn build` (or `npm run build`) for production build (files will be generated on `dist` directory)

## Troubleshooting

If you are on Windows, and try to run `yarn lint`, you'll get an error
because `spawn` module does not work very well on Windows.

You should install `cross-spawn`, and edit `gulpfile.js`, removing line `4` and
uncomment line `7`.

## Scripts
- `yarn dev (or npm run dev)`: Starts the application on development mode
- `yarn test (or npm test)`: Run tests once
- `yarn test:watch (or npm run test:watch)`: Run tests in watch mode
- `yarn build (or npm run build)`: Build project to production
- `yarn build:analyzer (or npm run build:analyzer)`: Build project to production and open bundle analyzer on `8888` port
- `yarn storybook (or npm run storybook)`: Run Storybook on `6006` port
- `yarn build-storybook`: Build Storybook to static files
- `yarn update-packages`: Update all packages to the latest version
- `yarn start (or npm start)`: Special script reserved to run production code. Change as you wish. For now, it is the same as `yarn dev`.
