# Aurelia HackerNews PWA

An Aurelia implementation of the Hacker News Progressive Web App, done as a submission to [HNPWA](https://hnpwa.com/)

<p align="center">
  <a href="https://aurelia-hnpwa.justindra.com" target="_blank" rel="noreferrer">
    <img src="./static/aurelia-logo.svg" width="200px">
    <br>
    https://aurelia-hnpwa.justindra.com
  </a>
</p>

## Details

* Aurelia
* Webpack
* TypeScript
* LESS
* Jest (+ Protractor)

This application was built based on the skeleton generated by the Aurelia CLI. The application talks to the [HNPWA API](https://github.com/davideast/hnpwa-api).

Currently this application works offline with the help of ServiceWorkers and it also loads a pretty basic app-shell. The caching is all done on the ServiceWorker side and there is no other State Management being used.

## Installation

1. Install Aurelia CLI
```
npm install -g aurelia-cli
```
  
2. Run the watcher to run a hot module reload server for development
```
au run --watch
```

3. Run the build, which will place the files under the `/dist` folder
```
au build --env prod
```
