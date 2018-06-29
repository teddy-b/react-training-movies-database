# Movies Database application
A single page application, which allows users to search the Movies database.

## Setup

* Run `npm install` or `yarn install` to install dependencies. You need to have **node.js** and **Webpack** installed globally.
* Run `npm start` or `yarn start` to start the application in development mode.
* Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

* Note: Storybook might not work properly with `npm`. Install all dependencies using `yarn` instead.

## Available Scripts

### `npm start`

Runs the application in development mode, using Webpack Dev Server. Watch and source maps are enabled.

### `npm run build`

Prepares a production build into the `/dist` folder. Application is optimized for production and is ready to be deployed. The build is minified and the filenames include hashes.

### `npm test`

Runs available tests.

### `npm run e2e`

Runs available E2E tests.

### `npm run lint`

Checks for linting errors.

### `npm run storybook`

Creates Storybook. Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### `npm run build-storybook`

Creates build of Storybook.

### `npm run flow`

Checks for flow errors.

## Technologies

* React.js
* Redux
* Webpack
* Webpack Dev Server
* Babel
* SCSS
* Jest
* Enzyme
