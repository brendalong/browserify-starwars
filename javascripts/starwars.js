"use strict";

let lightside = require("./light"); //<---note that we must call lightside, not 'light'
let darkside = require("./dark");

let Starwars = {
  lightside,
  darkside
};

module.exports = Starwars;