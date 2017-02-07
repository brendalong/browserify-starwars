"use strict";

let adding = require("./add"); //<---note that we must call adding, not the original 'add'.
// let subtract = require("./subtract");
// let multiply = require("./multiply");

let Calculator = {
  adding
  //subtract multiply
};

module.exports = Calculator;