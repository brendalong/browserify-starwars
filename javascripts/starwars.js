"use strict";

let lightside = require("./light"); //<---note that we must call lightside, not 'light'
let darkside = require("./dark");


// create starwars object with all methods from lightside and darkside
let Starwars = {};
for (var prop in lightside){
	Starwars[prop] = lightside[prop];
}

for (var prop in darkside){
	Starwars[prop] = darkside[prop];
}

module.exports = Starwars;