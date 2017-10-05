# Middleman - Webpack template

Starting point for Middleman projects that want to use [Webpack](https://webpack.github.io) to build their js files.

## Handled by Middleman

* preprocess SASS
* vendor-prefix CSS
* minify CSS files (during build)
* add hash for cache burst (during build)

## Handled by Webpack

* polyfill JS files with babel (only includes the polyfills and code transforms needed for the last two versions of each browser, and versions of Safari greater than or equal to 7)
* uglify JS files (during build)

## Run this page locally

```
bundle install
yarn install
middleman serve
```

## Build this page

```
bundle install
yarn install
middleman build
```