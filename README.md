# Filmyte

Filmyte is a web application for discovering your movies and TV shows.

The web client for Filmyte interacts with [Filmyte web server](https://github.com/nsrecc/filmyte-server) to deliver user requests with a pleasing user experience and interface.

## Installation

### Setup

Clone or download this repository.

Install the required dependencies: `npm install`.

### Usage

Run the client for development environment: `npm run dev`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Filmyte web client.

### Testing

Ensure that `.babelrc` file exists at root directory with the required `"next/babel"` preset for Next.js and defined plugins array for Jest to parse the files.

Configure the `jest.config.js` file to only run test files with certain name scheme `*.test.{js,jsx}`, and to collect coverage from certain files.

Provide `cross-fetch` to `HttpLink`'s constructor while creating `ApolloClient` to ensure that `fetch` is present in the runtime environment for testing.

Run the Jest test framework: `npm test`.

Coverage results are placed in the `/coverage` folder at the root directory.

## Built With

* JavaScript
* [React](https://reactjs.org/) - JavaScript library for building user interfaces
    * [prop-types](https://github.com/facebook/prop-types) - Runtime type checking for React props and similar objects
* [Sass](https://sass-lang.com/) - CSS extension language
* [Node.js](https://nodejs.org/en/) - JavaScript runtime
* [GraphQL](https://graphql.org/) - Query language for APIs
* [Apollo GraphQL](https://www.apollographql.com/) - Data graph platform which includes Apollo Client
* [Next.js](https://nextjs.org/) - React framework for production with hybrid static and server rendering, smart bundling, route pre-fetching, file-system routing, built-in support for CSS Modules and Sass, etc.
* [cross-fetch](https://github.com/lquixada/cross-fetch) - Universal WHATWG Fetch API for Node, Browsers and React Native
* [Lodash](https://lodash.com/) - Modern JavaScript utility library
* [Jest](https://jestjs.io/en/) - JavaScript Testing Framework
* [Enzyme](https://enzymejs.github.io/enzyme/) - JavaScript Testing Utility for React
    * [@wojtekmaj/enzyme-adapter-react-17](https://github.com/wojtekmaj/enzyme-adapter-react-17) - Unofficial Enzyme adapter for React v17.0 until official support is released. For more information, see here: https://github.com/enzymejs/enzyme/issues/2429
    * [enzyme-to-json](https://github.com/adriantoine/enzyme-to-json) - Converts Enzyme wrappers to a format compatible with Jest snapshot testing
* [identity-obj-proxy](https://github.com/keyz/identity-obj-proxy) - Identity object using ES6 proxies for mocking Webpack imports like CSS Modules

## Powered By

* [The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api) - This product uses the TMDb API but is not endorsed or certified by TMDb.
    * [Terms of Use](https://www.themoviedb.org/terms-of-use)
    * [Privacy Policy](https://www.themoviedb.org/privacy-policy)
* [Vercel](https://vercel.com/) - JAMstack website and web service deployment cloud platform

## Author

* Noel Recchia ([@nsrecc](https://github.com/nsrecc))
