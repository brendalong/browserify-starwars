# Getting Started with Browserify
Revised Star Wars IIFE using Browserify

### Browserify bundles up dependencies using require for modules

### Install with terminal in lib folder - using Grunt and npm
```
npm install browserify --save-dev
npm install grunt-browserify --save-dev
```

### Setup Grunt File
* Include browserify task with location of bundled file and starting file
* Add browserify to the watch task
* Register browserify task (before watch and after jshint)

### Setup Javascript Files
* use of require on starting file

```
require('./test.js');
```

* use of module.exports

```
module.exports = {methodsForExport};
```

### How Does Browserify Work?
* Browserify starts at the entry point files that you give it and searches for any `require()` calls.
* For each `require()` call, browserify resolves those module strings to file paths and then searches those file paths for `require()` calls recursively until the entire dependency graph is visited.
* The bundle file is completely self-contained.
* Paths that start with a `./` or `../` are always local to the file that calls `require()`.



### Resources
* Website: http://browserify.org/
* NPM: https://www.npmjs.com/package/browserify
* Shim: http://aeflash.com/2014-03/a-year-with-browserify.html